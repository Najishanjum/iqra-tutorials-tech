import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { 
  Award, 
  Target, 
  IndianRupee, 
  Brain, 
  Heart,
  CheckCircle2 
} from "lucide-react";

const reasons = [
  {
    icon: Award,
    title: "Experienced Faculty",
    description: "Learn from qualified and dedicated teachers with years of experience",
  },
  {
    icon: Target,
    title: "Result-Oriented Teaching",
    description: "Focused approach towards achieving excellent academic results",
  },
  {
    icon: IndianRupee,
    title: "Affordable Fees",
    description: "Quality education accessible to all with reasonable fee structure",
  },
  {
    icon: Brain,
    title: "Strong Conceptual Clarity",
    description: "Building deep understanding rather than surface-level learning",
  },
  {
    icon: Heart,
    title: "Friendly Environment",
    description: "Supportive and encouraging atmosphere for optimal learning",
  },
  {
    icon: CheckCircle2,
    title: "Proven Track Record",
    description: "Consistent success stories and excellent student performance",
  },
];

export const WhyChooseSection = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section className="section-padding bg-background overflow-hidden">
      <div className="container-custom">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1 rounded-full bg-gold/10 text-gold text-sm font-medium mb-4">
            Why Us
          </span>
          <h2 className="font-playfair text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
            Why Choose <span className="text-gradient-gold">IQRA TUTORIALS</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto font-inter">
            Discover what makes us the preferred choice for academic excellence
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reasons.map((reason, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ scale: 1.02 }}
              className="group cursor-pointer"
            >
              <div className="relative bg-card rounded-2xl p-8 border border-border h-full overflow-hidden transition-all duration-300 group-hover:border-gold/50 group-hover:shadow-lg">
                {/* Hover Background */}
                <div className="absolute inset-0 bg-gradient-to-br from-gold/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                <div className="relative z-10 flex items-start gap-4">
                  <div className="flex-shrink-0 w-14 h-14 rounded-xl bg-gradient-gold flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <reason.icon className="w-7 h-7 text-navy-dark" />
                  </div>
                  <div>
                    <h3 className="font-playfair text-xl font-bold text-foreground mb-2 group-hover:text-gold transition-colors">
                      {reason.title}
                    </h3>
                    <p className="text-muted-foreground font-inter leading-relaxed">
                      {reason.description}
                    </p>
                  </div>
                </div>

                {/* Decorative Corner */}
                <div className="absolute -bottom-8 -right-8 w-24 h-24 rounded-full border border-gold/10 group-hover:border-gold/30 transition-colors" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
