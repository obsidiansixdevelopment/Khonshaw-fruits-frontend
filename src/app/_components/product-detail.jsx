"use client"

/* eslint-disable @next/next/no-img-element */
import React, { useState } from 'react'

export default function ProductDetail() {
    const [vegetableType , setVegetableType] = useState("all")
    const imgProducts = [
        {
          alt: "Basket of onions",
          img: "https://storage.googleapis.com/a1aa/image/Z2VyQhe2wE18ECPu5MiuU5e5Lb44f5R28pVt3eU3NyOVlN9PB.jpg",
          type:'vegetable'
        },
        {
          alt: "Basket of tomatoes",
          img: "https://storage.googleapis.com/a1aa/image/pDfbtwUGUmSlNSWftHHrQexqVJiQzyTT1BTXwB6UVffiJb6fE.jpg",
          type:'vegetable'
        },
        {
          alt: "Green beans",
          img: "https://storage.googleapis.com/a1aa/image/Sb8J0y9Kv1qVEBtMhfQCdNGHNOe7b9IsWnutCjpxxLfcymePB.jpg",
          type:'vegetable'
        },
        {
          alt: "Basket of tomatoes",
          img: "https://storage.googleapis.com/a1aa/image/pDfbtwUGUmSlNSWftHHrQexqVJiQzyTT1BTXwB6UVffiJb6fE.jpg",
          type:'vegetable'
        },
        {
          alt: "Green bananas",
          img: "https://storage.googleapis.com/a1aa/image/HWeZwfi3veFXhIajTR8NoRpAhE5TRA78xDqICem5YKDFlN9PB.jpg",
          type:'fruit'
        },
        {
          alt: "Ginger",
          img: "https://storage.googleapis.com/a1aa/image/1NW9htBTayYpBxhsLkqusxEvqdPqXPfwwbv0vx0mjabospfTA.jpg",
          type:'vegetable'
        },
        {
          alt: "Green beans",
          img: "https://storage.googleapis.com/a1aa/image/Sb8J0y9Kv1qVEBtMhfQCdNGHNOe7b9IsWnutCjpxxLfcymePB.jpg",
          type:'vegetable'
        },
        {
          alt: "Onions",
          img: "https://storage.googleapis.com/a1aa/image/WVHgBor54bZFOFLiiIuSTQsssqtX7BtWKovCn5ocUUyU20fJA.jpg",
          type:'vegetable'
        },
        {
          alt: "Green apples",
          img: "https://storage.googleapis.com/a1aa/image/aGWCaVEmLpbULFw1l7L0zM07bbr8ny4ScMrfatfUQj3WZTfnA.jpg",
          type:'fruit'
        },
      ];
  return (
    <main className="max-w-7xl mx-auto py-8 px-6">
    <div className="text-center mb-8">
      <h2 className="text-heading-main text-xl">
        Discover Our Fresh Selection of Fruits &amp; Vegetables
      </h2>
      <h3 className="text-3xl font-bold text-secondary-main">
        Handpicked for freshness, quality, and your satisfaction.
      </h3>
    </div>
    {/* Filter Buttons */}
    <div className="flex justify-center space-x-4 mb-8">
      <button className={`py-2 px-4 rounded ${vegetableType === "all" ? "bg-secondary-main text-white" : "bg-green-200 text-secondary-main "}`} onClick={() => setVegetableType('all')}>
        All
      </button>
      <button className={`py-2 px-4 rounded ${vegetableType === "fruit" ? "bg-secondary-main text-white" : "bg-green-200 text-secondary-main "}`} onClick={() => setVegetableType('fruit')}>
        Fruits
      </button>
      <button className={`py-2 px-4 rounded ${vegetableType === "vegetable" ? "bg-secondary-main text-white" : "bg-green-200 text-secondary-main "}`} onClick={() => setVegetableType('vegetable')}>
        Vegetables
      </button>
    </div>
    {/* Product Grid */}
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {
            imgProducts.filter((j) => vegetableType === "all" ? true : j.type === vegetableType).map((ele,i) => (
                <img
                  alt={ele.alt}
                  key={i}
                  className="w-full h-64 object-cover rounded"
                  height={300}
                  src={ele.img}
                  width={300}
                />

            ))

        }
      
   
    </div>
  </main>
  )
}
