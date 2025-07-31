import Header from "@/components/Header"
import Footer from "@/components/Footer"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Terms & Conditions - Saral Calc LIC Calculator Usage Policy",
  description:
    "Read Saral Calc's Terms & Conditions for using LIC calculators, maturity estimators, and financial planning tools. User agreement and service terms.",
  keywords: [
    "Saral Calc terms conditions",
    "LIC calculator terms",
    "user agreement",
    "service terms",
    "calculator usage policy",
    "Saral Calc policy",
    "LIC tool terms",
    "financial planning terms",
    "website terms conditions",
    "calculator service agreement",
  ],
  openGraph: {
    title: "Terms & Conditions - Saral Calc Service Agreement",
    description:
      "Complete terms and conditions for using Saral Calc's LIC calculators and financial planning services. User rights and responsibilities.",
    url: "https://saralcalc.online/terms-conditions",
    siteName: "Saral Calc",
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "Saral Calc Terms & Conditions",
    description:
      "Review our terms and conditions for using LIC calculators and financial planning tools on Saral Calc platform.",
    site: "@saralcalc",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-snippet": -1,
      "max-image-preview": "standard",
      "max-video-preview": -1,
    },
  },
  alternates: {
    canonical: "https://saralcalc.online/terms-conditions",
  },
}


export default function TermsConditionsPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-gray-50">
        <div className="container mx-auto px-4 py-12">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl font-bold text-center mb-8">Terms & Conditions</h1>
            <p className="text-center text-gray-600 mb-8">Last updated: July 2025</p>

            <div className="bg-white rounded-lg shadow-lg p-8 space-y-8">
              <section>
                <h2 className="text-2xl font-semibold mb-4">1. Acceptance of Terms</h2>
                <p className="text-gray-700 mb-4">
                  By accessing and using the Saral Calc website (saralcalc.online), you accept and agree to be
                  bound by the terms and provision of this agreement.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-4">2. Use LICense</h2>
                <p className="text-gray-700 mb-4">
                  Permission is granted to temporarily download one copy of the materials on Saral Calc's website
                  for personal, non-commercial transitory viewing only.
                </p>
                <p className="text-gray-700 mb-4">
                  This license shall automatically terminate if you violate any of these restrictions.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-4">3. Calculator Usage</h2>
                <p className="text-gray-700 mb-4">
                  Our LIC calculators are provided free of charge for educational and informational purposes. By using
                  our calculators, you agree that:
                </p>
                <ul className="list-disc pl-6 text-gray-700 mb-4">
                  <li>You will use them for legitimate purposes only</li>
                  <li>You understand the calculations are estimates</li>
                  <li>You will not attempt to reverse engineer or copy our algorithms</li>
                  <li>You will not use automated tools to access our calculators</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-4">4. User Conduct</h2>
                <p className="text-gray-700 mb-4">You agree not to:</p>
                <ul className="list-disc pl-6 text-gray-700 mb-4">
                  <li>Use the website for any unlawful purpose</li>
                  <li>Attempt to gain unauthorized access to our systems</li>
                  <li>Interfere with or disrupt the website's functionality</li>
                  <li>Upload malicious code or content</li>
                  <li>Violate any applicable laws or regulations</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-4">5. Intellectual Property</h2>
                <p className="text-gray-700 mb-4">
                  The content, design, and functionality of this website are owned by Saral Calc and are protected
                  by copyright and other intellectual property laws.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-4">6. Privacy Policy</h2>
                <p className="text-gray-700 mb-4">
                  Your privacy is important to us. Please review our Privacy Policy, which also governs your use of the
                  website.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-4">7. Disclaimers</h2>
                <p className="text-gray-700 mb-4">
                  The information on this website is provided on an 'as is' basis. To the fullest extent permitted by
                  law, Saral Calc excludes all representations, warranties, and conditions.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-4">8. Limitations</h2>
                <p className="text-gray-700 mb-4">
                  Saral Calc shall not be liable for any damages arising out of the use or inability to use the
                  materials on this website.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-4">9. Revisions</h2>
                <p className="text-gray-700 mb-4">
                  Saral Calc may revise these terms of service at any time without notice. By using this website,
                  you agree to be bound by the current version of these terms.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-4">10. Governing Law</h2>
                <p className="text-gray-700 mb-4">
                  These terms and conditions are governed by and construed in accordance with the laws of India, and you
                  irrevocably submit to the exclusive jurisdiction of the courts in Mumbai, Maharashtra.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-4">11. Contact Information</h2>
                <p className="text-gray-700 mb-4">
                  If you have any questions about these Terms & Conditions, please contact us:
                </p>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <p className="text-gray-700">
                    <strong>Email:</strong> legal@saralcalc.online                    <br />
                    <strong>Address:</strong> Saral Calc Technologies, 123 Financial District, Mumbai, Maharashtra
                    400001, India
                  </p>
                </div>
              </section>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
