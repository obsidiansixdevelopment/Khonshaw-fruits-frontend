import React from "react";
import Navbar2 from "../_components/navbar2";
import HeroSection2 from "../_components/hero-section2";
import Footer from "../_components/footer";
import HappyClient from "../_components/happy-client";
import AboutDetail from "../_components/about-detail";

export default function page() {
  return (
    <>
      <Navbar2 />
      <HeroSection2 />
      <AboutDetail />
      <HappyClient />
      <Footer />
    </>
  );
}
