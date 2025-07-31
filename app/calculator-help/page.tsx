import Header from "@/components/Header"
import Footer from "@/components/Footer"
import type { Metadata } from "next"

export const metadata: Metadata = {
    title: "How to Use LIC Calculators | Saral Calc Help Guide",
    description: "A beginner-friendly guide to using LIC maturity and surrender value calculators on Saral Calc.",
    alternates: { canonical: "https://saralcalc.online/calculator-help" },
}

export default function CalculatorHelp() {
    return (
        <>
            <Header />
            <main className="bg-white min-h-screen py-12">
                <div className="container max-w-4xl mx-auto px-4">
                    <h1 className="text-4xl font-bold text-center mb-8">LIC Calculator Help Guide</h1>
                    <p className="text-gray-600 mb-10 text-center">
                        Not sure how to use the calculator? Let me walk you through it step by step.
                    </p>

                    <div className="space-y-8">
                        <div>
                            <h2 className="text-2xl font-semibold text-gray-800">Step 1: Choose the Calculator</h2>
                            <p className="text-gray-600 mt-2">
                                First, pick the LIC calculator you need — Jeevan Saral, New Endowment Plan, or Surrender Value calculator.
                            </p>
                        </div>

                        <div>
                            <h2 className="text-2xl font-semibold text-gray-800">Step 2: Fill in Your Details</h2>
                            <p className="text-gray-600 mt-2">
                                You'll need to enter a few basic details like your age, sum assured, and premium. Don’t worry — it’s all offline, and your data isn't saved.
                            </p>
                        </div>

                        <div>
                            <h2 className="text-2xl font-semibold text-gray-800">Step 3: Click "Calculate"</h2>
                            <p className="text-gray-600 mt-2">
                                After entering the details, hit the "Calculate" button. You’ll instantly see your estimated maturity or surrender value.
                            </p>
                        </div>

                        <div>
                            <h2 className="text-2xl font-semibold text-gray-800">Need Help?</h2>
                            <p className="text-gray-600 mt-2">
                                If you're stuck or unsure about something, don’t hesitate to <a href="/contact" className="text-blue-600 underline">reach out to me here</a>. I’m happy to guide you.
                            </p>
                        </div>
                    </div>
                </div>
            </main>
            <Footer />
        </>
    )
}
