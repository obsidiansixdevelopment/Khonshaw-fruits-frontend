import React from 'react'

export default function AboutUs2() {
  return (
    <>
  <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 items-center md:px-0 px-6 md:my-10 my-6 gap-8">
  <div className="pr-0 md:pr-10">
    <h2 className="text-secondary-main text-lg md:text-xl font-semibold text-center md:text-left">
      Why Choose Khoshnaw Vegetables & Fruits Trading Company?
    </h2>
    <h1 className="text-3xl md:text-5xl font-bold text-green-900 mt-4 text-center md:text-left">
      Your Trusted Partner for Freshness and Quality
    </h1>
    <p className="text-gray-700 mt-4 max-w-2xl mx-auto md:mx-0 text-center md:text-left">
      {`At Khoshnaw Vegetables & Fruits Trading Company, we go beyond delivering fresh produce—we deliver trust, excellence, and value. Here's why we stand out:`}
    </p>
    <ul className="list-disc list-inside text-gray-700 mt-6 space-y-2">
      <li>
        <strong>Farm-to-Table Freshness:</strong> We source directly from trusted farmers, ensuring every fruit and vegetable meets the highest standards of quality and freshness.
      </li>
      <li>
        <strong>Unmatched Reliability:</strong> Our dedication to timely and efficient global delivery ensures your orders always arrive as promised.
      </li>
      <li>
        <strong>Competitive Advantage:</strong> We combine exceptional quality with unbeatable pricing, providing outstanding value for your investment.
      </li>
      <li>
        <strong>Long-Lasting Partnerships:</strong> Our customer-first approach fosters strong, reliable relationships built on trust and consistent supply.
      </li>
    </ul>
  </div>
  <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
    <div className="bg-white shadow-lg rounded-lg p-6 text-center">
      <div className="bg-green-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
        <i className="fas fa-check text-secondary-main text-2xl" />
      </div>
      <h3 className="text-green-900 text-xl font-semibold">Farm-to-Table Freshness</h3>
    </div>
    <div className="bg-white shadow-lg rounded-lg p-6 text-center">
      <div className="bg-green-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
        <i className="fas fa-shipping-fast text-secondary-main text-2xl" />
      </div>
      <h3 className="text-green-900 text-xl font-semibold">Unmatched Reliability</h3>
    </div>
    <div className="bg-white shadow-lg rounded-lg p-6 text-center">
      <div className="bg-green-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
        <i className="fas fa-dollar-sign text-secondary-main text-2xl" />
      </div>
      <h3 className="text-green-900 text-xl font-semibold">Competitive Advantage</h3>
    </div>
    <div className="bg-white shadow-lg rounded-lg p-6 text-center">
      <div className="bg-green-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
        <i className="fas fa-users text-secondary-main text-2xl" />
      </div>
      <h3 className="text-green-900 text-xl font-semibold">Long-Lasting Partnerships</h3>
    </div>
  </div>
</div>


</>

  )
}
