import type React from "react"
import type { Metadata } from "next"

export const metadata: Metadata = {
    title: "LIC Maturity Calculators | Jeevan Saral, Endowment Plans - SaralCalc",
    description:
        "Use SaralCalc's LIC Maturity Calculators to estimate returns for Jeevan Saral Plan 165 and other policies. Fast, accurate, and 100% free tools for LIC policyholders.",
    keywords: [
        "LIC maturity calculator",
        "LIC Jeevan Saral Plan 165 calculator",
        "LIC policy calculator",
        "LIC return calculator",
        "LIC maturity value estimator",
        "LIC plan calculator online",
        "LIC Jeevan Saral benefits",
    ],
    openGraph: {
        title: "LIC Jeevan Saral Plan 165 Maturity Calculator | SaralCalc",
        description:
            "Instantly calculate your LIC Jeevan Saral Plan 165 maturity value. Get accurate bonus & return estimations with our free online tool.",
        url: "https://Saralcalc.online/maturity-calculator/lic-jeevan-saral-165",
        siteName: "SaralCalc",
        type: "website",
        images: [
            {
                url: "https://Saralcalc.online/images/lic-jeevan-saral-og.jpg",
                width: 1200,
                height: 630,
                alt: "LIC Jeevan Saral Plan 165 Maturity Calculator",
            },
        ],
    },
    twitter: {
        card: "summary_large_image",
        title: "LIC Jeevan Saral Plan 165 Maturity Calculator",
        description:
            "Try our Jeevan Saral 165 calculator to estimate your LIC maturity value with bonus and loyalty additions.",
        images: ["https://Saralcalc.online/images/lic-jeevan-saral-og.jpg"],
    },
    alternates: {
        canonical: "https://Saralcalc.online/maturity-calculator",
    },
    robots: {
        index: true,
        follow: true,
    },
}

export default function MaturityCalculatorLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return <div className="maturity-calculator-wrapper">{children}</div>
}
