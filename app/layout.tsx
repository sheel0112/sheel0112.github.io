import type { Metadata, Viewport } from "next"
import { Inter } from "next/font/google"
import "./globals.css"

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" })

export const metadata: Metadata = {
  title: "Sam – Product Manager Portfolio",
  description:
    "Product Owner with 5+ years in risk systems and compliance, seeking to transition into insurance underwriting. Strong analytical skills in SQL, Python, and data-driven decision making.",
}

export const viewport: Viewport = {
  themeColor: "#060712",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="font-sans antialiased">{children}</body>
    </html>
  )
}
