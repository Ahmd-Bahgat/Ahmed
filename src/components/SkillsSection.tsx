import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const techStack = [
  { name: "Javascript", icon: "⭐" },
  { name: "TypeScript", icon: "📘" },
  { name: "Node.js", icon: "🟢" },
  { name: "Express.js", icon: "🚂" },
  { name: "MongoDB", icon: "🍃" },
  { name: "Mongoose", icon: "🍃" },
  { name: "PostgreSQL", icon: "🐘" },
  { name: "Prisma", icon: "⚡"},
  { name: "Docker", icon: "🐳" },
  { name: "Git", icon: "📦" },
  { name: "GitHub", icon: "🐙" },
  { name: "Redis", icon: "🟥" },
  { name: "JWT", icon: "🔐" },
  { name: "REST API", icon: "🔗" },
];

export const SkillsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="skills" className="py-24 md:py-32 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 grid-pattern opacity-20" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-[200px]" />

      <div className="container relative z-10 px-6" ref={ref}>
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <span className="text-sm font-mono text-primary uppercase tracking-widest">
              Tech Stack
            </span>
            <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6">
              Skills &<span className="text-gradient"> Technologies</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              I work with a diverse set of technologies to build modern,
              scalable, and performant applications.
            </p>
          </motion.div>

          {/* Tech Stack Icons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-wrap justify-center gap-4 mb-16"
          >
            {techStack.map((tech, index) => (
              <motion.div
                key={tech.name}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.4, delay: 0.3 + index * 0.05 }}
                whileHover={{ scale: 1.1, y: -5 }}
                className="glass-card px-4 py-3 rounded-xl flex items-center gap-2 cursor-default group"
              >
                <span className="text-xl">{tech.icon}</span>
                <span className="text-sm font-medium text-muted-foreground group-hover:text-foreground transition-colors">
                  {tech.name}
                </span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};
