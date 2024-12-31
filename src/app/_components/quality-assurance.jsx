import React from 'react'

export default function QualityAssurance() {
  return (
    <div className='relative w-full max-w-7xl mx-auto md:mb-28  md:px-0 px-4'>
  <div className="px-4 sm:px-6 lg:px-8 md:absolute -top-20 shadow-lg bg-white rounded-md">
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      <div className="bg-white p-6 rounded-lg flex items-center">
        <div className="flex-shrink-0">
          <i className="fas fa-award text-4xl text-secondary-main" />
        </div>
        <div className="ml-4">
          <h3 className="text-lg leading-6 font-medium text-secondary-main">
            High-Quality Produce
          </h3>
          <p className="mt-2 text-base text-gray-600">
            We ensure the export of the freshest and best-quality fruits and
            vegetables
          </p>
        </div>
      </div>
      <div className="bg-white p-6 rounded-lg flex items-center">
        <div className="flex-shrink-0">
          <i className="fas fa-globe text-4xl text-secondary-main" />
        </div>
        <div className="ml-4">
          <h3 className="text-lg leading-6 font-medium text-secondary-main">
            Global Reach
          </h3>
          <p className="mt-2 text-base text-gray-600">
            Exporting fresh produce worldwide, meeting the needs of
            international markets.
          </p>
        </div>
      </div>
      <div className="bg-white p-6 rounded-lg flex items-center">
        <div className="flex-shrink-0">
          <i className="fas fa-hand-holding-usd text-4xl text-secondary-main" />
        </div>
        <div className="ml-4">
          <h3 className="text-lg leading-6 font-medium text-secondary-main">
            Competitive Pricing
          </h3>
          <p className="mt-2 text-base text-gray-600">
            Our strong relationships with farmers allow us to offer most
            competitive prices
          </p>
        </div>
      </div>
    </div>
  </div>
</div>

  )
}
