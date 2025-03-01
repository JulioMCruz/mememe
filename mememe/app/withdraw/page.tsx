"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"

export default function Withdraw() {
  const [amount, setAmount] = useState("$10")
  const [cardNumber, setCardNumber] = useState("")
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

  const handleCardNumberChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.replace(/\D/g, "")
    setCardNumber(value)
  }

  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-white">
      <div className="w-full max-w-md mx-auto flex flex-col items-center px-6">
        {/* Header */}
        <div className="w-full text-center mb-12">
          <h1 className="text-[42px] font-black leading-tight tracking-tight mb-2">Withdraw</h1>
          <p className="text-xl text-gray-600">Back to your card or to a friend</p>
        </div>

        {/* Input field with max label */}
        <div className="w-full max-w-sm mb-3">
          <div className="relative">
            <div className="flex items-center justify-between">
              <input
                type="text"
                value={amount}
                onChange={handleAmountChange}
                className="w-full text-4xl font-bold py-2 px-0 border-none focus:outline-none focus:ring-0"
                autoFocus
              />
              <span className="text-2xl font-bold whitespace-nowrap">max.</span>
            </div>
            <div
              className="absolute bottom-0 left-0 w-full"
              style={{
                height: "2px",
                background:
                  "repeating-linear-gradient(to right, black 0, black 6px, transparent 6px, transparent 12px)",
              }}
            />
          </div>
        </div>

        <p className="text-gray-500 mb-8 self-start ml-1">max. {maxAmount}$</p>

        {/* Card Input */}
        <div className="w-full mb-12">
          <input
            type="text"
            placeholder="Card number"
            value={cardNumber}
            onChange={handleCardNumberChange}
            className="w-full py-4 px-5 bg-gray-100 rounded-full border-none focus:outline-none focus:ring-1 focus:ring-gray-300"
          />
        </div>

        {/* Confirm Button */}
        <div className="relative w-64 h-16 mt-8">
          {/* Shadow layer */}
          <div className="absolute inset-0 bg-black rounded-full translate-y-1"></div>

          {/* Button layer */}
          <Link
            href="/coins"
            className="absolute inset-0 flex items-center justify-center bg-[#7de9f7] rounded-full border-2 border-black hover:bg-[#6dd8e6] transition-colors"
          >
            <span className="text-2xl font-bold">Confirm</span>
          </Link>
        </div>
      </div>
    </main>
  )
}

