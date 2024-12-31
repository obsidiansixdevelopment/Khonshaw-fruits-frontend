"use client"

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'

export default function Navbar() {
  const path = usePathname();
  const arr = [
    {
      name:'Home',
      link:'/'
    },
    {
      name:'Product',
      link:'/products'
    },
    {
      name:'About',
      link:'about-us'
    },
    {
      name:'Contact',
      link:'/contact-us'
    }
  ]
  return (
    <nav className="absolute top-0 z-20 w-full text-white py-4">
    <div className="max-w-7xl mx-auto flex justify-between items-center md:px-0 px-2">
      <img
        alt="Company Logo"
        className="md:h-24 h-14 max-md:object-contain"
        height={50}
        src="/logo.jpg"
        width={100}
      />
      <ul className="flex md:space-x-6 space-x-3 font-semibold">
        {
          arr.map((ele,i) => (
            <li key={i}>
              <Link className={`hover:text-primary-main ${ele.link === path ? "text-primary-main" : ""}`} href={ele.link}>
                {ele.name}
              </Link>
            </li>

          ))
        }
      </ul>
    </div>
  </nav>
  )
}
