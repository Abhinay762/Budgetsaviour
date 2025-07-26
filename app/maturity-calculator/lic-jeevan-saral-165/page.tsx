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
              Instantly calculate the maturity value of your LIC Jeevan Saral Plan 165 policy. Get detailed estimates, including bonuses and loyalty additions.
            </p>
          </div>

          {/* Calculator Form */}
          <CalculatorForm onCalculate={handleCalculate} />

          {/* Results */}
          {showResults && calculationData && <CalculatorResult data={calculationData} />}

          {/* Information Section */}
          <div className="calculator-card mt-8">
            <h2 className="text-2xl font-bold mb-6">LIC Jeevan Saral Plan 165 Overview</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold mb-4">Plan Features</h3>
                <p className="text-gray-700 mb-4">
                  LIC Jeevan Saral Plan 165 is a flexible endowment plan that offers both protection and long-term savings. It comes with loyalty additions, guaranteed maturity benefits, and annual bonuses.
                </p>

                <h4 className="text-lg font-semibold mb-2">Major Benefits:</h4>
                <ul className="list-disc pl-5 text-gray-700 space-y-1">
                  <li>Guaranteed maturity value</li>
                  <li>Death risk coverage</li>
                  <li>Bonus and loyalty additions</li>
                  <li>Tax exemptions under section 80C & 10(10D)</li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-4">How the Calculator Works</h3>
                <p className="text-gray-700 mb-4">
                  The calculator estimates your maturity amount based on your inputs, using prevailing LIC bonus rates and loyalty additions.
                </p>

                <h4 className="text-lg font-semibold mb-2">It Considers:</h4>
                <ul className="list-disc pl-5 text-gray-700 space-y-1">
                  <li>Entered Sum Assured</li>
                  <li>Applicable bonus rates</li>
                  <li>Loyalty addition (based on term)</li>
                  <li>Total premium paid</li>
                  <li>Estimated returns</li>
                </ul>
              </div>
            </div>
          </div>

          {/* FAQ Section */}
          <div className="calculator-card mt-8">
            <h2 className="text-2xl font-bold mb-6">Frequently Asked Questions</h2>
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-semibold mb-2">What are the benefits of Jeevan Saral Plan 165?</h3>
                <p className="text-gray-700">
                  Jeevan Saral offers flexibility, life cover, guaranteed returns, and loyalty additions. You get death benefits during the term, maturity sum assured at the end, and potential annual bonuses and tax exemptions under Section 80C and 10(10D).
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold mb-2">What are the disadvantages of Jeevan Saral?</h3>
                <p className="text-gray-700">
                  The plan was discontinued for new purchases due to regulatory changes. It also lacks transparency in bonus and loyalty addition declarations and may offer lower returns compared to modern investment-linked products.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold mb-2">What are the benefits of Jeevan Saral with profits?</h3>
                <p className="text-gray-700">
                  With-profits means you earn a share in LIC’s surplus. Jeevan Saral policyholders receive annual bonuses and possible loyalty additions, increasing the maturity and death benefit amounts over time.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold mb-2">Can we take a loan on a Jeevan-Saral policy?</h3>
                <p className="text-gray-700">
                  Yes, you can take a policy loan after completing at least 3 years of premium payment. The loan amount is usually 85–90% of the surrender value, and interest is payable as per LIC’s prevailing rates.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold mb-2">How to calculate Jeevan Saral maturity amount?</h3>
                <p className="text-gray-700">
                  Use our free online Jeevan Saral 165 maturity calculator to estimate your maturity value. It considers premium paid, age at entry, policy term, sum assured, bonus, and loyalty additions.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold mb-2">Is it good to take a loan against a LIC policy?</h3>
                <p className="text-gray-700">
                  Loans against LIC policies are safe and easy with lower interest rates. It’s a good option if you need short-term funds without affecting your credit score. However, unpaid loans reduce the maturity or death benefit.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold mb-2">Is LIC Jeevan Saral still available?</h3>
                <p className="text-gray-700">
                  LIC has discontinued Jeevan Saral for new customers. However, if you already have a policy, it remains active with all benefits including bonuses and maturity payouts.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold mb-2">Is the calculator 100% accurate?</h3>
                <p className="text-gray-700">
                  Our calculator gives you a near-accurate estimate based on current LIC rates and assumptions. However, final maturity values depend on LIC's declared bonuses and loyalty additions at the time of payout.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold mb-2">What’s the loyalty addition amount?</h3>
                <p className="text-gray-700">
                  Loyalty additions are declared by LIC based on the policy term and performance of the fund. They are typically added for policies held for over 10 years and can significantly enhance your returns.
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