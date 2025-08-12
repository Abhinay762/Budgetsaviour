import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Mail, MapPin, Clock } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Saral Calc – LIC Calculator Support & Policy Planning Help",
  description:
    "Need assistance with LIC maturity calculations or policy planning? Contact Saral Calc for expert help, quick support and guidance on calculator tools.",
  keywords: [
    "Saral Calc contact",
    "LIC calculator support",
    "LIC policy planning",
    "calculator assistance",
    "Saral Calc help",
    "LIC maturity calculator",
    "customer support",
    "insurance planning support",
  ],
  openGraph: {
    title: "Contact Saral Calc – LIC Calculator Support Team",
    description:
      "Get expert assistance on LIC Jeevan Saral maturity calculations and policy support. Contact Saral Calc for fast and reliable help.",
    url: "https://saralcalc.online/contact",
    siteName: "Saral Calc",
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: "https://saralcalc.online/images/contact-support-og.jpg",
        width: 1200,
        height: 630,
        alt: "Contact Saral Calc Support Team",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact Saral Calc – LIC Calculation Help",
    description:
      "Need help with LIC maturity calculations or policy-related queries? Contact Saral Calc support for expert guidance.",
    site: "@saralcalc",
    images: ["https://saralcalc.online/images/contact-support-og.jpg"],
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
    canonical: "https://saralcalc.online/contact",
  },
};

export default function ContactPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-gray-50">
        <section className="container mx-auto px-4 py-16 max-w-5xl">
          <div className="bg-white rounded-3xl shadow-lg p-10">
            <h1 className="text-4xl font-bold text-center mb-4">Get in Touch</h1>
            <p className="text-lg text-center text-gray-600 mb-10">
              Whether you're unsure about your policy's maturity amount or just need help using our calculator, we're here for you.
            </p>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
              {/* Contact Form */}
              <div className="bg-gray-50 rounded-2xl border border-gray-200 p-6 shadow-sm">
                <h2 className="text-2xl font-semibold mb-6">Send Us a Message</h2>
                <form className="space-y-5">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Full Name *</label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:outline-none"
                      placeholder="Your name"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Email Address *</label>
                    <input
                      type="email"
                      className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:outline-none"
                      placeholder="you@example.com"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Subject *</label>
                    <select
                      className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:outline-none"
                      required
                    >
                      <option value="">Choose a topic</option>
                      <option value="calculator-support">Calculator Support</option>
                      <option value="technical-issue">Technical Issue</option>
                      <option value="feedback">Feedback</option>
                      <option value="partnership">Partnership Inquiry</option>
                      <option value="other">Other</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Message *</label>
                    <textarea
                      rows={5}
                      className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:outline-none"
                      placeholder="Write your message here..."
                      required
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-blue-600 text-white py-3 px-6 rounded-xl hover:bg-blue-700 transition"
                  >
                    Send Message
                  </button>
                </form>
              </div>

              {/* Contact Info & Links */}
              <div className="space-y-8">
                <div className="bg-gray-50 rounded-2xl border border-gray-200 p-6 shadow-sm">
                  <h2 className="text-2xl font-semibold mb-5">Contact Details</h2>
                  <div className="space-y-5 text-sm text-gray-700">
                    <div className="flex items-start">
                      <Mail className="w-5 h-5 text-blue-600 mt-1 mr-3" />
                      <div>
                        <h3 className="font-semibold">Email</h3>
                        <a
                          href="mailto:saralcalc@gmail.com"
                          className="text-blue-600 hover:underline"
                        >
                          saralcalc@gmail.com
                        </a>
                      </div>
                    </div>

                    <div className="flex items-start">
                      <MapPin className="w-5 h-5 text-blue-600 mt-1 mr-3" />
                      <div>
                        <h3 className="font-semibold">Address</h3>
                        <p>Pune, Maharashtra, India</p>
                      </div>
                    </div>

                    <div className="flex items-start">
                      <Clock className="w-5 h-5 text-blue-600 mt-1 mr-3" />
                      <div>
                        <h3 className="font-semibold">Working Hours</h3>
                        <p>Mon – Fri: 9:00 AM – 6:00 PM</p>
                        <p>Sat: 10:00 AM – 4:00 PM</p>
                        <p>Sunday: Closed</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-gray-50 rounded-2xl border border-gray-200 p-6 shadow-sm">
                  <h2 className="text-2xl font-semibold mb-4">Helpful Links</h2>
                  <p className="text-sm text-gray-600 mb-4">
                    Need answers fast? Check these out:
                  </p>
                  <ul className="space-y-2 text-blue-600 font-medium">
                    <li>
                      <a href="/faq" className="hover:underline">→ Frequently Asked Questions</a>
                    </li>
                    <li>
                      <a href="/calculator-help" className="hover:underline">→ Calculator Help Guide</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
