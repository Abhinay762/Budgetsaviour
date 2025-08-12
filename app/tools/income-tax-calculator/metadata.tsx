import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Income Tax Calculator AY 2024-25 - Saral Calc",
  description:
    "Calculate your income tax for Assessment Year 2024-25 (Financial Year 2023-24) in India. Compare new vs old tax regimes and plan your finances effectively.",
  keywords: [
    "income tax calculator",
    "AY 2024-25",
    "FY 2023-24",
    "new tax regime",
    "old tax regime",
    "income tax India",
    "tax planning",
    "income tax slabs",
    "Section 87A rebate",
    "health and education cess",
  ],
  openGraph: {
    title: "Income Tax Calculator AY 2024-25 - Saral Calc",
    description:
      "Use our free online income tax calculator for AY 2024-25 to estimate your tax liability under both new and old tax regimes.",
    url: "https://saralcalc.online/tools/income-tax-calculator",
    siteName: "Saral Calc",
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Income Tax Calculator AY 2024-25 - Saral Calc",
    description:
      "Simplify your tax calculations for AY 2024-25. Compare tax regimes and plan your finances with Saral Calc's Income Tax Calculator.",
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
    canonical: "https://saralcalc.online/tools/income-tax-calculator",
  },
  metadataBase: new URL("https://saralcalc.online"),
}
