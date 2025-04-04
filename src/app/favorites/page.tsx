"use client";
import { useSession } from "next-auth/react";
import Link from "next/link";

export default function Favorites() {
  const { data: session, status } = useSession();

  if (status === "loading") {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-black"></div>
      </div>
    );
  }

  if (!session) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center gap-4 px-4">
        <h1 className="text-2xl font-bold text-center">Please sign in to view your favorites</h1>
        <Link 
          href="/account" 
          className="px-6 py-2 bg-black text-white rounded-md hover:bg-white hover:text-black cursor-pointer transition-colors"
        >
          Sign in
        </Link>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Your Favorites</h1>

      <div className="text-center py-12">
        <p className="text-gray-600 mb-4">No favorites yet</p>
        <Link 
          href="/products" 
          className="text-black hover:underline"
        >
          Start shopping
        </Link>
      </div>

      {/* When there are favorites, we'll map through them here */}
      {/* <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        {favorites.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div> */}
    </div>
  );
}