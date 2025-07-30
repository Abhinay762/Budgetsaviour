import Header from "@/components/Header"
import Footer from "@/components/Footer"
import { Users, Target, Award, Shield } from "lucide-react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "About Saral Calc - LIC Policy & Maturity Calculator Experts",
  description:
    "Learn about Saral Calc's mission to simplify LIC policy planning. Trusted by thousands, we provide accurate maturity & surrender value calculators online.",
  keywords: [
    "Saral Calc",
    "About Saral Calc",
    "LIC calculator",
    "LIC maturity calculator",
    "LIC surrender value",
    "LIC plan calculator",
    "free insurance tools",
    "financial planning",
    "LIC premium estimate",
    "best LIC calculator India",
  ],
  openGraph: {
    title: "About Saral Calc - Trusted LIC Plan Calculator Platform",
    description:
      "Discover how Saral Calc helps you plan better with accurate LIC tools and expert-backed guidance. Your financial partner in LIC policy management.",
    url: "https://saralcalc.online/about",
    siteName: "Saral Calc",
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "About Saral Calc - LIC Planning Simplified",
    description:
      "Learn who we are and why Saral Calc is India's most reliable LIC calculator site. Empower your policy decisions with confidence.",
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
    canonical: "https://saralcalc.online/about",
  },
  metadataBase: new URL("https://saralcalc.online"),
}


export default function AboutPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-gray-50">
        <div className="container mx-auto px-4 py-12">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl font-bold text-center mb-8">About Saral Calc</h1>

            <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
              <p className="text-lg text-gray-700 mb-6">
                Welcome to Saral Calc, your trusted partner in financial planning and LIC policy calculations. We
                are dedicated to providing accurate, easy-to-use calculators that help you make informed decisions about
                your insurance and investment needs.
              </p>

              <p className="text-gray-700 mb-6">
                Our team of financial experts and technology professionals work together to ensure that our calculators
                provide the most accurate estimates possible, helping thousands of users plan their financial future
                with confidence.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
              <div className="bg-white rounded-lg shadow-lg p-6">
                <Target className="w-12 h-12 text-blue-600 mb-4" />
                <h2 className="text-2xl font-semibold mb-4">Our Mission</h2>
                <p className="text-gray-700">
                  To democratize financial planning by providing free, accurate, and easy-to-use calculators that help
                  individuals make informed decisions about their LIC policies and financial investments.
                </p>
              </div>

              <div className="bg-white rounded-lg shadow-lg p-6">
                <Award className="w-12 h-12 text-blue-600 mb-4" />
                <h2 className="text-2xl font-semibold mb-4">Our Vision</h2>
                <p className="text-gray-700">
                  To become the most trusted platform for insurance and investment calculations, empowering millions of
                  users to achieve their financial goals through informed decision-making.
                </p>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
              <h2 className="text-2xl font-semibold mb-6 text-center">Why Choose Saral Calc?</h2>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="text-center">
                  <Users className="w-16 h-16 text-blue-600 mx-auto mb-4" />
                  <h3 className="text-lg font-semibold mb-2">Expert Team</h3>
                  <p className="text-gray-600">
                    Our team consists of certified financial planners and insurance experts.
                  </p>
                </div>

                <div className="text-center">
                  <Shield className="w-16 h-16 text-blue-600 mx-auto mb-4" />
                  <h3 className="text-lg font-semibold mb-2">Accurate Calculations</h3>
                  <p className="text-gray-600">
                    We use the latest bonus rates and policy terms for precise calculations.
                  </p>
                </div>

                <div className="text-center">
                  <Award className="w-16 h-16 text-blue-600 mx-auto mb-4" />
                  <h3 className="text-lg font-semibold mb-2">Trusted Platform</h3>
                  <p className="text-gray-600">
                    Thousands of users trust our calculators for their financial planning needs.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-8">
              <h2 className="text-2xl font-semibold mb-6">Our Commitment</h2>
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-4 flex-shrink-0"></div>
                  <p className="text-gray-700">
                    <strong>Accuracy:</strong> We continuously update our calculators with the latest bonus rates and
                    policy terms to ensure accurate results.
                  </p>
                </div>
                <div className="flex items-start">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-4 flex-shrink-0"></div>
                  <p className="text-gray-700">
                    <strong>Privacy:</strong> We respect your privacy and do not store any personal information entered
                    in our calculators.
                  </p>
                </div>
                <div className="flex items-start">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-4 flex-shrink-0"></div>
                  <p className="text-gray-700">
                    <strong>Accessibility:</strong> Our tools are completely free and accessible to everyone, helping
                    democratize financial planning.
                  </p>
                </div>
                <div className="flex items-start">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-4 flex-shrink-0"></div>
                  <p className="text-gray-700">
                    <strong>Support:</strong> We provide comprehensive guides and support to help you understand and use
                    our calculators effectively.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
