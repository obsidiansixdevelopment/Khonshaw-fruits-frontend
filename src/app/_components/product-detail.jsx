"use client";

import Link from "next/link";
/* eslint-disable @next/next/no-img-element */
import React, { useState } from "react";
import { IoCall } from "react-icons/io5";
import { TbMessageCircleFilled } from "react-icons/tb";

export default function ProductDetail() {
  const [vegetableType, setVegetableType] = useState("all");
  const imgProducts = [
    {
      alt: "Onions",
      img: "https://pbs.twimg.com/media/ER2ogiTWsAABXIX?format=jpg&name=large",
      type: "vegetable",
    },
    {
      alt: "Tomatoes",
      img: "https://images.stockcake.com/public/1/e/b/1eb008cd-a4d0-4a62-8cd6-bd27c0c8f733_large/farmer-harvesting-tomatoes-stockcake.jpg",
      type: "vegetable",
    },
    {
      alt: "Bananas",
      img: "https://theecologist.org/sites/default/files/styles/inline_l/public/NG_media/396044.jpg?itok=pqjLF-bj",
      type: "fruit",
    },
    // {
    //   alt: "Ginger",
    //   img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTBjh4JJ1N36_MY9KpYc9UdHytRXzEslwzJbg&s",
    //   type:'vegetable'
    // },
    // {
    //   alt: "Green beans",
    //   img: "https://media.post.rvohealth.io/wp-content/uploads/2020/06/green-beans-732x549-thumbnail.jpg",
    //   type:'vegetable'
    // },
    {
      alt: "Garlic",
      img: "https://wwwi.globalpiyasa.com/lib/Urun/670/5428493e063128e97968479d37ae8d6d_2.jpg",
      type: "vegetable",
    },
    {
      alt: "apples",
      img: "https://mamalovesitaly.com/wp-content/uploads/2021/11/Red-apples-on-tree-in-Italy.jpg",
      type: "fruit",
    },
    {
      alt: "Mandarin",
      img: "https://capetradeportal.com/wordpress/wp-content/upload2/2022/03/Nadorcott-E10D-1xx-768x1024.jpeg", // Replace with the actual image URL
      type: "fruit",
    },
    // {
    //   alt: "Pineapple",
    //   img: "https://m.media-amazon.com/images/I/71C-mAYZWTL._AC_UF1000,1000_QL80_.jpg",  // Replace with the actual image URL
    //   type: "fruit",
    // },
    {
      alt: "Lemon",
      img: "https://d3fwccq2bzlel7.cloudfront.net/Pictures/480xAny/6/6/4/126664_2_1218110_e.jpg", // Replace with the actual image URL
      type: "fruit",
    },
    // {
    //   alt: "Strawberry",
    //   img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTvWbyE0J8E6XLzTvD8t8XsLQDVIZ9FPKtmxA&s",  // Replace with the actual image URL
    //   type: "fruit",
    // },
    // {
    //   alt: "broccoli",
    //   img: "https://images.squarespace-cdn.com/content/v1/5b5aa0922487fd1ce32c117a/1547765015801-FSR1DVSKCZU3PAYWIRQG/broccoli.jpg",  // Replace with the actual image URL
    //   type: "vegetable",
    // },
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
        <button
          className={`py-2 px-4 rounded ${
            vegetableType === "all"
              ? "bg-secondary-main text-white"
              : "bg-green-200 text-secondary-main "
          }`}
          onClick={() => setVegetableType("all")}
        >
          All
        </button>
        <button
          className={`py-2 px-4 rounded ${
            vegetableType === "fruit"
              ? "bg-secondary-main text-white"
              : "bg-green-200 text-secondary-main "
          }`}
          onClick={() => setVegetableType("fruit")}
        >
          Fruits
        </button>
        <button
          className={`py-2 px-4 rounded ${
            vegetableType === "vegetable"
              ? "bg-secondary-main text-white"
              : "bg-green-200 text-secondary-main "
          }`}
          onClick={() => setVegetableType("vegetable")}
        >
          Vegetables
        </button>
      </div>
      {/* Product Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {imgProducts
          .filter((j) =>
            vegetableType === "all" ? true : j.type === vegetableType
          )
          .map((ele, i) => (
            <div key={i} className="relative group">
              <img
                alt={ele.alt}
                className="w-full h-64 object-cover rounded"
                height={300}
                src={ele.img}
                width={300}
              />
              <div className="absolute top-0 left-0 group-hover:bg-black/20 transition-transform h-full w-full flex justify-center items-center text-white gap-4">
                
              <Link href={'tel:+9647509252524'} className="hidden group-hover:inline text-xl font-semibold text-primary-main capitalize">
                <IoCall className="bg-primary-main text-white text-4xl rounded-full p-2" />
                </Link>
                <Link href={'/contact-us#form-data'} className="hidden group-hover:inline text-xl font-semibold text-primary-main capitalize">
                <TbMessageCircleFilled className="bg-primary-main text-white text-4xl rounded-full p-2" />
                </Link>
              </div>

            </div>
          ))}
      </div>
    </main>
  );
}
