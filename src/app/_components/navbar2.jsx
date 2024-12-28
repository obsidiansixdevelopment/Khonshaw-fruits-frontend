import Link from 'next/link'
import React from 'react'

export default function Navbar2() {
  return (
    <div>
        {/* Header */}
        <header className="bg-green-900 text-white">
          <div className="container mx-auto flex justify-between items-center py-4 px-6">
            <div className="flex items-center space-x-4">
              <i className="fas fa-phone-alt"></i>
              <span>+91 92262 63836</span>
              <i className="fas fa-envelope"></i>
              <span>info@raktrading.co.in</span>
            </div>
            <div className="flex space-x-4">
              <a href="#">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="#">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="#">
                <i className="fab fa-instagram"></i>
              </a>
              <a href="#">
                <i className="fab fa-linkedin-in"></i>
              </a>
            </div>
          </div>
        </header>
        {/* Navigation */}
        <nav className="bg-green-700 text-white">
          <div className="container mx-auto flex justify-between items-center py-4 px-6">
            <div className="flex items-center space-x-4">
              <img
                alt="Company Logo"
                className="h-10"
                height={50}
                src="https://storage.googleapis.com/a1aa/image/CYxu6qXhh8rFFJ12MmdTWkyag6g2T6uzY26JYhsKjY1X20fJA.jpg"
                width={50}
              />
              <span className="text-xl font-bold">Raka Trading Co.</span>
            </div>
            <ul className="flex space-x-6">
              <li>
                <Link className="hover:text-gray-300" href="/">
                  Home
                </Link>
              </li>
              {/* <li>
                <Link className="hover:text-gray-300" href="/about-us">
                  About
                </Link>
              </li> */}
              <li>
                <Link className="hover:text-gray-300" href="/products">
                  Product
                </Link>
              </li>
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
