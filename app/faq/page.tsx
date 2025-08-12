import Header from "@/components/Header"
import Footer from "@/components/Footer"
import type { Metadata } from "next"

export const metadata: Metadata = {
    title: "Frequently Asked Questions | Saral Calc",
    description: "Answers to common questions about LIC maturity calculators, policy planning tools, and how Saral Calc works.",
    alternates: { canonical: "https://saralcalc.online/faq" },
}

export default function FAQPage() {
    return (
        <>
            <Header />
            <main className="bg-gray-50 min-h-screen py-12">
                <div className="container max-w-4xl mx-auto px-4">
                    <h1 className="text-4xl font-bold text-center mb-8">Frequently Asked Questions</h1>
                    <p className="text-gray-600 mb-10 text-center">
                        Here's a list of the most common questions we get from users like you.
                    </p>

                    <div className="space-y-8">
                        <div>
                            <h2 className="text-2xl font-semibold text-gray-800">How does the Jeevan Saral Maturity Calculator work?</h2>
                            <p className="text-gray-600 mt-2">
                                Great question! I built this tool to help you estimate your maturity value based on your age, premium, and policy term. It uses the same formula LIC uses, including loyalty additions and current bonus rates (when available).
                            </p>
                        </div>

                        <div>
                            <h2 className="text-2xl font-semibold text-gray-800">Is the calculator result 100% accurate?</h2>
                            <p className="text-gray-600 mt-2">
                                While we try to be as accurate as possible, the final amount may differ slightly depending on LIC's actual declared bonuses. Think of this as a reliable estimate — not a legal guarantee.
                            </p>
                        </div>

                        <div>
                            <h2 className="text-2xl font-semibold text-gray-800">Is my data stored anywhere?</h2>
                            <p className="text-gray-600 mt-2">
                                No, never. I don’t store any personal data or inputs from the calculator. You can use Saral Calc anonymously and safely.
                            </p>
                        </div>

                        <div>
                            <h2 className="text-2xl font-semibold text-gray-800">What if I need help with a specific policy?</h2>
                            <p className="text-gray-600 mt-2">
                                You can always reach out to us on the <a href="/contact" className="text-blue-600 underline">Contact</a> page. I’ll try my best to help you with your specific LIC policy or direct you to the right source.
                            </p>
                        </div>
                    </div>
                </div>
            </main>
            <Footer />
        </>
    )
}
