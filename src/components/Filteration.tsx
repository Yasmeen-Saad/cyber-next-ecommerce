"use client";

import React from "react";
import { useSearchParams, useRouter, usePathname } from "next/navigation";

const categories = [
  { name: "All", count: 194 },
  { name: "Beauty", count: 110 },
  { name: "Fragrances", count: 125 },
  { name: "Furniture", count: 68 },
  { name: "Groceries", count: 44 },
  { name: "Home", count: 15 },
  { name: "Laptops", count: 15 },
  { name: "Shirts", count: 15 },
  { name: "Watches", count: 15 },
  { name: "Shoes", count: 15 },
];

const priceRanges = [
  { name: "Under $50", min: 0, max: 50, count: 85 },
  { name: "$50 - $100", min: 50, max: 100, count: 132 },
  { name: "$100 - $200", min: 100, max: 200, count: 95 },
  { name: "Over $200", min: 200, max: null, count: 55 },
];

export default function Filteration() {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const currentCategory = searchParams.get('category') || '';
  const currentPriceRange = searchParams.get('price')?.split('-') || [];

  const updateFilters = (type: string, value: string) => {
    const params = new URLSearchParams(Array.from(searchParams.entries()));
    
    if (type === 'category') {
      if (currentCategory === value) {
        params.delete('category');
      } else {
        params.set('category', value);
      }
    }

    if (type === 'price') {
      if (currentPriceRange.join('-') === value) {
        params.delete('price');
      } else {
        params.set('price', value);
      }
    }

    router.push(`${pathname}?${params.toString()}`);
  };

  return (
    <aside className="col-span-1 bg-white p-4 h-fit shadow-md rounded-lg top-4 py5">
      <details className="py-3 group" open={true}>
        <summary className="list-none flex items-center justify-between">
          <span className="font-medium">Categories</span>
          <svg
            className="w-5 h-5 transition-transform"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </summary>
        <ul className="space-y-2 mt-2">
          {categories.map(({name, count}) => (
            <li key={name} className="flex items-center space-x-2">
              <input
                type="radio"
                name="category"
                checked={currentCategory === name}
                onChange={() => updateFilters('category', name)}
                className="h-4 w-4 border-gray-300 text-black focus:ring-black"
              />
              <span className="text-gray-700">{name}</span>
              <span className="text-gray-400 text-sm">({count})</span>
            </li>
          ))}
        </ul>
    </details>
    
    <details className="py-3" open={true}>
        <summary className="list-none flex items-center justify-between cursor-pointer">
          <span className="font-medium">Price Range</span>
          <svg
            className="w-5 h-5 transition-transform"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </summary>
        <ul className="space-y-2 mt-2">
          {priceRanges.map(({name, min, max, count}) => (
            <li key={name} className="flex items-center space-x-2">
              <input
                type="radio"
                name="price"
                checked={currentPriceRange.join('-') === `${min}-${max}`}
                onChange={() => updateFilters('price', `${min}-${max}`)}
                className="h-4 w-4 border-gray-300 text-black focus:ring-black"
              />
              <span className="text-gray-700">{name}</span>
              <span className="text-gray-400 text-sm">({count})</span>
            </li>
          ))}
        </ul>
      </details>
    </aside>
  );
}
