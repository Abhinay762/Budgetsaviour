import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "75% Attendance Calculator - Saral Calc",
  description:
    "Calculate your required attendance percentage to meet the 75% criteria for college or school. Stay on track with your academic attendance using our online tool.",
  keywords: [
    "attendance calculator",
    "75 percent attendance",
    "college attendance rules",
    "school attendance tracker",
    "academic attendance calculator",
    "classes to attend",
    "classes to miss",
    "student tools",
  ],
  openGraph: {
    title: "75% Attendance Calculator - Saral Calc",
    description:
      "Easily calculate your attendance status and plan your classes to meet the required percentage for academic eligibility.",
    url: "https://saralcalc.online/tools/75-percent-attendance-calculator",
    siteName: "Saral Calc",
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "75% Attendance Calculator - Saral Calc",
    description:
      "Never fall short on attendance again! Use our calculator to manage your academic attendance effectively.",
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
    canonical: "https://saralcalc.online/tools/75-percent-attendance-calculator",
  },
  metadataBase: new URL("https://saralcalc.online"),
}
