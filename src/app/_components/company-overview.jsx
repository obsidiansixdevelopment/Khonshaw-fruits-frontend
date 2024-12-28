import React from 'react'

export default function CompanyOverview() {
  return (
    <section className="py-16 bg-white ">
    <div className="max-w-7xl mx-auto">
      <div className="grid md:grid-cols-2 gap-6">
        <div className=" mb-8 md:mb-0 grid justify-items-center text-center">
          <h2 className="text-2xl font-bold mb-4 text-heading-main">
            Hewa Trading Company Overview
          </h2>
          <p className="mb-4">
            Hewa Trading Company, based in the Kurdistan region of Iraq, has
            been a leader in the fields of afforestation and seedling since
            1980. With decades of experience, we are dedicated to serving our
            country by enhancing its green spaces in the most efficient and
            sustainable manner.
          </p>
          <img
            alt="Image of oranges in a crate"
            className="rounded-lg"
            height={300}
            src="https://storage.googleapis.com/a1aa/image/RbwamaltC3L6AhGPyoJ28DLJ8sZpocZI9olf0Nbo80BYNhfTA.jpg"
            width={400}
          />
        </div>
        <div className="grid justify-items-center text-center">
          <h2 className="text-2xl font-bold mb-4 text-heading-main">Local Trading</h2>
          <p className="mb-4">
            Hewa Trading Company has a longstanding tradition of engaging with
            local farmers, fostering strong relationships within the community.
            Our operations include managing a 875,000 square meter farm, which
            houses 120,000 trees. This farm yields between 500 to 600 tons of
            produce annually, contributing significantly to the local
            agricultural economy.
          </p>
          <img
            alt="Image of pomegranates"
            className="rounded-lg"
            height={300}
            src="https://storage.googleapis.com/a1aa/image/xed7Pdg5ukwtISN3XsdeqcOCsfVJaFuMrR1jT2YBYsaT1EePB.jpg"
            width={400}
          />
        </div>
      </div>
    </div>
  </section>
  )
}
