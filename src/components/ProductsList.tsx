import React from 'react'
import ProductCard from '@/components/ProductCard';
import Product from '@/types/productType';

export default async function ProductsList({ 
  searchParams 
}: { 
  searchParams: { category?: string; price?: string } 
}) {
  const res = await fetch("https://dummyjson.com/products?limit=100");
  const data = await res.json();
  let products = data.products;

  if (searchParams.category) {
    products = products.filter((product: Product) => 
        product.category.toLowerCase().includes(searchParams.category!.toLowerCase())
    );
  }

  if (searchParams.price) {
    const [minPrice, maxPrice] = searchParams.price.split('-').map(Number);
    products = products.filter((product: Product) => {
      if (maxPrice) {
        return product.price >= minPrice && product.price <= maxPrice;
      }
      return product.price >= minPrice;
    });
  }

  return (
    <div className="col-span-4 grid grid-cols-1 md:grid-cols-4 gap-6">
      {products.map((product: Product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
}