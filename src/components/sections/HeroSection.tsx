import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import { Button } from "@/components/ui/button";
import { BookOpen, GraduationCap, Trophy, Users, ChevronDown } from "lucide-react";

const FloatingIcon = ({
  icon: Icon,
  className,
  delay = 0,
}: {
  icon: React.ElementType;
  className?: string;
  delay?: number;
}) => (
  <motion.div
    initial={{ opacity: 0, scale: 0 }}
    animate={{ opacity: 0.2, scale: 1 }}
    transition={{ delay, duration: 0.8 }}
    className={`absolute text-primary-foreground/20 ${className}`}
  >
    <motion.div
      animate={{ y: [-10, 10, -10] }}
      transition={{ duration: 4 + delay, repeat: Infinity, ease: "easeInOut" }}
    >
      <Icon size={48} />
    </motion.div>
  </motion.div>
);

export const HeroSection = () => {
  const scrollToAbout = () => {
    document.getElementById("about")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-hero">
      {/* Animated Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle at 25% 25%, hsl(45 90% 50% / 0.1) 0%, transparent 50%),
                             radial-gradient(circle at 75% 75%, hsl(45 90% 50% / 0.1) 0%, transparent 50%)`,
          }}
        />
      </div>

      {/* Floating Icons */}
      <FloatingIcon icon={BookOpen} className="top-20 left-[10%]" delay={0} />
      <FloatingIcon icon={GraduationCap} className="top-32 right-[15%]" delay={0.5} />
      <FloatingIcon icon={Trophy} className="bottom-32 left-[20%]" delay={1} />
      <FloatingIcon icon={Users} className="bottom-40 right-[10%]" delay={1.5} />

      {/* Main Content */}
      <div className="container-custom relative z-10 text-center text-primary-foreground">
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-6"
        >
          <span className="inline-block px-6 py-2 rounded-full border border-gold/50 text-gold text-sm font-medium tracking-wider uppercase">
            Est. 2020 • CBSE & BSEB Board
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="font-playfair text-5xl md:text-7xl lg:text-8xl font-bold mb-8"
        >
          <span className="text-gradient-gold">IQRA</span>{" "}
          <span className="text-primary-foreground">TUTORIALS</span>
        </motion.h1>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="h-16 md:h-20 mb-8"
        >
          <TypeAnimation
            sequence={[
              "Empowering Students of Class 8–12",
              2000,
              "Building Future Leaders",
              2000,
              "Excellence in Education",
              2000,
              "Your Success, Our Mission",
              2000,
            ]}
            wrapper="p"
            speed={50}
            className="text-xl md:text-3xl lg:text-4xl font-inter font-light text-primary-foreground/90"
            repeat={Infinity}
          />
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-lg md:text-xl text-primary-foreground/70 max-w-2xl mx-auto mb-12 font-inter"
        >
          Quality coaching for CBSE & BSEB students with concept-based learning,
          experienced faculty, and proven results
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <Button
            size="lg"
            className="bg-gradient-gold text-navy-dark hover:opacity-90 font-semibold px-8 py-6 text-lg rounded-full animate-pulse-gold"
            onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
          >
            Enroll Now
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="border-2 border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 px-8 py-6 text-lg rounded-full backdrop-blur-sm"
            onClick={() => document.getElementById("courses")?.scrollIntoView({ behavior: "smooth" })}
          >
            Explore Courses
          </Button>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8"
        >
          {[
            { number: "500+", label: "Students" },
            { number: "5+", label: "Years Experience" },
            { number: "95%", label: "Success Rate" },
            { number: "10+", label: "Expert Faculty" },
          ].map((stat, index) => (
            <div key={index} className="text-center">
              <p className="text-3xl md:text-4xl font-bold text-gold">{stat.number}</p>
              <p className="text-sm md:text-base text-primary-foreground/70">{stat.label}</p>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 cursor-pointer"
        onClick={scrollToAbout}
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          <ChevronDown className="w-8 h-8 text-gold" />
        </motion.div>
      </motion.div>
    </section>
  );
};
