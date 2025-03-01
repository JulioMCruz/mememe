"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"

export default function Deposit() {
  const [amount, setAmount] = useState("$10")
  const [cardNumber, setCardNumber] = useState("")
  const [expiry, setExpiry] = useState("")
  const [cvv, setCvv] = useState("")

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

  const handleExpiryChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let value = e.target.value.replace(/\D/g, "")

    if (value.length > 4) {
      value = value.slice(0, 4)
    }

    if (value.length > 2) {
      value = value.slice(0, 2) + "/" + value.slice(2)
    }

    setExpiry(value)
  }

  const handleCvvChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.replace(/\D/g, "")
    if (value.length <= 4) {
      setCvv(value)
    }
  }

  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-white">
      <div className="w-full max-w-md mx-auto flex flex-col items-center px-16">
        {/* Header */}
        <div className="w-full text-center mb-12">
          <h1 className="text-[42px] font-black leading-tight tracking-tight mb-2">Deposit</h1>
          <p className="text-xl text-gray-600">Pay with your credit/debit card</p>
        </div>

        {/* Input field */}
        <div className="w-full max-w-sm mb-3">
          <div className="relative">
            <input
              type="text"
              value={amount}
              onChange={handleAmountChange}
              className="w-full text-4xl font-bold py-2 px-0 border-none focus:outline-none focus:ring-0"
              autoFocus
            />
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

        <p className="text-gray-500 mb-8 self-start ml-1">You'll need to confirm with your bank.</p>

        {/* Payment Form */}
        <div className="w-full space-y-4 mb-6">
          <input
            type="text"
            placeholder="Card number"
            value={cardNumber}
            onChange={handleCardNumberChange}
            className="w-full py-4 px-5 bg-gray-100 rounded-full border-none focus:outline-none focus:ring-1 focus:ring-gray-300"
          />

          <div className="flex gap-4">
            <input
              type="text"
              placeholder="mm/yy"
              value={expiry}
              onChange={handleExpiryChange}
              className="w-1/2 py-4 px-5 bg-gray-100 rounded-full border-none focus:outline-none focus:ring-1 focus:ring-gray-300"
            />
            <input
              type="text"
              placeholder="CVV"
              value={cvv}
              onChange={handleCvvChange}
              className="w-1/2 py-4 px-5 bg-gray-100 rounded-full border-none focus:outline-none focus:ring-1 focus:ring-gray-300"
            />
          </div>
        </div>

        <p className="text-gray-500 mb-12 self-start ml-1">We accept most cards</p>

        {/* Confirm Button */}
        <div className="relative w-64 h-16 mt-8">
          {/* Shadow layer */}
          <div className="absolute inset-0 bg-black rounded-full translate-y-1"></div>

          {/* Button layer */}
          <Link
            href="/ready"
            className="absolute inset-0 flex items-center justify-center"
          >
            <Image
              src="/confirm-blue.png"
              alt="Confirm button"
              width={200}
              height={50}
              className="w-auto h-auto"
            />
          </Link>
        </div>
      </div>
    </main>
  )
}

