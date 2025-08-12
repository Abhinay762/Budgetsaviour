import Header from "@/components/Header"
import Footer from "@/components/Footer"
import Link from "next/link"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import {
  IndianRupee,
  GraduationCap,
  ShieldCheck,
  TrendingUp,
  Ruler,
  CalendarCheck,
  Wallet,
  ClipboardCheck,
  Award,
  Scale,
} from "lucide-react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "All Calculators & Tools - Saral Calc",
  description:
    "Explore a wide range of free online calculators and tools on Saral Calc, including income tax, CGPA, age, BMI, and more. Simplify your calculations.",
  keywords: [
    "online calculators",
    "free tools",
    "income tax calculator",
    "CGPA calculator",
    "age calculator",
    "BMI calculator",
    "Saral Calc tools",
    "financial tools",
    "educational tools",
    "utility calculators",
    "LIC Jeevan Umang calculator",
    "Engineering cut off",
    "MS pipe weight",
    "Cash denomination",
    "Attendance calculator",
    "SSC CGL marks",
  ],
  openGraph: {
    title: "All Calculators & Tools - Saral Calc",
    description:
      "Find all your essential calculators in one place. Saral Calc offers a variety of tools for finance, education, health, and general utility.",
    url: "https://saralcalc.online/tools",
    siteName: "Saral Calc",
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Saral Calc - Your Go-To for Online Calculators",
    description:
      "Discover a comprehensive collection of free online calculators for all your needs. Accurate, fast, and easy to use.",
    site: "@saralcalc",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-snippet": -1,
      "max-image-preview": "large",
      "max-video-preview": -1,
    },
  },
  alternates: {
    canonical: "https://saralcalc.online/tools",
  },
  metadataBase: new URL("https://saralcalc.online"),
}

export default function ToolsPage() {
  const tools = [
    {
      name: "Income Tax Calculator AY 2024-25",
      description: "Calculate your income tax liability for the current assessment year.",
      href: "/tools/income-tax-calculator",
      icon: IndianRupee,
      color: "text-green-600",
    },
    {
      name: "BMI Calculator",
      description: "Assess your weight status using the Body Mass Index.",
      href: "/tools/bmi-calculator",
      icon: Scale,
      color: "text-blue-600",
    },
    {
      name: "VTU CGPA & SGPA Calculator",
      description: "Calculate your academic performance for VTU students.",
      href: "/tools/vtu-cgpa-sgpa-calculator",
      icon: GraduationCap,
      color: "text-blue-600",
    },
    {
      name: "LIC Jeevan Umang Calculator",
      description: "Estimate maturity and returns for your LIC Jeevan Umang policy.",
      href: "/tools/lic-jeevan-umang-calculator",
      icon: ShieldCheck,
      color: "text-blue-600",
    },
    {
      name: "Engineering Cut Off Calculator",
      description: "Predict admission chances to engineering colleges based on cut-offs.",
      href: "/tools/engineering-cut-off-calculator",
      icon: TrendingUp,
      color: "text-purple-600",
    },
    {
      name: "MS Pipe Weight Calculator",
      description: "Calculate the weight of Mild Steel pipes for construction and fabrication.",
      href: "/tools/ms-pipe-weight-calculator",
      icon: Ruler,
      color: "text-orange-600",
    },
    {
      name: "Age Calculator for UPSC/NDA",
      description: "Determine age eligibility for UPSC and NDA examinations.",
      href: "/tools/age-calculator-upsc-nda",
      icon: CalendarCheck,
      color: "text-green-600",
    },
    {
      name: "Cash Denomination Calculator",
      description: "Quickly count and tally your cash by denominations.",
      href: "/tools/cash-denomination-calculator",
      icon: Wallet,
      color: "text-yellow-600",
    },
    {
      name: "75% Attendance Calculator",
      description: "Calculate required attendance to meet academic criteria.",
      href: "/tools/75-percent-attendance-calculator",
      icon: ClipboardCheck,
      color: "text-teal-600",
    },
    {
      name: "SSC CGL Marks Calculator",
      description: "Estimate your marks for the SSC CGL examination.",
      href: "/tools/ssc-cgl-marks-calculator",
      icon: Award,
      color: "text-red-600",
    },
  ]

  return (
    <>
      <Header />
      <main className="min-h-screen bg-gray-50">
        <div className="container mx-auto px-4 py-12">
          <div className="max-w-6xl mx-auto">
            <h1 className="text-4xl font-bold text-center mb-8">Our Collection of Useful Tools</h1>
            <p className="text-lg text-center text-gray-600 mb-10">
              Explore a wide range of calculators and tools designed to simplify your daily tasks, financial planning,
              academic calculations, and more.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {tools.map((tool) => (
                <Link href={tool.href} key={tool.name} className="group">
                  <Card className="h-full flex flex-col justify-between hover:shadow-lg transition-shadow duration-200 calculator-card">
                    <CardHeader className="flex flex-row items-center space-x-4 pb-2">
                      <tool.icon className={`w-8 h-8 ${tool.color}`} />
                      <CardTitle className="text-xl font-semibold group-hover:text-primary-blue">{tool.name}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-600">{tool.description}</p>
                    </CardContent>
                  </Card>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
