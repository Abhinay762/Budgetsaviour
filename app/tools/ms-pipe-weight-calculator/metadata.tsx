import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "MS Pipe Weight Calculator - Saral Calc",
  description:
    "Calculate the weight of Mild Steel (MS) pipes quickly and accurately using our online calculator. Essential for construction, fabrication, and engineering projects.",
  keywords: [
    "MS pipe weight calculator",
    "mild steel pipe weight",
    "pipe weight formula",
    "steel pipe weight calculation",
    "construction calculator",
    "fabrication tools",
    "engineering calculator",
    "pipe dimensions",
  ],
  openGraph: {
    title: "MS Pipe Weight Calculator - Saral Calc",
    description:
      "Easily determine the weight of MS pipes based on OD, wall thickness, and length. A precise tool for material estimation.",
    url: "https://saralcalc.online/tools/ms-pipe-weight-calculator",
    siteName: "Saral Calc",
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "MS Pipe Weight Calculator - Saral Calc",
    description:
      "Simplify your pipe weight calculations. Get accurate results for Mild Steel pipes with our online tool.",
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
    canonical: "https://saralcalc.online/tools/ms-pipe-weight-calculator",
  },
  metadataBase: new URL("https://saralcalc.online"),
}
