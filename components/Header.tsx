"use client"

import Link from "next/link"
import { useState } from "react"
import { Menu, X, Search } from "lucide-react"

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="header-blue text-white shadow-lg">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between py-4">
          <Link href="/" className="flex items-center space-x-2">
            <div className="bg-yellow-400 text-black px-3 py-1 rounded font-bold text-lg">Saral</div>
            <span className="text-xl font-semibold">Calc</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">

            <div className="relative group">
              <button className="hover:text-yellow-300 transition-colors flex items-center">
                LIC Plan Calculator
                <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              <div className="absolute top-full left-0 mt-2 w-64 bg-white text-gray-800 rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50">
                <Link
                  href="/jeevan-saral-maturity-calculator"
                  className="block px-4 py-3 hover:bg-gray-100 rounded-t-lg"
                >
                  Jeevan Saral Maturity Calculator
                </Link>
              </div>
            </div>
            <Link href="/about" className="hover:text-yellow-300 transition-colors">
              About us
            </Link>

            <Link href="/contact" className="hover:text-yellow-300 transition-colors">
              Contact us
            </Link>
            <Link href="/disclaimer" className="hover:text-yellow-300 transition-colors">
              Disclaimer
            </Link>
            <Link href="/privacy-policy" className="hover:text-yellow-300 transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms-conditions" className="hover:text-yellow-300 transition-colors">
              Terms & Conditions
            </Link>
            <button className="hover:text-yellow-300 transition-colors">
              <Search className="w-5 h-5" />
            </button>
          </nav>

          {/* Mobile Menu Button */}
          <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden py-4 border-t border-blue-400">
            <div className="flex flex-col space-y-4">
              <Link href="/" className="hover:text-yellow-300 transition-colors">
                Home
              </Link>
              <Link
                href="/jeevan-saral-maturity-calculator"
                className="hover:text-yellow-300 transition-colors"
              >
                Jeevan Saral Maturity Plan
              </Link>
              <Link href="/about" className="hover:text-yellow-300 transition-colors">
                About us
              </Link>
              <Link href="/privacy-policy" className="hover:text-yellow-300 transition-colors">
                Privacy Policy
              </Link>
              <Link href="/contact" className="hover:text-yellow-300 transition-colors">
                Contact us
              </Link>
              <Link href="/disclaimer" className="hover:text-yellow-300 transition-colors">
                Disclaimer
              </Link>
            </div>
          </nav>
        )}
      </div>
    </header>
  )
}
