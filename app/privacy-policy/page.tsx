import Header from "@/components/Header"
import Footer from "@/components/Footer"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Privacy Policy - Saral Calc Data Protection & User Privacy",
  description:
    "Saral Calc's Privacy Policy explains how we collect, use, and protect your data when using LIC calculators and financial planning tools. Your privacy matters.",
  keywords: [
    "Saral Calc privacy policy",
    "data protection",
    "user privacy",
    "LIC calculator privacy",
    "personal data policy",
    "cookie policy",
    "data security",
    "privacy protection",
    "user information policy",
    "Saral Calc data policy",
  ],
  openGraph: {
    title: "Privacy Policy - Saral Calc Data Protection",
    description:
      "Learn how Saral Calc protects your privacy and handles personal data when you use our LIC calculators and financial planning services.",
    url: "https://Saralcalc.online/privacy-policy",
    siteName: "Saral Calc",
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "Saral Calc Privacy Policy",
    description:
      "Our commitment to protecting your privacy while using LIC calculators and financial planning tools on Saral Calc.",
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
    canonical: "https://Saralcalc.online/privacy-policy",
  },
}

export default function PrivacyPolicyPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-gray-50">
        <div className="container mx-auto px-4 py-12">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl font-bold text-center mb-8">Privacy Policy</h1>
            <p className="text-center text-gray-600 mb-8">Last updated: January 2025</p>

            <div className="bg-white rounded-lg shadow-lg p-8 space-y-8">
              <section>
                <h2 className="text-2xl font-semibold mb-4">1. Introduction</h2>
                <p className="text-gray-700 mb-4">
                  Saral Calc ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy
                  explains how we collect, use, disclose, and safeguard your information when you visit our website
                  Saralcalc.online and use our LIC calculators.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-4">2. Information We Collect</h2>
                <h3 className="text-lg font-semibold mb-2">2.1 Information You Provide</h3>
                <p className="text-gray-700 mb-4">We may collect information you voluntarily provide, including:</p>
                <ul className="list-disc pl-6 text-gray-700 mb-4">
                  <li>Contact information (name, email address) when you contact us</li>
                  <li>Calculator inputs (policy details, premium amounts) for calculation purposes</li>
                  <li>Feedback and survey responses</li>
                </ul>

                <h3 className="text-lg font-semibold mb-2">2.2 Automatically Collected Information</h3>
                <p className="text-gray-700 mb-4">
                  We automatically collect certain information when you visit our website:
                </p>
                <ul className="list-disc pl-6 text-gray-700 mb-4">
                  <li>IP address and location data</li>
                  <li>Browser type and version</li>
                  <li>Pages visited and time spent on our site</li>
                  <li>Referring website information</li>
                  <li>Device information</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-4">3. How We Use Your Information</h2>
                <p className="text-gray-700 mb-4">We use the collected information for:</p>
                <ul className="list-disc pl-6 text-gray-700 mb-4">
                  <li>Providing and improving our calculator services</li>
                  <li>Responding to your inquiries and support requests</li>
                  <li>Analyzing website usage and performance</li>
                  <li>Sending important updates about our services</li>
                  <li>Complying with legal obligations</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-4">4. Calculator Data</h2>
                <p className="text-gray-700 mb-4">
                  <strong>Important:</strong> We do not store any personal financial information entered into our
                  calculators. All calculations are performed locally in your browser, and the data is not transmitted
                  to our servers or stored anywhere.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-4">5. Cookies and Tracking Technologies</h2>
                <p className="text-gray-700 mb-4">We use cookies and similar technologies to:</p>
                <ul className="list-disc pl-6 text-gray-700 mb-4">
                  <li>Remember your preferences</li>
                  <li>Analyze website traffic and usage patterns</li>
                  <li>Provide personalized content and advertisements</li>
                  <li>Improve our services</li>
                </ul>
                <p className="text-gray-700 mb-4">You can control cookies through your browser settings.</p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-4">6. Third-Party Services</h2>
                <p className="text-gray-700 mb-4">We use third-party services that may collect information:</p>
                <ul className="list-disc pl-6 text-gray-700 mb-4">
                  <li>
                    <strong>Google Analytics:</strong> For website analytics
                  </li>
                  <li>
                    <strong>Google AdSense:</strong> For displaying advertisements
                  </li>
                  <li>
                    <strong>Google Search Console:</strong> For search optimization
                  </li>
                </ul>
                <p className="text-gray-700 mb-4">
                  These services have their own privacy policies governing their use of information.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-4">7. Data Security</h2>
                <p className="text-gray-700 mb-4">
                  We implement appropriate security measures to protect your information against unauthorized access,
                  alteration, disclosure, or destruction. However, no method of transmission over the internet is 100%
                  secure.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-4">8. Your Rights</h2>
                <p className="text-gray-700 mb-4">You have the right to:</p>
                <ul className="list-disc pl-6 text-gray-700 mb-4">
                  <li>Access your personal information</li>
                  <li>Correct inaccurate information</li>
                  <li>Request deletion of your information</li>
                  <li>Opt-out of marketing communications</li>
                  <li>File a complaint with regulatory authorities</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-4">9. Children's Privacy</h2>
                <p className="text-gray-700 mb-4">
                  Our services are not intended for children under 13. We do not knowingly collect personal information
                  from children under 13.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-4">10. Changes to This Policy</h2>
                <p className="text-gray-700 mb-4">
                  We may update this Privacy Policy from time to time. We will notify you of any changes by posting the
                  new Privacy Policy on this page and updating the "Last updated" date.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-4">11. Contact Us</h2>
                <p className="text-gray-700 mb-4">
                  If you have any questions about this Privacy Policy, please contact us:
                </p>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <p className="text-gray-700">
                    <strong>Email:</strong> saralcalc@gmail.com
                    <br />
                    <strong>Address:</strong> Pune , Maharashtra
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
