import { Navbar } from "@/components/layout/Navbar";
import { GallerySection } from "@/components/sections/GallerySection";
import { FooterSection } from "@/components/sections/FooterSection";

const Gallery = () => {
  return (
    <main className="overflow-x-hidden">
      <Navbar />
      <div className="pt-20">
        <GallerySection />
      </div>
      <FooterSection />
    </main>
  );
};

export default Gallery;
