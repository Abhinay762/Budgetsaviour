"use client"

import Header from "@/components/Header"
import Footer from "@/components/Footer"
import { Award } from "lucide-react"
import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"

export default function SscCglMarksCalculatorPage() {
  const [correctAnswers, setCorrectAnswers] = useState<number | string>("")
  const [incorrectAnswers, setIncorrectAnswers] = useState<number | string>("")
  const [totalQuestions, setTotalQuestions] = useState<number | string>("")
  const [marksPerCorrect, setMarksPerCorrect] = useState<number | string>(2)
  const [negativeMarksPerIncorrect, setNegativeMarksPerIncorrect] = useState<number | string>(0.5)
  const [totalMarks, setTotalMarks] = useState<number | null>(null)
  const [errorMessage, setErrorMessage] = useState<string | null>(null)

  const calculateSscCglMarks = () => {
    const correct = Number(correctAnswers)
    const incorrect = Number(incorrectAnswers)
    const totalQ = Number(totalQuestions)
    const marksCorrect = Number(marksPerCorrect)
    const negativeMarks = Number(negativeMarksPerIncorrect)

    if (
      isNaN(correct) ||
      correct < 0 ||
      isNaN(incorrect) ||
      incorrect < 0 ||
      isNaN(totalQ) ||
      totalQ <= 0 ||
      isNaN(marksCorrect) ||
      marksCorrect <= 0 ||
      isNaN(negativeMarks) ||
      negativeMarks < 0
    ) {
      setErrorMessage(
        "Please enter valid positive numbers for all fields. Total Questions and Marks per Correct Answer must be positive.",
      )
      setTotalMarks(null)
      return
    }

    if (correct + incorrect > totalQ) {
      setErrorMessage("Total correct and incorrect answers cannot exceed total questions.")
      setTotalMarks(null)
      return
    }

    setErrorMessage(null)

    const calculatedMarks = correct * marksCorrect - incorrect * negativeMarks
    setTotalMarks(calculatedMarks)
  }

  return (
    <>
      <Header />
      <main className="min-h-screen bg-gray-50">
        <div className="container mx-auto px-4 py-12">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl font-bold text-center mb-8">SSC CGL Marks Calculator</h1>
            <p className="text-lg text-center text-gray-600 mb-10">
              Estimate your SSC CGL exam marks with our online calculator based on correct and incorrect answers.
            </p>

            <Card className="mb-8 p-6 calculator-card">
              <CardHeader>
                <CardTitle className="flex items-center text-2xl font-semibold mb-4">
                  <Award className="w-6 h-6 mr-2 text-red-600" />
                  Calculate Your Score
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="form-group">
                    <Label htmlFor="totalQuestions" className="form-label">
                      Total Questions in Exam
                    </Label>
                    <Input
                      id="totalQuestions"
                      type="number"
                      placeholder="e.g., 100"
                      value={totalQuestions}
                      onChange={(e) => setTotalQuestions(e.target.value)}
                      className="form-input"
                      min="1"
                    />
                  </div>
                  <div className="form-group">
                    <Label htmlFor="correctAnswers" className="form-label">
                      Number of Correct Answers
                    </Label>
                    <Input
                      id="correctAnswers"
                      type="number"
                      placeholder="e.g., 40"
                      value={correctAnswers}
                      onChange={(e) => setCorrectAnswers(e.target.value)}
                      className="form-input"
                      min="0"
                    />
                  </div>
                  <div className="form-group">
                    <Label htmlFor="incorrectAnswers" className="form-label">
                      Number of Incorrect Answers
                    </Label>
                    <Input
                      id="incorrectAnswers"
                      type="number"
                      placeholder="e.g., 5"
                      value={incorrectAnswers}
                      onChange={(e) => setIncorrectAnswers(e.target.value)}
                      className="form-input"
                      min="0"
                    />
                  </div>
                  <div className="form-group">
                    <Label htmlFor="marksPerCorrect" className="form-label">
                      Marks per Correct Answer
                    </Label>
                    <Input
                      id="marksPerCorrect"
                      type="number"
                      placeholder="e.g., 2"
                      value={marksPerCorrect}
                      onChange={(e) => setMarksPerCorrect(e.target.value)}
                      className="form-input"
                      min="0"
                      step="0.5"
                    />
                  </div>
                  <div className="col-span-full form-group">
                    <Label htmlFor="negativeMarksPerIncorrect" className="form-label">
                      Negative Marks per Incorrect Answer
                    </Label>
                    <Input
                      id="negativeMarksPerIncorrect"
                      type="number"
                      placeholder="e.g., 0.5"
                      value={negativeMarksPerIncorrect}
                      onChange={(e) => setNegativeMarksPerIncorrect(e.target.value)}
                      className="form-input"
                      min="0"
                      step="0.1"
                    />
                  </div>
                </div>
                {errorMessage && <p className="text-red-500 text-sm mb-4">{errorMessage}</p>}
                <Button onClick={calculateSscCglMarks} className="btn-primary mt-6 w-full md:w-auto">
                  Calculate Marks
                </Button>

                {totalMarks !== null && (
                  <div className="result-highlight mt-8">
                    <h3 className="text-xl font-semibold mb-2">Your Estimated Total Marks:</h3>
                    <p className="text-3xl font-bold text-primary-yellow">{totalMarks.toFixed(2)}</p>
                    <p className="text-xs text-white/80 mt-4">
                      <strong className="font-semibold">Note:</strong> This calculator uses the provided marking scheme.
                      Always verify the official marking scheme for the specific SSC CGL exam you appeared for, as it
                      may vary.
                    </p>
                  </div>
                )}
              </CardContent>
            </Card>



            <Card className="p-6 calculator-card">
              <CardHeader>
                <CardTitle className="text-2xl font-semibold mb-4">About the SSC CGL Marks Calculator</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 mb-4">
                  The SSC CGL Marks Calculator is a crucial tool for candidates appearing in the Staff Selection
                  Commission Combined Graduate Level (SSC CGL) examination. This highly competitive exam requires
                  aspirants to accurately assess their performance to predict their chances of selection.
                </p>
                <p className="text-gray-700">
                  Our calculator allows users to input their attempted questions and correct answers, providing an
                  estimated score based on a customizable marking scheme, including negative marking. This helps in
                  understanding potential ranks and preparing for subsequent stages.
                </p>
              </CardContent>
            </Card>
            <Card className="p-6 calculator-card mt-8">
              <CardHeader>
                <CardTitle className="text-2xl font-semibold mb-4">How to Use This Calculator</CardTitle>
              </CardHeader>
              <CardContent>
                <ol className="list-decimal list-inside text-gray-700 space-y-2">
                  <li>Enter the <strong>Total Number of Questions</strong> in your exam paper.</li>
                  <li>Fill in the <strong>Number of Correct Answers</strong> you have attempted.</li>
                  <li>Fill in the <strong>Number of Incorrect Answers</strong> you have attempted.</li>
                  <li>Enter the <strong>Marks per Correct Answer</strong> (default for SSC CGL is usually 2 marks).</li>
                  <li>Enter the <strong>Negative Marks per Incorrect Answer</strong> (default is 0.5 marks).</li>
                  <li>Click <strong>Calculate Marks</strong> to view your estimated score.</li>
                </ol>
              </CardContent>
            </Card>

            <Card className="p-6 calculator-card mt-8">
              <CardHeader>
                <CardTitle className="text-2xl font-semibold mb-4">Why Use This Calculator?</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="list-disc list-inside text-gray-700 space-y-2">
                  <li>Quickly estimate your SSC CGL Tier-1 or Tier-2 marks.</li>
                  <li>Adjust for different marking schemes if SSC changes its rules.</li>
                  <li>Understand your probable performance before official results.</li>
                  <li>Identify how negative marking impacts your final score.</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="p-6 calculator-card mt-8">
              <CardHeader>
                <CardTitle className="text-2xl font-semibold mb-4">Frequently Asked Questions</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h4 className="font-semibold">1. Does this work for both Tier-1 and Tier-2?</h4>
                  <p className="text-gray-700">
                    Yes. You can use this calculator for any SSC CGL tier, as long as you input the correct marking scheme for that paper.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold">2. What is the default negative marking?</h4>
                  <p className="text-gray-700">
                    For SSC CGL Tier-1, the standard negative marking is <strong>0.5 marks</strong> for each wrong answer, but it may vary for other tiers.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold">3. Is this the official score?</h4>
                  <p className="text-gray-700">
                    No, this is just an estimate. Official marks will be published by SSC after evaluation.
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
