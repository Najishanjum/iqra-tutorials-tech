import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { ClipboardList, Smile, Medal, Compass } from "lucide-react";

const benefits = [
  {
    icon: ClipboardList,
    title: "Regular Assessments",
    description: "Continuous evaluation to monitor progress and identify improvement areas",
    progress: 95,
  },
  {
    icon: Smile,
    title: "Confidence Building",
    description: "Encouraging environment that builds self-confidence and positive attitude",
    progress: 90,
  },
  {
    icon: Medal,
    title: "Exam Readiness",
    description: "Comprehensive preparation ensuring students are fully exam-ready",
    progress: 98,
  },
  {
    icon: Compass,
    title: "Career Guidance",
    description: "Helping students make informed decisions about their future paths",
    progress: 85,
  },
];

export const BenefitsSection = () => {
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
            Advantages
          </span>
          <h2 className="font-playfair text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
            Student <span className="text-gradient-gold">Benefits</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto font-inter">
            Comprehensive advantages that set our students up for success
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="bg-card rounded-2xl p-8 shadow-elegant border border-border"
            >
              <div className="flex items-start gap-5">
                <div className="flex-shrink-0 w-14 h-14 rounded-xl bg-gradient-gold flex items-center justify-center">
                  <benefit.icon className="w-7 h-7 text-navy-dark" />
                </div>
                <div className="flex-1">
                  <h3 className="font-playfair text-xl font-bold text-foreground mb-2">
                    {benefit.title}
                  </h3>
                  <p className="text-muted-foreground font-inter text-sm mb-4">
                    {benefit.description}
                  </p>
                  
                  {/* Progress Bar */}
                  <div className="relative">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-xs text-muted-foreground font-inter">
                        Student Satisfaction
                      </span>
                      <span className="text-sm font-semibold text-gold">
                        {benefit.progress}%
                      </span>
                    </div>
                    <div className="h-2 rounded-full bg-muted overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={inView ? { width: `${benefit.progress}%` } : {}}
                        transition={{ duration: 1.5, delay: 0.5 + index * 0.2, ease: "easeOut" }}
                        className="h-full rounded-full bg-gradient-gold"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
