"use client"

import Header from "@/components/Header"
import Footer from "@/components/Footer"
import Link from "next/link"
import { Calculator, TrendingUp, Shield, Users } from "lucide-react"

export default function HomePage() {
  return (
    <>
      <Header />
      <main>
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-blue-700 via-indigo-800 to-purple-800 text-white py-20">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-5xl md:text-6xl font-extrabold mb-6 tracking-tight drop-shadow-sm">
              LIC Plan Calculator
            </h1>
            <p className="text-xl md:text-2xl mb-10 max-w-2xl mx-auto leading-relaxed opacity-90">
              Calculate your LIC policy maturity values with our accurate and easy-to-use calculators. Get instant
              results for Jeevan Saral Maturity Plan and other popular plans.
            </p>
            <Link
              href="/jeevan-saral-maturity-calculator"
              className="bg-yellow-400 hover:bg-yellow-300 text-blue-900 px-8 py-4 rounded-xl text-lg font-semibold shadow-md transition-all duration-200 inline-flex items-center"
            >
              <Calculator className="w-6 h-6 mr-2" />
              Start Calculating
            </Link>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold text-center mb-16 text-gray-800">Why Choose Our Calculator?</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
              <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl p-8 text-center shadow-lg hover:shadow-xl transition-shadow">
                <TrendingUp className="w-16 h-16 text-blue-600 mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-3 text-gray-800">Accurate Calculations</h3>
                <p className="text-gray-600">
                  Get precise maturity value calculations based on current LIC bonus rates and policy terms.
                </p>
              </div>
              <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl p-8 text-center shadow-lg hover:shadow-xl transition-shadow">
                <Shield className="w-16 h-16 text-blue-600 mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-3 text-gray-800">Secure & Private</h3>
                <p className="text-gray-600">
                  Your data is completely secure. We don't store any personal information entered in our calculators.
                </p>
              </div>
              <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl p-8 text-center shadow-lg hover:shadow-xl transition-shadow">
                <Users className="w-16 h-16 text-blue-600 mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-3 text-gray-800">Trusted by Thousands</h3>
                <p className="text-gray-600">
                  Join thousands of users who trust our calculators for their LIC policy planning needs.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Calculator Section */}
        <section className="py-20 bg-gradient-to-b from-gray-100 to-gray-200">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold text-center mb-16 text-gray-800">Available Calculators</h2>
            <div className="max-w-3xl mx-auto">
              <div className="bg-white rounded-3xl shadow-xl p-10 hover:shadow-2xl transition-shadow">
                <div className="flex items-center mb-6">
                  <Calculator className="w-8 h-8 text-blue-600 mr-3" />
                  <h3 className="text-2xl font-semibold text-gray-800">
                    Jeevan Saral Maturity Plan
                  </h3>
                </div>
                <p className="text-gray-600 mb-6">
                  Calculate the maturity value of your Jeevan Saral Maturity Plan policy. Get detailed breakdown of sum
                  assured, bonus, and loyalty addition.
                </p>
                <div className="flex flex-wrap gap-2 mb-6">
                  <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">Endowment Plan</span>
                  <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium">With Profits</span>
                  <span className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm font-medium">Loyalty Addition</span>
                </div>

                <Link
                  href="/jeevan-saral-maturity-calculator"
                  className="inline-flex items-center bg-blue-600 text-white px-6 py-3 rounded-xl text-base font-medium hover:bg-blue-700 transition"
                >
                  <Calculator className="w-5 h-5 mr-2" />
                  Calculate Now
                </Link>

              </div>
            </div>
          </div>
        </section>

        {/* SEO Content Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4 max-w-4xl">
            <h2 className="text-3xl md:text-4xl font-bold mb-10 text-gray-800 text-center">
              About Jeevan Saral Maturity Plan
            </h2>
            <div className="space-y-8 text-gray-700 leading-relaxed text-base md:text-lg">

              <p>
                Jeevan Saral Maturity Plan is a participating endowment plan that provides financial protection to your
                family along with savings. This plan offers guaranteed returns with bonus additions, making it an ideal
                choice for long-term financial planning.
              </p>

              <div>
                <h3 className="text-2xl font-semibold text-gray-800 mb-4">Key Features of Jeevan Saral Maturity Plan</h3>
                <ul className="list-disc list-inside space-y-2">
                  <li>Guaranteed maturity benefit with bonus additions</li>
                  <li>Death benefit for family protection</li>
                  <li>Loyalty addition for long-term policyholders</li>
                  <li>Tax benefits under Section 80C and 10(10D)</li>
                  <li>Flexible premium payment terms</li>
                </ul>
              </div>

              <div>
                <h3 className="text-2xl font-semibold text-gray-800 mb-4">How to Use <a href="/" className="text-blue-600 underline hover:text-blue-800">Our Jeevan Saral Maturity Calculator</a>?</h3>
                <ol className="list-decimal list-inside space-y-2">
                  <li>Enter your sum assured amount</li>
                  <li>Input your annual premium amount</li>
                  <li>Select your policy term and premium paying term</li>
                  <li>Enter your current age</li>
                  <li>Click calculate to get your maturity value</li>
                </ol>
              </div>

              <p>
                <a href="/" className="text-blue-600 underline hover:text-blue-800">Our LIC Jeevan Saral Maturity Calculator</a> provides accurate estimates based on current bonus rates and policy terms.
                Use this tool to plan your financial future effectively.
              </p>

            </div>
          </div>
        </section>

      </main>
      <Footer />
    </>
  )
}
