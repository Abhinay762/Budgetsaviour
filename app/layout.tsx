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
  authors: [{ name: "Saral Calc" }],
  robots: "index, follow",
  openGraph: {
    title: "LIC Jeevan Saral Plan 165 Maturity Calculator",
    description: "Calculate your LIC Jeevan Saral Plan 165 maturity value accurately",
    type: "website",
    url: "https://Saralcalc.online",
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
        {/* Google Search Console */}
        <meta
          name='google-site-verification'
          content='wzJiD9Hmr2zpQPuWq4tWScIgnLhe5FaEgXQhAjB4j5E'
        />
        {/* Google Analytics */}
        <script
          async
          src='https://www.googletagmanager.com/gtag/js?id=G-Z0CYEC2F61'></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
						window.dataLayer = window.dataLayer || [];
						function gtag() {
							dataLayer.push(arguments);
						}
						gtag('js', new Date());
						gtag('config', 'G-Z0CYEC2F61');
					`,
          }}
        />
        {/* Google AdSense */}
        <script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-4194876480312109"
          crossOrigin="anonymous"
        ></script>
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  )
}