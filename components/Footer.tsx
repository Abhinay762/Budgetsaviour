import Link from "next/link"
import { CalculatorIcon } from "lucide-react" // Import CalculatorIcon

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4 text-center md:text-left">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          {/* About Section */}
          <div className="flex flex-col items-center md:items-start">
            <Link href="/" className="flex items-center gap-2 font-bold text-primary-yellow mb-4">
              <CalculatorIcon className="h-7 w-7" />
              <span className="text-2xl">Saral Calc</span>
            </Link>
            <p className="text-sm text-gray-400 leading-relaxed">
              Your trusted online platform for free and accurate calculators. Simplifying finance, education, and daily
              calculations for everyone.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-semibold mb-5 text-primary-yellow">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/" className="text-base text-gray-400 hover:text-white transition-colors hover:underline">
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/jeevan-saral-maturity-calculator"
                  className="text-base text-gray-400 hover:text-white transition-colors hover:underline"
                >
                  Jeevan Saral Maturity Calculator
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="text-base text-gray-400 hover:text-white transition-colors hover:underline"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-base text-gray-400 hover:text-white transition-colors hover:underline"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Other Tools */}
          <div>
            <h3 className="text-xl font-semibold mb-5 text-primary-yellow">Other Tools</h3>
            <ul className="space-y-3">
              <li>
                <Link
                  href="/tools/income-tax-calculator"
                  className="text-base text-gray-400 hover:text-white transition-colors hover:underline"
                >
                  Income Tax Calculator
                </Link>
              </li>
              <li>
                <Link
                  href="/tools/bmi-calculator"
                  className="text-base text-gray-400 hover:text-white transition-colors hover:underline"
                >
                  BMI Calculator
                </Link>
              </li>
              <li>
                <Link
                  href="/tools/vtu-cgpa-sgpa-calculator"
                  className="text-base text-gray-400 hover:text-white transition-colors hover:underline"
                >
                  VTU CGPA & SGPA
                </Link>
              </li>
              <li>
                <Link
                  href="/tools/lic-jeevan-umang-calculator"
                  className="text-base text-gray-400 hover:text-white transition-colors hover:underline"
                >
                  LIC Jeevan Umang
                </Link>
              </li>
              <li>
                <Link
                  href="/tools"
                  className="text-base text-gray-400 hover:text-white transition-colors hover:underline"
                >
                  View All Tools
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal & Help */}
          <div>
            <h3 className="text-xl font-semibold mb-5 text-primary-yellow">Legal & Help</h3>
            <ul className="space-y-3">
              <li>
                <Link
                  href="/privacy-policy"
                  className="text-base text-gray-400 hover:text-white transition-colors hover:underline"
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link
                  href="/terms-conditions"
                  className="text-base text-gray-400 hover:text-white transition-colors hover:underline"
                >
                  Terms & Conditions
                </Link>
              </li>
              <li>
                <Link
                  href="/disclaimer"
                  className="text-base text-gray-400 hover:text-white transition-colors hover:underline"
                >
                  Disclaimer
                </Link>
              </li>
              <li>
                <Link
                  href="/faq"
                  className="text-base text-gray-400 hover:text-white transition-colors hover:underline"
                >
                  FAQ
                </Link>
              </li>
              <li>
                <Link
                  href="/calculator-help"
                  className="text-base text-gray-400 hover:text-white transition-colors hover:underline"
                >
                  Calculator Help Guide
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-10 pt-6 text-sm text-gray-500 text-center">
          <p>&copy; {new Date().getFullYear()} Saral Calc. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
