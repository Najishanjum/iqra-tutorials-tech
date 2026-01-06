import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "What classes do you offer coaching for?",
    answer: "We offer comprehensive coaching for students from Class 8 to Class 12, following both CBSE and BSEB (Bihar Board) patterns. Our programs are designed to build strong foundations and prepare students for board examinations.",
  },
  {
    question: "What is the batch size?",
    answer: "We maintain small batch sizes to ensure personalized attention for every student. This allows our faculty to address individual learning needs and provide focused guidance.",
  },
  {
    question: "How do you track student progress?",
    answer: "We conduct regular weekly and monthly tests to evaluate student progress. Parents receive detailed performance reports and can interact with teachers during scheduled meetings to discuss their child's development.",
  },
  {
    question: "Do you provide study materials?",
    answer: "Yes, we provide comprehensive digital notes and PDFs that cover the entire syllabus. Our study materials are regularly updated and designed to complement classroom teaching.",
  },
  {
    question: "What are the class timings?",
    answer: "We offer flexible timing slots to accommodate students' school schedules. Please contact us for the current batch timings and availability.",
  },
  {
    question: "How can I enroll my child?",
    answer: "You can enroll your child by visiting our center at Near Police Station, Deoria, Muzaffarpur, Bihar, or by calling us at +91 7873317538. You can also fill out the admission inquiry form on our website.",
  },
  {
    question: "Do you offer trial classes?",
    answer: "Yes, we offer demo classes so that students and parents can experience our teaching methodology before making a commitment. Contact us to schedule a trial session.",
  },
  {
    question: "What subjects do you cover?",
    answer: "We cover all major subjects including Mathematics, Science (Physics, Chemistry, Biology), English, Social Studies, and Commerce subjects (Accountancy, Economics) based on the student's stream and class level.",
  },
];

export const FAQSection = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="faq" className="section-padding bg-background overflow-hidden">
      <div className="container-custom">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1 rounded-full bg-gold/10 text-gold text-sm font-medium mb-4">
            Got Questions?
          </span>
          <h2 className="font-playfair text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
            Frequently Asked <span className="text-gradient-gold">Questions</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto font-inter">
            Find answers to common questions about our programs and services
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-3xl mx-auto"
        >
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.4, delay: 0.1 * index }}
              >
                <AccordionItem
                  value={`item-${index}`}
                  className="bg-card rounded-xl border border-border px-6 shadow-sm data-[state=open]:shadow-elegant data-[state=open]:border-gold/50 transition-all duration-300"
                >
                  <AccordionTrigger className="text-left font-playfair text-lg font-semibold text-foreground hover:text-gold transition-colors py-6 [&[data-state=open]]:text-gold">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground font-inter leading-relaxed pb-6">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              </motion.div>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  );
};
