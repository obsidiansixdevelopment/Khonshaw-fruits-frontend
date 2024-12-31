import HeroSection from "./_components/hero-section";
import CompanyOverview from "./_components/company-overview";
import MissionVision from "./_components/mission-vision";
import FreshGrocery from "./_components/fresh-grocery";
import FreshGrocery2 from "./_components/fresh-grocery2";
import Footer from "./_components/footer";
import MainHeader from "./_components/main-header";
import TestimonialSlider from "./_components/testimonal-slider";
import QualityAssurance from "./_components/quality-assurance";
import FAQ from "./_components/faq";
import Navbar2 from "./_components/navbar2";

export default function Home() {
  return (
    <>
      {/* <MainHeader /> */}
      <Navbar2 />
      <HeroSection />
      <QualityAssurance />
      <CompanyOverview />
      <MissionVision />
      <FreshGrocery />
      <FreshGrocery2 />
      <TestimonialSlider />
      <FAQ />
      <Footer />
    </>
  );
}
