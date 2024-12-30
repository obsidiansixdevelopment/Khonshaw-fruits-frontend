import Link from 'next/link'
import React from 'react'

export default function AboutDetail() {
  return (
    <main className="max-w-7xl mx-auto py-12 md:px-0 px-4">
    <div className="flex flex-col md:flex-row md:space-x-12">
      <div className="md:w-2/3">
        <div className="flex items-center space-x-4 mb-6">
          <span className="text-6xl text-secondary-main font-bold">5</span>
          <span className="text-xl text-gray-600">Years of Experience</span>
        </div>
        <h2 className="text-3xl font-bold text-green-900 mb-4">
          Your Trusted Partner in Global Fresh Produce Export
        </h2>
        <p className="text-gray-700 mb-6">
          Raka Trading Company is a leading exporter of premium fresh fruits and
          vegetables worldwide. With years of industry experience and strong,
          longstanding relationships with trusted farmers, we ensure that our
          customers receive the highest quality products at the most competitive
          prices. Our commitment to excellence, coupled with our deep
          understanding of global markets, allows us to deliver fresh,
          sustainable produce to meet the diverse needs of our clients.
        </p>
        <div>
        <img
          alt="Assorted Fresh Produce"
          className="w-full h-auto md:h-96 object-cover rounded mb-6"
          src="https://storage.googleapis.com/a1aa/image/RAJAw6tFMfx6QaxLyiMEZxu5uIrefPK5u4KS4HEXBnocOnePB.jpg"
        />
        {/* <Link
          className="bg-secondary-main text-white py-2 px-4 rounded hover:bg-green-800"
          href="#"
        >
          Explore More
        </Link> */}

        </div>
      </div>
      <div className="md:w-1/3 space-y-10">
        <div className="bg-white p-6 shadow shadow-secondary-main rounded">
          <div className="flex items-center space-x-4 mb-4">
            <i className="fas fa-award text-secondary-main text-3xl"></i>
            <h3 className="text-xl font-bold text-green-900">
              Quality Assurance
            </h3>
          </div>
          <p className="text-gray-700">
            We are committed to sustainability and quality assurance.
          </p>
        </div>
        <div className="bg-white p-6 shadow shadow-secondary-main rounded">
          <div className="flex items-center space-x-4 mb-4">
            <i className="fas fa-users text-secondary-main text-3xl"></i>
            <h3 className="text-xl font-bold text-green-900">Dedicated Team</h3>
          </div>
          <p className="text-gray-700">
            Our success is powered by a dedicated team of experienced
            professionals.
          </p>
        </div>
        <div className="bg-white p-6 shadow shadow-secondary-main rounded">
          <div className="flex items-center space-x-4 mb-4">
            <i className="fas fa-users text-secondary-main text-3xl"></i>
            <h3 className="text-xl font-bold text-green-900">Dedicated Team</h3>
          </div>
          <p className="text-gray-700">
            Our success is powered by a dedicated team of experienced
            professionals.
          </p>
        </div>
        <div className="bg-white p-6 shadow shadow-secondary-main rounded">
          <div className="flex items-center space-x-4 mb-4">
            <i className="fas fa-users text-secondary-main text-3xl"></i>
            <h3 className="text-xl font-bold text-green-900">Dedicated Team</h3>
          </div>
          <p className="text-gray-700">
            Our success is powered by a dedicated team of experienced
            professionals.
          </p>
        </div>  
      </div>
    </div>
  </main>
  )
}
