import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Compass, Eye, Heart } from "lucide-react";

const cards = [
  {
    icon: Compass,
    title: "Our Mission",
    description: "Provide quality & affordable education to every student, empowering them to achieve their academic goals and build a strong foundation for future success.",
    color: "from-navy to-navy-light",
  },
  {
    icon: Eye,
    title: "Our Vision",
    description: "Shape confident & successful students who become responsible citizens and leaders of tomorrow, contributing positively to society.",
    color: "from-gold-dark to-gold",
  },
  {
    icon: Heart,
    title: "Our Values",
    description: "Discipline, Integrity, and Excellence form the cornerstone of our educational philosophy, guiding every aspect of our teaching methodology.",
    color: "from-navy-light to-navy",
  },
];

export const MissionVisionSection = () => {
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
            What We Stand For
          </span>
          <h2 className="font-playfair text-4xl md:text-5xl lg:text-6xl font-bold text-foreground">
            Mission • Vision • Values
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {cards.map((card, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 80, rotateX: 20 }}
              animate={inView ? { opacity: 1, y: 0, rotateX: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              whileHover={{ 
                y: -10, 
                rotateY: 5,
                transition: { duration: 0.3 } 
              }}
              className="group perspective-1000"
            >
              <div className={`relative h-full rounded-3xl p-8 md:p-10 bg-gradient-to-br ${card.color} text-primary-foreground transform-style-preserve-3d shadow-lg`}>
                {/* Glow effect */}
                <div className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-br from-gold/20 to-transparent" />
                
                {/* Icon */}
                <motion.div
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.8 }}
                  className="w-20 h-20 rounded-2xl bg-primary-foreground/10 backdrop-blur-sm flex items-center justify-center mb-6 border border-primary-foreground/20"
                >
                  <card.icon className="w-10 h-10 text-gold" />
                </motion.div>

                {/* Content */}
                <h3 className="font-playfair text-2xl md:text-3xl font-bold mb-4">
                  {card.title}
                </h3>
                <p className="text-primary-foreground/80 font-inter leading-relaxed text-lg">
                  {card.description}
                </p>

                {/* Decorative element */}
                <div className="absolute bottom-4 right-4 w-16 h-16 rounded-full border border-primary-foreground/10" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
