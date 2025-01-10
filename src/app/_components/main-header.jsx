import Link from "next/link";
import React from "react";

export default function MainHeader() {
  return (
    // <header className="bg-secondary-main text-white text-center py-2 font-medium uppercase px-2">
    //     <p>dubai diera port saeed AL SAYEGH BUILDING</p>
    //   </header>
    <header className="bg-secondary-main/80 text-white">
      <div className="max-w-7xl mx-auto flex justify-between items-center py-4 md:px-0 px-2">
        <div className="flex items-center md:space-x-4 max-md:justify-between w-full max-md:text-sm px-2">
          <div className="flex max-md:flex-col items-center md:space-x-4 space-x-1">
            <div className="flex items-center space-x-2">
              <i className="fas fa-phone-alt"></i>
              <Link href={"tel:+971504459495"}>+971504459495</Link>
            </div>
            <div className="flex items-center space-x-2">
              <i className="fas fa-phone-alt md:hidden"></i> {" "}
              <Link href={"tel:+9647509252524"} className="max-md:block w-full " >+9647509252524</Link>
            </div>

          </div>
          <div className="space-x-2">
            <i className="fas fa-envelope"></i>
            <Link href={"mailto:info@khonshnaw.com"}>info@khonshnaw.com</Link>
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
  );
}
