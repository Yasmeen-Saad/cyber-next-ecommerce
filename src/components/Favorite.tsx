"use client";

import React, { useState } from 'react'
import { Heart } from 'lucide-react'

export default function Favorite() {
  const [isFavorite, setIsFavorite] = useState(false);

  const toggleFavorite = () => {
    setIsFavorite(!isFavorite);
  };

  return (
    <div className="absolute top-2 right-2 z-10">
      <Heart 
        className={`cursor-pointer ${
          isFavorite ? 'text-red-500 fill-red-500' : 'text-gray-600'
        }`} 
        size={22} 
        onClick={toggleFavorite}
      />
    </div>
  )
}