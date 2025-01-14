import React from "react";
import Navbar2 from "../_components/navbar2";
import Footer from "../_components/footer";
import HeroSection2 from "../_components/hero-section2";
import HappyClient from "../_components/happy-client";
import TestimonialSlider from "../_components/testimonal-slider";
import ContactUS from "./_components/contact";

export default function ContactUs() {
  return (
    <>
      <Navbar2 />
      <HeroSection2
        name={"Nourishing Fruits, Freshly Picked for You"}
        img={
          "https://images.unsplash.com/photo-1489450278009-822e9be04dff?q=80&w=2072&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        }
      />

      <section className="max-w-7xl mx-auto my-10 px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white p-6 shadow-md text-center">
            <i className="fas fa-leaf text-secondary-main text-4xl mb-4"></i>
            <h3 className="text-xl font-bold mb-2">High-Quality Produce</h3>
            <p>Delivering the best quality fruits &amp; vegetables.</p>
          </div>
          <div className="bg-white p-6 shadow-md text-center">
            <i className="fas fa-globe text-secondary-main text-4xl mb-4"></i>
            <h3 className="text-xl font-bold mb-2">Global Reach</h3>
            <p>
              Reaching the global market, meeting the needs of international
              markets.
            </p>
          </div>
          <div className="bg-white p-6 shadow-md text-center">
            <i className="fas fa-dollar-sign text-secondary-main text-4xl mb-4"></i>
            <h3 className="text-xl font-bold mb-2">Competitive Pricing</h3>
            <p>Offering the best produce at the most competitive rates.</p>
          </div>
        </div>
      </section>
      <HappyClient />
      <section className="my-10">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-secondary-main mb-6 text-center">
            A Few Reasons Why People Choose Us
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white p-6 shadow-md text-center">
              <i className="fas fa-smile text-secondary-main text-4xl mb-4"></i>
              <h3 className="text-xl font-bold mb-2">100% Satisfaction</h3>
            </div>
            <div className="bg-white p-6 shadow-md text-center">
              <i className="fas fa-dollar-sign text-secondary-main text-4xl mb-4"></i>
              <h3 className="text-xl font-bold mb-2">Competitive Pricing</h3>
            </div>
            <div className="bg-white p-6 shadow-md text-center">
              <i className="fas fa-users text-secondary-main text-4xl mb-4"></i>
              <h3 className="text-xl font-bold mb-2">Dedicated Team</h3>
            </div>
          </div>
        </div>
      </section>
      <ContactUS />

      <TestimonialSlider />
      <Footer />
    </>
  );
}

// https://storage.googleapis.com/a1aa/image/BrZZuMBOY2ofcS0K9ZDaYy1ZXDdFgrPAeU6Tv6X8edRifP9PB.jpg
