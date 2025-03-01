"use client"

import { useState } from "react"
import Link from "next/link"
import {
  ArrowLeftIcon,
  Share2Icon,
  MoreHorizontalIcon,
  PlusIcon,
  ArrowUpRightIcon,
  SearchIcon,
  FilterIcon,
} from "lucide-react"
import CoinModal from "@/components/coin-modal"

interface Coin {
  name: string
  color: string
  change: string
  amount: string
  isPositive: boolean
}

export default function Coins() {
  const [searchQuery, setSearchQuery] = useState("doge")
  const [selectedCoin, setSelectedCoin] = useState<Coin | null>(null)

  const myCoins: Coin[] = [
    { name: "APU", color: "bg-green-300", change: "+362%", amount: "$3.00", isPositive: true },
    { name: "PEPE", color: "bg-yellow-300", change: "+123%", amount: "$2.50", isPositive: true },
    { name: "FWOG", color: "bg-pink-300", change: "+12%", amount: "$1.20", isPositive: true },
    { name: "DOGE", color: "bg-red-300", change: "-1%", amount: "$0.95", isPositive: false },
    { name: "BONK", color: "bg-red-300", change: "-200%", amount: "$0.10", isPositive: false },
  ]

  return (
    <main className="flex min-h-screen flex-col">
      <div className="w-full max-w-md mx-auto px-4 py-6">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <Link href="/memes" className="flex items-center">
            <div className="w-10 h-10 bg-pink-300 rounded-full flex items-center justify-center border-2 border-black">
              <ArrowLeftIcon className="w-6 h-6" />
            </div>
            <span className="text-2xl font-bold ml-2">Home</span>
          </Link>

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
          <Link href="/deposit">
            <button className="w-14 h-14 bg-gradient-to-r from-purple-400 via-cyan-400 to-yellow-400 rounded-2xl flex items-center justify-center shadow-[0_4px_0_rgba(0,0,0,0.25)]">
              <PlusIcon className="w-8 h-8" />
            </button>
          </Link>

          <Link href="/withdraw">
            <button className="w-14 h-14 bg-white border-2 border-black rounded-2xl flex items-center justify-center shadow-[0_4px_0_rgba(0,0,0,0.25)]">
              <ArrowUpRightIcon className="w-8 h-8" />
            </button>
          </Link>

        </div>

        {/* My Coins */}
        <div className="mb-6">
          <div className="relative mb-4">
            <div className="absolute inset-0 rounded-full bg-yellow-300 p-1">
              <div className="absolute inset-0 bg-white rounded-full"></div>
            </div>
            <h2 className="relative z-10 text-3xl font-black text-center py-2">My coins</h2>
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

          {/* Coin List */}
          <div className="space-y-4">
            {myCoins.map((coin, index) => (
              <div
                key={index}
                className="flex items-center justify-between cursor-pointer hover:opacity-80 transition-opacity"
                onClick={() => setSelectedCoin(coin)}
              >
                <div className="flex items-center">
                  <div className={`w-10 h-10 ${coin.color} rounded-full border-2 border-black mr-3`}></div>
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

      {/* Coin Modal */}
      <CoinModal isOpen={!!selectedCoin} onClose={() => setSelectedCoin(null)} coin={selectedCoin || myCoins[0]} />
    </main>
  )
}

