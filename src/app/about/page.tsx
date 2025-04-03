import React from 'react'

export const metadata = {
  title: "About",
  description: "E-commerce website",
}

export default function about() {
  return (
    <div className="min-h-screen bg-gray-950 text-white px-6 py-12 md:px-16 lg:px-32">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-4xl font-bold mb-6">About Cyber</h1>
        <p className="text-gray-400 text-lg mb-8">
          At Cyber, we bring you the latest and greatest in products. Our mission
          is to provide high-quality products that elevate your experience.
        </p>
      </div>
      
      <div className="grid md:grid-cols-2 gap-8 mt-12">
        <div className="p-6 bg-gray-900 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-4">Our Vision</h2>
          <p className="text-gray-400">
            We envision a world where innovation meets accessibility, offering everyone the opportunity to own premium devices at competitive prices.
          </p>
        </div>
        
        <div className="p-6 bg-gray-900 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-4">Why Choose Us?</h2>
          <p className="text-gray-400">
            From the latest smartphones to powerful gaming consoles, we
            meticulously select our products to ensure quality and performance.
          </p>
        </div>
      </div>
      
      <div className="mt-12 text-center">
        <h2 className="text-2xl font-semibold mb-4">Stay Connected</h2>
        <p className="text-gray-400 mb-4">
          Follow us on social media and be the first to know about new arrivals and
          exclusive deals.
        </p>
        <div className="flex justify-center space-x-4">
          <a href="#" className="text-gray-400 hover:text-white">Twitter</a>
          <a href="#" className="text-gray-400 hover:text-white">Facebook</a>
          <a href="#" className="text-gray-400 hover:text-white">Instagram</a>
        </div>
      </div>
    </div>
  )
}
