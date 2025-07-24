"use client"

import { useState } from "react"
import Header from "@/components/Header"
import Footer from "@/components/Footer"
import CalculatorForm, { type CalculatorData } from "@/components/CalculatorForm"
import CalculatorResult from "@/components/CalculatorResult"

export default function JeevanSaralCalculatorPage() {
  const [calculationData, setCalculationData] = useState<CalculatorData | null>(null)
  const [showResults, setShowResults] = useState(false)

  const handleCalculate = (data: CalculatorData) => {
    setCalculationData(data)
    setShowResults(true)
  }

  return (
    <>
      <Header />
      <main className="min-h-screen bg-gray-50">
        <div className="container mx-auto px-4 py-8">
          {/* Page Header */}
          <div className="text-center mb-8">
            <h1 className="text-4xl font-bold text-gray-800 mb-4">LIC Jeevan Saral Plan 165 Maturity Calculator</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Calculate your LIC Jeevan Saral Plan 165 maturity value instantly. Get accurate estimates of your policy
              returns with detailed breakdown.
            </p>
          </div>

          {/* Calculator Form */}
          <CalculatorForm onCalculate={handleCalculate} />

          {/* Results */}
          {showResults && calculationData && <CalculatorResult data={calculationData} />}

          {/* Information Section */}
          <div className="calculator-card mt-8">
            <h2 className="text-2xl font-bold mb-6">About LIC Jeevan Saral Plan 165 Calculator</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold mb-4">What is LIC Jeevan Saral Plan 165?</h3>
                <p className="text-gray-700 mb-4">
                  LIC Jeevan Saral Plan 165 is a participating endowment plan that combines protection and savings. It
                  provides guaranteed returns along with bonus additions and loyalty additions for long-term
                  policyholders.
                </p>

                <h4 className="text-lg font-semibold mb-2">Key Benefits:</h4>
                <ul className="list-disc pl-5 text-gray-700 space-y-1">
                  <li>Guaranteed maturity benefit</li>
                  <li>Death benefit protection</li>
                  <li>Annual bonus additions</li>
                  <li>Loyalty addition</li>
                  <li>Tax benefits</li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-4">How Our Calculator Works</h3>
                <p className="text-gray-700 mb-4">
                  Our LIC Jeevan Saral maturity calculator uses the latest bonus rates and policy terms to provide
                  accurate maturity value estimates.
                </p>

                <h4 className="text-lg font-semibold mb-2">Calculation Includes:</h4>
                <ul className="list-disc pl-5 text-gray-700 space-y-1">
                  <li>Sum Assured</li>
                  <li>Bonus additions</li>
                  <li>Loyalty addition</li>
                  <li>Total premium paid</li>
                  <li>Net returns</li>
                </ul>
              </div>
            </div>
          </div>

          {/* FAQ Section */}
          <div className="calculator-card mt-8">
            <h2 className="text-2xl font-bold mb-6">Frequently Asked Questions</h2>

            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-semibold mb-2">
                  What is the minimum sum assured for LIC Jeevan Saral Plan 165?
                </h3>
                <p className="text-gray-700">
                  The minimum sum assured for LIC Jeevan Saral Plan 165 is ₹50,000. There is no maximum limit on the sum
                  assured.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold mb-2">How accurate is this maturity calculator?</h3>
                <p className="text-gray-700">
                  Our calculator provides estimates based on current bonus rates and policy terms. Actual maturity
                  values may vary based on LIC's declared bonus rates.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold mb-2">What is loyalty addition in LIC Jeevan Saral?</h3>
                <p className="text-gray-700">
                  Loyalty addition is an additional benefit provided to policyholders who continue their policy till
                  maturity. It's calculated as a percentage of the sum assured plus accrued bonus.
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
