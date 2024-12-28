import Link from 'next/link'
import React from 'react'

export default function Navbar() {
  return (
    <nav className="absolute top-0 z-20 w-full text-white py-4">
    <div className="max-w-7xl mx-auto flex justify-between items-center">
      <img
        alt="Company Logo"
        className="md:h-24 h-14 max-md:object-contain"
        height={50}
        src="https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=174,fit=crop,q=95/AGB4ykaxK8TJ7bpG/asset-3-copy-YBg4ZJ0GOMUgkPBl.jpg"
        width={100}
      />
      <ul className="flex space-x-8 font-semibold">
        <li>
          <Link className="hover:text-primary-main" href="/">
            Home
          </Link>
        </li>
        {/* <li>
          <Link className="hover:text-primary-main" href="/about-us">
            About
          </Link>
        </li> */}
        <li>
          <Link className="hover:text-primary-main" href="/products">
            Product
          </Link>
        </li>
        {/* <li>
          <Link className="hover:text-primary-main" href="/contact-us">
            Contact Us
          </Link>
        </li>
         */}
      </ul>
    </div>
  </nav>
  )
}
