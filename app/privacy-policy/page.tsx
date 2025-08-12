import Header from "@/components/Header"
import Footer from "@/components/Footer"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Privacy Policy – Saral Calc",
  description:
    "Read Saral Calc's Privacy Policy to understand how we handle your data while using our LIC maturity calculators. Transparent and AdSense-friendly.",
  keywords: [
    "Saral Calc privacy policy",
    "LIC calculator privacy",
    "data collection policy",
    "cookie policy",
    "Google AdSense compliance",
    "personal data protection",
  ],
  openGraph: {
    title: "Privacy Policy – Saral Calc",
    description:
      "Saral Calc’s Privacy Policy explains how your data is collected, used, and protected while using LIC Jeevan Saral Maturity Calculator tools.",
    url: "https://saralcalc.online/privacy-policy",
    siteName: "Saral Calc",
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "Privacy Policy – Saral Calc",
    description:
      "Learn how Saral Calc protects your personal data while using our LIC maturity calculators.",
    site: "@saralcalc",
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "https://saralcalc.online/privacy-policy",
  },
}

export default function PrivacyPolicy() {
  return (
    <>
      <Header />
      <main className="bg-white text-gray-800 min-h-screen py-14">
        <section className="container mx-auto px-4 max-w-4xl">
          <div className="bg-white border rounded-lg shadow p-6 md:p-10">
            <h1 className="text-4xl font-bold mb-6 text-center text-gray-900">Privacy Policy</h1>
            <p className="text-right text-sm mb-6 text-gray-500 italic">Last updated: July 31, 2025</p>

            <p className="mb-4">
              This Privacy Policy describes Our policies and procedures on the collection, use and disclosure of Your information when You use the Service and tells You about Your privacy rights and how the law protects You.
            </p>
            <p className="mb-6">
              We use Your Personal data to provide and improve the Service. By using the Service, You agree to the collection and use of information in accordance with this Privacy Policy.
            </p>

            <h2 className="text-2xl font-bold mt-10 mb-4">Interpretation and Definitions</h2>

            <h3 className="text-xl font-semibold mb-2">Interpretation</h3>
            <p className="mb-4">
              The words of which the initial letter is capitalized have meanings defined under the following conditions.
              The following definitions shall have the same meaning regardless of whether they appear in singular or in plural.
            </p>

            <h3 className="text-xl font-semibold mb-2">Definitions</h3>
            <p>For the purposes of this Privacy Policy:</p>
            <ul className="list-disc pl-6 space-y-2 mb-6 text-gray-700">
              <li><strong>Account</strong> means a unique account created for You to access our Service or parts of our Service.</li>
              <li><strong>Affiliate</strong> means an entity that controls, is controlled by or is under common control with a party.</li>
              <li><strong>Company</strong> (referred to as either "the Company", "We", "Us" or "Our") refers to Saral Calc.</li>
              <li><strong>Cookies</strong> are small files that are placed on Your device by a website.</li>
              <li><strong>Country</strong> refers to: Maharashtra, India.</li>
              <li><strong>Device</strong> means any device that can access the Service such as a computer, cellphone or tablet.</li>
              <li><strong>Personal Data</strong> is any information that relates to an identified or identifiable individual.</li>
              <li><strong>Service</strong> refers to the Website.</li>
              <li><strong>Service Provider</strong> means any natural or legal person who processes the data on behalf of the Company.</li>
              <li><strong>Usage Data</strong> refers to data collected automatically from the Service infrastructure.</li>
              <li><strong>Website</strong> refers to Saral Calc, accessible from <span className="break-words text-blue-600">https://saralcalc.online</span></li>
              <li><strong>You</strong> means the individual accessing or using the Service, or the company, or other legal entity on behalf of which such individual is accessing or using the Service.</li>
            </ul>

            <h2 className="text-2xl font-bold mt-10 mb-4">Collecting and Using Your Personal Data</h2>

            <h3 className="text-xl font-semibold mb-2">Types of Data Collected</h3>

            <p className="mb-2 font-semibold">Personal Data</p>
            <p className="mb-4">
              While using Our Service, We may ask You to provide Us with certain personally identifiable information that can be used to contact or identify You. Personally identifiable information may include, but is not limited to:
            </p>
            <ul className="list-disc pl-6 mb-4 text-gray-700">
              <li>Usage Data</li>
            </ul>

            <p className="mb-2 font-semibold">Usage Data</p>
            <p className="mb-4">
              Usage Data is collected automatically when using the Service and may include information such as IP address, browser type, device information, and usage statistics.
            </p>

            <h3 className="text-xl font-semibold mb-2">Tracking Technologies and Cookies</h3>
            <p className="mb-4">
              We use Cookies and similar tracking technologies to improve Our Service. You can instruct Your browser to refuse all Cookies or to indicate when a Cookie is being sent.
              For more information about the cookies we use and your choices, please review our Cookies Policy.
            </p>
            <ul className="list-disc pl-6 mb-6 text-gray-700">
              <li><strong>Necessary / Essential Cookies:</strong> Essential for website features.</li>
              <li><strong>Cookies Policy / Notice Acceptance Cookies:</strong> Identifies if users accepted cookies.</li>
              <li><strong>Functionality Cookies:</strong> Remembers choices for a personalized experience.</li>
            </ul>

            <h3 className="text-xl font-semibold mb-2">Use of Your Personal Data</h3>
            <ul className="list-disc pl-6 mb-6 text-gray-700">
              <li>To provide and maintain our Service</li>
              <li>To manage Your Account</li>
              <li>For the performance of a contract</li>
              <li>To contact You with updates or useful information</li>
              <li>To provide You with news, offers or general information (unless opted out)</li>
              <li>To manage Your requests</li>
              <li>For business transfers and other business purposes</li>
              <li>For analytics, improvement, and other purposes as described</li>
            </ul>

            <h3 className="text-xl font-semibold mb-2">We may share your personal information in these situations:</h3>
            <ul className="list-disc pl-6 mb-6 text-gray-700">
              <li>With service providers</li>
              <li>For business transfers</li>
              <li>With affiliates or business partners</li>
              <li>With other users, if you interact in public areas</li>
              <li>With your consent</li>
            </ul>

            <h3 className="text-xl font-semibold mb-2">Retention of Your Personal Data</h3>
            <p className="mb-4">
              We retain Your Personal Data only as long as necessary for the purposes outlined in this policy, to comply with legal obligations, resolve disputes, and enforce policies.
            </p>

            <h3 className="text-xl font-semibold mb-2">Transfer of Your Personal Data</h3>
            <p className="mb-4">
              Your information may be transferred to — and maintained on — computers outside of Your jurisdiction. By using the Service, You consent to that transfer.
            </p>

            <h3 className="text-xl font-semibold mb-2">Delete Your Personal Data</h3>
            <p className="mb-4">
              You can delete certain data yourself or contact us to request deletion of any personal data We hold about you, subject to legal obligations.
            </p>

            <h3 className="text-xl font-semibold mb-2">Disclosure of Your Personal Data</h3>

            <p className="mb-2 font-semibold">Business Transactions</p>
            <p className="mb-2">
              If the Company is involved in a merger, acquisition or asset sale, Your Personal Data may be transferred—notice will be given.
            </p>

            <p className="mb-2 font-semibold">Law enforcement and Other Legal Requirements</p>
            <ul className="list-disc pl-6 mb-6 text-gray-700">
              <li>Comply with legal obligations</li>
              <li>Protect our rights and property</li>
              <li>Prevent or investigate possible wrongdoing</li>
              <li>Protect personal safety of Users/public</li>
              <li>Protect against legal liability</li>
            </ul>

            <h3 className="text-xl font-semibold mb-2">Security of Your Personal Data</h3>
            <p className="mb-4">
              We use commercially acceptable means to protect Your Personal Data, but cannot guarantee its absolute security.
            </p>

            <h2 className="text-2xl font-bold mt-10 mb-3">Children's Privacy</h2>
            <p className="mb-4">
              Our Service does not address anyone under the age of 13. If you become aware your child has provided Us with Personal Data, please contact Us, and We will take necessary steps to remove such information.
            </p>

            <h2 className="text-2xl font-bold mt-10 mb-3">Links to Other Websites</h2>
            <p className="mb-4">
              Our Service may contain links to other websites. We are not responsible for the privacy policies or content of third-party sites.
            </p>

            <h2 className="text-2xl font-bold mt-10 mb-3">Changes to This Privacy Policy</h2>
            <p className="mb-4">
              We may update Our Privacy Policy from time to time. We will post the changes on this page and update the "Last updated" date. You are advised to review this Privacy Policy periodically for updates.
            </p>

            <h2 className="text-2xl font-bold mt-10 mb-3">Contact Us</h2>
            <p className="mb-2">If you have any questions about this Privacy Policy, you can contact us:</p>
            <ul className="pl-6 text-blue-600 font-mono mb-4">
              <li>By email: saralcalc@gmail.com</li>
              <li>By visiting: https://saralcalc.online/contact</li>
            </ul>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
