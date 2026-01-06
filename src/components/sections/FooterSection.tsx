import { motion } from "framer-motion";
import { 
  MapPin, 
  Phone, 
  Mail, 
  Facebook, 
  Instagram, 
  Youtube,
  ArrowUp,
  BookOpen
} from "lucide-react";

const quickLinks = [
  { name: "About Us", href: "#about" },
  { name: "Courses", href: "#courses" },
  { name: "Features", href: "/features" },
  { name: "Gallery", href: "/gallery" },
  { name: "FAQ", href: "#faq" },
  { name: "Contact", href: "#contact" },
];

const courses = [
  "Class 8 Foundation",
  "Class 9 Foundation",
  "Class 10 Board Prep",
  "Class 11 Science/Commerce",
  "Class 12 Board + Competitive",
];

export const FooterSection = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-gradient-navy text-primary-foreground">
      {/* Main Footer */}
      <div className="container-custom py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand Column */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-xl bg-gradient-gold flex items-center justify-center">
                <BookOpen className="w-6 h-6 text-navy-dark" />
              </div>
              <div>
                <h3 className="font-playfair text-xl font-bold">IQRA TUTORIALS</h3>
                <p className="text-xs text-primary-foreground/60">Empowering Students</p>
              </div>
            </div>
            <p className="text-primary-foreground/70 font-inter text-sm leading-relaxed mb-6">
              Quality coaching for Class 8-12 students following CBSE & BSEB patterns. 
              Building strong foundations for academic success.
            </p>
            <div className="flex gap-4">
              <motion.a
                href="https://www.facebook.com/share/1EECSk44rb/"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1, y: -2 }}
                className="w-10 h-10 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-gold hover:text-navy-dark transition-colors"
              >
                <Facebook className="w-5 h-5" />
              </motion.a>
              <motion.a
                href="https://www.instagram.com/iqratutorial20?igsh=MWszZ2JnMGFoYjR0bA=="
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1, y: -2 }}
                className="w-10 h-10 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-gold hover:text-navy-dark transition-colors"
              >
                <Instagram className="w-5 h-5" />
              </motion.a>
              <motion.a
                href="https://youtube.com/@iqratutorial-v7h?si=0PBgKUQ98bULCmQC"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1, y: -2 }}
                className="w-10 h-10 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-gold hover:text-navy-dark transition-colors"
              >
                <Youtube className="w-5 h-5" />
              </motion.a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-playfair text-lg font-bold mb-6 text-gold">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <motion.a
                    href={link.href}
                    whileHover={{ x: 5 }}
                    className="text-primary-foreground/70 hover:text-gold transition-colors font-inter text-sm inline-block"
                  >
                    {link.name}
                  </motion.a>
                </li>
              ))}
            </ul>
          </div>

          {/* Our Courses */}
          <div>
            <h4 className="font-playfair text-lg font-bold mb-6 text-gold">Our Courses</h4>
            <ul className="space-y-3">
              {courses.map((course, index) => (
                <li key={index}>
                  <span className="text-primary-foreground/70 font-inter text-sm">
                    {course}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-playfair text-lg font-bold mb-6 text-gold">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-gold flex-shrink-0 mt-0.5" />
                <span className="text-primary-foreground/70 font-inter text-sm">
                  Near Police Station, Deoria,<br />
                  Muzaffarpur, Bihar
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-gold flex-shrink-0" />
                <a 
                  href="tel:+917873317538"
                  className="text-primary-foreground/70 hover:text-gold transition-colors font-inter text-sm"
                >
                  +91 7873317538
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-gold flex-shrink-0" />
                <span className="text-primary-foreground/70 font-inter text-sm">
                  info@iqratutorials.com
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-primary-foreground/10">
        <div className="container-custom py-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-primary-foreground/60 text-sm font-inter text-center md:text-left">
            © {new Date().getFullYear()} IQRA TUTORIALS. All rights reserved.
          </p>
          <p className="text-primary-foreground/60 text-sm font-inter">
            Developed By Najish Anjum
          </p>
        </div>
      </div>

      {/* Scroll to Top Button */}
      <motion.button
        onClick={scrollToTop}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        whileHover={{ scale: 1.1 }}
        className="fixed bottom-8 right-8 w-12 h-12 rounded-full bg-gradient-gold text-navy-dark flex items-center justify-center shadow-gold-glow z-50"
      >
        <ArrowUp className="w-6 h-6" />
      </motion.button>
    </footer>
  );
};
