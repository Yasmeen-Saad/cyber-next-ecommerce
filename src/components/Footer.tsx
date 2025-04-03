import React from 'react'
import { Twitter, Facebook, Instagram, Linkedin} from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-black text-white py-10 px-20 mt-auto">
      <div className="container mx-auto px-6 grid md:grid-cols-3 gap-8">

        <div>
          <h2 className="text-lg font-bold">cyber</h2>
          <p className="text-gray-400 mt-2">
            We are a residential interior design firm located in Portland. Our boutique-studio offers more than.
          </p>

          <div className="flex space-x-4 mt-4">
            <a href="#" className="text-gray-400"><Twitter className="cursor-pointer" size={22} /></a>
            <a href="#" className="text-gray-400"><Facebook className="cursor-pointer" size={22} /></a>
            <a href="#" className="text-gray-400"><Instagram className="cursor-pointer" size={22} /></a>
            <a href="#" className="text-gray-400"><Linkedin className="cursor-pointer" size={22} /></a>
          </div>
        </div>

        <div>
          <h3 className="text-lg font-semibold">Services</h3>
          <ul className="mt-2 space-y-2 text-gray-400">
            <li><a href="#" className="hover:text-white">Bonus program</a></li>
            <li><a href="#" className="hover:text-white">Gift cards</a></li>
            <li><a href="#" className="hover:text-white">Credit and payment</a></li>
            <li><a href="#" className="hover:text-white">Service contracts</a></li>
            <li><a href="#" className="hover:text-white">Non-cash account</a></li>
            <li><a href="#" className="hover:text-white">Payment</a></li>
          </ul>
        </div>

        <div>
          <h3 className="text-lg font-semibold">Assistance to the buyer</h3>
          <ul className="mt-2 space-y-2 text-gray-400">
            <li><a href="#" className="hover:text-white">Find an order</a></li>
            <li><a href="#" className="hover:text-white">Terms of delivery</a></li>
            <li><a href="#" className="hover:text-white">Exchange and return of goods</a></li>
            <li><a href="#" className="hover:text-white">Guarantee</a></li>
            <li><a href="#" className="hover:text-white">Frequently asked questions</a></li>
            <li><a href="#" className="hover:text-white">Terms of use of the site</a></li>
          </ul>
        </div>
        
      </div>
    </footer>
  )
}
