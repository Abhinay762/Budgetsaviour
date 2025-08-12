import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Cash Denomination Calculator - Saral Calc",
  description:
    "Quickly count and tally your cash by denominations with our free online calculator. Ideal for shopkeepers, bankers, and cash handlers.",
  keywords: [
    "cash denomination calculator",
    "money counter",
    "currency calculator",
    "cash tally",
    "Indian Rupee denominations",
    "cash management tool",
    "shopkeeper calculator",
    "banker tool",
  ],
  openGraph: {
    title: "Cash Denomination Calculator - Saral Calc",
    description:
      "Simplify cash counting and reconciliation. Input note and coin counts to get an instant total amount.",
    url: "https://saralcalc.online/tools/cash-denomination-calculator",
    siteName: "Saral Calc",
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Cash Denomination Calculator - Saral Calc",
    description:
      "Accurately count your cash with our easy-to-use denomination calculator. Perfect for daily cash handling.",
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
    canonical: "https://saralcalc.online/tools/cash-denomination-calculator",
  },
  metadataBase: new URL("https://saralcalc.online"),
}
