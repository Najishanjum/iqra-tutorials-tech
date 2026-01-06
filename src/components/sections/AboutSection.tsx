import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { BookOpen, Target, Award } from "lucide-react";

const features = [
  {
    icon: BookOpen,
    title: "Concept-Based Learning",
    description:
      "We focus on building strong foundational concepts rather than rote memorization, ensuring deep understanding.",
  },
  {
    icon: Target,
    title: "Discipline & Consistency",
    description:
      "Regular classes, structured schedules, and consistent practice sessions for academic excellence.",
  },
  {
    icon: Award,
    title: "Student-Focused Teaching",
    description:
      "Personalized attention to each student's learning pace and style, ensuring no one is left behind.",
  },
];

export const AboutSection = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="about" className="section-padding bg-background overflow-hidden">
      <div className="container-custom">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1 rounded-full bg-gold/10 text-gold text-sm font-medium mb-4">
            About Us
          </span>
          <h2 className="font-playfair text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
            About <span className="text-gradient-gold">IQRA TUTORIALS</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto font-inter">
            Established with a vision to provide quality education to students of Class 8-12,
            IQRA TUTORIALS has become a trusted name in academic coaching for CBSE and BSEB boards.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="group"
            >
              <div className="bg-card rounded-2xl p-8 shadow-elegant card-hover border border-border h-full">
                <div className="w-16 h-16 rounded-xl bg-gradient-gold flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <feature.icon className="w-8 h-8 text-navy-dark" />
                </div>
                <h3 className="font-playfair text-xl font-bold text-foreground mb-4">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground font-inter leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Mission Statement */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={inView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-16 bg-gradient-navy rounded-3xl p-8 md:p-12 text-center relative overflow-hidden"
        >
          <div className="absolute inset-0 opacity-10">
            <div
              className="absolute inset-0"
              style={{
                backgroundImage: `radial-gradient(circle at 50% 50%, hsl(45 90% 50% / 0.2) 0%, transparent 50%)`,
              }}
            />
          </div>
          <p className="relative z-10 text-xl md:text-2xl text-primary-foreground/90 font-inter italic max-w-4xl mx-auto leading-relaxed">
            "At IQRA TUTORIALS, we believe every student has the potential to excel. 
            Our mission is to unlock that potential through dedicated teaching, 
            personalized guidance, and a nurturing learning environment."
          </p>
          <p className="relative z-10 mt-6 text-gold font-playfair text-lg font-semibold">
            — Md Masoom, Founder
          </p>
        </motion.div>
      </div>
    </section>
  );
};
