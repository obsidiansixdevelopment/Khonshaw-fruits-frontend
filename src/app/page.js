import Image from "next/image";

export default function Home() {
  return (
     <>
  <meta charSet="utf-8" />
  <meta content="width=device-width, initial-scale=1.0" name="viewport" />
  <title>Hewa Omer Ahmed General Trading Company</title>
  <link
    href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css"
    rel="stylesheet"
  />
  <link
    href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap"
    rel="stylesheet"
  />
  <header className="bg-green-900 text-white text-center py-2">
    <p>GWER ROAD, GROCERY MARKET NO. 16, ERBIL - IRAQ.</p>
  </header>
  <section
    className="relative bg-cover bg-center h-screen"
    >
  <nav className="absolute top-0 z-20 w-full text-white py-4">
    <div className="max-w-7xl mx-auto flex justify-between items-center">
      <img
        alt="Company Logo"
        className="h-24"
        height={50}
        src="https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=174,fit=crop,q=95/AGB4ykaxK8TJ7bpG/asset-3-copy-YBg4ZJ0GOMUgkPBl.jpg"
        width={100}
      />
      <ul className="flex space-x-8">
        <li>
          <a className="hover:text-orange-500" href="#">
            Home
          </a>
        </li>
        <li>
          <a className="hover:text-orange-500" href="#">
            About Us
          </a>
        </li>
        <li>
          <a className="hover:text-orange-500" href="#">
            Contact
          </a>
        </li>
      </ul>
    </div>
  </nav>
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
    <div className="max-w-7xl mx-auto relative z-10 grid grid-cols-2 gap-6 items-center justify-center h-full text-white px-4">
      <div>
        <p className="text-7xl font-semibold mb-4">
          Fresh <span className="block"> Groceries </span>Importing to Iraqi Markets
        </p>
        <p className="text-lg mb-8">HEWA OMER AHMED GENERAL TRADING COMPANY</p>
        <button className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-2 px-4 rounded">
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
          <button className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-2 px-4 rounded w-full">
            Submit Form Data Here
          </button>
        </form>
      </div>
    </div>
  </section>
  <section className="py-16 bg-white ">
    <div className="max-w-7xl mx-auto">
      <div className="grid grid-cols-2 gap-6">
        <div className=" mb-8 md:mb-0 grid justify-items-center text-center">
          <h2 className="text-2xl font-bold mb-4">
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
          <h2 className="text-2xl font-bold mb-4">Local Trading</h2>
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
  <section className="bg-orange-500 text-white py-16">
    <div className="max-w-7xl mx-auto px-4 text-center">
      <div className="flex flex-wrap -mx-4">
        <div className="w-full md:w-1/2 px-4 mb-8 md:mb-0">
          <h2 className="text-2xl font-bold mb-4">MISSION</h2>
          <p>
            Our Mission is to manufacture, store, and distribute high-caliber
            agricultural goods promptly to local and international clients. We
            are committed to managing production processes comprehensively to
            uphold the interests of the company, community, and customers alike.
          </p>
        </div>
        <div className="w-full md:w-1/2 px-4">
          <h2 className="text-2xl font-bold mb-4">VISION</h2>
          <p>
            Our Vision is to enhance the principles and practices of
            contemporary and environmentally friendly farming in the Kurdistan
            area of Iraq. We will offer comprehensive agricultural services and
            advanced advisory support tailored to the needs of indigenous
            farmers and clientele in both domestic and international markets.
          </p>
        </div>
      </div>
    </div>
  </section>
  <section className="py-16 bg-green-900 text-white">
    <div className="max-w-7xl mx-auto px-4 text-center">
      <h2 className="text-3xl font-bold mb-8">Fresh Grocery Imports</h2>
      <p className="mb-8">Providing fresh fruits for Iraqi grocery markets.</p>
      <div className="grid grid-cols-3">
        <div className="">
          <img
            alt="Image of a farm"
            className="rounded-lg mb-4"
            height={300}
            src="https://storage.googleapis.com/a1aa/image/tC9K8j4MHOY3IVyeKRg3yvyD3VnlvSD8B0wFEpTaIp5RNhfTA.jpg"
            width={400}
          />
          <h3 className="text-xl font-bold mb-2">
            Quality Products Guaranteed
          </h3>
          <p>Yearly 600 tons of products</p>
        </div>
        <div className="">
          <img
            alt="Image of people in a farm"
            className="rounded-lg mb-4"
            height={300}
            src="https://storage.googleapis.com/a1aa/image/grfVMW8KQzyVf0dSCzYDQcyzFSe3rfJdeQTMl63lAXK9UT4fE.jpg"
            width={400}
          />
          <h3 className="text-xl font-bold mb-2">Shipping Services</h3>
          <p>
            Ensuring on-time shipping of imported groceries to Iraqi grocery
            markets.
          </p>
        </div>
        <div className="">
          <img
            alt="Image of oranges in crates"
            className="rounded-lg mb-4"
            height={300}
            src="https://storage.googleapis.com/a1aa/image/1xoSrYpzqYZPIV5fnYCEMsOIHeE7XNByxxM3GxPO3v9laCfnA.jpg"
            width={400}
          />
          <h3 className="text-xl font-bold mb-2">Reliable Market Supplier</h3>
          <p>Customer Satisfaction Priority</p>
        </div>
      </div>
    </div>
  </section>
  <section className="py-16 bg-white">
    <div className="max-w-7xl mx-auto px-4 text-center">
      <h2 className="text-3xl font-bold mb-8">Fresh Groceries</h2>
      <p className="mb-8">
        Importing and supplying fresh fruits to Iraqi grocery markets. Quality
        guaranteed.
      </p>
      <div className="flex flex-wrap -mx-4">
        <div className="w-full md:w-1/3 px-4 mb-8 md:mb-0">
          <img
            alt="Image of crates of fruits"
            className="rounded-lg"
            height={300}
            src="https://storage.googleapis.com/a1aa/image/PK2vLw6SUp5OP1tZGENHSfYtHp7fxL2JLHQKKmPlgcphaCfnA.jpg"
            width={400}
          />
        </div>
        <div className="w-full md:w-1/3 px-4 mb-8 md:mb-0">
          <img
            alt="Image of a market stall"
            className="rounded-lg"
            height={300}
            src="https://storage.googleapis.com/a1aa/image/7T0M3RvrTpYGDZAgtfa0AOVSllwFh89amDX0F0iDKf9saCfnA.jpg"
            width={400}
          />
        </div>
        <div className="w-full md:w-1/3 px-4">
          <img
            alt="Image of a warehouse with fruits"
            className="rounded-lg"
            height={300}
            src="https://storage.googleapis.com/a1aa/image/ea17WVPGvQw5T6OTbRIzSJFWlLZj8dV4Y3Pe9c1SlFHqaCfnA.jpg"
            width={400}
          />
        </div>
      </div>
    </div>
  </section>
  <footer className="bg-green-900 text-white py-20">
    <div className="max-w-7xl mx-auto px-4">
      <div className="flex flex-wrap -mx-4">
        <div className="w-full md:w-1/3 px-4 mb-8 md:mb-0">
          <h3 className="text-xl font-bold mb-4">
            HEWA OMER AHMED GENERAL TRADING COMPANY
          </h3>
          <p>Importing fresh groceries to Iraqi markets for freshness.</p>
          <div className="flex space-x-4 mt-4">
            <a className="text-white hover:text-orange-500" href="#">
              <i className="fab fa-facebook-f"></i>
            </a>
            <a className="text-white hover:text-orange-500" href="#">
              <i className="fab fa-instagram"></i>
            </a>
          </div>
        </div>
        <div className="w-full md:w-1/3 px-4 mb-8 md:mb-0">
          <h3 className="text-xl font-bold mb-4">BUSINESS</h3>
          <p>+964 750 343 6743</p>
          <p>info@hewatradingcompany.com</p>
        </div>
        <div className="w-full md:w-1/3 px-4">
          <h3 className="text-xl font-bold mb-4">FACTORY</h3>
          <p>Importing groceries to Iraqi markets</p>
          <form>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mb-4"
              placeholder="Enter your email address here"
              type="email"
            />
            <button className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-2 px-4 rounded w-full">
              Submit your information now
            </button>
          </form>
        </div>
      </div>
    </div>
    <div className="text-center mt-8">
      <p>Powered by pearl-solution.com © All rights reserved.</p>
    </div>
  </footer>
</>

     
  );
}
