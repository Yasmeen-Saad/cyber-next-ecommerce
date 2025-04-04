import React from 'react'
import ProductCard from '@/components/ProductCard';
import Product from '@/types/productType';

interface Props{
  searchParams: { category?: string; price?: string };
}

export default async function ProductsList({ searchParams }: Props) {
  const res = await fetch("https://dummyjson.com/products?limit=100");
  const data = await res.json();
  const products = data.products;
  let filteredProducts = products;

  if (searchParams.category) {
    if (searchParams.category === "all") {
      filteredProducts = products;
    } else if(searchParams.category === "home" ){
      filteredProducts = products.filter((product: Product) => 
        product.category.toLowerCase() === "home-decoration" || product.category.toLowerCase() === "kitchen-accessories"
      );
    }else {
      filteredProducts = products.filter((product: Product) => 
        product.category.toLowerCase().includes(searchParams.category?.toLowerCase() || '')
      );
    }
  }

  if (searchParams.price) {
    const [minPrice, maxPrice] = searchParams.price.split('-').map(Number);
    filteredProducts = filteredProducts.filter((product: Product) => {
      if (maxPrice) {
        return product.price >= minPrice && product.price <= maxPrice;
      }
      return product.price >= minPrice;
    });
  }

  return (
    <div className="col-span-4 grid grid-cols-1 md:grid-cols-4 gap-6">
      {filteredProducts.map((product: Product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
}