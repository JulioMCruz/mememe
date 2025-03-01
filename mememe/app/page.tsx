import Image from "next/image"
import Link from "next/link"
import localFont from 'next/font/local'

const comicSans = localFont({ 
  src: '../public/fonts/ComicNeue-Regular.ttf',
})

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <div className={`w-full max-w-md mx-auto flex flex-col items-center px-4 ${comicSans.className}`}>
        {/* Doodle illustration */}
        <div className="w-full pt-8 pb-4">
          <Image
            src="mememe.png"
            alt="Memecoins doodle illustration"
            width={500}
            height={500}
            className="w-full h-auto"
            priority
          />
        </div>

        {/* Main content */}
        <div className="w-full text-center pb-8">
          <h1 className="text-5xl font-black leading-tight tracking-tight">
            Memecoins
          </h1>
          <h1 className="text-3xl font-black leading-tight tracking-tight">
            in your pocket
          </h1>
          <p className="text-xl mt-4 text-gray-700 font-bold tracking-tight">The easiest way to buy, sell and discover</p>

          {/* CTA Button */}
          <div className="mt-12 mb-8">
            <Link
              href="#"
              className="inline-block  font-bold text-2xl px-12 py-4 rounded-full "
            >
              <Image
                src="get-started.png"
                alt="Get started button"
                width={200}
                height={50}
                className="w-auto h-auto"
              />
            </Link>
          </div>

          {/* Footer text */}
          <p className="text-sm text-gray-500 mt-16">
            By using Mememe, you agree to accept our
            <br />
            Terms of Use and Privacy Policy
          </p>
        </div>
      </div>
    </main>
  )
}

