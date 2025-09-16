import { Poppins } from "next/font/google"
import { JetBrains_Mono } from "next/font/google"
import type React from "react"
import type { Metadata } from "next"

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-poppins",
})

const jetBrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
})

export const metadata: Metadata = {
  title: {
    default: "HUCH - Tokenize Your CS2 Skins & Gachas",
    template: "%s | HUCH",
  },
  description:
    "Tokenize your CS2 skins and gachas on the blockchain. Turn your valuable gaming assets into tradeable tokens and unlock liquidity without selling.",
  keywords: [
    "counter strike 2",
    "CS2",
    "tokenize",
    "blockchain",
    "gaming assets",
    "skins",
    "gachas",
    "NFT",
    "cryptocurrency",
    "gaming finance",
    "DeFi",
    "skin tokenization",
  ],
  authors: [{ name: "HUCH" }],
  creator: "HUCH",
  publisher: "HUCH",
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: [
      {
        url: "/logo.png",
        sizes: "32x32",
        type: "image/png",
      },
      {
        url: "/logo.png",
        sizes: "192x192",
        type: "image/png",
      },
    ],
    shortcut: "/logo.png",
    apple: "/logo.png",
  },
  manifest: "/site.webmanifest",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://huch.finance",
    siteName: "HUCH",
    title: "HUCH - Tokenize Your CS2 Skins & Gachas",
    description:
      "Transform your CS2 skins and gachas into blockchain tokens. Access liquidity, trade seamlessly, and maintain ownership of your valuable gaming assets.",
    images: [
      {
        url: "/logo.png",
        width: 1200,
        height: 630,
        alt: "HUCH - Tokenize CS2 Skins & Gachas",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "HUCH - Tokenize Your CS2 Skins & Gachas",
    description:
      "Transform your CS2 skins and gachas into blockchain tokens. Access liquidity, trade seamlessly, and maintain ownership of your valuable gaming assets.",
    images: ["/logo.png"],
    creator: "@huch",
    site: "@huch",
  },
  applicationName: "HUCH",
  appleWebApp: {
    capable: true,
    title: "HUCH - Tokenize CS2 Assets",
    statusBarStyle: "black-translucent",
  },
  formatDetection: {
    telephone: false,
  },
  category: "technology",
  generator: "v0.dev",
  metadataBase: new URL("https://huch.finance"),
}

export const viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
}

export const themeColor = "#924FE8"

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${poppins.variable} ${jetBrainsMono.variable} font-sans bg-[#0B0C0E]`}>
        {children}
      </body>
    </html>
  )
}

import "./globals.css"
