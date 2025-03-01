import Link from "next/link"
import Image from "next/image"

export default function Ready() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center">
      <div className="w-full max-w-md mx-auto flex flex-col items-center px-4">
        <div className="w-full text-center mb-12">
          <div className="mb-4">
            <Image
              src="you-ready.png"
              alt="You're ready"
              width={300}
              height={100}
              className="w-auto h-auto"
            />
          </div>
          <p className="text-xl text-gray-700">Go big or go home!</p>
        </div>

        {/* Account info card */}
        <div className="w-64 h-32 mb-16 flex items-center justify-center relative">
          {/* Gradient border */}
          <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-purple-400 via-cyan-400 to-yellow-400 p-1">
            <div className="absolute inset-0 bg-white rounded-xl"></div>
          </div>

          {/* Content */}
          <div className="relative z-10 text-center">
            <div className="text-3xl font-bold">Bictor</div>
            <div className="w-16 h-px bg-black mx-auto my-2"></div>
            <div className="text-3xl font-bold">$10</div>
          </div>
        </div>

        {/* Start Button */}
        <Link
          href="#"
          className="inline-block"
        >
          <Image
            src="start.png"
            alt="Start button"
            width={200}
            height={50}
            className="w-auto h-auto"
          />
        </Link>
      </div>
    </main>
  )
}

