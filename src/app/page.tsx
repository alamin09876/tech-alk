import CardSection from "./components/Home/CardSection";
import CompanyLogo from "./components/Home/CompanyLogo";
import HeroSection from "./components/Home/HeroSection";
import ImageAndText from "./components/Home/ImageAndText";
import Innovation from "./components/Home/Innovation";
import LegacySection from "./components/Home/LegacySection";
import Footer from "./components/shared/Footer";
import Header from "./components/shared/Header";
import SecondFooter from "./components/shared/SecondFooter";
import SliderTextImage from "./components/shared/SliderTextImage";

export default function Home() {
  return (
    <div>
      <Header />
      <HeroSection />
      <ImageAndText />
      <Innovation />
      <CardSection />
      <SliderTextImage />
      {/* <Technology /> */}
      <CompanyLogo />
      <LegacySection />
      <SecondFooter />
      <Footer />
    </div>
  );
}
