import { Navbar } from "@/components/layout/Navbar";
import { FeaturesSection } from "@/components/sections/FeaturesSection";
import { FooterSection } from "@/components/sections/FooterSection";

const Features = () => {
  return (
    <main className="overflow-x-hidden">
      <Navbar />
      <div className="pt-20">
        <FeaturesSection />
      </div>
      <FooterSection />
    </main>
  );
};

export default Features;
