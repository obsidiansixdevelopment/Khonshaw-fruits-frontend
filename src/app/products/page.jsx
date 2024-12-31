import React from "react";
import HeroSection2 from "../_components/hero-section2";
import Footer from "../_components/footer";
import Navbar2 from "../_components/navbar2";
import ProductDetail from "../_components/product-detail";
import QualityAssurance from "../_components/quality-assurance";

export default function page() {
  return (
    <>
      <Navbar2 />
      <HeroSection2
        name={"Products"}
        img={
          "https://storage.googleapis.com/a1aa/image/c1ObJJQuGNorLN1aayHYn0KYDrJOhA1QPKdeAGyHRqXtspfTA.jpg"
        }
      />

      {/* <QualityAssurance /> */}
      <ProductDetail />
      <Footer />
    </>
  );
}
