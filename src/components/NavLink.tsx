"use client";
import React from 'react'
import { usePathname } from 'next/navigation';
import Link from 'next/link';

interface Props{
    name: string;
    path: string;
}

export default function NavLink({name, path} : Props) {
    const pathName = usePathname();
    return (
        <Link href={path} className={pathName === path ? 'text-black' : ''}>{name}</Link>
    )
}
