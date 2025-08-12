"use client"

import Header from "@/components/Header"
import Footer from "@/components/Footer"
import { IndianRupee } from "lucide-react"
import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"

export default function IncomeTaxCalculatorPage() {
  const [annualIncome, setAnnualIncome] = useState<number | string>("")
  const [age, setAge] = useState<number | string>("")
  const [regime, setRegime] = useState<"new" | "old">("new")
  const [calculatedTax, setCalculatedTax] = useState<number | null>(null)
  const [regimeDetails, setRegimeDetails] = useState<string | null>(null)
  const [errorMessage, setErrorMessage] = useState<string | null>(null)

  const calculateTax = () => {
    const income = Number(annualIncome)
    const ageNum = Number(age)

    if (isNaN(income) || income < 0) {
      setErrorMessage("Please enter a valid positive number for Annual Income.")
      setCalculatedTax(null)
      setRegimeDetails(null)
      return
    }
    if (isNaN(ageNum) || ageNum < 0 || ageNum > 120) {
      setErrorMessage("Please enter a valid age (0-120 years).")
      setCalculatedTax(null)
      setRegimeDetails(null)
      return
    }

    setErrorMessage(null)
    let tax = 0
    let cess = 0
    let rebate87A = 0
    let details = ""

    if (regime === "new") {
      // New Tax Regime (AY 2024-25 / FY 2023-24)
      details = "New Tax Regime (Default for AY 2024-25):\n"
      if (income <= 300000) {
        tax = 0
      } else if (income <= 600000) {
        tax = (income - 300000) * 0.05
      } else if (income <= 900000) {
        tax = 15000 + (income - 600000) * 0.1
      } else if (income <= 1200000) {
        tax = 45000 + (income - 900000) * 0.15
      } else if (income <= 1500000) {
        tax = 90000 + (income - 1200000) * 0.2
      } else {
        tax = 150000 + (income - 1500000) * 0.3
      }

      // Rebate under Section 87A for New Regime (if income <= 7 Lakhs)
      if (income <= 700000) {
        rebate87A = Math.min(tax, 25000)
        tax -= rebate87A
        details += `Rebate u/s 87A (up to ₹25,000): -₹${rebate87A.toLocaleString("en-IN")}\n`
      }
      details += `Tax before Cess: ₹${tax.toLocaleString("en-IN")}\n`
    } else {
      // Old Tax Regime (AY 2024-25 / FY 2023-24)
      details = "Old Tax Regime:\n"
      if (ageNum < 60) {
        // Below 60 years
        if (income <= 250000) {
          tax = 0
        } else if (income <= 500000) {
          tax = (income - 250000) * 0.05
        } else if (income <= 1000000) {
          tax = 12500 + (income - 500000) * 0.2
        } else {
          tax = 112500 + (income - 1000000) * 0.3
        }
      } else if (ageNum >= 60 && ageNum < 80) {
        // Senior Citizens (60 to 79 years)
        if (income <= 300000) {
          tax = 0
        } else if (income <= 500000) {
          tax = (income - 300000) * 0.05
        } else if (income <= 1000000) {
          tax = 10000 + (income - 500000) * 0.2
        } else {
          tax = 110000 + (income - 1000000) * 0.3
        }
      } else {
        // Super Senior Citizens (80 years and above)
        if (income <= 500000) {
          tax = 0
        } else if (income <= 1000000) {
          tax = (income - 500000) * 0.2
        } else {
          tax = 100000 + (income - 1000000) * 0.3
        }
      }

      // Rebate under Section 87A for Old Regime (if income <= 5 Lakhs)
      if (income <= 500000) {
        rebate87A = Math.min(tax, 12500)
        tax -= rebate87A
        details += `Rebate u/s 87A (up to ₹12,500): -₹${rebate87A.toLocaleString("en-IN")}\n`
      }
      details += `Tax before Cess: ₹${tax.toLocaleString("en-IN")}\n`
    }

    // Health and Education Cess @ 4%
    cess = tax * 0.04
    tax += cess
    details += `Health & Education Cess (4%): +₹${cess.toLocaleString("en-IN")}\n`
    details += `\nTotal Tax Payable: ₹${tax.toLocaleString("en-IN")}\n`

    setCalculatedTax(tax)
    setRegimeDetails(details)
  }

  return (
    <>
      <Header />
      <main className="min-h-screen bg-gray-50">
        <div className="container mx-auto px-4 py-12">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl font-bold text-center mb-8">Income Tax Calculator AY 2024-25</h1>
            <p className="text-lg text-center text-gray-600 mb-10">
              Calculate your income tax liability for Assessment Year 2024-25 (Financial Year 2023-24) under both New
              and Old Tax Regimes.
            </p>

            <Card className="mb-8 p-6 calculator-card">
              <CardHeader>
                <CardTitle className="flex items-center text-2xl font-semibold mb-4">
                  <IndianRupee className="w-6 h-6 mr-2 text-green-600" />
                  Calculate Your Tax
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="form-group">
                  <Label htmlFor="annualIncome" className="form-label">
                    Annual Income (₹)
                  </Label>
                  <Input
                    id="annualIncome"
                    type="number"
                    placeholder="e.g., 1000000"
                    value={annualIncome}
                    onChange={(e) => setAnnualIncome(e.target.value)}
                    className="form-input"
                  />
                </div>
                <div className="form-group">
                  <Label htmlFor="age" className="form-label">
                    Age
                  </Label>
                  <Input
                    id="age"
                    type="number"
                    placeholder="e.g., 35"
                    value={age}
                    onChange={(e) => setAge(e.target.value)}
                    className="form-input"
                  />
                </div>
                <div className="form-group">
                  <Label className="form-label">Tax Regime</Label>
                  <RadioGroup
                    value={regime}
                    onValueChange={(value: "new" | "old") => setRegime(value)}
                    className="flex space-x-4 mt-2"
                  >
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="new" id="new-regime" />
                      <Label htmlFor="new-regime">New Tax Regime</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="old" id="old-regime" />
                      <Label htmlFor="old-regime">Old Tax Regime</Label>
                    </div>
                  </RadioGroup>
                </div>
                {errorMessage && <p className="text-red-500 text-sm mb-4">{errorMessage}</p>}
                <Button onClick={calculateTax} className="btn-primary w-full md:w-auto">
                  Calculate Tax
                </Button>

                {calculatedTax !== null && (
                  <div className="result-highlight mt-8">
                    <h3 className="text-xl font-semibold mb-2">Your Estimated Tax:</h3>
                    <p className="text-3xl font-bold mb-4">₹{calculatedTax.toLocaleString("en-IN")}</p>
                    <pre className="text-sm text-white whitespace-pre-wrap font-mono text-left bg-green-700 p-3 rounded-md">
                      {regimeDetails}
                    </pre>
                    <p className="text-xs text-white/80 mt-4">
                      <strong className="font-semibold">Disclaimer:</strong> This is a simplified calculation for
                      educational purposes based on current tax laws (AY 2024-25). It does not account for all
                      deductions, exemptions, or surcharges. Please consult a tax professional for personalized advice.
                    </p>
                  </div>
                )}
              </CardContent>
            </Card>



            <Card className="p-6 calculator-card">
              <CardHeader>
                <CardTitle className="text-2xl font-semibold mb-4">About the Income Tax Calculator</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 mb-4">
                  Our Income Tax Calculator for Assessment Year 2024-25 (Financial Year 2023-24) helps you quickly
                  estimate your tax liability under both the New and Old Tax Regimes. Understanding your tax obligations
                  is crucial for effective financial planning.
                </p>
                <p className="text-gray-700">
                  The New Tax Regime, introduced to simplify tax filing, offers lower tax rates but fewer exemptions and
                  deductions. The Old Tax Regime allows you to claim various deductions (like Section 80C, HRA, etc.) to
                  reduce your taxable income. Use this tool to compare and choose the regime that benefits you most.
                </p>
              </CardContent>
            </Card>
            <Card className="p-6 calculator-card mt-8">
              <CardHeader>
                <CardTitle className="text-2xl font-semibold mb-4">How to Use This Calculator</CardTitle>
              </CardHeader>
              <CardContent>
                <ol className="list-decimal list-inside text-gray-700 space-y-2">
                  <li>Enter your <strong>annual taxable income</strong> before deductions.</li>
                  <li>Select your <strong>age group</strong> to apply the correct tax slab rates.</li>
                  <li>Choose between the <strong>Old Regime</strong> and <strong>New Regime</strong> based on your preference.</li>
                  <li>Click <strong>Calculate Tax</strong> to see your estimated tax liability and breakdown.</li>
                </ol>
              </CardContent>
            </Card>

            <Card className="p-6 calculator-card mt-8">
              <CardHeader>
                <CardTitle className="text-2xl font-semibold mb-4">Tips for Accurate Results</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="list-disc list-inside text-gray-700 space-y-2">
                  <li>Use your <strong>taxable income</strong> after all eligible deductions like 80C, 80D, etc.</li>
                  <li>Check the latest income tax slabs for the financial year you’re calculating.</li>
                  <li>For salaried employees, refer to your Form 16 for accurate numbers.</li>
                  <li>Old Regime allows more deductions, while New Regime has lower rates but fewer exemptions.</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="p-6 calculator-card mt-8">
              <CardHeader>
                <CardTitle className="text-2xl font-semibold mb-4">Frequently Asked Questions</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h4 className="font-semibold">1. Does this calculator use the latest tax slabs?</h4>
                  <p className="text-gray-700">
                    Yes, it is updated to reflect the latest income tax slab rates announced by the Government of India.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold">2. Can I calculate for both regimes?</h4>
                  <p className="text-gray-700">
                    Absolutely! Simply select Old or New Regime and the calculator will apply the respective rates and rules.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold">3. Is my income data stored?</h4>
                  <p className="text-gray-700">
                    No. All calculations are performed locally in your browser. We do not store or share your inputs.
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
