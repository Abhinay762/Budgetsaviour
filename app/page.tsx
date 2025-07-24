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
        <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-16">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">LIC Plan Calculator</h1>
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
              Calculate your LIC policy maturity values with our accurate and easy-to-use calculators. Get instant
              results for LIC Jeevan Saral Plan 165 and other popular plans.
            </p>
            <Link
              href="/maturity-calculator/lic-jeevan-saral-165"
              className="bg-yellow-400 text-blue-900 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-yellow-300 transition-colors inline-flex items-center"
            >
              <Calculator className="w-6 h-6 mr-2" />
              Start Calculating
            </Link>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">Why Choose Our Calculator?</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center p-6">
                <TrendingUp className="w-16 h-16 text-blue-600 mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-3">Accurate Calculations</h3>
                <p className="text-gray-600">
                  Get precise maturity value calculations based on current LIC bonus rates and policy terms.
                </p>
              </div>
              <div className="text-center p-6">
                <Shield className="w-16 h-16 text-blue-600 mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-3">Secure & Private</h3>
                <p className="text-gray-600">
                  Your data is completely secure. We don't store any personal information entered in our calculators.
                </p>
              </div>
              <div className="text-center p-6">
                <Users className="w-16 h-16 text-blue-600 mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-3">Trusted by Thousands</h3>
                <p className="text-gray-600">
                  Join thousands of users who trust our calculators for their LIC policy planning needs.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Calculator Section */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">Available Calculators</h2>
            <div className="max-w-2xl mx-auto">
              <div className="bg-white rounded-lg shadow-lg p-8">
                <div className="flex items-center mb-4">
                  <Calculator className="w-8 h-8 text-blue-600 mr-3" />
                  <h3 className="text-2xl font-semibold">LIC Jeevan Saral Plan 165</h3>
                </div>
                <p className="text-gray-600 mb-6">
                  Calculate the maturity value of your LIC Jeevan Saral Plan 165 policy. Get detailed breakdown of sum
                  assured, bonus, and loyalty addition.
                </p>
                <div className="flex flex-wrap gap-2 mb-6">
                  <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">Endowment Plan</span>
                  <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm">With Profits</span>
                  <span className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm">Loyalty Addition</span>
                </div>
                <Link href="/maturity-calculator/lic-jeevan-saral-165" className="btn-primary inline-flex items-center">
                  <Calculator className="w-5 h-5 mr-2" />
                  Calculate Now
                </Link>
              </div>
            </div>
          </div>
        </section>
        {/* SEO Content */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4 max-w-4xl">
            <h2 className="text-3xl font-bold mb-8">About LIC Jeevan Saral Plan 165</h2>
            <div className="prose prose-lg max-w-none">
              <p className="text-gray-700 mb-6">
                LIC Jeevan Saral Plan 165 is a participating endowment plan that provides financial protection to your
                family along with savings. This plan offers guaranteed returns with bonus additions, making it an ideal
                choice for long-term financial planning.
              </p>

              <h3 className="text-2xl font-semibold mb-4">Key Features of LIC Jeevan Saral Plan 165</h3>
              <ul className="list-disc pl-6 mb-6 text-gray-700">
                <li>Guaranteed maturity benefit with bonus additions</li>
                <li>Death benefit for family protection</li>
                <li>Loyalty addition for long-term policyholders</li>
                <li>Tax benefits under Section 80C and 10(10D)</li>
                <li>Flexible premium payment terms</li>
              </ul>

              <h3 className="text-2xl font-semibold mb-4">How to Use Our Jeevan Saral Maturity Calculator</h3>
              <ol className="list-decimal pl-6 mb-6 text-gray-700">
                <li>Enter your sum assured amount</li>
                <li>Input your annual premium amount</li>
                <li>Select your policy term and premium paying term</li>
                <li>Enter your current age</li>
                <li>Click calculate to get your maturity value</li>
              </ol>

              <p className="text-gray-700">
                Our LIC Jeevan Saral Plan 165 maturity calculator provides accurate estimates based on current bonus
                rates and policy terms. Use this tool to plan your financial future effectively.
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
