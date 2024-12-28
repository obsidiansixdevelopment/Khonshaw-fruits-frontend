import React from "react";
import HeroSection2 from "../_components/hero-section2";
import Footer from "../_components/footer";
import Link from "next/link";
import Navbar2 from "../_components/navbar2";

export default function page() {
  return (
    <>
      <Navbar2 />
      {/* Hero Section */}
      <HeroSection2 />
      {/* Breadcrumb */}
      <div className="container mx-auto py-4 px-6">
        <p className="text-gray-600">Home / Projects</p>
      </div>
      {/* Main Content */}
      <main className="max-w-7xl mx-auto py-8 px-6">
        <div className="text-center mb-8">
          <h2 className="text-green-700 text-xl">
            Discover Our Fresh Selection of Fruits &amp; Vegetables
          </h2>
          <h3 className="text-3xl font-bold text-green-900">
            Handpicked for freshness, quality, and your satisfaction.
          </h3>
        </div>
        {/* Filter Buttons */}
        <div className="flex justify-center space-x-4 mb-8">
          <button className="bg-green-200 text-green-900 py-2 px-4 rounded">
            All
          </button>
          <button className="bg-green-200 text-green-900 py-2 px-4 rounded">
            Fresh Fruits
          </button>
          <button className="bg-green-200 text-green-900 py-2 px-4 rounded">
            Fresh Vegetables
          </button>
        </div>
        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          <img
            alt="Basket of onions"
            className="w-full h-64 object-cover rounded"
            height={300}
            src="https://storage.googleapis.com/a1aa/image/Z2VyQhe2wE18ECPu5MiuU5e5Lb44f5R28pVt3eU3NyOVlN9PB.jpg"
            width={300}
          />
          <img
            alt="Basket of tomatoes"
            className="w-full h-64 object-cover rounded"
            height={300}
            src="https://storage.googleapis.com/a1aa/image/pDfbtwUGUmSlNSWftHHrQexqVJiQzyTT1BTXwB6UVffiJb6fE.jpg"
            width={300}
          />
          <img
            alt="Green beans"
            className="w-full h-64 object-cover rounded"
            height={300}
            src="https://storage.googleapis.com/a1aa/image/Sb8J0y9Kv1qVEBtMhfQCdNGHNOe7b9IsWnutCjpxxLfcymePB.jpg"
            width={300}
          />
          <img
            alt="Basket of tomatoes"
            className="w-full h-64 object-cover rounded"
            height={300}
            src="https://storage.googleapis.com/a1aa/image/pDfbtwUGUmSlNSWftHHrQexqVJiQzyTT1BTXwB6UVffiJb6fE.jpg"
            width={300}
          />
          <img
            alt="Green bananas"
            className="w-full h-64 object-cover rounded"
            height={300}
            src="https://storage.googleapis.com/a1aa/image/HWeZwfi3veFXhIajTR8NoRpAhE5TRA78xDqICem5YKDFlN9PB.jpg"
            width={300}
          />
          <img
            alt="Ginger"
            className="w-full h-64 object-cover rounded"
            height={300}
            src="https://storage.googleapis.com/a1aa/image/1NW9htBTayYpBxhsLkqusxEvqdPqXPfwwbv0vx0mjabospfTA.jpg"
            width={300}
          />
          <img
            alt="Green beans"
            className="w-full h-64 object-cover rounded"
            height={300}
            src="https://storage.googleapis.com/a1aa/image/Sb8J0y9Kv1qVEBtMhfQCdNGHNOe7b9IsWnutCjpxxLfcymePB.jpg"
            width={300}
          />
          <img
            alt="Onions"
            className="w-full h-64 object-cover rounded"
            height={300}
            src="https://storage.googleapis.com/a1aa/image/WVHgBor54bZFOFLiiIuSTQsssqtX7BtWKovCn5ocUUyU20fJA.jpg"
            width={300}
          />
          <img
            alt="Green apples"
            className="w-full h-64 object-cover rounded"
            height={300}
            src="https://storage.googleapis.com/a1aa/image/aGWCaVEmLpbULFw1l7L0zM07bbr8ny4ScMrfatfUQj3WZTfnA.jpg"
            width={300}
          />
        </div>
      </main>
      {/* Footer */}
      <Footer />
    </>
  );
}
