"use client";
import { useSession } from "next-auth/react";
import Link from "next/link";

export default function Cart() {
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
        <h1 className="text-2xl font-bold text-center">Please sign in to view your cart</h1>
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
      <h1 className="text-3xl font-bold mb-8">Your Cart</h1>

      <div className="text-center py-12">
        <p className="text-gray-600 mb-4">Your cart is empty</p>
        <Link 
          href="/products" 
          className="px-6 py-2 bg-black text-white rounded-md hover:bg-white hover:text-black cursor-pointer transition-colors inline-block"
        >
          Continue Shopping
        </Link>
      </div>

      {/* When cart has items, we'll show this section */}
      {/* <div className="grid grid-cols-1 gap-4">
        {cartItems.map((item) => (
          <CartItem key={item.id} item={item} />
        ))}
        <div className="mt-8 p-4 bg-gray-50 rounded-lg">
          <div className="flex justify-between mb-4">
            <span className="font-semibold">Total:</span>
            <span className="font-bold">${total}</span>
          </div>
          <button className="w-full px-6 py-2 bg-black text-white rounded-md hover:bg-gray-800 transition-colors">
            Checkout
          </button>
        </div>
      </div> */}
    </div>
  );
}