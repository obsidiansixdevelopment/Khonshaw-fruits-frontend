import React from 'react'
import Navbar2 from '../_components/navbar2'
import Footer from '../_components/footer'

export default function page() {
  return (
    <>
  <meta charSet="utf-8" />
  <meta content="width=device-width, initial-scale=1.0" name="viewport" />
  <title>Bake Trading Co.</title>
  <link
    href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css"
    rel="stylesheet"
  />
  <link
    href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700&display=swap"
    rel="stylesheet"
  />
  <style
    dangerouslySetInnerHTML={{
      __html:
        "\n   body {\n            font-family: 'Roboto', sans-serif;\n        }\n  "
    }}
  />
  {/* Header */}
  <Navbar2 />
  {/* Hero Section */}
  <section className="relative">
    <img
      alt="Assorted fruits and vegetables"
      className="w-full h-96 object-cover"
      height={600}
      src="https://storage.googleapis.com/a1aa/image/BrZZuMBOY2ofcS0K9ZDaYy1ZXDdFgrPAeU6Tv6X8edRifP9PB.jpg"
      width={1920}
    />
    <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
      <h1 className="text-white text-4xl font-bold">
        Nourishing Fruits, Freshly Picked for You
      </h1>
    </div>
  </section>
  {/* Features Section */}
  <section className="container mx-auto py-12 px-6">
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      <div className="bg-white p-6 shadow-md text-center">
        <i className="fas fa-leaf text-green-900 text-4xl mb-4"></i>
        <h3 className="text-xl font-bold mb-2">High-Quality Produce</h3>
        <p>Delivering the best quality fruits &amp; vegetables.</p>
      </div>
      <div className="bg-white p-6 shadow-md text-center">
        <i className="fas fa-globe text-green-900 text-4xl mb-4"></i>
        <h3 className="text-xl font-bold mb-2">Global Reach</h3>
        <p>
          Reaching the global market, meeting the needs of international
          markets.
        </p>
      </div>
      <div className="bg-white p-6 shadow-md text-center">
        <i className="fas fa-dollar-sign text-green-900 text-4xl mb-4"></i>
        <h3 className="text-xl font-bold mb-2">Competitive Pricing</h3>
        <p>Offering the best produce at the most competitive rates.</p>
      </div>
    </div>
  </section>
  {/* About Section */}
  <section className="bg-gray-100 py-12">
    <div className="container mx-auto px-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <img
            alt="Assorted fruits and vegetables"
            className="w-full h-auto"
            height={400}
            src="https://storage.googleapis.com/a1aa/image/BrZZuMBOY2ofcS0K9ZDaYy1ZXDdFgrPAeU6Tv6X8edRifP9PB.jpg"
            width={600}
          />
        </div>
        <div>
          <h2 className="text-3xl font-bold text-green-900 mb-4">
            Your Trusted Partner in Global Fresh Produce Export
          </h2>
          <p className="mb-4">
            Bake Trading Company is a leading exporter of fresh fruits and
            vegetables, delivering the highest quality produce to markets around
            the world. Our commitment to excellence ensures that our clients
            receive the freshest and most nutritious products available.
          </p>
          <ul className="space-y-2">
            <li className="flex items-center">
              <i className="fas fa-check-circle text-green-900 mr-2"></i>
              <span>Quality Assurance</span>
            </li>
            <li className="flex items-center">
              <i className="fas fa-check-circle text-green-900 mr-2"></i>
              <span>Dedicated Team</span>
            </li>
          </ul>
          <button className="mt-4 bg-green-900 text-white py-2 px-4 rounded">
            Explore More
          </button>
        </div>
      </div>
    </div>
  </section>
  {/* Statistics Section */}
  <section className="bg-green-900 text-white py-12">
    <div className="container mx-auto px-6">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
        <div>
          <h3 className="text-4xl font-bold">5000</h3>
          <p>Happy Clients</p>
        </div>
        <div>
          <h3 className="text-4xl font-bold">300</h3>
          <p>Awards Achieved</p>
        </div>
        <div>
          <h3 className="text-4xl font-bold">200</h3>
          <p>Dedicated Staff</p>
        </div>
        <div>
          <h3 className="text-4xl font-bold">2540</h3>
          <p>Client Reviews</p>
        </div>
      </div>
    </div>
  </section>
  {/* Why Choose Us Section */}
  <section className="py-12">
    <div className="container mx-auto px-6">
      <h2 className="text-3xl font-bold text-green-900 mb-6 text-center">
        A Few Reasons Why People Choose Us
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white p-6 shadow-md text-center">
          <i className="fas fa-smile text-green-900 text-4xl mb-4"></i>
          <h3 className="text-xl font-bold mb-2">100% Satisfaction</h3>
        </div>
        <div className="bg-white p-6 shadow-md text-center">
          <i className="fas fa-dollar-sign text-green-900 text-4xl mb-4"></i>
          <h3 className="text-xl font-bold mb-2">Competitive Pricing</h3>
        </div>
        <div className="bg-white p-6 shadow-md text-center">
          <i className="fas fa-users text-green-900 text-4xl mb-4"></i>
          <h3 className="text-xl font-bold mb-2">Dedicated Team</h3>
        </div>
      </div>
    </div>
  </section>
  {/* Quote Section */}
  <section className="bg-gray-100 py-12">
    <div className="container mx-auto px-6">
      <h2 className="text-3xl font-bold text-green-900 mb-6 text-center">
        Get A Free Quote
      </h2>
      <form className="bg-white p-6 shadow-md rounded">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-4">
          <input
            className="border border-gray-300 p-2 rounded"
            placeholder="Your Name"
            type="text"
          />
          <input
            className="border border-gray-300 p-2 rounded"
            placeholder="Your Email"
            type="email"
          />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-4">
          <input
            className="border border-gray-300 p-2 rounded"
            placeholder="Fruit Needs"
            type="text"
          />
          <input
            className="border border-gray-300 p-2 rounded"
            placeholder="Service Type"
            type="text"
          />
        </div>
        <textarea
          className="border border-gray-300 p-2 rounded w-full mb-4"
          placeholder="Message"
          defaultValue={""}
        />
        <button className="bg-green-900 text-white py-2 px-4 rounded">
          Submit Now
        </button>
      </form>
    </div>
  </section>
  {/* Products Section */}
  <section className="py-12">
    <div className="container mx-auto px-6">
      <h2 className="text-3xl font-bold text-green-900 mb-6 text-center">
        Discover Our Fresh Selection of Fruits &amp; Vegetables
      </h2>
      <p className="text-center mb-6">
        Handpicked for freshness, quality, and your satisfaction.
      </p>
      <div className="flex justify-center mb-6">
        <button className="bg-green-900 text-white py-2 px-4 rounded mr-2">
          Fresh Fruits
        </button>
        <button className="bg-green-900 text-white py-2 px-4 rounded">
          Fresh Vegetables
        </button>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        <img
          alt="Onions"
          className="w-full h-auto"
          height={300}
          src="https://storage.googleapis.com/a1aa/image/2d0fp4xZ5gUKb6ZiHIovC0XTEcRcCp2dxk7v4IEFQyQffnePB.jpg"
          width={300}
        />
        <img
          alt="Tomatoes"
          className="w-full h-auto"
          height={300}
          src="https://storage.googleapis.com/a1aa/image/h1srg6RsCuImG1tfwNfi7CEYhirnFzWCsI4sazBXxP08fnePB.jpg"
          width={300}
        />
        <img
          alt="Green Chilies"
          className="w-full h-auto"
          height={300}
          src="https://storage.googleapis.com/a1aa/image/6RefzCp0nCgIV0U8f2MJuJhf7ZxsNCGxV2baIwE33GWWff0fJA.jpg"
          width={300}
        />
        <img
          alt="Potatoes"
          className="w-full h-auto"
          height={300}
          src="https://storage.googleapis.com/a1aa/image/ic67sCixwNY1MtcXIfri3r0UDPsoxfZxu7IBnHMqjC16fnePB.jpg"
          width={300}
        />
        <img
          alt="Bananas"
          className="w-full h-auto"
          height={300}
          src="https://storage.googleapis.com/a1aa/image/Ik4pxgLSRJbyK1IOIeiBGuR5jJbxI2U7jXpsQ4ijy2hffnePB.jpg"
          width={300}
        />
        <img
          alt="Ginger"
          className="w-full h-auto"
          height={300}
          src="https://storage.googleapis.com/a1aa/image/1DjzrPb22HI0KxPEQEGGu5ld5Q3Mp5jR4uYv9vwaMy48fpfTA.jpg"
          width={300}
        />
        <img
          alt="Green Beans"
          className="w-full h-auto"
          height={300}
          src="https://storage.googleapis.com/a1aa/image/CxefVItQHffCRQrepHqISxdy4jJprkvgpYfzHI3OqFTAefTfnA.jpg"
          width={300}
        />
        <img
          alt="Guava"
          className="w-full h-auto"
          height={300}
          src="https://storage.googleapis.com/a1aa/image/1v60fTPmcB1xJKIuiu7pJAv6OYLVvEizQPFJFBzslhI3fTfnA.jpg"
          width={300}
        />
      </div>
    </div>
  </section>
  {/* Testimonials Section */}
  <section className="bg-gray-100 py-12">
    <div className="container mx-auto px-6">
      <h2 className="text-3xl font-bold text-green-900 mb-6 text-center">
        What Our Clients Are Saying
      </h2>
      <div className="bg-white p-6 shadow-md rounded">
        <p className="mb-4">
          Bake Trading Company provided the freshest fruits and vegetables at
          the highest quality and timely delivery. Their service set them apart
          from other suppliers.
        </p>
        <div className="flex items-center">
          <img
            alt="Client photo"
            className="w-12 h-12 rounded-full mr-4"
            height={50}
            src="https://storage.googleapis.com/a1aa/image/d0fGeP4NJyrdVEQPhY7evJpd4uhqDHtfW4j9QBZ8Yke89f0fJA.jpg"
            width={50}
          />
          <div>
            <h4 className="font-bold">Khalid Al Mansoori</h4>
            <p>Client</p>
          </div>
        </div>
      </div>
    </div>
  </section>
  {/* Footer */}
  <Footer />
</>

  )
}


// https://storage.googleapis.com/a1aa/image/BrZZuMBOY2ofcS0K9ZDaYy1ZXDdFgrPAeU6Tv6X8edRifP9PB.jpg