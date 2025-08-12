"use client"

import Header from "@/components/Header"
import Footer from "@/components/Footer"
import { CalendarCheck } from "lucide-react"
import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button"
import { Calendar } from "@/components/ui/calendar"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { format } from "date-fns"
import { cn } from "@/lib/utils"

export default function AgeCalculatorUpscNdaPage() {
  const [dob, setDob] = useState<Date | undefined>(undefined)
  const [cutoffDate, setCutoffDate] = useState<Date | undefined>(undefined)
  const [ageResult, setAgeResult] = useState<string | null>(null)
  const [errorMessage, setErrorMessage] = useState<string | null>(null)

  const calculateAge = () => {
    if (!dob || !cutoffDate) {
      setErrorMessage("Please select both Date of Birth and Cut-off Date.")
      setAgeResult(null)
      return
    }

    if (dob > cutoffDate) {
      setErrorMessage("Date of Birth cannot be after the Cut-off Date.")
      setAgeResult(null)
      return
    }

    setErrorMessage(null)

    let years = cutoffDate.getFullYear() - dob.getFullYear()
    let months = cutoffDate.getMonth() - dob.getMonth()
    let days = cutoffDate.getDate() - dob.getDate()

    if (days < 0) {
      months--
      // Get days in the month *before* the cutoffDate's month
      days += new Date(cutoffDate.getFullYear(), cutoffDate.getMonth(), 0).getDate()
    }

    if (months < 0) {
      years--
      months += 12
    }

    setAgeResult(`${years} Years, ${months} Months, ${days} Days`)
  }

  return (
    <>
      <Header />
      <main className="min-h-screen bg-gray-50">
        <div className="container mx-auto px-4 py-12">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl font-bold text-center mb-8">Age Calculator for UPSC/NDA</h1>
            <p className="text-lg text-center text-gray-600 mb-10">
              Determine your age eligibility for UPSC and NDA examinations with our precise age calculator.
            </p>

            <Card className="mb-8 p-6 calculator-card">
              <CardHeader>
                <CardTitle className="flex items-center text-2xl font-semibold mb-4">
                  <CalendarCheck className="w-6 h-6 mr-2 text-green-600" />
                  Calculate Your Age Eligibility
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="form-group">
                    <Label htmlFor="dob" className="form-label">
                      Date of Birth
                    </Label>
                    <Popover>
                      <PopoverTrigger asChild>
                        <Button
                          variant={"outline"}
                          className={cn("w-full justify-start text-left font-normal", !dob && "text-muted-foreground")}
                        >
                          <CalendarCheck className="mr-2 h-4 w-4" />
                          {dob ? format(dob, "PPP") : <span>Pick a date</span>}
                        </Button>
                      </PopoverTrigger>
                      <PopoverContent className="w-auto p-0">
                        <Calendar
                          mode="single"
                          selected={dob}
                          onSelect={setDob}
                          initialFocus
                          captionLayout="dropdown-buttons"
                          fromYear={1900}
                          toYear={new Date().getFullYear()}
                        />
                      </PopoverContent>
                    </Popover>
                  </div>
                  <div className="form-group">
                    <Label htmlFor="cutoffDate" className="form-label">
                      Cut-off Date (as per exam notification)
                    </Label>
                    <Popover>
                      <PopoverTrigger asChild>
                        <Button
                          variant={"outline"}
                          className={cn(
                            "w-full justify-start text-left font-normal",
                            !cutoffDate && "text-muted-foreground",
                          )}
                        >
                          <CalendarCheck className="mr-2 h-4 w-4" />
                          {cutoffDate ? format(cutoffDate, "PPP") : <span>Pick a date</span>}
                        </Button>
                      </PopoverTrigger>
                      <PopoverContent className="w-auto p-0">
                        <Calendar
                          mode="single"
                          selected={cutoffDate}
                          onSelect={setCutoffDate}
                          initialFocus
                          captionLayout="dropdown-buttons"
                          fromYear={1900}
                          toYear={new Date().getFullYear() + 5} // Allow future dates for cut-off
                        />
                      </PopoverContent>
                    </Popover>
                  </div>
                </div>
                {errorMessage && <p className="text-red-500 text-sm mb-4">{errorMessage}</p>}
                <Button onClick={calculateAge} className="btn-primary mt-6 w-full md:w-auto">
                  Calculate Age
                </Button>

                {ageResult && (
                  <div className="result-highlight mt-8">
                    <h3 className="text-xl font-semibold mb-2">Your Age on Cut-off Date:</h3>
                    <p className="text-3xl font-bold text-primary-yellow">{ageResult}</p>
                    <p className="text-xs text-white/80 mt-4">
                      <strong className="font-semibold">Note:</strong> Always refer to the official UPSC/NDA
                      notification for precise age limits and cut-off dates. This calculator provides an accurate age
                      calculation based on your inputs.
                    </p>
                  </div>
                )}
              </CardContent>
            </Card>



            <Card className="p-6 calculator-card">
              <CardHeader>
                <CardTitle className="text-2xl font-semibold mb-4">About the Age Calculator for UPSC/NDA</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 mb-4">
                  The Age Calculator for UPSC/NDA is a vital tool for aspirants preparing for competitive government
                  examinations in India. These exams often have strict age limits and cut-off dates, making it
                  challenging for candidates to determine their eligibility accurately.
                </p>
                <p className="text-gray-700">
                  Our calculator allows users to input their date of birth and the specific cut-off date for the exam,
                  providing an instant and precise age calculation to confirm eligibility. This helps candidates ensure
                  they meet the criteria before applying.
                </p>

              </CardContent>


            </Card>
            <Card className="p-6 calculator-card mt-8">
              <CardHeader>
                <CardTitle className="text-2xl font-semibold mb-4">UPSC/NDA Age Eligibility Criteria</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 mb-4">
                  Age requirements for these competitive exams vary based on the category and exam type.
                  Here’s a quick summary:
                </p>
                <ul className="list-disc list-inside text-gray-700 space-y-2">
                  <li>
                    <strong>UPSC Civil Services Exam:</strong>
                    General category: 21 to 32 years as on the cut-off date.
                    OBC: up to 35 years, SC/ST: up to 37 years (with relaxation).
                  </li>
                  <li>
                    <strong>NDA Exam:</strong>
                    Candidates must be between 16.5 to 19.5 years old on the cut-off date.
                  </li>
                  <li>
                    Always refer to the official exam notification for the exact rules and any relaxations.
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="p-6 calculator-card mt-8">
              <CardHeader>
                <CardTitle className="text-2xl font-semibold mb-4">How to Use This Calculator</CardTitle>
              </CardHeader>
              <CardContent>
                <ol className="list-decimal list-inside text-gray-700 space-y-2">
                  <li>Click on <strong>Date of Birth</strong> and select your birth date from the calendar.</li>
                  <li>Click on <strong>Cut-off Date</strong> and choose the date mentioned in the official notification.</li>
                  <li>Press <strong>Calculate Age</strong> to see your exact age in Years, Months, and Days.</li>
                  <li>Compare it with the eligibility limits mentioned above.</li>
                </ol>
              </CardContent>
            </Card>

            <Card className="p-6 calculator-card mt-8">
              <CardHeader>
                <CardTitle className="text-2xl font-semibold mb-4">Frequently Asked Questions</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h4 className="font-semibold">1. Is this calculator accurate?</h4>
                  <p className="text-gray-700">Yes, it calculates your exact age on the cut-off date based on your inputs. However, always cross-check with the official rules.</p>
                </div>
                <div>
                  <h4 className="font-semibold">2. Can I use it for other exams?</h4>
                  <p className="text-gray-700">Absolutely! You can use it for any exam where age eligibility is based on a cut-off date.</p>
                </div>
                <div>
                  <h4 className="font-semibold">3. Does it consider leap years?</h4>
                  <p className="text-gray-700">Yes, the calculation is precise and accounts for leap years automatically.</p>
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
