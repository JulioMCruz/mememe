"use client";

import type React from "react"
import "./globals.css"
import type { Metadata } from "next"
import { Inter } from "next/font/google"


// export const metadata: Metadata = {
//   title: "Memecoins in your pocket",
//   description: "The easiest way to buy, sell and discover memecoins",
//     generator: 'v0.dev'
// }



export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-white`}>

      {children}

      </body>
    </html>
  )
}



import './globals.css'