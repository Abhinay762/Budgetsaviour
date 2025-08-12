"use client"

import { useState } from "react"
import Header from "@/components/Header"
import Footer from "@/components/Footer"
import CalculatorForm, { type CalculatorData } from "@/components/CalculatorForm"
import CalculatorResult from "@/components/CalculatorResult"
import SeoHead from "@/components/SeoHead"

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
            <h1 className="text-4xl font-bold text-gray-800 mb-4">LIC Jeevan Saral Maturity Calculator</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Instantly calculate the maturity value of your LIC Jeevan Saral Maturity policy. Get detailed estimates, including bonuses and loyalty additions.
            </p>
          </div>

          {/* Calculator Form */}
          <CalculatorForm onCalculate={handleCalculate} />

          {/* Results */}
          {showResults && calculationData && <CalculatorResult data={calculationData} />}

          {/* Information Section */}
          <div className="calculator-card mt-8">
            <h2 className="text-2xl font-bold mb-6">LIC Jeevan Saral Maturity Overview</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold mb-4">Plan Features</h3>
                <p className="text-gray-700 mb-4">
                  LIC Jeevan Saral Maturity is a flexible endowment plan that offers both protection and long-term savings. It comes with loyalty additions, guaranteed maturity benefits, and annual bonuses.
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

          {/* ✅ Updated FAQ Section */}
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
                <h3 className="text-lg font-semibold mb-2">What drawbacks does Jeevan Saral have?</h3>
                <p className="text-gray-700">
                  Because of changes in regulations, the plan was no longer available for new purchasers. Additionally, it may provide lesser returns than more recent investment-linked schemes and lacks clarity in bonus and loyalty addition disclosures.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold mb-2">What financial advantages can Jeevan Saral offer?</h3>
                <p className="text-gray-700">
                  With-profits entitles you to a portion of LIC's excess. Annual bonuses and potential loyalty enhancements are given to Jeevan Saral policyholders, gradually raising the maturity and death benefit amounts.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold mb-2">Does a Jeevan-Saral policy allow us to borrow money?</h3>
                <p className="text-gray-700">
                  Yes, after paying premiums for at least three years, you are eligible to take out a policy loan. Interest is due at the current rates set by LIC, and the loan amount is often between 85 and 90 percent of the surrender value.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold mb-2">How is the maturity amount of Jeevan Saral calculated?</h3>
                <p className="text-gray-700">
                  To determine your maturity value, use our free online Jeevan Saral 165 maturity calculator. It takes into account the policy duration, sum assured, bonus, age at entry, premium paid, and loyalty additions.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold mb-2">Is it okay to take a loan from a LIC policy?</h3>
                <p className="text-gray-700">
                  Lower interest rates and ease of use characterise loans secured by LIC policies. If you require short-term funding that won't impact your credit score, this is an excellent choice. On the other hand, the maturity or death benefit is diminished by unpaid debts.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold mb-2">Is it still possible to get LIC Jeevan Saral?</h3>
                <p className="text-gray-700">
                  Jeevan Saral is no longer available to new clients of LIC. If you currently have a policy, though, it is still in effect and offers all of its benefits, such as incentives and maturity payouts.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold mb-2">Does the calculator have perfect accuracy?</h3>
                <p className="text-gray-700">
                  Using assumptions and current LIC rates, <a href="/" className="text-blue-600 underline hover:text-blue-800">our calculator</a> provides you with an estimate that is almost correct. Final maturity values, however, are contingent to the bonuses and loyalty additions announced by LIC at the time of payout.
                </p>
              </div>


              <div>
                <h3 className="text-lg font-semibold mb-2">How much is the loyalty addition?</h3>
                <p className="text-gray-700">
                  LIC announces loyalty additions based on the fund's performance and policy term. They can greatly increase your returns and are usually included for plans held for more than ten years.
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
