"use client"

import Header from "@/components/Header"
import Footer from "@/components/Footer"
import { ClipboardCheck } from "lucide-react"
import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"

export default function AttendanceCalculatorPage() {
  const [totalClasses, setTotalClasses] = useState<number | string>("")
  const [attendedClasses, setAttendedClasses] = useState<number | string>("")
  const [targetPercentage, setTargetPercentage] = useState<number | string>(75)
  const [result, setResult] = useState<string | null>(null)
  const [errorMessage, setErrorMessage] = useState<string | null>(null)

  const calculateAttendance = () => {
    const total = Number(totalClasses)
    const attended = Number(attendedClasses)
    const target = Number(targetPercentage) / 100 // Convert to decimal

    if (isNaN(total) || total < 0) {
      setErrorMessage("Please enter a valid non-negative number for Total Classes Conducted.")
      setResult(null)
      return
    }
    if (isNaN(attended) || attended < 0) {
      setErrorMessage("Please enter a valid non-negative number for Classes Attended.")
      setResult(null)
      return
    }
    if (isNaN(target) || target <= 0 || target > 1) {
      setErrorMessage("Target Percentage should be between 1 and 100.")
      setResult(null)
      return
    }

    if (attended > total) {
      setErrorMessage("Classes attended cannot be more than total classes conducted.")
      setResult(null)
      return
    }

    setErrorMessage(null)

    const currentPercentage = total === 0 ? 0 : (attended / total) * 100

    let message = ""
    if (currentPercentage >= target * 100) {
      // Calculate how many classes can be missed
      // (attended - x) / (total - x) >= target
      // attended - x >= target * total - target * x
      // target * x - x >= target * total - attended
      // x * (target - 1) >= target * total - attended
      // x <= (attended - target * total) / (1 - target)  (since 1-target is positive)
      const canMissClasses = Math.floor((attended - target * total) / (1 - target))
      message = `Your current attendance is ${currentPercentage.toFixed(2)}%. You can miss approximately ${Math.max(0, canMissClasses)} more classes and still maintain ${targetPercentage}%.`
    } else {
      // Calculate how many more classes needed
      // (attended + x) / (total + x) >= target
      // attended + x >= target * total + target * x
      // x - target * x >= target * total - attended
      // x * (1 - target) >= target * total - attended
      // x >= (target * total - attended) / (1 - target)
      const neededClasses = Math.ceil((target * total - attended) / (1 - target))
      message = `Your current attendance is ${currentPercentage.toFixed(2)}%. You need to attend at least ${Math.max(0, neededClasses)} more classes to reach ${targetPercentage}%.`
    }
    setResult(message)
  }

  return (
    <>
      <Header />
      <main className="min-h-screen bg-gray-50">
        <div className="container mx-auto px-4 py-12">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl font-bold text-center mb-8">75% Attendance Calculator</h1>
            <p className="text-lg text-center text-gray-600 mb-10">
              Calculate your required attendance percentage to meet academic criteria. Stay on track with your classes.
            </p>

            <Card className="mb-8 p-6 calculator-card">
              <CardHeader>
                <CardTitle className="flex items-center text-2xl font-semibold mb-4">
                  <ClipboardCheck className="w-6 h-6 mr-2 text-teal-600" />
                  Check Your Attendance
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="form-group">
                    <Label htmlFor="totalClasses" className="form-label">
                      Total Classes Conducted
                    </Label>
                    <Input
                      id="totalClasses"
                      type="number"
                      placeholder="e.g., 50"
                      value={totalClasses}
                      onChange={(e) => setTotalClasses(e.target.value)}
                      className="form-input"
                      min="0"
                    />
                  </div>
                  <div className="form-group">
                    <Label htmlFor="attendedClasses" className="form-label">
                      Classes Attended
                    </Label>
                    <Input
                      id="attendedClasses"
                      type="number"
                      placeholder="e.g., 35"
                      value={attendedClasses}
                      onChange={(e) => setAttendedClasses(e.target.value)}
                      className="form-input"
                      min="0"
                    />
                  </div>
                  <div className="col-span-full form-group">
                    <Label htmlFor="targetPercentage" className="form-label">
                      Target Attendance Percentage (%)
                    </Label>
                    <Input
                      id="targetPercentage"
                      type="number"
                      placeholder="e.g., 75"
                      value={targetPercentage}
                      onChange={(e) => setTargetPercentage(e.target.value)}
                      className="form-input"
                      min="1"
                      max="100"
                    />
                  </div>
                </div>
                {errorMessage && <p className="text-red-500 text-sm mb-4">{errorMessage}</p>}
                <Button onClick={calculateAttendance} className="btn-primary mt-6 w-full md:w-auto">
                  Calculate Attendance
                </Button>

                {result && (
                  <div className="result-highlight mt-8">
                    <h3 className="text-xl font-semibold mb-2">Your Attendance Status:</h3>
                    <p className="text-lg text-primary-yellow">{result}</p>
                    <p className="text-xs text-white/80 mt-4">
                      <strong className="font-semibold">Note:</strong> This calculator provides an estimate. Always
                      confirm attendance policies and calculations with your educational institution.
                    </p>
                  </div>
                )}
              </CardContent>
            </Card>



            <Card className="p-6 calculator-card">
              <CardHeader>
                <CardTitle className="text-2xl font-semibold mb-4">About the 75% Attendance Calculator</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 mb-4">
                  The 75% Attendance Calculator is a practical tool for students to manage their academic attendance.
                  Many educational institutions require a minimum attendance percentage (commonly 75%) to be eligible
                  for examinations.
                </p>
                <p className="text-gray-700">
                  This calculator helps students track their attendance and understand how many classes they can miss or
                  need to attend to meet the required percentage. It's an invaluable resource for students to avoid
                  attendance shortages and focus on their studies.
                </p>
                <section className="bg-gray-50 py-12 px-6">
                  <div className="max-w-4xl mx-auto">
                    {/* Title */}
                    <h1 className="text-4xl font-bold text-gray-900 mb-6">
                      Attendance Calculator – Stop Stressing, Start Counting
                    </h1>

                    {/* Intro */}
                    <p className="text-lg text-gray-700 leading-relaxed mb-6">
                      Let’s be real—keeping tabs on your attendance can be a royal pain. One day you’re chilling, thinking you’ve got it under control, then BAM, you’re one absence away from academic exile. Whether you’re slogging through high school, college, or some never-ending training, skipping a class or two can tank your percentage faster than you’d think.
                      That’s why we built this Attendance Calculator—so you don’t have to do mental gymnastics every Sunday night.
                    </p>

                    {/* Why Should You Care */}
                    <div className="bg-white shadow-md rounded-lg p-6 mb-8">
                      <h2 className="text-2xl font-semibold text-gray-800 mb-4">Why Should You Even Care?</h2>
                      <p className="text-gray-700 leading-relaxed">
                        Attendance isn’t just a random rule teachers cooked up to ruin your social life—it often decides whether you can sit for your exams, or even impacts your grades. Most places set a <strong>minimum of 75%</strong>. Drop below that and you might be looking at extra assignments, make-up classes, or worse, a big red “Not Eligible” next to your name.
                        Say your college says <em>“75% or bust”</em>, and you’re sitting at 72%. You need to know exactly how many classes you must attend to crawl back over the line. That’s where this calculator comes in—saving your academic bacon.
                      </p>
                    </div>

                    {/* How It Works */}
                    <div className="bg-yellow-50 border-l-4 border-yellow-400 rounded-lg p-6 mb-8">
                      <h2 className="text-2xl font-semibold text-gray-800 mb-4">How This Thing Works</h2>
                      <ol className="list-decimal list-inside space-y-2 text-gray-700">
                        <li>Enter the total number of classes conducted so far.</li>
                        <li>Enter how many classes you attended (be honest).</li>
                        <li>Click “Calculate” to instantly see your attendance percentage.</li>
                        <li>Need to hit a goal? Enter your target percentage, and we’ll tell you how many classes you can’t afford to miss.</li>
                      </ol>
                    </div>

                    {/* Examples */}
                    <div className="bg-white shadow rounded-lg p-6 mb-8">
                      <h2 className="text-2xl font-semibold text-gray-800 mb-4">Examples</h2>
                      <ul className="space-y-3 text-gray-700">
                        <li><strong>42 out of 50 classes:</strong> 84% attendance. Safe… for now. Miss a few more and you’re in trouble.</li>
                        <li><strong>30 out of 45 classes:</strong> 66.7% attendance. You need to attend several consecutive classes to recover.</li>
                      </ul>
                    </div>

                    {/* Tips */}
                    <div className="bg-green-50 border-l-4 border-green-400 rounded-lg p-6 mb-8">
                      <h2 className="text-2xl font-semibold text-gray-800 mb-4">How Not to Flunk Out</h2>
                      <ul className="list-disc list-inside space-y-2 text-gray-700">
                        <li>Plan your week—mark important classes in your calendar.</li>
                        <li>Missed a class? Catch up with notes or recordings ASAP.</li>
                        <li>Talk to your teachers if you have valid reasons for absences.</li>
                        <li>Stay healthy—half of missed classes happen due to sickness or burnout.</li>
                      </ul>
                    </div>

                    {/* FAQ */}
                    <div className="bg-white shadow-md rounded-lg p-6">
                      <h2 className="text-2xl font-semibold text-gray-800 mb-4">FAQ</h2>
                      <div className="space-y-4">
                        <div>
                          <h3 className="font-semibold text-gray-900">Is the calculator accurate?</h3>
                          <p className="text-gray-700">Yes. It uses the same formula most institutions use: (Attended ÷ Total) × 100.</p>
                        </div>
                        <div>
                          <h3 className="font-semibold text-gray-900">Can I use it for any subject?</h3>
                          <p className="text-gray-700">Absolutely. Math, History, Underwater Basket Weaving—anything.</p>
                        </div>
                        <div>
                          <h3 className="font-semibold text-gray-900">Is my data saved?</h3>
                          <p className="text-gray-700">Nope. We respect your privacy.</p>
                        </div>
                        <div>
                          <h3 className="font-semibold text-gray-900">What’s the minimum attendance?</h3>
                          <p className="text-gray-700">Usually 75%, but some places require 80%.</p>
                        </div>
                        <div>
                          <h3 className="font-semibold text-gray-900">Can I check how many classes I can skip?</h3>
                          <p className="text-gray-700">Yes. If your attendance is high enough, the calculator shows how many you can afford to miss.</p>
                        </div>
                        <div>
                          <h3 className="font-semibold text-gray-900">Does it work on mobile?</h3>
                          <p className="text-gray-700">Of course—phone, tablet, or computer.</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </section>

              </CardContent>
            </Card>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
