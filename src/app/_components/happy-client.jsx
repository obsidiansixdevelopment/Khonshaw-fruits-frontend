import React from 'react'

export default function HappyClient() {
  return (
    <section className="bg-secondary-main text-white py-12 mt-10">
    <div className="container mx-auto grid md:grid-cols-4 grid-cols-2">
      <div className="text-center mb-6 md:mb-0">
        <span className="text-4xl font-bold">5000</span>
        <p>Happy Clients</p>
      </div>
      <div className="text-center mb-6 md:mb-0">
        <span className="text-4xl font-bold">300</span>
        <p>Award Achievement</p>
      </div>
      <div className="text-center mb-6 md:mb-0">
        <span className="text-4xl font-bold">200</span>
        <p>Dedicated Staff</p>
      </div>
      <div className="text-center">
        <span className="text-4xl font-bold">2540</span>
        <p>Clients Reviews</p>
      </div>
    </div>
  </section>
  )
}
