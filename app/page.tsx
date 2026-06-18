import DoshNivaaranPujas from "./components/Hero/DoshNivaaranPujas";
import FeaturedPujas from "./components/Hero/FeaturedPujas";
import Hero from "./components/Hero/Hero";
import OccasionPujas from "./components/Hero/OccasionPujas";
import OfferBanner from "./components/Hero/OfferBanner";
import PopularServices from "./components/Hero/PopularServices";
import PujaServicesInfo from "./components/Hero/PujaServicesInfo";
import Navbar from "./components/Navbar/Navbar";
// import OfferBanner from "@/components/home/OfferBanner/OfferBanner";
// import PopularServices from "@/components/home/PopularServices/PopularServices";

export default function HomePage() {
  return (
    <>
      <Navbar/>
      <main style={{ backgroundColor: '#FFFDF9' }}>
      <Hero />
      <OfferBanner/>
      <PopularServices/>
      <FeaturedPujas/>
      <OccasionPujas />
      <DoshNivaaranPujas />
      <PujaServicesInfo />
      </main>
      {/* <OfferBanner />
      <PopularServices /> */}
    </>
  );
}