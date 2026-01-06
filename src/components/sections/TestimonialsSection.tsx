import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Quote, ChevronLeft, ChevronRight, Star } from "lucide-react";

const testimonials = [
  {
    id: 1,
    name: "Rahul Kumar",
    role: "Class 12 Student",
    content: "IQRA TUTORIALS transformed my approach to studies. The conceptual clarity I gained here helped me score 95% in my board exams. Forever grateful!",
    rating: 5,
  },
  {
    id: 2,
    name: "Priya Singh",
    role: "Parent",
    content: "As a parent, I'm extremely satisfied with the progress my daughter has made. The regular updates and personalized attention are commendable.",
    rating: 5,
  },
  {
    id: 3,
    name: "Amit Sharma",
    role: "Class 10 Student",
    content: "The teachers here don't just teach, they inspire. The doubt-clearing sessions and exam strategies helped me top my class!",
    rating: 5,
  },
  {
    id: 4,
    name: "Mrs. Fatima",
    role: "Parent",
    content: "My son was struggling with Mathematics, but after joining IQRA TUTORIALS, his confidence and grades have improved significantly.",
    rating: 5,
  },
];

export const TestimonialsSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const goToPrev = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

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
            Success Stories
          </span>
          <h2 className="font-playfair text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            What Our <span className="text-gold">Students Say</span>
          </h2>
          <p className="text-lg text-primary-foreground/70 max-w-2xl mx-auto font-inter">
            Hear from our students and parents about their experience
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto relative">
          {/* Main Testimonial Card */}
          <div className="relative min-h-[300px]">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -100 }}
                transition={{ duration: 0.5 }}
                className="bg-primary-foreground/5 backdrop-blur-sm rounded-3xl p-8 md:p-12 border border-primary-foreground/10"
              >
                <Quote className="w-12 h-12 text-gold/30 mb-6" />
                
                <p className="text-xl md:text-2xl text-primary-foreground/90 font-inter leading-relaxed mb-8 italic">
                  "{testimonials[currentIndex].content}"
                </p>

                <div className="flex items-center justify-between flex-wrap gap-4">
                  <div>
                    <h4 className="font-playfair text-xl font-bold text-primary-foreground">
                      {testimonials[currentIndex].name}
                    </h4>
                    <p className="text-gold">{testimonials[currentIndex].role}</p>
                  </div>
                  
                  <div className="flex gap-1">
                    {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-gold text-gold" />
                    ))}
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Navigation */}
          <div className="flex items-center justify-center gap-4 mt-8">
            <button
              onClick={goToPrev}
              className="w-12 h-12 rounded-full bg-primary-foreground/10 border border-primary-foreground/20 flex items-center justify-center text-primary-foreground hover:bg-gold hover:text-navy-dark hover:border-gold transition-all duration-300"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>

            <div className="flex gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentIndex
                      ? "bg-gold w-8"
                      : "bg-primary-foreground/30 hover:bg-primary-foreground/50"
                  }`}
                />
              ))}
            </div>

            <button
              onClick={goToNext}
              className="w-12 h-12 rounded-full bg-primary-foreground/10 border border-primary-foreground/20 flex items-center justify-center text-primary-foreground hover:bg-gold hover:text-navy-dark hover:border-gold transition-all duration-300"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
