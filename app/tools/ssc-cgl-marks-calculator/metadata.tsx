import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "SSC CGL Marks Calculator - Saral Calc",
  description:
    "Estimate your SSC CGL exam marks with our online calculator. Get an idea of your performance and potential rank based on correct and incorrect answers.",
  keywords: [
    "SSC CGL marks calculator",
    "SSC CGL score predictor",
    "Staff Selection Commission",
    "Combined Graduate Level exam",
    "SSC CGL marking scheme",
    "negative marking calculator",
    "exam score estimator",
    "government job exams",
  ],
  openGraph: {
    title: "SSC CGL Marks Calculator - Saral Calc",
    description:
      "Calculate your estimated score for the SSC CGL exam. Input your correct and incorrect answers to get instant results.",
    url: "https://saralcalc.online/tools/ssc-cgl-marks-calculator",
    siteName: "Saral Calc",
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "SSC CGL Marks Calculator - Saral Calc",
    description:
      "Assess your SSC CGL performance accurately. Our calculator helps you estimate your marks with negative marking.",
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
    canonical: "https://saralcalc.online/tools/ssc-cgl-marks-calculator",
  },
  metadataBase: new URL("https://saralcalc.online"),
}
