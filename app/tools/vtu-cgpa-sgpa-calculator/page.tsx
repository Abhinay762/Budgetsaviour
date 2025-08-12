"use client"

import Header from "@/components/Header"
import Footer from "@/components/Footer"
import { GraduationCap } from "lucide-react"
import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

export default function VtuCgpaSgpaCalculatorPage() {
  const [numSubjects, setNumSubjects] = useState(5) // Default to 5 subjects
  const [grades, setGrades] = useState<Array<{ credits: number | string; grade: string }>>(
    Array(5).fill({ credits: "", grade: "" }),
  )
  const [sgpa, setSgpa] = useState<number | null>(null)
  const [cgpa, setCgpa] = useState<number | null>(null)
  const [message, setMessage] = useState<string | null>(null)

  // For CGPA calculation
  const [prevSgpa, setPrevSgpa] = useState<number | string>("")
  const [prevCredits, setPrevCredits] = useState<number | string>("")

  const gradePoints: { [key: string]: number } = {
    S: 10,
    A: 9,
    B: 8,
    C: 7,
    D: 6,
    E: 4,
    F: 0,
    X: 0, // X for Absent/Fail
  }

  const handleNumSubjectsChange = (value: string) => {
    const num = Number.parseInt(value)
    if (!isNaN(num) && num > 0 && num <= 15) {
      setNumSubjects(num)
      setGrades(Array(num).fill({ credits: "", grade: "" }))
      setSgpa(null)
      setCgpa(null)
      setMessage(null)
    } else if (value === "") {
      setNumSubjects(0)
      setGrades([])
      setSgpa(null)
      setCgpa(null)
      setMessage(null)
    }
  }

  const handleGradeChange = (index: number, field: "credits" | "grade", value: string) => {
    const newGrades = [...grades]
    if (field === "credits") {
      newGrades[index] = { ...newGrades[index], credits: value }
    } else {
      newGrades[index] = { ...newGrades[index], grade: value.toUpperCase() }
    }
    setGrades(newGrades)
    setSgpa(null)
    setCgpa(null)
    setMessage(null)
  }

  const calculateSgpaAndCgpa = () => {
    let currentTotalGradePoints = 0
    let currentTotalCredits = 0
    let isValid = true

    grades.forEach((subject, index) => {
      const credits = Number(subject.credits)
      const gradeChar = subject.grade.toUpperCase()
      const gradePoint = gradePoints[gradeChar]

      if (isNaN(credits) || credits <= 0) {
        setMessage(`Please enter valid positive credits for Subject ${index + 1}.`)
        isValid = false
        return
      }
      if (gradePoint === undefined) {
        setMessage(`Please enter a valid VTU grade (S, A, B, C, D, E, F, X) for Subject ${index + 1}.`)
        isValid = false
        return
      }

      currentTotalGradePoints += credits * gradePoint
      currentTotalCredits += credits
    })

    if (!isValid) {
      setSgpa(null)
      setCgpa(null)
      return
    }

    if (currentTotalCredits === 0) {
      setMessage("Total credits for current semester cannot be zero. Please enter valid credits.")
      setSgpa(null)
      setCgpa(null)
      return
    }

    const calculatedSgpa = currentTotalGradePoints / currentTotalCredits
    setSgpa(calculatedSgpa)

    // CGPA Calculation
    const prevSgpaNum = Number(prevSgpa)
    const prevCreditsNum = Number(prevCredits)

    if (!isNaN(prevSgpaNum) && prevSgpaNum >= 0 && !isNaN(prevCreditsNum) && prevCreditsNum >= 0) {
      const prevTotalGradePoints = prevSgpaNum * prevCreditsNum
      const overallTotalGradePoints = prevTotalGradePoints + currentTotalGradePoints
      const overallTotalCredits = prevCreditsNum + currentTotalCredits

      if (overallTotalCredits === 0) {
        setMessage("Overall total credits cannot be zero.")
        setCgpa(null)
        return
      }
      const calculatedCgpa = overallTotalGradePoints / overallTotalCredits
      setCgpa(calculatedCgpa)
      setMessage(`Your SGPA is ${calculatedSgpa.toFixed(2)}. Your estimated CGPA is ${calculatedCgpa.toFixed(2)}.`)
    } else {
      setCgpa(null)
      setMessage(`Your SGPA is ${calculatedSgpa.toFixed(2)}. Enter previous semester details for CGPA.`)
    }
  }

  return (
    <>
      <Header />
      <main className="min-h-screen bg-gray-50">
        <div className="container mx-auto px-4 py-12">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl font-bold text-center mb-8">VTU CGPA & SGPA Calculator</h1>
            <p className="text-lg text-center text-gray-600 mb-10">
              Calculate your SGPA and CGPA for VTU (Visvesvaraya Technological University) with our easy-to-use online
              calculator. Perfect for engineering students.
            </p>

            <Card className="mb-8 p-6 calculator-card">
              <CardHeader>
                <CardTitle className="flex items-center text-2xl font-semibold mb-4">
                  <GraduationCap className="w-6 h-6 mr-2 text-blue-600" />
                  Calculate Your SGPA & CGPA
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="form-group">
                  <Label htmlFor="numSubjects" className="form-label">
                    Number of Subjects in Current Semester
                  </Label>
                  <Select value={String(numSubjects)} onValueChange={handleNumSubjectsChange}>
                    <SelectTrigger className="w-full md:w-[220px]">
                      <SelectValue placeholder="Select number of subjects" />
                    </SelectTrigger>
                    <SelectContent>
                      {[...Array(10).keys()].map((i) => (
                        <SelectItem key={i + 1} value={String(i + 1)}>
                          {i + 1}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <div className="grid grid-cols-1 gap-4 mb-6">
                  {grades.map((subject, index) => (
                    <div
                      key={index}
                      className="flex flex-col sm:flex-row items-end sm:space-x-2 space-y-2 sm:space-y-0"
                    >
                      <div className="flex-1 w-full">
                        <Label htmlFor={`credits-${index}`} className="form-label">
                          Subject {index + 1} Credits
                        </Label>
                        <Input
                          id={`credits-${index}`}
                          type="number"
                          placeholder="Credits"
                          value={subject.credits}
                          onChange={(e) => handleGradeChange(index, "credits", e.target.value)}
                          min="0"
                          className="form-input"
                        />
                      </div>
                      <div className="flex-1 w-full">
                        <Label htmlFor={`grade-${index}`} className="form-label">
                          Subject {index + 1} Grade (S,A,B,C,D,E,F,X)
                        </Label>
                        <Input
                          id={`grade-${index}`}
                          type="text"
                          placeholder="Grade"
                          value={subject.grade}
                          onChange={(e) => handleGradeChange(index, "grade", e.target.value)}
                          maxLength={1}
                          className="form-input uppercase"
                        />
                      </div>
                    </div>
                  ))}
                </div>

                <h3 className="text-lg font-semibold mb-3">Previous Semester Details (for CGPA)</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div className="form-group">
                    <Label htmlFor="prevSgpa" className="form-label">
                      Previous Semesters CGPA/SGPA
                    </Label>
                    <Input
                      id="prevSgpa"
                      type="number"
                      placeholder="e.g., 8.5"
                      value={prevSgpa}
                      onChange={(e) => setPrevSgpa(e.target.value)}
                      min="0"
                      max="10"
                      step="0.01"
                      className="form-input"
                    />
                  </div>
                  <div className="form-group">
                    <Label htmlFor="prevCredits" className="form-label">
                      Total Credits from Previous Semesters
                    </Label>
                    <Input
                      id="prevCredits"
                      type="number"
                      placeholder="e.g., 120"
                      value={prevCredits}
                      onChange={(e) => setPrevCredits(e.target.value)}
                      min="0"
                      className="form-input"
                    />
                  </div>
                </div>

                {message && (
                  <div
                    className={`mt-4 p-3 rounded-md ${sgpa !== null ? "bg-blue-50 border-blue-200 text-blue-800" : "bg-red-50 border-red-200 text-red-800"}`}
                  >
                    <p className="font-semibold">{message}</p>
                  </div>
                )}

                <Button onClick={calculateSgpaAndCgpa} className="btn-primary w-full md:w-auto">
                  Calculate SGPA & CGPA
                </Button>

                {(sgpa !== null || cgpa !== null) && (
                  <div className="result-highlight mt-8">
                    <h3 className="text-xl font-semibold mb-2">Your Results:</h3>
                    {sgpa !== null && (
                      <p className="text-2xl font-bold mb-2">
                        SGPA: <span className="text-primary-yellow">{sgpa.toFixed(2)}</span>
                      </p>
                    )}
                    {cgpa !== null && (
                      <p className="text-2xl font-bold">
                        CGPA: <span className="text-primary-yellow">{cgpa.toFixed(2)}</span>
                      </p>
                    )}
                    <p className="text-xs text-white/80 mt-4">
                      <strong className="font-semibold">VTU Grading System:</strong>
                      <br />
                      S: 10, A: 9, B: 8, C: 7, D: 6, E: 4, F/X: 0
                      <br />
                      This calculator uses the standard VTU grading system. Ensure your inputs are accurate.
                    </p>
                  </div>
                )}
              </CardContent>
            </Card>



            <Card className="p-6 calculator-card">
              <CardHeader>
                <CardTitle className="text-2xl font-semibold mb-4">About the VTU CGPA & SGPA Calculator</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 mb-4">
                  This calculator is designed to help students of Visvesvaraya Technological University (VTU) accurately
                  compute their Semester Grade Point Average (SGPA) and Cumulative Grade Point Average (CGPA). SGPA
                  reflects your academic performance in a single semester, based on the credits and grades obtained in
                  each subject.
                </p>
                <p className="text-gray-700">
                  Your CGPA provides an overall measure of your academic standing across all semesters. Understanding
                  both SGPA and CGPA is crucial for tracking your progress, identifying areas for improvement, and for
                  future academic or career planning.
                </p>
              </CardContent>
            </Card>
            <Card className="p-6 calculator-card">
              <CardHeader>
                <CardTitle className="text-2xl font-semibold mb-4">About the VTU CGPA & SGPA Calculator</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 mb-4">
                  This calculator is built specifically for students of Visvesvaraya Technological University (VTU) to make academic
                  grade calculations quick, accurate, and stress-free. Whether you’re in your first semester or your final year, you
                  can easily compute your Semester Grade Point Average (SGPA) and Cumulative Grade Point Average (CGPA) using the
                  official VTU grading system.
                </p>
                <p className="text-gray-700 mb-4">
                  <strong>SGPA</strong> reflects your performance in a single semester by taking into account each subject’s credit
                  weight and the grade you’ve earned. <strong>CGPA</strong> provides your overall academic standing across multiple
                  semesters, which is important for placements, higher education applications, and personal academic tracking.
                </p>
                <h3 className="text-lg font-semibold mt-4 mb-2">How It Works</h3>
                <ul className="list-disc pl-5 mb-4 text-gray-700">
                  <li>Enter the number of subjects in your current semester.</li>
                  <li>Fill in each subject’s credit value and the grade you achieved.</li>
                  <li>Optionally, provide your previous semester’s CGPA/SGPA and total credits to calculate your updated CGPA.</li>
                  <li>Click "Calculate" to instantly get your results.</li>
                </ul>
                <h3 className="text-lg font-semibold mt-4 mb-2">VTU Grade Points Reference</h3>
                <p className="text-gray-700 mb-4">
                  S = 10, A = 9, B = 8, C = 7, D = 6, E = 4, F/X = 0
                </p>
                <p className="text-gray-700">
                  <em>Tip:</em> Accurate entry of credits and grades ensures correct results. Keep your marks card or official VTU
                  transcript handy while entering details.
                </p>
              </CardContent>
            </Card>

          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
