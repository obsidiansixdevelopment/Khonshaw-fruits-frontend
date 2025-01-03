import React from "react";
import Navbar2 from "../_components/navbar2";
import HeroSection2 from "../_components/hero-section2";
import Footer from "../_components/footer";
import HappyClient from "../_components/happy-client";
import AboutDetail from "../_components/about-detail";
import AboutUs2 from "../_components/about-us2";

export default function page() {
  return (
    <>
      <Navbar2 />
      <HeroSection2 name={'About us'} img={'https://images.unsplash.com/photo-1473648717346-73c9c15cbad6?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'} />
      <AboutUs2 />
      <HappyClient />
      <AboutDetail />
      <Footer />
    </>
  );
}
