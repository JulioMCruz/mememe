"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"

export default function Withdraw() {
  const [amount, setAmount] = useState("$10")
  const maxAmount = 234.56

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
      <div className="w-full max-w-md mx-auto flex flex-col items-center px-4">
        <div className="w-full text-center mb-12">
          <h1 className="text-5xl font-black leading-tight tracking-tight mb-4">Withdraw</h1>
          <p className="text-xl text-gray-700">Back to your card or to a friend</p>
        </div>

        {/* Input field with max label */}
        <div className="w-full max-w-sm mb-2">
          <div className="relative">
            <div className="flex items-center">
              <input
                type="text"
                value={amount}
                onChange={handleAmountChange}
                className="w-full text-4xl font-bold py-2 px-1 border-none focus:outline-none focus:ring-0"
                autoFocus
              />
              <span className="text-2xl font-bold">max.</span>
            </div>
            <div className="absolute bottom-0 left-0 w-full border-b-2 border-dashed border-black"></div>
          </div>
        </div>

        <p className="text-gray-500 mb-16 self-start ml-1">max. {maxAmount}$</p>

        {/* Confirm Button */}
        <Link
          href="#"
          className="inline-block bg-cyan-300 text-black font-bold text-2xl px-12 py-4 rounded-full shadow-[0_4px_0_rgba(0,0,0,0.25)] hover:bg-cyan-400 transition-colors"
        >
          Confirm
        </Link>
      </div>
    </main>
  )
}

