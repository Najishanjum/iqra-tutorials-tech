import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { cn } from "@/lib/utils";

interface SectionWrapperProps {
  children: React.ReactNode;
  className?: string;
  id?: string;
  variant?: "default" | "navy" | "cream" | "gradient";
}

const variants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut" as const,
      staggerChildren: 0.1,
    },
  },
};

export const SectionWrapper = ({
  children,
  className,
  id,
  variant = "default",
}: SectionWrapperProps) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const bgClasses = {
    default: "bg-background",
    navy: "bg-gradient-navy text-primary-foreground",
    cream: "bg-cream",
    gradient: "bg-gradient-hero text-primary-foreground",
  };

  return (
    <motion.section
      ref={ref}
      id={id}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      variants={variants}
      className={cn("section-padding overflow-hidden", bgClasses[variant], className)}
    >
      <div className="container-custom">{children}</div>
    </motion.section>
  );
};

export const AnimatedElement = ({
  children,
  className,
  delay = 0,
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}) => {
  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, y: 30 },
        visible: {
          opacity: 1,
          y: 0,
          transition: { duration: 0.5, delay },
        },
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
};
