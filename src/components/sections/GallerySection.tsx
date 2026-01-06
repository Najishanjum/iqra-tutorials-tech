import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { X, ZoomIn } from "lucide-react";

const galleryImages = [
  {
    id: 1,
    category: "Classroom",
    title: "Interactive Teaching Session",
    placeholder: "Classroom with students engaged in learning",
  },
  {
    id: 2,
    category: "Activities",
    title: "Student Group Activity",
    placeholder: "Students participating in group activities",
  },
  {
    id: 3,
    category: "Exams",
    title: "Test Examination",
    placeholder: "Students taking examinations",
  },
  {
    id: 4,
    category: "Results",
    title: "Achievers Celebration",
    placeholder: "Celebrating student achievements",
  },
  {
    id: 5,
    category: "Events",
    title: "Annual Function",
    placeholder: "Annual day celebration event",
  },
  {
    id: 6,
    category: "Classroom",
    title: "Science Lab Session",
    placeholder: "Practical learning in science lab",
  },
];

const categories = ["All", "Classroom", "Activities", "Exams", "Results", "Events"];

export const GallerySection = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedImage, setSelectedImage] = useState<typeof galleryImages[0] | null>(null);
  
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const filteredImages = selectedCategory === "All"
    ? galleryImages
    : galleryImages.filter((img) => img.category === selectedCategory);

  return (
    <section id="gallery" className="section-padding bg-background overflow-hidden">
      <div className="container-custom">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="inline-block px-4 py-1 rounded-full bg-gold/10 text-gold text-sm font-medium mb-4">
            Our Moments
          </span>
          <h2 className="font-playfair text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
            Photo <span className="text-gradient-gold">Gallery</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto font-inter">
            Glimpses of our vibrant learning environment and memorable moments
          </p>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-3 mb-12"
        >
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-5 py-2 rounded-full font-inter text-sm font-medium transition-all duration-300 ${
                selectedCategory === category
                  ? "bg-gradient-gold text-navy-dark shadow-gold-glow"
                  : "bg-muted text-muted-foreground hover:bg-gold/10 hover:text-gold"
              }`}
            >
              {category}
            </button>
          ))}
        </motion.div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence mode="popLayout">
            {filteredImages.map((image, index) => (
              <motion.div
                key={image.id}
                layout
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                onClick={() => setSelectedImage(image)}
                className="group cursor-pointer"
              >
                <div className="relative aspect-[4/3] rounded-2xl overflow-hidden bg-gradient-navy">
                  {/* Placeholder Content */}
                  <div className="absolute inset-0 flex items-center justify-center p-6">
                    <div className="text-center">
                      <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gold/20 flex items-center justify-center">
                        <span className="text-2xl">📸</span>
                      </div>
                      <p className="text-primary-foreground/60 font-inter text-sm">
                        {image.placeholder}
                      </p>
                    </div>
                  </div>

                  {/* Hover Overlay */}
                  <div className="absolute inset-0 bg-navy/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <div className="text-center transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                      <ZoomIn className="w-10 h-10 text-gold mx-auto mb-3" />
                      <p className="text-primary-foreground font-playfair text-lg font-semibold">
                        {image.title}
                      </p>
                      <p className="text-gold text-sm">{image.category}</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* Lightbox Modal */}
        <AnimatePresence>
          {selectedImage && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedImage(null)}
              className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
            >
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute top-6 right-6 text-white hover:text-gold transition-colors"
              >
                <X className="w-8 h-8" />
              </button>
              
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.8, opacity: 0 }}
                onClick={(e) => e.stopPropagation()}
                className="max-w-4xl w-full"
              >
                <div className="bg-gradient-navy rounded-3xl p-8 text-center">
                  <div className="w-24 h-24 mx-auto mb-6 rounded-full bg-gold/20 flex items-center justify-center">
                    <span className="text-5xl">📸</span>
                  </div>
                  <h3 className="text-2xl font-playfair text-primary-foreground font-bold mb-2">
                    {selectedImage.title}
                  </h3>
                  <p className="text-gold">{selectedImage.category}</p>
                  <p className="text-primary-foreground/60 mt-4 font-inter">
                    {selectedImage.placeholder}
                  </p>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};
