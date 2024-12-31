/* eslint-disable @next/next/no-img-element */
import React from 'react'

export default function HeroSection2({name , img}) {
  return (
    <section className="relative">
    <img
      alt="Fruits and Vegetables"
      className="w-full h-96 object-cover"
      height={400}
      src={img}
      width={1920}
    />
    <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
      <h1 className="text-5xl text-white font-bold">{name}</h1>
    </div>
  </section>
  )
}
