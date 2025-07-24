import Header from "@/components/Header"
import Footer from "@/components/Footer"
import { Mail, Phone, MapPin, Clock } from "lucide-react"

export const metadata = {
  title: "Contact Us - LIC Plan Calculator | Budget Saviour",
  description:
    "Get in touch with Budget Saviour for support, feedback, or questions about our LIC calculators and financial planning tools.",
}

export default function ContactPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-gray-50">
        <div className="container mx-auto px-4 py-12">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl font-bold text-center mb-8">Contact Us</h1>
            <p className="text-xl text-gray-600 text-center mb-12">
              Have questions about our calculators or need support? We're here to help!
            </p>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Contact Form */}
              <div className="bg-white rounded-lg shadow-lg p-8">
                <h2 className="text-2xl font-semibold mb-6">Send us a Message</h2>
                <form className="space-y-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Full Name *</label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="Enter your full name"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Email Address *</label>
                    <input
                      type="email"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="Enter your email address"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Subject *</label>
                    <select className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent">
                      <option value="">Select a subject</option>
                      <option value="calculator-support">Calculator Support</option>
                      <option value="technical-issue">Technical Issue</option>
                      <option value="feedback">Feedback</option>
                      <option value="partnership">Partnership</option>
                      <option value="other">Other</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Message *</label>
                    <textarea
                      rows={6}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="Enter your message here..."
                      required
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-blue-600 text-white py-3 px-6 rounded-lg hover:bg-blue-700 transition-colors font-semibold"
                  >
                    Send Message
                  </button>
                </form>
              </div>

              {/* Contact Information */}
              <div className="space-y-8">
                <div className="bg-white rounded-lg shadow-lg p-8">
                  <h2 className="text-2xl font-semibold mb-6">Get in Touch</h2>

                  <div className="space-y-6">
                    <div className="flex items-start">
                      <Mail className="w-6 h-6 text-blue-600 mt-1 mr-4" />
                      <div>
                        <h3 className="font-semibold text-gray-800">Email</h3>
                        <p className="text-gray-600">budgetsaviour7@gmail.com</p>

                      </div>
                    </div>


                    <div className="flex items-start">
                      <MapPin className="w-6 h-6 text-blue-600 mt-1 mr-4" />
                      <div>
                        <h3 className="font-semibold text-gray-800">Address</h3>
                        <p className="text-gray-600">
                          Pune , India
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start">
                      <Clock className="w-6 h-6 text-blue-600 mt-1 mr-4" />
                      <div>
                        <h3 className="font-semibold text-gray-800">Business Hours</h3>
                        <p className="text-gray-600">Monday - Friday: 9:00 AM - 6:00 PM</p>
                        <p className="text-gray-600">Saturday: 10:00 AM - 4:00 PM</p>
                        <p className="text-gray-600">Sunday: Closed</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-white rounded-lg shadow-lg p-8">
                  <h2 className="text-2xl font-semibold mb-4">Quick Support</h2>
                  <p className="text-gray-600 mb-4">
                    For immediate assistance with our calculators, check out our FAQ section or browse our help
                    documentation.
                  </p>
                  <div className="space-y-3">
                    <a href="#" className="block text-blue-600 hover:text-blue-800 font-medium">
                      → Frequently Asked Questions
                    </a>
                    <a href="#" className="block text-blue-600 hover:text-blue-800 font-medium">
                      → Calculator Help Guide
                    </a>
                    <a href="#" className="block text-blue-600 hover:text-blue-800 font-medium">
                      → Technical Support
                    </a>
                  </div>
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
