import Head from "next/head"

interface SeoHeadProps {
  title?: string
  description?: string
  keywords?: string
  canonicalUrl?: string
  ogImage?: string
}

export default function SeoHead({
  title = "Lic Jeevan Saral Maturity Calculator | Saral Calc",
  description = "Calculate LIC Jeevan Saral Plan 165 maturity value with our free online calculator. Get accurate maturity amount, bonus, and returns for your LIC policy.",
  keywords = "jeevan saral maturity calculator, lic jeevan saral maturity calculator, Lic Jeevan Saral Maturity Calculator excel, lic calculator",
  canonicalUrl = "https://saralcalc.online",
  ogImage = "/og-image.jpg",
}: SeoHeadProps) {
  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="robots" content="index, follow" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />

      {/* Canonical URL */}
      <link rel="canonical" href={canonicalUrl} />


      {/* Open Graph */}
      <meta property="og:type" content="website" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:site_name" content="Saral Calc" />

      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />

      {/* Additional SEO tags */}
      <meta name="author" content="Saral Calc" />
      <meta name="language" content="English" />
      <meta name="revisit-after" content="7 days" />

      {/* Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebApplication",
            name: "LIC Jeevan Saral Plan 165 Calculator",
            description: description,
            url: canonicalUrl,
            applicationCategory: "FinanceApplication",
            operatingSystem: "Any",
            offers: {
              "@type": "Offer",
              price: "0",
              priceCurrency: "INR",
            },
            provider: {
              "@type": "Organization",
              name: "Saral Calc",
              url: "https://saralcalc.online",
            },
          }),
        }}
      />
    </Head>
  )
}
