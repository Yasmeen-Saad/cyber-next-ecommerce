import Filteration from '@/components/Filteration';
import ProductsList from '@/components/ProductsList';
import React, { Suspense } from 'react';

export const metadata = {
  title: "Products",
  description: "E-commerce website",
}

interface Props{
  searchParams: Promise<{category: string, price: string}>;
}

export default async function products({ searchParams }: Props) {
  const { category, price} = await searchParams;
  const categoryParam = category ?? "all";
  const priceParam = price ?? "";
  console.log(categoryParam, priceParam);
  return (
    <div className="grid grid-cols-1 md:grid-cols-5 gap-4 p-6 bg-gray-100">
      <Filteration />
      <Suspense fallback={<div className="col-span-4">Loading...</div>}>
        <ProductsList searchParams={{category: categoryParam, price: priceParam}} />
      </Suspense>
    </div>
  )
}