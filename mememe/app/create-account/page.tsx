"use client"

import { useState } from "react"
import Link from "next/link"
import localFont from 'next/font/local'
import Image from "next/image"

const comicSans = localFont({ 
  src: '../../public/fonts/ComicNeue-Regular.ttf',
})

export default function CreateAccount() {
  const [username, setUsername] = useState("Bictor")

  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-white">
      <div className={`w-full max-w-md mx-auto flex flex-col items-center px-16 ${comicSans.className}`}>
        {/* Header */}
        <div className="w-full text-center mb-16">
          <h1 className="text-[42px] font-black leading-tight tracking-tight mb-2">Name your account</h1>
          <p className="text-xl text-gray-600">choose a name or a nickname</p>
        </div>

        {/* Input field */}
        <div className="w-full max-w-sm mb-3">
          <div className="relative">
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="w-full text-4xl font-bold py-2 px-0 border-none focus:outline-none focus:ring-0 placeholder-gray-300"
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

        {/* Helper text */}
        <p className="text-gray-500 mb-24 text-base">You can change it anytime later</p>

        {/* Continue Button */}
        <div className="relative w-64 h-16 mt-8">
          {/* Shadow layer */}
          <div className="absolute inset-0 bg-black rounded-full translate-y-1"></div>

          {/* Button layer */}
          <Link
            href="/deposit"
            className="absolute inset-0 flex items-center justify-center"
          >
            <Image
              src="continue.png"
              alt="Continue button"
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

