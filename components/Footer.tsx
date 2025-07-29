import Link from "next/link"

export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-8 mt-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">LIC Plan Calculator</h3>
            <p className="text-gray-300 text-sm">
              Calculate your LIC policy maturity values with our accurate and easy-to-use calculators.
            </p>
          </div>

          <div>
            <h4 className="text-md font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/" className="text-gray-300 hover:text-white">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-gray-300 hover:text-white">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-300 hover:text-white">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-md font-semibold mb-4">Calculators</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/maturity-calculator/lic-jeevan-saral-165" className="text-gray-300 hover:text-white">
                  LIC Jeevan Saral Plan 165
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-md font-semibold mb-4">Legal</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/privacy-policy" className="text-gray-300 hover:text-white">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms-conditions" className="text-gray-300 hover:text-white">
                  Terms & Conditions
                </Link>
              </li>
              <li>
                <Link href="/disclaimer" className="text-gray-300 hover:text-white">
                  Disclaimer
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8 text-center">
          <p className="text-gray-300 text-sm">© 2025 www.Saralcalc.online - All rights reserved</p>
        </div>
      </div>
    </footer>
  )
}
