"use client"

import Header from "@/components/Header"
import Footer from "@/components/Footer"
import { ShieldCheck } from "lucide-react"
import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

export default function LicJeevanUmangCalculatorPage() {
  const [ageAtEntry, setAgeAtEntry] = useState<number | string>("")
  const [sumAssured, setSumAssured] = useState<number | string>("")
  const [premiumPayingTerm, setPremiumPayingTerm] = useState<number | string>("")
  const [results, setResults] = useState<{
    annualSurvivalBenefit: number | null
    maturityBenefitEstimate: number | null
    message: string
  } | null>(null)
  const [errorMessage, setErrorMessage] = useState<string | null>(null)

  const calculateJeevanUmang = () => {
    const age = Number(ageAtEntry)
    const sa = Number(sumAssured)
    const ppt = Number(premiumPayingTerm)

    if (isNaN(age) || age < 9 || age > 55) {
      setErrorMessage("Age at Entry must be between 9 and 55 years.")
      setResults(null)
      return
    }
    if (isNaN(sa) || sa < 200000 || sa % 25000 !== 0) {
      setErrorMessage("Basic Sum Assured must be a multiple of ₹25,000 and minimum ₹2,00,000.")
      setResults(null)
      return
    }
    if (isNaN(ppt) || ![15, 20, 25, 30].includes(ppt)) {
      setErrorMessage("Premium Paying Term (PPT) must be 15, 20, 25, or 30 years.")
      setResults(null)
      return
    }

    const policyTerm = 100 - age // Policy matures at age 100

    if (ppt >= policyTerm) {
      setErrorMessage("Premium Paying Term (PPT) must be less than Policy Term (Age 100 - Age at Entry).")
      setResults(null)
      return
    }

    setErrorMessage(null)

    // Annual Survival Benefit: 8% of Basic Sum Assured, payable from end of PPT till maturity.
    const annualSurvivalBenefit = sa * 0.08

    // Maturity Benefit: Sum Assured + Simple Reversionary Bonus + Final Additional Bonus
    // As per the reference, bonuses are not fixed and depend on LIC's performance.
    // We will use illustrative bonus rates for demonstration, similar to how some calculators estimate.
    // These are NOT guaranteed values.
    const assumedSRBRatePerThousandSA = 40 // Example: ₹40 per ₹1000 Sum Assured per year
    const assumedFABRatePerThousandSA = 50 // Example: ₹50 per ₹1000 Sum Assured (one-time, for long terms)

    const yearsForBonus = policyTerm // Bonus accumulates over policy term
    const estimatedSRB = (sa / 1000) * assumedSRBRatePerThousandSA * yearsForBonus
    const estimatedFAB = (sa / 1000) * assumedFABRatePerThousandSA // Simplified, often depends on term

    const maturityBenefitEstimate = sa + estimatedSRB + estimatedFAB

    setResults({
      annualSurvivalBenefit,
      maturityBenefitEstimate,
      message: "Estimated benefits based on illustrative bonus rates. Actual values may vary.",
    })
  }

  return (
    <>
      <Header />
      <main className="min-h-screen bg-gray-50">
        <div className="container mx-auto px-4 py-12">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl font-bold text-center mb-8">LIC Jeevan Umang Calculator</h1>
            <p className="text-lg text-center text-gray-600 mb-10">
              Estimate the maturity and returns of your LIC Jeevan Umang policy with our dedicated online calculator.
              Plan your whole life insurance benefits.
            </p>

            <Card className="mb-8 p-6 calculator-card">
              <CardHeader>
                <CardTitle className="flex items-center text-2xl font-semibold mb-4">
                  <ShieldCheck className="w-6 h-6 mr-2 text-blue-600" />
                  Calculate Jeevan Umang Benefits
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="form-group">
                    <Label htmlFor="ageAtEntry" className="form-label">
                      Age at Entry (Years)
                    </Label>
                    <Input
                      id="ageAtEntry"
                      type="number"
                      placeholder="e.g., 30"
                      value={ageAtEntry}
                      onChange={(e) => setAgeAtEntry(e.target.value)}
                      className="form-input"
                      min="9"
                      max="55"
                    />
                  </div>
                  <div className="form-group">
                    <Label htmlFor="sumAssured" className="form-label">
                      Basic Sum Assured (₹)
                    </Label>
                    <Input
                      id="sumAssured"
                      type="number"
                      placeholder="e.g., 500000 (Min 2 Lakhs, Multiples of 25k)"
                      value={sumAssured}
                      onChange={(e) => setSumAssured(e.target.value)}
                      className="form-input"
                      min="200000"
                      step="25000"
                    />
                  </div>
                  <div className="form-group">
                    <Label htmlFor="premiumPayingTerm" className="form-label">
                      Premium Paying Term (PPT - Years)
                    </Label>
                    <Select value={String(premiumPayingTerm)} onValueChange={setPremiumPayingTerm}>
                      <SelectTrigger className="w-full">
                        <SelectValue placeholder="Select PPT" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="15">15 Years</SelectItem>
                        <SelectItem value="20">20 Years</SelectItem>
                        <SelectItem value="25">25 Years</SelectItem>
                        <SelectItem value="30">30 Years</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="form-group">
                    <Label className="form-label">Policy Term (PT - Years)</Label>
                    <Input
                      type="text"
                      value={ageAtEntry ? `${100 - Number(ageAtEntry)} Years (Maturity at Age 100)` : "Calculated"}
                      readOnly
                      className="form-input bg-gray-100"
                    />
                  </div>
                </div>
                {errorMessage && <p className="text-red-500 text-sm mb-4">{errorMessage}</p>}
                <Button onClick={calculateJeevanUmang} className="btn-primary mt-6 w-full md:w-auto">
                  Calculate Benefits
                </Button>

                {results && (
                  <div className="result-highlight mt-8">
                    <h3 className="text-xl font-semibold mb-2">Estimated Benefits:</h3>
                    {results.annualSurvivalBenefit !== null && (
                      <p className="text-lg mb-2">
                        Annual Survival Benefit (from end of PPT):{" "}
                        <span className="font-bold text-primary-yellow">
                          ₹{results.annualSurvivalBenefit.toLocaleString("en-IN")}
                        </span>
                      </p>
                    )}
                    {results.maturityBenefitEstimate !== null && (
                      <p className="text-lg mb-4">
                        Estimated Maturity Benefit (at age 100):{" "}
                        <span className="font-bold text-primary-yellow">
                          ₹{results.maturityBenefitEstimate.toLocaleString("en-IN")}
                        </span>
                      </p>
                    )}
                    <p className="text-xs text-white/80 mt-4">
                      <strong className="font-semibold">Disclaimer:</strong> This calculator provides a simplified
                      estimate for LIC Jeevan Umang benefits based on illustrative bonus rates. Actual returns, bonuses
                      (Simple Reversionary Bonus and Final Additional Bonus), and maturity values are declared by LIC
                      and depend on various factors including the corporation's performance. This tool is for
                      illustrative purposes only and should not be considered a guarantee of actual returns. Please
                      refer to official LIC policy documents or consult an LIC agent for precise figures.
                    </p>
                  </div>
                )}
              </CardContent>
            </Card>



            <Card className="p-6 calculator-card">
              <CardHeader>
                <CardTitle className="text-2xl font-semibold mb-4">About the LIC Jeevan Umang Calculator</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 mb-4">
                  LIC Jeevan Umang (Plan No. 945) is a popular whole life assurance plan that offers both income and
                  protection to your family. It provides annual survival benefits from the end of the premium paying
                  term till maturity, and a lump sum amount at the time of maturity or on death of the policyholder.
                </p>
                <p className="text-gray-700">
                  Our calculator provides an estimated view of the potential benefits, helping you understand the income
                  stream and maturity value. Remember that actual bonuses are dynamic and declared by LIC.
                </p>
              </CardContent>
            </Card>
            <Card className="p-6 calculator-card mt-8">
              <CardHeader>
                <CardTitle className="text-2xl font-semibold mb-4">How to Use This Calculator</CardTitle>
              </CardHeader>
              <CardContent>
                <ol className="list-decimal list-inside text-gray-700 space-y-2">
                  <li>Enter your <strong>Age at Entry</strong> (between 9 and 55 years).</li>
                  <li>Enter your <strong>Basic Sum Assured</strong> (minimum ₹2,00,000, in multiples of ₹25,000).</li>
                  <li>Select your <strong>Premium Paying Term</strong> (PPT) from the available options.</li>
                  <li>The Policy Term will be auto-calculated (maturity at age 100).</li>
                  <li>Click <strong>Calculate Benefits</strong> to see estimated annual payouts and maturity value.</li>
                </ol>
              </CardContent>
            </Card>

            <Card className="p-6 calculator-card mt-8">
              <CardHeader>
                <CardTitle className="text-2xl font-semibold mb-4">Key Features of LIC Jeevan Umang</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="list-disc list-inside text-gray-700 space-y-2">
                  <li>Whole life cover up to age 100.</li>
                  <li>Guaranteed annual survival benefits after PPT ends.</li>
                  <li>One-time lump sum maturity benefit at age 100 or on earlier death.</li>
                  <li>Eligibility for Simple Reversionary Bonus and Final Additional Bonus as declared by LIC.</li>
                  <li>Loan facility after policy acquires surrender value.</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="p-6 calculator-card mt-8">
              <CardHeader>
                <CardTitle className="text-2xl font-semibold mb-4">Frequently Asked Questions</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h4 className="font-semibold">1. Are these benefit values guaranteed?</h4>
                  <p className="text-gray-700">
                    No, the annual survival benefit is guaranteed, but the bonuses (SRB & FAB) are declared by LIC
                    and may change over time. This calculator uses illustrative rates.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold">2. Can I choose any premium paying term?</h4>
                  <p className="text-gray-700">
                    You can select from 15, 20, 25, or 30 years, but it must be less than the total policy term
                    (100 - Age at Entry).
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold">3. Is this tool official?</h4>
                  <p className="text-gray-700">
                    No, this is an independent calculator for educational purposes. For exact figures, refer to
                    official LIC documents or consult a certified LIC agent.
                  </p>
                </div>
              </CardContent>
            </Card>

          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
