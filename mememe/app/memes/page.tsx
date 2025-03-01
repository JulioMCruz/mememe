"use client"

import { useState } from "react"
import {
  SmileIcon,
  Share2Icon,
  MoreHorizontalIcon,
  PlusIcon,
  ArrowUpRightIcon,
  SearchIcon,
  FilterIcon,
} from "lucide-react"

export default function Memes() {
  const [searchQuery, setSearchQuery] = useState("cute animals")

  const memeCoins = [
    { rank: 1, name: "APU", color: "bg-green-300", change: "+98%", isPositive: true },
    { rank: 2, name: "PEPE", color: "bg-yellow-300", change: "+33%", isPositive: true },
    { rank: 3, name: "FWOG", color: "bg-pink-300", change: "+12%", isPositive: true },
    { rank: 4, name: "DOGE", color: "bg-red-300", change: "-1%", isPositive: false },
    { rank: 5, name: "SHIB", color: "bg-red-300", change: "-7%", isPositive: false },
    { rank: 6, name: "BONK", color: "bg-red-300", change: "-157%", isPositive: false },
  ]

  return (
    <main className="flex min-h-screen flex-col">
      <div className="w-full max-w-md mx-auto px-4 py-6">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center">
            <div className="w-10 h-10 bg-green-300 rounded-full flex items-center justify-center border-2 border-black">
              <SmileIcon className="w-6 h-6" />
            </div>
            <span className="text-2xl font-bold ml-2">Bictor's</span>
          </div>

          <div className="flex items-center">
            <button className="p-2">
              <MoreHorizontalIcon className="w-6 h-6" />
            </button>
            <button className="p-2">
              <Share2Icon className="w-6 h-6" />
            </button>
          </div>
        </div>

        {/* Balance */}
        <div className="mb-6">
          <div className="flex items-baseline justify-between">
            <span className="text-4xl font-black">Balance</span>
            <div className="flex-grow mx-2 border-b-2 border-dotted border-black self-end mb-2"></div>
            <span className="text-4xl font-black">$10.00</span>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex gap-4 mb-8">
          <button className="w-14 h-14 bg-gradient-to-r from-purple-400 via-cyan-400 to-yellow-400 rounded-2xl flex items-center justify-center shadow-[0_4px_0_rgba(0,0,0,0.25)]">
            <PlusIcon className="w-8 h-8" />
          </button>
          <button className="w-14 h-14 bg-white border-2 border-black rounded-2xl flex items-center justify-center shadow-[0_4px_0_rgba(0,0,0,0.25)]">
            <ArrowUpRightIcon className="w-8 h-8" />
          </button>
        </div>

        {/* Memes of the day */}
        <div className="mb-6">
          <div className="relative mb-4">
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-purple-400 via-cyan-400 to-yellow-400 p-1">
              <div className="absolute inset-0 bg-white rounded-full"></div>
            </div>
            <h2 className="relative z-10 text-3xl font-black text-center py-2">Memes of the day</h2>
          </div>

          {/* Search Bar */}
          <div className="relative mb-6">
            <div className="flex items-center border-2 border-black rounded-full bg-white p-2 pl-4">
              <SearchIcon className="w-5 h-5 mr-2" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="flex-grow bg-transparent border-none focus:outline-none text-gray-500"
              />
              <button className="p-1">
                <FilterIcon className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Meme List */}
          <div className="space-y-4">
            {memeCoins.map((coin) => (
              <div key={coin.rank} className="flex items-center justify-between">
                <div className="flex items-center">
                  <span className="text-3xl font-black mr-2">#{coin.rank}</span>
                  <div className={`w-8 h-8 ${coin.color} rounded-full border-2 border-black mr-2`}></div>
                  <span className="text-2xl font-bold">{coin.name}</span>
                </div>
                <div className="flex items-center">
                  <div className="flex-grow border-b-2 border-dotted border-black w-12 mr-2"></div>
                  <span className={`text-2xl font-bold ${coin.isPositive ? "text-green-500" : "text-red-500"}`}>
                    {coin.change}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </main>
  )
}

