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
    default: "Huch.",
    template: "%s | Huch",
  },
  description:
    "Huch, take loan from your cs2 skins",
  keywords: [
    "counter strike 2",
    "CS2",
  ],
  authors: [{ name: "Huch." }],
  creator: "Huch.",
  publisher: "Huch.",
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
    siteName: "Huch",
    title: "Huch, take loan from your cs2 skin",
    description:
      "The smart alternative to selling. Get cash now and keep your valuable skins. Repay when you're ready and get them back.",
    images: [
      {
        url: "/logo.png",
        width: 1200,
        height: 630,
        alt: "Huch Logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Huch, take loan from your cs2 skin",
    description:
      "The smart alternative to selling. Get cash now and keep your valuable skins. Repay when you're ready and get them back.",
    images: ["/logo.png"],
    creator: "@huch",
    site: "@huch",
  },
  viewport: {
    width: "device-width",
    initialScale: 1,
    maximumScale: 5,
  },
  applicationName: "Huch.",
  appleWebApp: {
    capable: true,
    title: "Huch.",
    statusBarStyle: "black-translucent",
  },
  formatDetection: {
    telephone: false,
  },
  themeColor: "#924FE8",
  category: "technology",
  generator: "v0.dev",
}

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
