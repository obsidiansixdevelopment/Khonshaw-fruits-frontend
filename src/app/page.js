import Image from "next/image";
import HeroSection from "./_components/hero-section";
import CompanyOverview from "./_components/company-overview";
import MissionVision from "./_components/mission-vision";
import FreshGrocery from "./_components/fresh-grocery";
import FreshGrocery2 from "./_components/fresh-grocery2";
import Footer from "./_components/footer";
import MainHeader from "./_components/main-header";

export default function Home() {
  return (
     <>

  <MainHeader />
  <HeroSection />
  <CompanyOverview />
  <MissionVision />
  <FreshGrocery />
  <FreshGrocery2 />
  <Footer />
</>

     
  );
}
