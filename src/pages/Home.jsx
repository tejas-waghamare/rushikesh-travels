import HeroSection from "../components/HeroSection";
import Highlights from "../components/Highlights";
import Services from "../components/Services";

export default function Home() {
  return (
    <div className="pt-12">
      <HeroSection />
      <Highlights />
      <Services />
    </div>
  );
}
