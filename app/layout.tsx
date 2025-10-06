import type React from "react"
import type { Metadata } from "next"
import { Manrope } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import { Suspense } from "react"
import "./globals.css"
import Header from "@/components/header"


const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
})

export const metadata: Metadata = {
  title: "NewMart - Quality FMCG Products Delivered",
  description: "Your trusted partner for everyday essentials. Quality FMCG products delivered with care.",
  generator: "v0.app",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`font-sans ${manrope.variable} antialiased`}>
        <Suspense fallback={null}>{children}</Suspense>
        <Header />
        <Analytics />
      </body>
    </html>
  )
}
