"use client"

/* eslint-disable @next/next/no-img-element */
import Link from 'next/link'
import { usePathname } from 'next/navigation';
import React from 'react'

export default function Navbar2() {
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
      link:'/about-us'
    },
    {
      name:'Contact',
      link:'/contact-us'
    }
  ]
  return (
    <div>
        <header className="bg-secondary-main/80 text-white">
          <div className="max-w-7xl mx-auto flex justify-between items-center py-4 md:px-0 px-2">
            <div className="flex items-center md:space-x-4 max-md:justify-between w-full">
              <div className='space-x-2'>
                <i className="fas fa-phone-alt"></i>
                <span>00971504459495</span>
              </div>
              <div className='space-x-2'>
                <i className="fas fa-envelope"></i>
                <span>info@khonshnaw.co.in</span>

              </div>
            </div>
            <div className="md:flex space-x-4 hidden">
              <a href="#">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="#">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="#">
                <i className="fab fa-instagram"></i>
              </a>
            </div>
          </div>
        </header>
        {/* Navigation */}
        <nav className="bg-secondary-main text-white">
          <div className="max-w-7xl mx-auto flex justify-between items-center md:py-4 py-2 md:px-0 px-4 ">
            <div className="flex items-center">
               <img
                  alt="Company Logo"
                  className="h-14 object-contain"
                  src="/logo.jpg"
                />
            </div>
            <ul className="flex md:space-x-6 space-x-2">
            {
          arr.map((ele,i) => (
            <li key={i}>
              <Link className={`hover:text-gray-300 ${ele.link === path ? "text-primary-main" : ""}`} href={ele.link}>
                {ele.name}
              </Link>
            </li>

          ))
        }
            
              {/* <li>
                <Link className="hover:text-gray-300" href="/contact-us">
                  Contact Us
                </Link>
              </li> */}
            </ul>
          </div>
        </nav>
    </div>
  )
}
