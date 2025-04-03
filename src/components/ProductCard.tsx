"use client";
import React from 'react';
import Product  from '@/types/productType';
import Favorite from './Favorite';
import { useRouter } from 'next/navigation';
import Image from 'next/image';

interface Props{
  product: Product;
}

export default function ProductCard({product} : Props) {

  const router = useRouter();
  const handleClick = () => {
    router.push(`/products/${product.id}`);
  }

  return (
    <div className="group bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300 cursor-pointer" onClick={handleClick}>
      <div className="relative">
        <div className="aspect-w-1 aspect-h-1">
          <Image
            src={product.thumbnail} 
            alt={product.title} 
            width={200}
            height={200}
            className="object-cover w-full h-[200px] group-hover:scale-105 transition-transform duration-300"
          />
        </div>
        <div className="absolute top-2 right-2">
          <Favorite />
        </div>
        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
          <p className="text-white text-lg font-semibold">${product.price}</p>
        </div>
      </div>
      
      <div className="p-4">
        <h2 className="text-lg font-semibold text-gray-900 line-clamp-1">
          {product.title}
        </h2>
        <p className="mt-1 text-sm text-gray-500 line-clamp-2">
          {product.description}
        </p>
        
        <div className="mt-4">
          <button className="w-full py-2 px-4 bg-black text-white rounded-lg hover:bg-white hover:text-black cursor-pointer transition-colors duration-200 flex items-center justify-center space-x-2">
            <span>Add to Cart</span>
          </button>
        </div>
      </div>
    </div>
  )
}
