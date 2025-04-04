import React from 'react'
import { Search, Heart, ShoppingCart, User } from "lucide-react";
import Link from 'next/link';
import NavLink from './NavLink';
import { auth } from '@/util/auth';

const navItems = [
    {name: 'Home', path: '/'},
    {name: 'Products', path: '/products'},
    {name: 'About', path: '/about'},  
];

export default async function NavBar() {
  const session = await auth();
  console.log(session);

  return (
    <nav className="w-full bg-white shadow-md">
      <div className="container mx-auto flex items-center justify-between py-4 px-10">

        <div className="text-xl font-bold">
          <Link href="/">cyber</Link>
        </div>

        <div className="relative w-1/3">
          <input
            type="text"
            placeholder="Search"
            className="w-full pl-10 pr-4 py-2 rounded-md bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-300"
          />
          <Search className="absolute left-3 top-2.5 text-gray-500" size={18} />
        </div>

        <ul className="hidden md:flex space-x-6 text-gray-600">
            {navItems.map(({name, path}) => (
                <li key={name} className="font-semibold hover:text-black cursor-pointer">
                    <NavLink name={name} path={path}/>
                </li>
            ))}
        </ul>

        <div className="flex space-x-4 text-gray-600">
            <Link href="/favorites">
              <Heart className="cursor-pointer hover:text-black" size={22} />
            </Link>
            <Link href="/cart">
             <ShoppingCart className="cursor-pointer hover:text-black" size={22} />
            </Link>
            <Link href="/account">
              <User className="cursor-pointer hover:text-black" size={22} />
            </Link>
        </div>
      </div>
    </nav>
  )
}
