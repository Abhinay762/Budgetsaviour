import Link from "next/link"
import Header from "@/components/Header"
import Footer from "@/components/Footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Calculator, DollarSign, Scale } from "lucide-react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Saral Calc - Your Ultimate Online Calculator Hub",
  description:
    "Saral Calc offers a wide range of free online calculators for finance, education, health, and daily utility. Simplify complex calculations with ease.",
  keywords: [
    "online calculator",
    "free calculator",
    "finance calculator",
    "education calculator",
    "health calculator",
    "utility tools",
    "Jeevan Saral Maturity Calculator",
    "Income Tax Calculator",
    "BMI Calculator",
    "CGPA Calculator",
    "Saral Calc",
  ],
  openGraph: {
    title: "Saral Calc - Your Ultimate Online Calculator Hub",
    description:
      "Discover a comprehensive collection of free online calculators for all your needs. Accurate, fast, and easy to use.",
    url: "https://saralcalc.online",
    siteName: "Saral Calc",
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Saral Calc - Simplify Your Calculations",
    description:
      "From tax calculations to academic grades, Saral Calc provides accurate and easy-to-use online tools for everyone.",
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
    canonical: "https://saralcalc.online",
  },
  metadataBase: new URL("https://saralcalc.online"),
}

export default function HomePage() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-gray-50">
        {/* Hero Section */}
        <section className="header-blue text-white py-20 text-center">
          <div className="container mx-auto px-4">
            <h1 className="text-5xl font-extrabold mb-4 leading-tight">
              Simplify Your Calculations with <span className="text-primary-yellow">Saral Calc</span>
            </h1>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Your one-stop destination for free, accurate, and easy-to-use online calculators for all your needs.
            </p>
            <Link href="/tools">
              <Button className="btn-primary text-lg px-8 py-3">Explore All Calculators</Button>
            </Link>
          </div>
        </section>

        {/* Featured Calculators Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-10 text-text-dark">Featured Calculators</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <Card className="calculator-card text-center">
                <CardHeader>
                  <Calculator className="w-12 h-12 text-primary-blue mx-auto mb-4" />
                  <CardTitle className="text-2xl font-semibold">Jeevan Saral Maturity Calculator</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-text-light mb-4">
                    Calculate the maturity amount for your LIC Jeevan Saral policy with ease.
                  </p>
                  <Link href="/jeevan-saral-maturity-calculator">
                    <Button variant="outline" className="btn-primary bg-transparent">
                      Calculate Now
                    </Button>
                  </Link>
                </CardContent>
              </Card>

              <Card className="calculator-card text-center">
                <CardHeader>
                  <DollarSign className="w-12 h-12 text-green-600 mx-auto mb-4" />
                  <CardTitle className="text-2xl font-semibold">Income Tax Calculator AY 2024-25</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-text-light mb-4">
                    Estimate your income tax liability under new and old regimes for AY 2024-25.
                  </p>
                  <Link href="/tools/income-tax-calculator">
                    <Button variant="outline" className="btn-primary bg-transparent">
                      Calculate Now
                    </Button>
                  </Link>
                </CardContent>
              </Card>

              <Card className="calculator-card text-center">
                <CardHeader>
                  <Scale className="w-12 h-12 text-pink-600 mx-auto mb-4" />
                  <CardTitle className="text-2xl font-semibold">BMI Calculator</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-text-light mb-4">
                    Check your Body Mass Index to assess your weight status and health.
                  </p>
                  <Link href="/tools/bmi-calculator">
                    <Button variant="outline" className="btn-primary bg-transparent">
                      Calculate Now
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Explore More Calculators Section */}
        <section className="py-16 bg-bg-light">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-6 text-text-dark">More Tools at Your Fingertips</h2>
            <p className="text-lg text-text-light mb-8 max-w-3xl mx-auto">
              Beyond our featured tools, Saral Calc offers a growing library of specialized calculators for various
              fields. Whether it's for academic grades, engineering, or daily utilities, we've got you covered.
            </p>
            <Link href="/tools">
              <Button className="btn-primary text-lg px-8 py-3">View All Calculators</Button>
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
