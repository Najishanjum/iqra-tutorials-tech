import { useState } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { 
  MapPin, 
  Phone, 
  MessageSquare, 
  Send,
  CheckCircle
} from "lucide-react";
import { useToast } from "@/hooks/use-toast";

export const ContactSection = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const { toast } = useToast();
  
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500));
    
    setIsSubmitting(false);
    setIsSubmitted(true);
    
    toast({
      title: "Inquiry Submitted!",
      description: "We'll get back to you within 24 hours.",
    });

    // Reset after showing success
    setTimeout(() => setIsSubmitted(false), 3000);
    (e.target as HTMLFormElement).reset();
  };

  return (
    <section id="contact" className="section-padding bg-cream overflow-hidden">
      <div className="container-custom">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1 rounded-full bg-navy/10 text-navy text-sm font-medium mb-4">
            Get In Touch
          </span>
          <h2 className="font-playfair text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
            Contact & <span className="text-gradient-gold">Admission</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto font-inter">
            Ready to start your journey towards academic excellence? Get in touch with us today!
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Info & Map */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-8"
          >
            {/* Contact Cards */}
            <div className="space-y-4">
              <div className="bg-card rounded-2xl p-6 border border-border shadow-elegant flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-gradient-gold flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-6 h-6 text-navy-dark" />
                </div>
                <div>
                  <h3 className="font-playfair text-lg font-bold text-foreground mb-1">
                    Our Location
                  </h3>
                  <p className="text-muted-foreground font-inter">
                    Near Police Station, Deoria,<br />
                    Muzaffarpur, Bihar
                  </p>
                </div>
              </div>

              <div className="bg-card rounded-2xl p-6 border border-border shadow-elegant flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-gradient-gold flex items-center justify-center flex-shrink-0">
                  <Phone className="w-6 h-6 text-navy-dark" />
                </div>
                <div>
                  <h3 className="font-playfair text-lg font-bold text-foreground mb-1">
                    Phone Number
                  </h3>
                  <p className="text-muted-foreground font-inter">
                    +91 7873317538
                  </p>
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="tel:+917873317538"
                className="flex-1"
              >
                <Button className="w-full bg-gradient-navy hover:opacity-90 text-primary-foreground py-6 rounded-xl text-lg font-semibold">
                  <Phone className="w-5 h-5 mr-2" />
                  Call Now
                </Button>
              </a>
              <a
                href="https://wa.me/917873317538?text=Hello! I'm interested in IQRA TUTORIALS. Please share more information."
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1"
              >
                <Button className="w-full bg-gradient-to-r from-green-500 to-green-600 hover:opacity-90 text-white py-6 rounded-xl text-lg font-semibold">
                  <MessageSquare className="w-5 h-5 mr-2" />
                  WhatsApp
                </Button>
              </a>
            </div>

            {/* Map Embed */}
            <div className="rounded-2xl overflow-hidden border border-border shadow-elegant h-[300px]">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d28593.762936772847!2d85.3656!3d26.1197!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39ed0f0f8f8f8f8f%3A0x0!2sMuzaffarpur%2C%20Bihar!5e0!3m2!1sen!2sin!4v1234567890"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="IQRA TUTORIALS Location"
              />
            </div>
          </motion.div>

          {/* Admission Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <div className="bg-card rounded-3xl p-8 md:p-10 border border-border shadow-elegant">
              <h3 className="font-playfair text-2xl font-bold text-foreground mb-2">
                Admission Inquiry Form
              </h3>
              <p className="text-muted-foreground font-inter mb-8">
                Fill in the details and we'll contact you shortly
              </p>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Student Name *
                    </label>
                    <Input
                      required
                      placeholder="Enter student name"
                      className="rounded-xl border-border focus:border-gold focus:ring-gold"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Parent Name *
                    </label>
                    <Input
                      required
                      placeholder="Enter parent name"
                      className="rounded-xl border-border focus:border-gold focus:ring-gold"
                    />
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Phone Number *
                    </label>
                    <Input
                      required
                      type="tel"
                      placeholder="+91 XXXXXXXXXX"
                      className="rounded-xl border-border focus:border-gold focus:ring-gold"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Class Interested In *
                    </label>
                    <select
                      required
                      className="w-full h-10 rounded-xl border border-border bg-background px-3 text-sm focus:border-gold focus:ring-gold focus:outline-none"
                    >
                      <option value="">Select Class</option>
                      <option value="8">Class 8</option>
                      <option value="9">Class 9</option>
                      <option value="10">Class 10</option>
                      <option value="11">Class 11</option>
                      <option value="12">Class 12</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Board *
                  </label>
                  <div className="flex gap-4">
                    <label className="flex items-center gap-2 cursor-pointer">
                      <input type="radio" name="board" value="CBSE" required className="accent-gold" />
                      <span className="text-sm text-muted-foreground">CBSE</span>
                    </label>
                    <label className="flex items-center gap-2 cursor-pointer">
                      <input type="radio" name="board" value="BSEB" className="accent-gold" />
                      <span className="text-sm text-muted-foreground">BSEB</span>
                    </label>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Message (Optional)
                  </label>
                  <Textarea
                    placeholder="Any specific requirements or questions..."
                    className="rounded-xl border-border focus:border-gold focus:ring-gold min-h-[100px]"
                  />
                </div>

                <Button
                  type="submit"
                  disabled={isSubmitting || isSubmitted}
                  className="w-full bg-gradient-gold hover:opacity-90 text-navy-dark py-6 rounded-xl text-lg font-semibold disabled:opacity-50"
                >
                  {isSubmitted ? (
                    <>
                      <CheckCircle className="w-5 h-5 mr-2" />
                      Submitted Successfully!
                    </>
                  ) : isSubmitting ? (
                    <>
                      <div className="w-5 h-5 border-2 border-navy-dark/30 border-t-navy-dark rounded-full animate-spin mr-2" />
                      Submitting...
                    </>
                  ) : (
                    <>
                      <Send className="w-5 h-5 mr-2" />
                      Submit Inquiry
                    </>
                  )}
                </Button>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
