import { Navbar } from "@/components/layout/Navbar";
import { HeroSection } from "@/components/sections/HeroSection";
import { AboutSection } from "@/components/sections/AboutSection";
import { MissionVisionSection } from "@/components/sections/MissionVisionSection";
import { CoursesSection } from "@/components/sections/CoursesSection";
import { FeaturesSection } from "@/components/sections/FeaturesSection";
import { WhyChooseSection } from "@/components/sections/WhyChooseSection";
import { FounderSection } from "@/components/sections/FounderSection";
import { GallerySection } from "@/components/sections/GallerySection";
import { BenefitsSection } from "@/components/sections/BenefitsSection";
import { TestimonialsSection } from "@/components/sections/TestimonialsSection";
import { FAQSection } from "@/components/sections/FAQSection";
import { ContactSection } from "@/components/sections/ContactSection";
import { FooterSection } from "@/components/sections/FooterSection";

const Index = () => {
  return (
    <main className="overflow-x-hidden">
      <Navbar />
      <HeroSection />
      <AboutSection />
      <MissionVisionSection />
      <CoursesSection />
      <FeaturesSection />
      <WhyChooseSection />
      <FounderSection />
      <GallerySection />
      <BenefitsSection />
      <TestimonialsSection />
      <FAQSection />
      <ContactSection />
      <FooterSection />
    </main>
  );
};

export default Index;
