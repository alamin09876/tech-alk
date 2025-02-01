import CardSection from "./components/Home/CardSection";
import HeroSection from "./components/Home/HeroSection";
import ImageAndText from "./components/Home/ImageAndText";
import Innovation from "./components/Home/Innovation";
import Technology from "./components/Home/Technology";

export default function Home() {
  return (
    <div>
      <HeroSection />
      <ImageAndText />
      <Innovation />
      <CardSection />
      <Technology />
    </div>
  );
}
