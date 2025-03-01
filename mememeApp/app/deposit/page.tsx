"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import localFont from 'next/font/local'
import Image from "next/image"

const comicSans = localFont({ 
  src: '../../public/fonts/ComicNeue-Regular.ttf',
})

export default function Deposit() {
  const [amount, setAmount] = useState("$10")

  const handleAmountChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let value = e.target.value

    // Remove any existing dollar sign
    value = value.replace(/^\$/, "")

    // Only allow numbers and decimal points
    if (/^[0-9]*\.?[0-9]*$/.test(value) || value === "") {
      // Add dollar sign back
      setAmount("$" + value)
    }
  }

  return (
    <main className="flex min-h-screen flex-col items-center justify-center">
      <div className={`w-full max-w-md mx-auto flex flex-col items-center px-4 ${comicSans.className}`}>
        <div className="w-full text-center mb-12">
          <h1 className="text-5xl font-black leading-tight tracking-tight mb-4">Deposit</h1>
          <p className="text-xl text-gray-700">Pay with your credit/debit card</p>
        </div>

        {/* Input field */}
        <div className="w-full max-w-sm mb-2">
          <div className="relative">
            <input
              type="text"
              value={amount}
              onChange={handleAmountChange}
              className="w-full text-4xl font-bold py-2 px-1 border-none focus:outline-none focus:ring-0"
              autoFocus
            />
            <div className="absolute bottom-0 left-0 w-full border-b-2 border-dashed border-black"></div>
          </div>
        </div>

        <p className="text-gray-500 mb-16">You'll need to confirm with your bank.</p>

        {/* Confirm Button */}
        <Link
          href="/ready"
          className="inline-block"
        >
          <Image
            src="confirm.png"
            alt="Confirm button"
            width={200}
            height={50}
            className="w-auto h-auto"
          />
        </Link>
      </div>
    </main>
  )
}

