import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import CountUp from "react-countup";
import {
  Users,
  ClipboardCheck,
  UserCheck,
  HelpCircle,
  FileText,
  MessageSquare,
  TrendingUp,
  Target,
} from "lucide-react";

const features = [
  { icon: Users, title: "Small Batch Size", description: "Personalized attention for every student" },
  { icon: ClipboardCheck, title: "Weekly & Monthly Tests", description: "Regular assessments to track progress" },
  { icon: UserCheck, title: "Personal Mentorship", description: "Dedicated guidance for each student" },
  { icon: HelpCircle, title: "Doubt-Clearing Sessions", description: "Clear all your academic doubts" },
  { icon: FileText, title: "Digital Notes & PDFs", description: "Comprehensive study materials" },
  { icon: MessageSquare, title: "Parent-Teacher Interaction", description: "Regular updates on student progress" },
  { icon: TrendingUp, title: "Performance Tracking", description: "Detailed analysis of improvement" },
  { icon: Target, title: "Exam Strategy Classes", description: "Master exam techniques and time management" },
];

const stats = [
  { value: 500, suffix: "+", label: "Students Taught" },
  { value: 95, suffix: "%", label: "Success Rate" },
  { value: 5, suffix: "+", label: "Years Experience" },
  { value: 1000, suffix: "+", label: "Hours of Teaching" },
];

export const FeaturesSection = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section className="section-padding bg-gradient-navy text-primary-foreground overflow-hidden">
      <div className="container-custom">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1 rounded-full bg-gold/20 text-gold text-sm font-medium mb-4">
            What We Offer
          </span>
          <h2 className="font-playfair text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            Features & <span className="text-gold">Facilities</span>
          </h2>
          <p className="text-lg text-primary-foreground/70 max-w-2xl mx-auto font-inter">
            Advanced learning facilities designed to maximize your academic potential
          </p>
        </motion.div>

        {/* Features Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 mb-20">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.05, y: -5 }}
              className="group"
            >
              <div className="bg-primary-foreground/5 backdrop-blur-sm rounded-2xl p-6 border border-primary-foreground/10 h-full transition-all duration-300 group-hover:bg-primary-foreground/10 group-hover:border-gold/50">
                <motion.div
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                  className="w-12 h-12 rounded-xl bg-gold/20 flex items-center justify-center mb-4"
                >
                  <feature.icon className="w-6 h-6 text-gold" />
                </motion.div>
                <h3 className="font-playfair text-lg font-semibold mb-2 text-primary-foreground">
                  {feature.title}
                </h3>
                <p className="text-sm text-primary-foreground/60 font-inter">
                  {feature.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Stats Counter */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-8 bg-primary-foreground/5 rounded-3xl p-8 md:p-12 border border-primary-foreground/10"
        >
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-4xl md:text-5xl lg:text-6xl font-bold text-gold font-playfair">
                {inView && (
                  <CountUp
                    start={0}
                    end={stat.value}
                    duration={2.5}
                    separator=","
                    suffix={stat.suffix}
                  />
                )}
              </div>
              <p className="text-sm md:text-base text-primary-foreground/70 mt-2 font-inter">
                {stat.label}
              </p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
