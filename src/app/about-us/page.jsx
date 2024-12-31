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
      <HeroSection2 name={'About us'} img={'https://storage.googleapis.com/a1aa/image/c1ObJJQuGNorLN1aayHYn0KYDrJOhA1QPKdeAGyHRqXtspfTA.jpg'} />
      <AboutUs2 />
      <HappyClient />
      <AboutDetail />
      <Footer />
    </>
  );
}
