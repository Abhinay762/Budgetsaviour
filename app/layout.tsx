import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import Script from "next/script"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "LIC Jeevan Saral Plan 165 Maturity Calculator | Calculate Returns",
  description:
    "Calculate LIC Jeevan Saral Plan 165 maturity value with our free online calculator. Get accurate maturity amount, bonus, and returns for your LIC policy.",
  keywords:
    "jeevan saral maturity calculator, lic jeevan saral maturity calculator, lic jeevan saral plan 165 maturity calculator excel, lic calculator",
  authors: [{ name: "Budget Saviour" }],
  viewport: "width=device-width, initial-scale=1",
  robots: "index, follow",
  openGraph: {
    title: "LIC Jeevan Saral Plan 165 Maturity Calculator",
    description: "Calculate your LIC Jeevan Saral Plan 165 maturity value accurately",
    type: "website",
    url: "https://budgetsaviour.com",
  },
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        {/* Google Analytics */}
        <Script src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID" strategy="afterInteractive" />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'GA_MEASUREMENT_ID');
          `}
        </Script>

        {/* Google Search Console */}
        <meta name="google-site-verification" content="YOUR_SEARCH_CONSOLE_CODE" />

        {/* Google AdSense */}
        <Script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-YOUR_ADSENSE_ID"
          crossOrigin="anonymous"
          strategy="afterInteractive"
        />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  )
}
