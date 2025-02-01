import CardSection from "./components/Home/CardSection";
import CompanyLogo from "./components/Home/CompanyLogo";
import HeroSection from "./components/Home/HeroSection";
import ImageAndText from "./components/Home/ImageAndText";
import Innovation from "./components/Home/Innovation";
import LegacySection from "./components/Home/LegacySection";
import Technology from "./components/Home/Technology";

export default function Home() {
  return (
    <div>
      <HeroSection />
      <ImageAndText />
      <Innovation />
      <CardSection />
      <Technology />
      <CompanyLogo />
      <LegacySection />
    </div>
  );
}
