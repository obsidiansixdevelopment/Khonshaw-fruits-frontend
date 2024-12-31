import React from 'react'
import Navbar from './navbar'

export default function HeroSection() {
  return (
    <section
    className="relative bg-cover bg-center md:h-[120vh]"
    >
      <Navbar />
     <video className="custom-video absolute h-full " loop playsInline muted autoPlay>
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
      <div className='md:pt-0 pt-20'>
        <p className="lg:text-7xl md:text-6xl sm:text-5xl text-4xl max-md:pt-20 font-semibold mb-4">
          Fresh <span className="block"> Groceries </span>Importing to Iraqi Markets
        </p>
        <p className="md:text-lg text-sm md:mb-8 mb-4 text-primary-main uppercase">Khonshnaw vegetables & fruits Trading Company</p>
        <button className="bg-primary-main/80 hover:bg-primary-main/90 text-white font-bold md:py-3 py-2 rounded-full w-44">
          Explore
        </button>
        
      </div>
      <div className="bg-white/10 p-6 rounded-lg w-full max-w-xl">
        <form>
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
            />
          </div>
          <div className="mb-4">
            <label
              className="block text-white mb-2"
              htmlFor="phone-number"
            >
              Phone number*
            </label>
            <input
              className="shadow appearance-none border rounded-xl w-full p-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="phone-number"
              placeholder="Your phone number"
              type="text"
            />
          </div>
          <div className="mb-4">
            <label
              className="block text-white mb-2"
              htmlFor="fruits-import"
            >
              Fresh Fruits Importer to Iraq?
            </label>
            <textarea
              className="shadow appearance-none border rounded-xl w-full p-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="fruits-import"
              placeholder="Enter the fruits you import"
              defaultValue={""}
            />
          </div>
          <button className="bg-primary-main/80 hover:bg-primary-main/90 text-white font-bold py-2 px-4 rounded w-full">
            Submit Form Data Here
          </button>
        </form>
      </div>
    </div>
  </section>
  )
}
