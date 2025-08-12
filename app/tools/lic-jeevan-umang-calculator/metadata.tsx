import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "LIC Jeevan Umang Calculator (Plan 945) - Saral Calc",
  description:
    "Estimate maturity and annual survival benefits for LIC Jeevan Umang (Plan 945) policy. Plan your whole life insurance with our online calculator.",
  keywords: [
    "LIC Jeevan Umang calculator",
    "LIC Plan 945",
    "Jeevan Umang maturity calculator",
    "LIC policy benefits",
    "whole life insurance India",
    "LIC bonus rates",
    "LIC premium paying term",
    "LIC survival benefit",
  ],
  openGraph: {
    title: "LIC Jeevan Umang Calculator (Plan 945) - Saral Calc",
    description:
      "Get an estimated calculation of your LIC Jeevan Umang policy's maturity and annual benefits. Understand your whole life insurance plan.",
    url: "https://saralcalc.online/tools/lic-jeevan-umang-calculator",
    siteName: "Saral Calc",
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "LIC Jeevan Umang Calculator - Saral Calc",
    description:
      "Simplify your LIC Jeevan Umang policy planning. Calculate estimated benefits and understand your whole life insurance with ease.",
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
    canonical: "https://saralcalc.online/tools/lic-jeevan-umang-calculator",
  },
  metadataBase: new URL("https://saralcalc.online"),
}
