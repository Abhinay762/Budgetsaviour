import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "VTU CGPA & SGPA Calculator - Saral Calc",
  description:
    "Calculate your VTU CGPA and SGPA quickly and accurately. Essential tool for Visvesvaraya Technological University engineering students to track academic performance.",
  keywords: [
    "VTU CGPA calculator",
    "VTU SGPA calculator",
    "Visvesvaraya Technological University",
    "engineering student tools",
    "grade point average",
    "academic performance calculator",
    "VTU grades",
    "VTU results",
  ],
  openGraph: {
    title: "VTU CGPA & SGPA Calculator - Saral Calc",
    description:
      "Easily calculate your SGPA and CGPA for VTU semesters. A must-have tool for all VTU engineering students.",
    url: "https://saralcalc.online/tools/vtu-cgpa-sgpa-calculator",
    siteName: "Saral Calc",
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "VTU CGPA & SGPA Calculator - Saral Calc",
    description:
      "Track your VTU academic progress with our precise SGPA and CGPA calculator. Get instant results for your engineering grades.",
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
    canonical: "https://saralcalc.online/tools/vtu-cgpa-sgpa-calculator",
  },
  metadataBase: new URL("https://saralcalc.online"),
}
