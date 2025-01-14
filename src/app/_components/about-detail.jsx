"use client"


import axios from 'axios';
import Link from 'next/link'
import React, { useEffect, useState } from 'react'

export default function AboutDetail() {
  const [isData , setIsData] = useState([]);
  const isFetch = async () => {
    try{
      const res = await axios.get(`${process.env.NEXT_PUBLIC_URL}/about`);
      console.log(res.data.data , "done");
      setIsData(res.data.data)
    }
    catch(err){
      console.log(err , "Error hai");
    }
  }
  useEffect(() => {
    isFetch();
  },[])
  return (
    <main className="max-w-7xl mx-auto py-12 md:px-0 px-4">
    <div className="flex flex-col md:flex-row md:space-x-12">
      <div className="md:w-2/3">
        <div className="flex items-center space-x-4 mb-6">
          <span className="text-6xl text-secondary-main font-bold">{isData.yearsOfExperience}</span>
          <span className="text-xl text-gray-600">Years of Experience</span>
        </div>
        <h2 className="text-3xl font-bold text-green-900 mb-4">
        {isData.title}
        </h2>
        <p className="text-gray-700 mb-6">
        {isData.description}
        </p>
        <div>
        <img
          alt="Assorted Fresh Produce"
          className="w-full h-auto md:h-96 object-cover rounded mb-6"
          src="https://storage.googleapis.com/a1aa/image/RAJAw6tFMfx6QaxLyiMEZxu5uIrefPK5u4KS4HEXBnocOnePB.jpg"
        />
    

        </div>
      </div>
      <div className="md:w-1/3 space-y-10">
  <div className="bg-white p-6 shadow shadow-secondary-main rounded">
    <div className="flex items-center space-x-4 mb-4">
      <i className="fas fa-award text-secondary-main text-3xl"></i>
      <h3 className="text-xl font-bold text-green-900">Quality Assurance</h3>
    </div>
    <p className="text-gray-700">
      We prioritize the highest standards in quality to ensure customer satisfaction and trust.
    </p>
  </div>
  <div className="bg-white p-6 shadow shadow-secondary-main rounded">
    <div className="flex items-center space-x-4 mb-4">
      <i className="fas fa-users text-secondary-main text-3xl"></i>
      <h3 className="text-xl font-bold text-green-900">Dedicated Team</h3>
    </div>
    <p className="text-gray-700">
      Our team of skilled professionals is committed to delivering excellence at every step.
    </p>
  </div>
  <div className="bg-white p-6 shadow shadow-secondary-main rounded">
    <div className="flex items-center space-x-4 mb-4">
      <i className="fas fa-globe text-secondary-main text-3xl"></i>
      <h3 className="text-xl font-bold text-green-900">Global Reach</h3>
    </div>
    <p className="text-gray-700">
      We serve customers worldwide with a reliable supply chain and timely deliveries.
    </p>
  </div>
  <div className="bg-white p-6 shadow shadow-secondary-main rounded">
    <div className="flex items-center space-x-4 mb-4">
      <i className="fas fa-seedling text-secondary-main text-3xl"></i>
      <h3 className="text-xl font-bold text-green-900">Sustainable Practices</h3>
    </div>
    <p className="text-gray-700">
      We are committed to environmentally friendly practices that support a greener future.
    </p>
  </div>
</div>

    </div>
  </main>
  )
}
