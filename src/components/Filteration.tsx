"use client";

import React from "react";
import { useSearchParams, useRouter, usePathname } from "next/navigation";


const categories = [
  { name: "All", count: 100 },
  { name: "Beauty", count: 5 },
  { name: "Fragrances", count: 5 },
  { name: "Furniture", count: 5 },
  { name: "Groceries", count: 27 },
  { name: "Home", count: 35 },
  { name: "Laptops", count: 5 },
  { name: "Shirts", count: 5 },
  { name: "Watches", count: 6 },
  { name: "Shoes", count: 5 },
];

const priceRanges = [
  { name: "Under $50", min: 0, max: 50, count: 71 },
  { name: "$50 - $100", min: 50, max: 100, count: 9 },
  { name: "$100 - $200", min: 100, max: 200, count: 5 },
  { name: "Over $200", min: 200, max: null, count: 15 },
];

export default function Filteration() {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const currentCategory = searchParams.get('category') || '';
  const currentPriceRange = searchParams.get('price')?.split('-') || [];

  const updateFilters = (type: string, value: string, isChecked: boolean) => {
    const params = new URLSearchParams(Array.from(searchParams.entries()));
    
    if (type === 'category') {
      if (!isChecked || currentCategory === value.toLowerCase()) {
        params.delete('category');
      } else {
        params.set('category', value.toLowerCase());
      }
    }

    if (type === 'price') {
      if (!isChecked || currentPriceRange.join('-') === value) {
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
                checked={currentCategory === name.toLowerCase()}
                onChange={(e) => updateFilters('category', name, e.target.checked)}
                onClick={(e) => {
                  if (currentCategory === name.toLowerCase()) {
                    e.currentTarget.checked = false;
                    updateFilters('category', 'all', false);
                  }
                }}
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
                onChange={(e) => updateFilters('price', `${min}-${max}`, e.target.checked)}
                onClick={(e) => {
                  if (currentPriceRange.join('-') === `${min}-${max}`) {
                    e.currentTarget.checked = false;
                    updateFilters('price', `${min}-${max}`, false);
                  }
                }}
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
