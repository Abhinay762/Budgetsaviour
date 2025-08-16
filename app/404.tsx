import Header from "@/components/Header"
import Footer from "@/components/Footer"
import Link from "next/link"
import { Search, Home, Calculator } from "lucide-react"

export default function NotFoundPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="container mx-auto px-4 py-16 text-center">
          <div className="max-w-2xl mx-auto">
            <h1 className="text-6xl font-bold text-gray-800 mb-4">404</h1>
            <h2 className="text-3xl font-semibold text-gray-700 mb-6">Oops! That page can't be found.</h2>
            <p className="text-xl text-gray-600 mb-8">
              It looks like nothing was found at this page. Maybe try a search?
            </p>

            <div className="mb-8">
              <div className="flex max-w-md mx-auto">
                <input
                  type="text"
                  placeholder="Search for calculators..."
                  className="flex-1 px-4 py-3 border border-gray-300 rounded-l-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
                <button className="bg-blue-600 text-white px-6 py-3 rounded-r-lg hover:bg-blue-700 transition-colors">
                  <Search className="w-5 h-5" />
                </button>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/"
                className="inline-flex items-center px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
              >
                <Home className="w-5 h-5 mr-2" />
                Go Home
              </Link>
              <Link
                href="/jeevan-saral-maturity-calculator"
                className="inline-flex items-center px-6 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors"
              >
                <Calculator className="w-5 h-5 mr-2" />
                Try Calculator
              </Link>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
