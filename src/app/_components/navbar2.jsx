"use client";

/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import MainHeader from "./main-header";

export default function Navbar2() {
  const path = usePathname();
  const arr = [
    {
      name: "Home",
      link: "/",
    },
    {
      name: "Product",
      link: "/products",
    },
    {
      name: "About",
      link: "/about-us",
    },
    {
      name: "Contact",
      link: "/contact-us",
    },
  ];
  return (
    <div>
      <MainHeader />
      <nav className="bg-secondary-main text-white">
        <div className="max-w-7xl mx-auto flex justify-between items-center md:py-4 py-2 md:px-0 px-4 ">
          <div className="flex items-center">
            <img
              alt="Company Logo"
              className="h-14 object-contain"
              src="/logo.jpg"
            />
          </div>
          <ul className="flex md:space-x-6 space-x-3">
            {arr.map((ele, i) => (
              <li key={i}>
                <Link
                  className={`hover:text-gray-300 max-md:text-sm font-medium ${
                    ele.link === path ? "text-primary-main" : ""
                  }`}
                  href={ele.link}
                >
                  {ele.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </div>
  );
}
