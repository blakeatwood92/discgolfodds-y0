import type React from "react"
import type { Metadata } from "next"
import { Geist } from "next/font/google"
import { Manrope } from "next/font/google"
import "./globals.css"

const geist = Geist({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-geist",
})

const manrope = Manrope({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-manrope",
})

export const metadata: Metadata = {
  title: "DiscGolfOdds.com - Disc Golf Betting Odds & Reviews",
  description:
    "Your ultimate resource for disc golf betting odds, guides, and disc retailers. Expert reviews and live odds for DGPT events.",
  keywords:
    "disc golf betting, DGPT odds, disc golf sportsbook, disc retailers, disc golf betting guide, professional disc golf betting",
  authors: [{ name: "DiscGolfOdds Team" }],
  creator: "DiscGolfOdds.com",
  publisher: "DiscGolfOdds.com",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://discgolfodds.com"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "DiscGolfOdds.com - Disc Golf Betting Odds & Reviews",
    description:
      "Your ultimate resource for disc golf betting odds, guides, and disc retailers. Expert reviews and live odds for DGPT events.",
    url: "https://discgolfodds.com",
    siteName: "DiscGolfOdds.com",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "DiscGolfOdds.com - Disc Golf Betting Platform",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "DiscGolfOdds.com - Disc Golf Betting Odds & Reviews",
    description: "Your ultimate resource for disc golf betting odds, guides, and disc retailers.",
    images: ["/twitter-image.png"],
    creator: "@discgolfodds",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "your-google-verification-code",
    yandex: "your-yandex-verification-code",
    yahoo: "your-yahoo-verification-code",
  },
  generator: "v0.app",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${geist.variable} ${manrope.variable} antialiased`}>
      <head>
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-0MZ5JSTY0Q"></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-0MZ5JSTY0Q');
            `,
          }}
        />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "DiscGolfOdds.com",
              url: "https://discgolfodds.com",
              logo: "https://discgolfodds.com/logo.png",
              description: "Premier disc golf betting odds and reviews platform",
              sameAs: [
                "https://twitter.com/discgolfodds",
                "https://facebook.com/discgolfodds",
                "https://instagram.com/discgolfodds",
              ],
              contactPoint: {
                "@type": "ContactPoint",
                contactType: "customer service",
                email: "support@discgolfodds.com",
              },
            }),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              name: "DiscGolfOdds.com",
              url: "https://discgolfodds.com",
              description: "Disc golf betting odds, guides, and sportsbook reviews",
              potentialAction: {
                "@type": "SearchAction",
                target: "https://discgolfodds.com/search?q={search_term_string}",
                "query-input": "required name=search_term_string",
              },
            }),
          }}
        />
      </head>
      <body>{children}</body>
    </html>
  )
}
