import React from 'react'

export default function Footer() {
  return (
  //   <footer className="bg-secondary-main text-white py-20">
  //   <div className="max-w-7xl mx-auto px-4">
  //     <div className="flex flex-wrap -mx-4">
  //       <div className="w-full md:w-1/3 px-4 mb-8 md:mb-0">
  //         <h3 className="text-xl font-bold mb-4">
  //           HEWA OMER AHMED GENERAL TRADING COMPANY
  //         </h3>
  //         <p>Importing fresh groceries to Iraqi markets for freshness.</p>
  //         <div className="flex space-x-4 mt-4">
  //           <a className="text-white hover:text-primary-main" href="#">
  //             <i className="fab fa-facebook-f"></i>
  //           </a>
  //           <a className="text-white hover:text-primary-main" href="#">
  //             <i className="fab fa-instagram"></i>
  //           </a>
  //         </div>
  //       </div>
  //       <div className="w-full md:w-1/3 px-4 mb-8 md:mb-0">
  //         <h3 className="text-xl font-bold mb-4">BUSINESS</h3>
  //         <p>+964 750 343 6743</p>
  //         <p>info@hewatradingcompany.com</p>
  //       </div>
  //       <div className="w-full md:w-1/3 px-4">
  //         <h3 className="text-xl font-bold mb-4">FACTORY</h3>
  //         <p>Importing groceries to Iraqi markets</p>
  //         <form>
  //           <input
  //             className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mb-4"
  //             placeholder="Enter your email address here"
  //             type="email"
  //           />
  //           <button className="bg-primary-main hover:bg-primary-main/90 text-white font-bold py-2 px-4 rounded w-full">
  //             Submit your information now
  //           </button>
  //         </form>
  //       </div>
  //     </div>
  //   </div>
  //   <div className="text-center mt-8">
  //     <p>Powered by pearl-solution.com © All rights reserved.</p>
  //   </div>
  // </footer>
  <footer className="bg-green-900 text-white py-8">
    <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-6 gap-14 px-6">
      <div className='col-span-2'>
        <h4 className="font-bold mb-4">About us</h4>
        <p>
          Raka Trading Company specializes in export of Fresh Fruits and
          Vegetables across the world. Our expertise combined with years of
          experience and inter personal relationships with farmers promises our
          customers the best quality products and the most competitive prices.
        </p>
      </div>
      <div className='col-span-1'>
        <h4 className="font-bold mb-4">Quick Links</h4>
        <ul>
          <li>
            <a className="hover:text-gray-300" href="#">
              Home
            </a>
          </li>
          <li>
            <a className="hover:text-gray-300" href="#">
              About Us
            </a>
          </li>
          <li>
            <a className="hover:text-gray-300" href="#">
              Our Products
            </a>
          </li>
          <li>
            <a className="hover:text-gray-300" href="#">
              Our Presence
            </a>
          </li>
          <li>
            <a className="hover:text-gray-300" href="#">
              Contact Us
            </a>
          </li>
        </ul>
      </div>
      <div className='col-span-1'>
        <h4 className="font-bold mb-4">Business Certified</h4>
        <img
          alt="Verified by certification"
          className="mb-4 h-10"
          height={50}
          src="https://storage.googleapis.com/a1aa/image/7e7Gy9w8uq1qRyHgQwsMq2umNhWVYIO2SgMfccXdm1f5ymePB.jpg"
          width={100}
        />
        <img
          alt="Trusted Seller certification"
          height={50}
          className='h-10'
          src="https://storage.googleapis.com/a1aa/image/AswMthfYkEQQOC5m3zIWFeoL3BgXiTmWaw2HpQfT3qvzymePB.jpg"
          width={100}
        />
      </div>
      <div className='col-span-2'>
        <h4 className="font-bold mb-4">Our Office</h4>
        <p>
          B303, Nayantara Hills, Near Mico Circle, Behind BSNL Telephone
          Exchange, Nashik, 422004
        </p>
        <p>+91 92262 63836</p>
        <p>info@raktrading.co.in</p>
        <div className="flex space-x-4 mt-4">
          <a href="#">
            <i className="fab fa-facebook-f"></i>
          </a>
          <a href="#">
            <i className="fab fa-twitter"></i>
          </a>
          <a href="#">
            <i className="fab fa-linkedin-in"></i>
          </a>
          <a href="#">
            <i className="fab fa-youtube"></i>
          </a>
        </div>
      </div>
    </div>
    <div className="text-center mt-8">
      <p>RAKA TRADING COMPANY. All rights reserved.</p>
      <p>
        Managed By
        <a className="hover:text-gray-300" href="http://www.bharat2export.com">
          www.bharat2export.com
        </a>
      </p>
    </div>
  </footer>
  )
}
