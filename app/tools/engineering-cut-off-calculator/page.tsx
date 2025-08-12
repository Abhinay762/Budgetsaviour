"use client"

import Header from "@/components/Header"
import Footer from "@/components/Footer"
import { TrendingUp } from "lucide-react"
import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

export default function EngineeringCutOffCalculatorPage() {
  const [examScore, setExamScore] = useState<number | string>("")
  const [examType, setExamType] = useState<string>("JEE Main Percentile")
  const [category, setCategory] = useState<string>("General")
  const [result, setResult] = useState<string | null>(null)
  const [errorMessage, setErrorMessage] = useState<string | null>(null)

  // This is a highly simplified and illustrative cut-off logic.
  // Real cut-offs depend on many factors (exam difficulty, number of applicants, specific college/branch, etc.)
  // and require a comprehensive, dynamic database. This data is purely hypothetical for demonstration.
  const hypotheticalCutOffs: { [key: string]: { [key: string]: number } } = {
    "JEE Main Percentile": {
      General: 90,
      OBC: 85,
      SC: 70,
      ST: 60,
    },
    "State CET Rank": {
      General: 15000,
      OBC: 25000,
      SC: 50000,
      ST: 80000,
    },
  }

  const checkEligibility = () => {
    const score = Number(examScore)
    if (isNaN(score) || score <= 0) {
      setErrorMessage("Please enter a valid positive score/rank.")
      setResult(null)
      return
    }

    const requiredValue = hypotheticalCutOffs[examType]?.[category]

    if (requiredValue === undefined) {
      setErrorMessage("Could not find hypothetical cut-off for the selected exam type and category.")
      setResult(null)
      return
    }

    setErrorMessage(null)

    let message = ""
    let isEligible = false

    if (examType === "JEE Main Percentile") {
      if (score >= requiredValue) {
        isEligible = true
        message = `Your percentile score of ${score} is above the hypothetical cut-off of ${requiredValue} for ${category} category.`
      } else {
        message = `Your percentile score of ${score} is below the hypothetical cut-off of ${requiredValue} for ${category} category.`
      }
    } else if (examType === "State CET Rank") {
      if (score <= requiredValue) {
        isEligible = true
        message = `Your rank of ${score} is within the hypothetical cut-off of ${requiredValue} for ${category} category.`
      } else {
        message = `Your rank of ${score} is outside the hypothetical cut-off of ${requiredValue} for ${category} category.`
      }
    }

    setResult(message)
  }

  return (
    <>
      <Header />
      <main className="min-h-screen bg-gray-50">
        <div className="container mx-auto px-4 py-12">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl font-bold text-center mb-8">Engineering Cut Off Calculator</h1>
            <p className="text-lg text-center text-gray-600 mb-10">
              Predict your chances of admission to engineering colleges based on hypothetical cut-off data.
            </p>

            <Card className="mb-8 p-6 calculator-card">
              <CardHeader>
                <CardTitle className="flex items-center text-2xl font-semibold mb-4">
                  <TrendingUp className="w-6 h-6 mr-2 text-purple-600" />
                  Check Your Eligibility
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="form-group">
                    <Label htmlFor="examType" className="form-label">
                      Exam Type
                    </Label>
                    <Select value={examType} onValueChange={setExamType}>
                      <SelectTrigger className="w-full">
                        <SelectValue placeholder="Select Exam Type" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="JEE Main Percentile">JEE Main Percentile</SelectItem>
                        <SelectItem value="State CET Rank">State CET Rank</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="form-group">
                    <Label htmlFor="examScore" className="form-label">
                      Your Score/Rank
                    </Label>
                    <Input
                      id="examScore"
                      type="number"
                      placeholder={examType === "JEE Main Percentile" ? "e.g., 95.5" : "e.g., 12500"}
                      value={examScore}
                      onChange={(e) => setExamScore(e.target.value)}
                      className="form-input"
                      min="0"
                      step={examType === "JEE Main Percentile" ? "0.1" : "1"}
                    />
                  </div>
                  <div className="col-span-full form-group">
                    <Label htmlFor="category" className="form-label">
                      Category
                    </Label>
                    <Select value={category} onValueChange={setCategory}>
                      <SelectTrigger className="w-full">
                        <SelectValue placeholder="Select Category" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="General">General</SelectItem>
                        <SelectItem value="OBC">OBC</SelectItem>
                        <SelectItem value="SC">SC</SelectItem>
                        <SelectItem value="ST">ST</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
                {errorMessage && <p className="text-red-500 text-sm mb-4">{errorMessage}</p>}
                <Button onClick={checkEligibility} className="btn-primary mt-6 w-full md:w-auto">
                  Check Eligibility
                </Button>

                {result && (
                  <div
                    className={`result-highlight mt-8 ${result.includes("above") || result.includes("within") ? "bg-green-50 border-green-200 text-green-800" : "bg-red-50 border-red-200 text-red-800"}`}
                  >
                    <h3 className="text-xl font-semibold mb-2">Result:</h3>
                    <p className="text-lg text-white">{result}</p>
                    <p className="text-xs text-white/80 mt-4">
                      <strong className="font-semibold">Disclaimer:</strong> This calculator uses hypothetical cut-off
                      data for demonstration purposes only. Actual cut-offs vary significantly each year based on
                      factors like exam difficulty, number of applicants, specific college/branch preferences, and
                      reservation policies. For accurate information, always refer to the official cut-off lists
                      released by examination authorities and colleges.
                    </p>
                  </div>
                )}
              </CardContent>
            </Card>



            <Card className="p-6 calculator-card">
              <CardHeader>
                <CardTitle className="text-2xl font-semibold mb-4">About the Engineering Cut Off Calculator</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 mb-4">
                  The Engineering Cut Off Calculator is a tool designed to give aspiring engineering students an idea of
                  their admission prospects. In reality, engineering college admissions in India are highly competitive,
                  with cut-offs determined by various factors including the performance of candidates in national-level
                  exams like JEE Main and JEE Advanced, state-level entrance tests, and the number of available seats.
                </p>
                <p className="text-gray-700">
                  While this calculator provides a conceptual check, students should always consult official cut-off
                  lists and counseling schedules for precise and up-to-date admission information.
                </p>
              </CardContent>
            </Card>
            <Card className="p-6 calculator-card mt-8">
              <CardHeader>
                <CardTitle className="text-2xl font-semibold mb-4">How to Use This Calculator</CardTitle>
              </CardHeader>
              <CardContent>
                <ol className="list-decimal list-inside text-gray-700 space-y-2">
                  <li>In each denomination field, enter the number of notes or coins you have.</li>
                  <li>Click <strong>Calculate Total</strong> to see the full cash amount instantly.</li>
                  <li>Click <strong>Reset</strong> to clear the values and start fresh.</li>
                  <li>The total is shown in Indian Rupees (₹) with two decimal points for accuracy.</li>
                </ol>
              </CardContent>
            </Card>

            <Card className="p-6 calculator-card mt-8">
              <CardHeader>
                <CardTitle className="text-2xl font-semibold mb-4">Tips for Accurate Cash Counting</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="list-disc list-inside text-gray-700 space-y-2">
                  <li>Sort notes and coins by denomination before counting.</li>
                  <li>Stack high-value notes like ₹2000 and ₹500 separately for easy verification.</li>
                  <li>Group coins into rolls or small pouches for faster counting.</li>
                  <li>Count twice to confirm the numbers match before entering them.</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="p-6 calculator-card mt-8">
              <CardHeader>
                <CardTitle className="text-2xl font-semibold mb-4">Frequently Asked Questions</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h4 className="font-semibold">1. Does this work offline?</h4>
                  <p className="text-gray-700">
                    Yes, the calculator runs directly in your browser and does not require an internet connection after loading.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold">2. Can I use it for currencies other than INR?</h4>
                  <p className="text-gray-700">
                    This version is set up for Indian Rupee denominations. To use it for another currency, change the denomination list in the code.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold">3. Is my entered data stored?</h4>
                  <p className="text-gray-700">
                    No, all calculations happen locally in your browser. Your data is never saved or sent anywhere.
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
