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
          img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQgOzWOh8PxlBvjLVRa_-45hqOSFB_S9PVp9Q&s",
          type:'vegetable'
        },
        {
          alt: "Green bananas",
          img: "https://storage.googleapis.com/a1aa/image/HWeZwfi3veFXhIajTR8NoRpAhE5TRA78xDqICem5YKDFlN9PB.jpg",
          type:'fruit'
        },
        {
          alt: "Ginger",
          img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTBjh4JJ1N36_MY9KpYc9UdHytRXzEslwzJbg&s",
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
        {
          alt: "Carrot",
          img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTba3FfUO6CI9cySnHdGt1roZY60bdUInxLXQ&s",  // Replace with the actual image URL
          type: "vegetable",
        },
        {
          alt: "Pineapple",
          img: "https://m.media-amazon.com/images/I/71C-mAYZWTL._AC_UF1000,1000_QL80_.jpg",  // Replace with the actual image URL
          type: "fruit",
        },
        {
          alt: "Cucumber",
          img: "https://gourmetgarden.in/cdn/shop/products/English_Cucumber_ce5b7ab7-abe5-4985-bbc5-14e6d7041d2a_1280x.jpg?v=1735312954",  // Replace with the actual image URL
          type: "vegetable",
        },
        {
          alt: "Strawberry",
          img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTvWbyE0J8E6XLzTvD8t8XsLQDVIZ9FPKtmxA&s",  // Replace with the actual image URL
          type: "fruit",
        },
        {
          alt: "broccoli",
          img: "https://images.squarespace-cdn.com/content/v1/5b5aa0922487fd1ce32c117a/1547765015801-FSR1DVSKCZU3PAYWIRQG/broccoli.jpg",  // Replace with the actual image URL
          type: "vegetable",
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
