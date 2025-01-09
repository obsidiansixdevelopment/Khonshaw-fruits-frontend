import React from 'react'

export default function MainHeader() {
  return (
    // <header className="bg-secondary-main text-white text-center py-2 font-medium uppercase px-2">
    //     <p>dubai diera port saeed AL SAYEGH BUILDING</p>
    //   </header>
    <header className="bg-secondary-main/80 text-white">
    <div className="max-w-7xl mx-auto flex justify-between items-center py-4 md:px-0 px-2">
      <div className="flex items-center md:space-x-4 max-md:justify-between w-full max-md:text-sm px-2">
        <div className='space-x-2'>
          <i className="fas fa-phone-alt"></i>
          <span>+971504459495</span>
        </div>
        <div className='space-x-2'>
          <i className="fas fa-envelope"></i>
          <span>info@khonshnaw.com</span>

        </div>
      </div>
      <div className="md:flex space-x-4 hidden">
        <a href="#">
          <i className="fab fa-facebook-f"></i>
        </a>
        <a href="#">
          <i className="fab fa-twitter"></i>
        </a>
        <a href="#">
          <i className="fab fa-instagram"></i>
        </a>
      </div>
    </div>
  </header>
  )
}
