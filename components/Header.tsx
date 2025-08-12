"use client"

import Link from "next/link"
import { Menu, X, ChevronDown } from "lucide-react"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger
} from "@/components/ui/dropdown-menu"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen)
  }

  const tools = [
    { name: "Income Tax Calculator", href: "/tools/income-tax-calculator" },
    { name: "BMI Calculator", href: "/tools/bmi-calculator" },
    { name: "VTU CGPA & SGPA Calculator", href: "/tools/vtu-cgpa-sgpa-calculator" },
    { name: "LIC Jeevan Umang Calculator", href: "/tools/lic-jeevan-umang-calculator" },
    { name: "Engineering Cut Off Calculator", href: "/tools/engineering-cut-off-calculator" },
    { name: "MS Pipe Weight Calculator", href: "/tools/ms-pipe-weight-calculator" },
    { name: "Age Calculator for UPSC/NDA", href: "/tools/age-calculator-upsc-nda" },
    { name: "Cash Denomination Calculator", href: "/tools/cash-denomination-calculator" },
    { name: "75% Attendance Calculator", href: "/tools/75-percent-attendance-calculator" },
    { name: "SSC CGL Marks Calculator", href: "/tools/ssc-cgl-marks-calculator" },
  ]

  return (
    <header className="bg-[#111827] text-white p-4 shadow-md sticky top-0 z-50 transition-all duration-300">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <Link
          href="/"
          className="text-2xl font-bold tracking-wide focus:outline-none focus:ring-2 focus:ring-yellow-400 rounded transition-colors duration-300 flex items-center space-x-1"
        >
          <span className="text-yellow-400 hover:text-yellow-300 transition-colors duration-300">
            Saral
          </span>
          <span className="text-white hover:text-gray-300 transition-colors duration-300">
            Calc
          </span>
        </Link>


        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-6 items-center font-medium">
          <Link
            href="/"
            className="hover:text-yellow-400 focus:outline-none focus:ring-2 focus:ring-yellow-400 rounded transition-colors duration-300"
          >
            Home
          </Link>
          <Link
            href="/jeevan-saral-maturity-calculator"
            className="hover:text-yellow-400 focus:outline-none focus:ring-2 focus:ring-yellow-400 rounded transition-colors duration-300"
          >
            Jeevan Saral Maturity Calculator
          </Link>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button
                variant="ghost"
                className="text-white hover:text-yellow-400 focus:outline-none focus:ring-2 focus:ring-yellow-400 rounded transition-colors duration-300"
              >
                Other Tools <ChevronDown className="ml-1 h-4 w-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent
              className="w-64 bg-white text-gray-900 shadow-lg rounded-md border animate-slideDown"
              align="end"
            >
              <DropdownMenuItem>
                <Link href="/tools" className="block w-full py-2 px-4 hover:bg-gray-100 rounded">
                  All Other Tools
                </Link>
              </DropdownMenuItem>
              {tools.map((tool) => (
                <DropdownMenuItem key={tool.href}>
                  <Link
                    href={tool.href}
                    className="block w-full py-2 px-4 hover:bg-gray-100 rounded"
                  >
                    {tool.name}
                  </Link>
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>
          <Link
            href="/about"
            className="hover:text-yellow-400 focus:outline-none focus:ring-2 focus:ring-yellow-400 rounded transition-colors duration-300"
          >
            About Us
          </Link>
          <Link
            href="/contact"
            className="hover:text-yellow-400 focus:outline-none focus:ring-2 focus:ring-yellow-400 rounded transition-colors duration-300"
          >
            Contact
          </Link>
        </nav>

        {/* Mobile Navigation */}
        <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
          <SheetTrigger asChild className="md:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={toggleMobileMenu}
              aria-label="Toggle mobile menu"
              className="text-white"
            >
              <Menu className="h-6 w-6" />
            </Button>
          </SheetTrigger>
          <SheetContent
            side="right"
            className="w-64 bg-white text-gray-900 p-4 animate-slideIn"
            aria-label="Mobile navigation"
          >
            <div className="flex justify-end mb-4">
              <Button
                variant="ghost"
                size="icon"
                onClick={toggleMobileMenu}
                aria-label="Close mobile menu"
              >
                <X className="h-6 w-6" />
              </Button>
            </div>
            <nav className="flex flex-col space-y-4">
              <Link href="/" onClick={toggleMobileMenu} className="text-lg hover:text-blue-700 transition-colors duration-300">
                Home
              </Link>
              <Link
                href="/jeevan-saral-maturity-calculator"
                onClick={toggleMobileMenu}
                className="text-lg hover:text-blue-700 transition-colors duration-300"
              >
                Jeevan Saral Maturity Calculator
              </Link>
              <Link
                href="/tools"
                onClick={toggleMobileMenu}
                className="text-lg hover:text-blue-700 transition-colors duration-300"
              >
                All Other Tools
              </Link>
              {tools.map((tool) => (
                <Link
                  key={tool.href}
                  href={tool.href}
                  onClick={toggleMobileMenu}
                  className="ml-4 text-base text-gray-600 hover:text-blue-700 transition-colors duration-300"
                >
                  • {tool.name}
                </Link>
              ))}
              <Link href="/about" onClick={toggleMobileMenu} className="text-lg hover:text-blue-700 transition-colors duration-300">
                About Us
              </Link>
              <Link
                href="/contact"
                onClick={toggleMobileMenu}
                className="text-lg hover:text-blue-700 transition-colors duration-300"
              >
                Contact
              </Link>
            </nav>
          </SheetContent>
        </Sheet>
      </div>

      {/* Animations */}
      <style jsx global>{`
        @keyframes slideDown {
          0% {
            opacity: 0;
            transform: translateY(-10px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-slideDown {
          animation: slideDown 0.25s ease forwards;
        }
        @keyframes slideIn {
          0% {
            opacity: 0;
            transform: translateX(20px);
          }
          100% {
            opacity: 1;
            transform: translateX(0);
          }
        }
        .animate-slideIn {
          animation: slideIn 0.3s ease forwards;
        }
      `}</style>
    </header>
  )
}
