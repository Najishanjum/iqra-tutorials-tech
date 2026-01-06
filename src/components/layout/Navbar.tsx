import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, BookOpen, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useNavigate, useLocation } from "react-router-dom";

const navLinks = [
  { name: "Home", href: "#", isRoute: false },
  { name: "About", href: "#about", isRoute: false },
  { name: "Courses", href: "#courses", isRoute: false },
  { name: "Features", href: "/features", isRoute: true },
  { name: "Gallery", href: "/gallery", isRoute: true },
  { name: "FAQ", href: "#faq", isRoute: false },
  { name: "Contact", href: "#contact", isRoute: false },
];

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (href: string, isRoute: boolean) => {
    setIsMobileMenuOpen(false);
    if (isRoute) {
      navigate(href);
    } else if (href === "#") {
      if (location.pathname !== "/") {
        navigate("/");
      } else {
        window.scrollTo({ top: 0, behavior: "smooth" });
      }
    } else {
      if (location.pathname !== "/") {
        navigate("/" + href);
      } else {
        document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-card/95 backdrop-blur-md shadow-elegant"
            : "bg-transparent"
        }`}
      >
        <div className="container-custom">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <button 
              onClick={() => handleNavClick("#", false)}
              className="flex items-center gap-3 group"
            >
              <div className={`w-10 h-10 rounded-xl flex items-center justify-center transition-all ${
                isScrolled ? "bg-gradient-gold" : "bg-gold"
              }`}>
                <BookOpen className="w-5 h-5 text-navy-dark" />
              </div>
              <div>
                <h1 className={`font-playfair text-lg font-bold transition-colors ${
                  isScrolled ? "text-foreground" : "text-primary-foreground"
                }`}>
                  IQRA TUTORIALS
                </h1>
              </div>
            </button>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-8">
              {navLinks.map((link) => (
                <button
                  key={link.name}
                  onClick={() => handleNavClick(link.href, link.isRoute)}
                  className={`font-inter text-sm font-medium transition-colors hover:text-gold ${
                    isScrolled ? "text-foreground" : "text-primary-foreground"
                  }`}
                >
                  {link.name}
                </button>
              ))}
            </div>

            {/* CTA Button */}
            <div className="hidden lg:flex items-center gap-4">
              <a href="tel:+917873317538">
                <Button
                  className={`rounded-full px-6 font-semibold transition-all ${
                    isScrolled
                      ? "bg-gradient-gold text-navy-dark hover:opacity-90"
                      : "bg-gold text-navy-dark hover:bg-gold-light"
                  }`}
                >
                  <Phone className="w-4 h-4 mr-2" />
                  Call Now
                </Button>
              </a>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className={`lg:hidden p-2 transition-colors ${
                isScrolled ? "text-foreground" : "text-primary-foreground"
              }`}
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 z-40 lg:hidden"
          >
            <div 
              className="absolute inset-0 bg-black/50 backdrop-blur-sm"
              onClick={() => setIsMobileMenuOpen(false)}
            />
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "tween", duration: 0.3 }}
              className="absolute top-0 right-0 w-80 h-full bg-card shadow-xl"
            >
              <div className="p-6 pt-24">
                <nav className="space-y-4">
                  {navLinks.map((link, index) => (
                    <motion.button
                      key={link.name}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                      onClick={() => handleNavClick(link.href, link.isRoute)}
                      className="block w-full text-left font-inter text-lg font-medium text-foreground hover:text-gold transition-colors py-2"
                    >
                      {link.name}
                    </motion.button>
                  ))}
                </nav>
                
                <div className="mt-8 pt-8 border-t border-border">
                  <a href="tel:+917873317538" className="block">
                    <Button className="w-full bg-gradient-gold text-navy-dark hover:opacity-90 rounded-xl py-6 font-semibold">
                      <Phone className="w-5 h-5 mr-2" />
                      Call: +91 7873317538
                    </Button>
                  </a>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
