import Image from 'next/image'
import React from 'react'

export default function Hero() {
  return (
    <section className="bg-[#211C24] text-white min-h-fit flex items-center">
      <div className="container mx-auto px-10 flex flex-col md:flex-row items-center justify-center">
        <div className="md:w-1/2 text-center md:text-left">
          <p className="text-gray-400 tracking-widest">Pro.Beyond.</p>
          <h1 className="text-7xl font-thin mt-2">
            iPhone 14 <span className="text-white font-bold">Pro</span>
          </h1>
          <p className="text-gray-400 mt-4">
            Created to change everything for the better. For everyone.
          </p>
          <button className="mt-6 px-6 py-3 text-white border border-white font-semibold rounded-lg hover:bg-gray-200 hover:text-black transition cursor-pointer">
            Shop Now
          </button>
        </div>

        <div className="md:w-1/4 mt-10 md:mt-0">
          <Image
            src="/Iphone Image.png"
            alt="iPhone 14 Pro"
            width={300}
            height={300}
          />
        </div>
      </div>
    </section>
  )
}
