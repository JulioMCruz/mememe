// "use client";

import type React from "react"
import "./globals.css"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import { authOptions } from "./api/auth/[...nextauth]/route";
import { getServerSession } from "next-auth";
import AppProvider from "@/components/providers";


const inter = Inter({ subsets: ["latin"] })


// export const metadata: Metadata = {
//   title: "Okto React SDK with Google Auth",
//   description: "Next.js app integrated with Okto SDK and Google Authentication",
// };

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const session = await getServerSession(authOptions);
  return (
    <html lang="en">
      <body className={`${inter.className} bg-white`}>
        <AppProvider session={session}>
          {children}
        </AppProvider>
      </body>
    </html>
  )
}



import './globals.css'
