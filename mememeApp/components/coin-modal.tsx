"use client"
import { PlusIcon, ArrowUpRightIcon } from "lucide-react"

interface CoinModalProps {
  isOpen: boolean
  onClose: () => void
  coin: {
    name: string
    color: string
    change: string
    amount: string
    isPositive: boolean
  }
}

export default function CoinModal({ isOpen, onClose, coin }: CoinModalProps) {
  if (!isOpen) return null

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50">
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black bg-opacity-50" onClick={onClose} />

      {/* Modal */}
      <div className="relative max-w-sm w-full mx-4">
        {/* Rainbow border container */}
        <div className="relative">
          <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-purple-400 via-cyan-400 to-yellow-400 p-[2px]">
            {/* White background */}
            <div className="absolute inset-0 bg-white rounded-3xl" />
          </div>

          {/* Content */}
          <div className="relative bg-white rounded-3xl p-8 flex flex-col items-center">
            {/* Coin name */}
            <h2 className="text-4xl font-black mb-4">{coin.name}</h2>

            {/* Coin icon and percentage */}
            <div className="flex items-center gap-4 mb-6">
              <div className={`w-12 h-12 ${coin.color} rounded-full border-2 border-black`} />
              <span className={`text-2xl font-bold ${coin.isPositive ? "text-green-500" : "text-red-500"}`}>
                {coin.change}
              </span>
            </div>

            {/* Amount */}
            <div className="mb-8">
              <div className="text-4xl font-black">{coin.amount}</div>
              <div className="w-full h-0.5 bg-black mt-1" />
            </div>

            {/* Action buttons */}
            <div className="flex gap-4">
              {/* Buy button */}
              <div className="relative w-16 h-16">
                <div className="absolute inset-0 bg-black rounded-2xl translate-y-1" />
                <button
                  className="absolute inset-0 flex items-center justify-center bg-[#a7ffaf] rounded-2xl border-2 border-black hover:bg-[#9aeea2] transition-colors"
                  onClick={() => {
                    /* Handle buy */
                  }}
                >
                  <PlusIcon className="w-8 h-8" />
                </button>
              </div>

              {/* Sell button */}
              <div className="relative w-16 h-16">
                <div className="absolute inset-0 bg-black rounded-2xl translate-y-1" />
                <button
                  className="absolute inset-0 flex items-center justify-center bg-[#ff9f9f] rounded-2xl border-2 border-black hover:bg-[#ff8a8a] transition-colors"
                  onClick={() => {
                    /* Handle sell */
                  }}
                >
                  <ArrowUpRightIcon className="w-8 h-8" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

