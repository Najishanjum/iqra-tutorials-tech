import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Quote } from "lucide-react";

export const FounderSection = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section className="section-padding bg-cream overflow-hidden">
      <div className="container-custom">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1 rounded-full bg-navy/10 text-navy text-sm font-medium mb-4">
            Meet Our Leader
          </span>
          <h2 className="font-playfair text-4xl md:text-5xl lg:text-6xl font-bold text-foreground">
            Founder & <span className="text-gradient-gold">Faculty</span>
          </h2>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            {/* Main Card */}
            <div className="bg-card rounded-3xl shadow-elegant overflow-hidden">
              <div className="grid md:grid-cols-2">
                {/* Image Side */}
                <div className="relative bg-gradient-navy p-8 md:p-12 flex items-center justify-center min-h-[400px]">
                  {/* Decorative Elements */}
                  <div className="absolute inset-0 opacity-20">
                    <div className="absolute top-0 left-0 w-40 h-40 rounded-full border border-gold/30" />
                    <div className="absolute bottom-0 right-0 w-60 h-60 rounded-full border border-gold/20" />
                  </div>
                  
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    className="relative z-10"
                  >
                    <div className="w-48 h-48 md:w-56 md:h-56 rounded-full bg-gradient-gold p-1 shadow-gold-glow">
                      <div className="w-full h-full rounded-full bg-navy flex items-center justify-center">
                        <span className="text-6xl md:text-7xl font-playfair text-gold font-bold">
                          MM
                        </span>
                      </div>
                    </div>
                  </motion.div>
                </div>

                {/* Content Side */}
                <div className="p-8 md:p-12 flex flex-col justify-center">
                  <div className="mb-6">
                    <h3 className="font-playfair text-3xl md:text-4xl font-bold text-foreground mb-2">
                      Md Masoom
                    </h3>
                    <p className="text-gold font-semibold text-lg">Founder & Tutor</p>
                  </div>

                  <div className="relative mb-6">
                    <Quote className="absolute -top-2 -left-2 w-8 h-8 text-gold/30" />
                    <p className="text-muted-foreground font-inter leading-relaxed pl-6 italic">
                      "Education is not just about teaching subjects; it's about 
                      shaping minds, building character, and empowering the next 
                      generation to achieve their dreams."
                    </p>
                  </div>

                  <p className="text-foreground/80 font-inter leading-relaxed mb-6">
                    A dedicated educator with a passion for teaching, Md Masoom has 
                    been instrumental in guiding hundreds of students towards academic 
                    excellence. His student-centric approach and commitment to quality 
                    education have made IQRA TUTORIALS a trusted name in the community.
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {["CBSE Expert", "BSEB Specialist", "Concept-Based Teaching", "Student Mentor"].map(
                      (tag, i) => (
                        <span
                          key={i}
                          className="px-3 py-1 rounded-full bg-gold/10 text-gold text-sm font-medium"
                        >
                          {tag}
                        </span>
                      )
                    )}
                  </div>
                </div>
              </div>
            </div>

            {/* Decorative Elements */}
            <div className="absolute -top-4 -right-4 w-24 h-24 rounded-full border-2 border-gold/20 hidden md:block" />
            <div className="absolute -bottom-6 -left-6 w-32 h-32 rounded-full border-2 border-navy/10 hidden md:block" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};
