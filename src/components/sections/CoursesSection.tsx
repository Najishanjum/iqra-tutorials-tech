import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { BookMarked, GraduationCap, Lightbulb, Rocket } from "lucide-react";

const courses = [
  {
    icon: Lightbulb,
    classes: "Class 8–9",
    title: "Foundation Building",
    description: "Strengthen basics, develop problem-solving skills, and build confidence for higher classes.",
    subjects: ["Mathematics", "Science", "English", "Social Studies"],
    color: "bg-emerald-500",
  },
  {
    icon: BookMarked,
    classes: "Class 10",
    title: "Board Exam Focus",
    description: "Intensive preparation for CBSE/BSEB board exams with complete syllabus coverage and practice.",
    subjects: ["All Core Subjects", "Board Pattern Practice", "Previous Year Questions"],
    color: "bg-blue-500",
  },
  {
    icon: GraduationCap,
    classes: "Class 11",
    title: "Science Stream",
    description: "Comprehensive science coaching with practical applications and conceptual clarity.",
    subjects: ["Physics", "Chemistry", "Biology", "Mathematics"],
    color: "bg-purple-500",
  },
  {
    icon: Rocket,
    classes: "Class 12",
    title: "Boards + Competitive",
    description: "Comprehensive preparation for board exams and competitive entrance examinations.",
    subjects: ["Complete Board Prep", "JEE/NEET Basics", "Career Guidance"],
    color: "bg-orange-500",
  },
];

export const CoursesSection = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="courses" className="section-padding bg-background overflow-hidden">
      <div className="container-custom">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1 rounded-full bg-gold/10 text-gold text-sm font-medium mb-4">
            Our Programs
          </span>
          <h2 className="font-playfair text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
            Courses & <span className="text-gradient-gold">Classes</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto font-inter">
            Structured programs designed for each grade level, following CBSE & BSEB curriculum
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {courses.map((course, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              whileHover={{ y: -8 }}
              className="group"
            >
              <div className="bg-card rounded-2xl border border-border overflow-hidden h-full shadow-elegant transition-all duration-300 group-hover:shadow-lg group-hover:border-gold/50">
                {/* Header */}
                <div className={`${course.color} p-6 relative overflow-hidden`}>
                  <div className="absolute inset-0 bg-gradient-to-br from-black/0 to-black/20" />
                  <div className="relative z-10">
                    <course.icon className="w-10 h-10 text-white mb-3" />
                    <p className="text-white/90 text-sm font-medium">{course.classes}</p>
                    <h3 className="font-playfair text-xl font-bold text-white mt-1">
                      {course.title}
                    </h3>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <p className="text-muted-foreground font-inter text-sm leading-relaxed mb-4">
                    {course.description}
                  </p>
                  
                  <div className="space-y-2">
                    <p className="text-xs font-semibold text-foreground uppercase tracking-wider">
                      Subjects Covered:
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {course.subjects.map((subject, i) => (
                        <span
                          key={i}
                          className="text-xs px-2 py-1 rounded-full bg-muted text-muted-foreground"
                        >
                          {subject}
                        </span>
                      ))}
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
