import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "BMI Calculator - Saral Calc",
  description:
    "Calculate your Body Mass Index (BMI) to assess your weight status. Understand if you are underweight, normal weight, overweight, or obese with our online tool.",
  keywords: [
    "BMI calculator",
    "Body Mass Index",
    "healthy weight calculator",
    "underweight",
    "normal weight",
    "overweight",
    "obesity",
    "health calculator",
    "weight status",
  ],
  openGraph: {
    title: "BMI Calculator - Saral Calc",
    description:
      "Easily calculate your BMI using height and weight. Get instant results and understand your weight category for better health planning.",
    url: "https://saralcalc.online/tools/bmi-calculator",
    siteName: "Saral Calc",
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "BMI Calculator - Saral Calc",
    description:
      "Check your BMI quickly and accurately. Our calculator helps you assess your weight status for a healthier lifestyle.",
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
    canonical: "https://saralcalc.online/tools/bmi-calculator",
  },
  metadataBase: new URL("https://saralcalc.online"),
}
