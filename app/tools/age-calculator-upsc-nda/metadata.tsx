import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Age Calculator for UPSC/NDA - Saral Calc",
  description:
    "Determine your age eligibility for UPSC and NDA examinations with our precise online age calculator. Ensure you meet the criteria for your dream government job.",
  keywords: [
    "age calculator UPSC",
    "age calculator NDA",
    "UPSC eligibility",
    "NDA eligibility",
    "government job age limit",
    "age calculation for exams",
    "competitive exam age criteria",
    "date of birth calculator",
  ],
  openGraph: {
    title: "Age Calculator for UPSC/NDA - Saral Calc",
    description:
      "Quickly calculate your age on a specific cut-off date for UPSC and NDA exams. Verify your eligibility with ease.",
    url: "https://saralcalc.online/tools/age-calculator-upsc-nda",
    siteName: "Saral Calc",
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Age Calculator for UPSC/NDA - Saral Calc",
    description:
      "Don't miss out on your dream job due to age limits. Use our calculator to check your UPSC/NDA age eligibility.",
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
    canonical: "https://saralcalc.online/tools/age-calculator-upsc-nda",
  },
  metadataBase: new URL("https://saralcalc.online"),
}
