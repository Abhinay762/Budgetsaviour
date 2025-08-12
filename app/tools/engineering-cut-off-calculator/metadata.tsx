import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Engineering Cut Off Calculator - Saral Calc",
  description:
    "Predict your chances of admission to top engineering colleges in India with our Engineering Cut Off Calculator. Based on hypothetical data for JEE Main and State CET.",
  keywords: [
    "engineering cut off calculator",
    "JEE Main cut off",
    "State CET cut off",
    "engineering admission predictor",
    "college cut off marks",
    "engineering entrance exams",
    "admission chances",
    "engineering colleges India",
  ],
  openGraph: {
    title: "Engineering Cut Off Calculator - Saral Calc",
    description:
      "Estimate your engineering college admission prospects using our cut-off calculator. Understand hypothetical eligibility for various exams and categories.",
    url: "https://saralcalc.online/tools/engineering-cut-off-calculator",
    siteName: "Saral Calc",
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Engineering Cut Off Calculator - Saral Calc",
    description:
      "Check your engineering admission eligibility with our easy-to-use cut-off calculator. Plan your college applications effectively.",
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
    canonical: "https://saralcalc.online/tools/engineering-cut-off-calculator",
  },
  metadataBase: new URL("https://saralcalc.online"),
}
