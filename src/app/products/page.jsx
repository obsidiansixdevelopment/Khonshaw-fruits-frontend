import React from "react";
import HeroSection2 from "../_components/hero-section2";
import Footer from "../_components/footer";
import Navbar2 from "../_components/navbar2";
import ProductDetail from "../_components/product-detail";

export default function page() {
  return (
    <>
      <Navbar2 />
      <HeroSection2 />
      <ProductDetail />
      <Footer />
    </>
  );
}
