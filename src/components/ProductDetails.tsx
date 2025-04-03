"use client";
import { useState } from 'react';
import { Heart, ShoppingCart, Star } from 'lucide-react';
import Product  from '@/types/productType';
import Image from 'next/image';

interface Props{
  product: Product;
}

export default function ProductDetails({product} : Props) {
    const [selectedImage, setSelectedImage] = useState(0);
    const [quantity, setQuantity] = useState(1);
    
    const rating = product.rating || 0;
    const fullStars = Math.floor(rating);
    const hasHalfStar = (rating % 1) >= 0.5;
  
    return (
        <div className="max-w-7xl mx-auto px-12 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mx-20">
            <div className="space-y-4">
              <div className="aspect-square relative overflow-hidden rounded-lg">
                <Image
                  src={product.images[selectedImage]}
                  alt={product.title}
                  fill
                  className="object-cover"
                />
              </div>
          <div className="grid grid-cols-4 gap-4">
            {product.images.map((image, index) => (
              <div
                key={index}
                className={`aspect-square relative rounded-lg overflow-hidden cursor-pointer ${
                  selectedImage === index ? 'ring-2 ring-black' : ''
                }`}
                onClick={() => setSelectedImage(index)}
              >
                <Image
                  src={image}
                  alt={`${product.title} ${index + 1}`}
                  fill
                  className="object-cover"
                />
              </div>
            ))}
          </div>
        </div>

        <div className="space-y-6">
          <div>
            <h1 className="text-3xl font-bold">{product.title}</h1>
            <p className="text-gray-500">{product.category}</p>
          </div>

          <div className="flex items-center space-x-2">
            <div className="flex">
              {[...Array(5)].map((_, index) => (
                <Star
                  key={index}
                  className={`w-5 h-5 ${
                    index < fullStars
                      ? 'fill-yellow-400 text-yellow-400'
                      : index === fullStars && hasHalfStar
                      ? 'fill-yellow-400/50 text-yellow-400'
                      : 'fill-gray-200 text-gray-200'
                  }`}
                />
              ))}
            </div>
            <span className="text-sm text-gray-500">
              ({rating.toFixed(1)} out of 5)
            </span>
          </div>

          <p className="text-4xl font-bold">${product.price}</p>

          <p className="text-gray-600">{product.description}</p>

          <div className="flex items-center space-x-4">
            <div className="flex items-center border rounded-lg">
              <button
                className="px-4 py-2 text-xl"
                onClick={() => quantity > 1 && setQuantity(quantity - 1)}
              >
                -
              </button>
              <span className="px-4 py-2 border-x">{quantity}</span>
              <button
                className="px-4 py-2 text-xl"
                onClick={() => setQuantity(quantity + 1)}
              >
                +
              </button>
            </div>
            <button className="flex-1 flex items-center justify-center space-x-2 bg-black text-white px-6 py-3 rounded-lg hover:bg-white hover:text-black cursor-pointer border">
              <ShoppingCart className="w-5 h-5" />
              <span>Add to Cart</span>
            </button>
            <button className="p-3 border rounded-lg hover:bg-gray-50">
              <Heart className="w-6 h-6" />
            </button>
          </div>

          <div className="border-t pt-6">
            <h3 className="font-semibold mb-4">Product Details</h3>
            <ul className="space-y-2 text-gray-600">
              <li>Material: Premium Quality</li>
              <li>Shipping: Free Shipping</li>
              <li>Returns: 30-Day Return Policy</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}