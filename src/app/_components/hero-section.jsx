"use client";

import React, { useState } from "react";
import Link from "next/link";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";

export default function HeroSection() {
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({
    description: "",
    number: "",
    fruit: "",
  });

  const handleChange = (e) => {
    setFormData((prevData) => ({
      ...prevData,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const res = await axios.post(
        `${process.env.NEXT_PUBLIC_URL}/enquiry`,
        formData
      );
      console.log("Submission successful:", res);
      toast.success("Form submitted successfully!");
      setFormData({
        description: "",
        number: "",
        fruit: "",
      });
    } catch (error) {
      console.error("Error during form submission:", error);
      toast.error("Failed to submit the form. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section className="relative bg-cover bg-center md:h-[110vh]">
      <video
        className="custom-video absolute h-full w-full object-cover"
        loop
        playsInline
        muted
        autoPlay
      >
        <source src="/hero.mp4" type="video/mp4" />
        <track
          src="/video1.mp4"
          kind="subtitles"
          srcLang="en"
          label="English"
        />
        Your browser does not support the video tag.
      </video>

      <div className="absolute inset-0 bg-black opacity-70"></div>
      <div className="max-w-7xl mx-auto relative z-10 grid md:grid-cols-2 gap-6 items-center justify-center h-full text-white p-4">
        <div className="md:pt-0 pt-10">
          <p className="lg:text-7xl md:text-6xl sm:text-5xl text-4xl max-md:pt-20 font-semibold mb-4">
            Fresh <span className="block">Groceries</span> Importing to Iraqi
            Markets
          </p>
          <p className="md:text-lg text-sm md:mb-8 mb-4 text-primary-main uppercase">
            Khonshnaw Vegetables & Fruits Trading Company
          </p>
          <Link
            href="/products"
            className="bg-primary-main/80 hover:bg-primary-main/90 text-white font-bold md:py-3 py-2 rounded-full w-44 md:px-20 px-10"
          >
            Explore
          </Link>
        </div>
        <div className="bg-white/10 p-6 rounded-lg w-full max-w-xl">
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label
                className="block text-white mb-2"
                htmlFor="business-description"
              >
                Fresh Grocery Market Factory Importer
              </label>
              <input
                className="shadow appearance-none border rounded-xl w-full p-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="business-description"
                placeholder="Enter your business description here"
                type="text"
                name="description"
                aria-label="Business Description"
                value={formData.description}
                onChange={handleChange}
              />
            </div>
            <div className="mb-4">
              <label className="block text-white mb-2" htmlFor="phone-number">
                Phone Number*
              </label>
              <input
                className="shadow appearance-none border rounded-xl w-full p-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="phone-number"
                placeholder="Your phone number"
                type="text"
                name="number"
                aria-label="Phone Number"
                value={formData.number}
                onChange={handleChange}
              />
            </div>
            <div className="mb-4">
              <label className="block text-white mb-2" htmlFor="fruits-import">
                Fresh Fruits Importer to Iraq?
              </label>
              <textarea
                className="shadow appearance-none border rounded-xl w-full p-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="fruits-import"
                placeholder="Enter the fruits you import"
                name="fruit"
                aria-label="Fruits Imported"
                value={formData.fruit}
                onChange={handleChange}
              />
            </div>
            <button
              className="bg-primary-main/80 hover:bg-primary-main/90 text-white font-bold py-2 px-4 rounded w-full"
              type="submit"
              disabled={isLoading}
            >
              {isLoading ? "Submitting..." : "Submit Form Data Here"}
            </button>
          </form>
          <ToastContainer />
        </div>
      </div>
    </section>
  );
}
