"use client"

import React, { useState } from 'react'
import Navbar2 from '../_components/navbar2'
import Footer from '../_components/footer'
import HeroSection2 from '../_components/hero-section2'
import HappyClient from '../_components/happy-client'
import TestimonialSlider from '../_components/testimonal-slider'
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function ContactUs() {
  const [formData, setFormData] = useState({
    businessDescription: "",
    phoneNumber: "",
    fruitsImport: "",
  });

  const handleChange = (e) => {
    setFormData((prevData) => ({
      ...prevData,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data:", formData);

    if (
      formData.businessDescription.trim() &&
      formData.phoneNumber.trim() &&
      formData.fruitsImport.trim()
    ) {
      toast.success("Form submitted successfully!");
      setFormData({
        businessDescription: "",
        phoneNumber: "",
        fruitsImport: "",
      });
    } else {
      toast.error("Please fill out all fields!");
    }
  };
  
  return (
    <>
  <Navbar2 />
  <HeroSection2 name={'Nourishing Fruits, Freshly Picked for You'} img={'https://images.unsplash.com/photo-1489450278009-822e9be04dff?q=80&w=2072&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'} />

  
  <section className="max-w-7xl mx-auto my-10 px-6">
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      <div className="bg-white p-6 shadow-md text-center">
        <i className="fas fa-leaf text-secondary-main text-4xl mb-4"></i>
        <h3 className="text-xl font-bold mb-2">High-Quality Produce</h3>
        <p>Delivering the best quality fruits &amp; vegetables.</p>
      </div>
      <div className="bg-white p-6 shadow-md text-center">
        <i className="fas fa-globe text-secondary-main text-4xl mb-4"></i>
        <h3 className="text-xl font-bold mb-2">Global Reach</h3>
        <p>
          Reaching the global market, meeting the needs of international
          markets.
        </p>
      </div>
      <div className="bg-white p-6 shadow-md text-center">
        <i className="fas fa-dollar-sign text-secondary-main text-4xl mb-4"></i>
        <h3 className="text-xl font-bold mb-2">Competitive Pricing</h3>
        <p>Offering the best produce at the most competitive rates.</p>
      </div>
    </div>
  </section>
  <HappyClient />
  <section className="my-10">
    <div className="max-w-7xl mx-auto px-6">
      <h2 className="text-3xl font-bold text-secondary-main mb-6 text-center">
        A Few Reasons Why People Choose Us
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white p-6 shadow-md text-center">
          <i className="fas fa-smile text-secondary-main text-4xl mb-4"></i>
          <h3 className="text-xl font-bold mb-2">100% Satisfaction</h3>
        </div>
        <div className="bg-white p-6 shadow-md text-center">
          <i className="fas fa-dollar-sign text-secondary-main text-4xl mb-4"></i>
          <h3 className="text-xl font-bold mb-2">Competitive Pricing</h3>
        </div>
        <div className="bg-white p-6 shadow-md text-center">
          <i className="fas fa-users text-secondary-main text-4xl mb-4"></i>
          <h3 className="text-xl font-bold mb-2">Dedicated Team</h3>
        </div>
      </div>
    </div>
  </section>
  <section className=" my-10">
    <div className="max-w-7xl mx-auto md:px-0 px-4">
      {/* <h2 className="text-3xl font-bold text-secondary-main mb-6 text-center">
        Contact Us
      </h2> */}
     <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label
            className="block text-secondary-main font-medium mb-2"
            htmlFor="business-description"
          >
            Fresh Grocery Market Factory Importer
          </label>
          <input
            className="shadow appearance-none border rounded-xl w-full p-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="business-description"
            placeholder="Enter your business description here"
            type="text"
            name='businessDescription'
            value={formData.businessDescription}
            onChange={handleChange}
          />
        </div>
        <div className="mb-4">
          <label
            className="block text-secondary-main font-medium mb-2"
            htmlFor="phone-number"
          >
            Phone number*
          </label>
          <input
            className="shadow appearance-none border rounded-xl w-full p-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="phone-number"
            placeholder="Your phone number"
            type="text"
            value={formData.phoneNumber}
            name='phoneNumber'
            onChange={handleChange}
          />
        </div>
        <div className="mb-4">
          <label
            className="block text-secondary-main font-medium mb-2"
            htmlFor="fruits-import"
          >
            Fresh Fruits Importer to Iraq?
          </label>
          <textarea
            className="shadow appearance-none border rounded-xl w-full p-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="fruits-import"
            placeholder="Enter the fruits you import"
            value={formData.fruitsImport}
            name='fruitsImport'
            onChange={handleChange}
          />
        </div>
        <button
          className="bg-secondary-main/80 hover:bg-secondary-main/90 text-white font-bold py-2 px-4 rounded w-full"
          type="submit"
        >
          Submit Form Data Here
        </button>
      </form>
      <ToastContainer />
    </div>
  </section>
  
  <TestimonialSlider />
  <Footer />
</>

  )
}


// https://storage.googleapis.com/a1aa/image/BrZZuMBOY2ofcS0K9ZDaYy1ZXDdFgrPAeU6Tv6X8edRifP9PB.jpg