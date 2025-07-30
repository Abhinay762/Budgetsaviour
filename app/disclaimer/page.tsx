import Header from "@/components/Header"
import Footer from "@/components/Footer"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Disclaimer - Saral Calc LIC Calculator Terms & Limitations",
  description:
    "Read Saral Calc's disclaimer regarding LIC calculator accuracy, policy estimates, and financial planning tools. Important terms for using our calculators.",
  keywords: [
    "Saral Calc disclaimer",
    "LIC calculator disclaimer",
    "policy calculator terms",
    "financial planning disclaimer",
    "LIC estimate limitations",
    "calculator accuracy terms",
    "insurance tool disclaimer",
    "Saral Calc terms",
    "LIC calculation limits",
    "policy planning disclaimer",
  ],
  openGraph: {
    title: "Disclaimer - Saral Calc LIC Calculator Terms",
    description:
      "Important disclaimer and terms regarding the use of Saral Calc's LIC calculators and financial planning tools. Read before using our services.",
    url: "https://saralcalc.online/disclaimer",
    siteName: "Saral Calc",
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "Saral Calc Disclaimer - Calculator Terms",
    description:
      "Read our disclaimer regarding LIC calculator accuracy and limitations before using Saral Calc's financial planning tools.",
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
    canonical: "https://saralcalc.online/disclaimer",
  },
}


export default function DisclaimerPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-gray-50">
        <div className="container mx-auto px-4 py-12">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl font-bold text-center mb-8">Disclaimer</h1>
            <p className="text-center text-gray-600 mb-8">Last updated: July 2025</p>

            <div className="bg-white rounded-lg shadow-lg p-8 space-y-8">
              <div className="bg-yellow-50 border-l-4 border-yellow-400 p-6 mb-8">
                <h2 className="text-xl font-semibold text-yellow-800 mb-2">Important Notice</h2>
                <p className="text-yellow-700">
                  The information and calculations provided on this website are for educational and informational
                  purposes only. They should not be considered as professional financial advice.
                </p>
              </div>

              <section>
                <h2 className="text-2xl font-semibold mb-4">1. General Information</h2>
                <p className="text-gray-700 mb-4">
                  Saral Calc provides LIC policy calculators and related financial tools. The information on this
                  website is provided on an "as is" basis. While we strive to provide accurate and up-to-date
                  information, we make no representations or warranties of any kind, express or implied, about the
                  completeness, accuracy, reliability, suitability, or availability of the information, products,
                  services, or related graphics contained on the website.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-4">2. Calculator Accuracy</h2>
                <p className="text-gray-700 mb-4">Our LIC calculators provide estimates based on:</p>
                <ul className="list-disc pl-6 text-gray-700 mb-4">
                  <li>Current bonus rates and policy terms</li>
                  <li>Standard calculation methodologies</li>
                  <li>Publicly available information about LIC policies</li>
                </ul>
                <p className="text-gray-700 mb-4">
                  <strong>Important:</strong> Actual maturity values, bonus rates, and policy benefits may vary
                  significantly from our calculations due to:
                </p>
                <ul className="list-disc pl-6 text-gray-700 mb-4">
                  <li>Changes in LIC's declared bonus rates</li>
                  <li>Policy-specific terms and conditions</li>
                  <li>Market conditions and regulatory changes</li>
                  <li>Individual policy variations</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-4">3. Not Financial Advice</h2>
                <p className="text-gray-700 mb-4">
                  The calculators and information provided on this website are not intended to constitute financial,
                  investment, tax, legal, or other professional advice. You should consult with qualified professionals
                  before making any financial decisions based on the information provided here.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-4">4. LIC Policy Terms</h2>
                <p className="text-gray-700 mb-4">
                  All LIC policies are subject to the terms and conditions specified in the respective policy documents.
                  For accurate information about:
                </p>
                <ul className="list-disc pl-6 text-gray-700 mb-4">
                  <li>Current bonus rates</li>
                  <li>Policy terms and conditions</li>
                  <li>Eligibility criteria</li>
                  <li>Premium calculations</li>
                  <li>Maturity benefits</li>
                </ul>
                <p className="text-gray-700 mb-4">
                  Please consult directly with LIC of India or authorized LIC agents.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-4">5. Third-Party Links</h2>
                <p className="text-gray-700 mb-4">
                  Our website may contain links to third-party websites. We have no control over the content, privacy
                  policies, or practices of these sites and accept no responsibility for them.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-4">6. Limitation of Liability</h2>
                <p className="text-gray-700 mb-4">
                  In no event shall Saral Calc, its owners, employees, or affiliates be liable for any direct,
                  indirect, incidental, special, consequential, or punitive damages arising out of your use of this
                  website or the information provided herein.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-4">7. Changes to Calculations</h2>
                <p className="text-gray-700 mb-4">
                  We reserve the right to modify, update, or discontinue our calculators and the methodologies used at
                  any time without prior notice. We recommend verifying all calculations with official LIC sources.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-4">8. User Responsibility</h2>
                <p className="text-gray-700 mb-4">Users are responsible for:</p>
                <ul className="list-disc pl-6 text-gray-700 mb-4">
                  <li>Verifying the accuracy of input data</li>
                  <li>Understanding the limitations of our calculations</li>
                  <li>Seeking professional advice for financial decisions</li>
                  <li>Checking with LIC for official policy information</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-4">9. Contact Information</h2>
                <p className="text-gray-700 mb-4">
                  If you have any questions about this disclaimer or our calculators, please contact us at:
                </p>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <p className="text-gray-700">
                    <strong>Email:</strong>{' '}
                    <a href="mailto:saralcalc@gmail.com" className="text-blue-600 underline">
                      saralcalc@gmail.com
                    </a>
                    <br />
                    <strong>Website:</strong>{' '}
                    <a href="https://saralcalc.online" target="_blank" rel="noopener noreferrer" className="text-blue-600 underline">
                      saralcalc.online                    </a>
                  </p>
                </div>
              </section>

              <div className="bg-red-50 border-l-4 border-red-400 p-6 mt-8">
                <h3 className="text-lg font-semibold text-red-800 mb-2">Final Reminder</h3>
                <p className="text-red-700">
                  Always consult with LIC of India or qualified financial advisors before making any insurance or
                  investment decisions. Our calculators are tools for estimation only and should not replace
                  professional advice.
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
