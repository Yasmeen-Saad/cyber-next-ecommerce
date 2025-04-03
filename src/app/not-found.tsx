import Link from 'next/link'
import React from 'react'

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-4">
      <div className="text-center space-y-5">
        <h1 className="text-9xl font-bold text-gray-200">404</h1>
        
        <div className="space-y-2">
          <h2 className="text-2xl font-semibold text-gray-900">Page not found</h2>
          <p className="text-gray-600">The page you&#39;re looking for doesn&#39;t exist or has been moved.</p>
        </div>

        <Link 
          href="/" 
          className="inline-block px-6 py-3 bg-black text-white rounded-lg hover:bg-white hover:text-black transition-colors"
        >
          Back to Home
        </Link>
      </div>
    </div>
  )
}