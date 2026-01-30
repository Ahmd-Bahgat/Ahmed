// import { motion, useInView } from "framer-motion";
// import { useRef } from "react";
// import { Briefcase, Calendar } from "lucide-react";

// const experiences = [
//   {
//     title: "Senior Frontend Developer",
//     company: "TechCorp Inc.",
//     period: "2022 - Present",
//     description:
//       "Leading the frontend architecture for a SaaS platform serving 100k+ users. Implementing design systems, optimizing performance, and mentoring junior developers.",
//     technologies: ["React", "TypeScript", "GraphQL", "AWS"],
//   },
//   {
//     title: "Full Stack Developer",
//     company: "StartupXYZ",
//     period: "2020 - 2022",
//     description:
//       "Built and maintained multiple client-facing applications. Collaborated with design team to create intuitive user experiences and implemented CI/CD pipelines.",
//     technologies: ["Next.js", "Node.js", "PostgreSQL", "Docker"],
//   },
//   {
//     title: "Frontend Developer",
//     company: "Digital Agency",
//     period: "2019 - 2020",
//     description:
//       "Developed responsive web applications for various clients across industries. Focused on accessibility and cross-browser compatibility.",
//     technologies: ["React", "JavaScript", "SCSS", "REST APIs"],
//   },
//   {
//     title: "Junior Developer",
//     company: "WebDev Studio",
//     period: "2018 - 2019",
//     description:
//       "Started my professional journey building marketing websites and learning modern web development practices.",
//     technologies: ["HTML", "CSS", "JavaScript", "WordPress"],
//   },
// ];

// export const ExperienceSection = () => {
//   const ref = useRef(null);
//   const isInView = useInView(ref, { once: true, margin: "-100px" });

  // return (
  //   <section id="experience" className="py-24 md:py-32 relative overflow-hidden">
  //     {/* Background */}
  //     <div className="absolute inset-0 grid-pattern opacity-20" />
  //     <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-accent/10 rounded-full blur-[200px]" />

  //     <div className="container relative z-10 px-6" ref={ref}>
  //       <div className="max-w-4xl mx-auto">
  //         {/* Section Header */}
  //         <motion.div
  //           initial={{ opacity: 0, y: 30 }}
  //           animate={isInView ? { opacity: 1, y: 0 } : {}}
  //           transition={{ duration: 0.6 }}
  //           className="text-center mb-16"
  //         >
  //           <span className="text-sm font-mono text-primary uppercase tracking-widest">
  //             Career
  //           </span>
  //           <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6">
  //             Work
  //             <span className="text-gradient"> Experience</span>
  //           </h2>
  //           <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
  //             A timeline of my professional journey and the incredible teams I've 
  //             had the pleasure to work with.
  //           </p>
  //         </motion.div>

  //         {/* Timeline */}
  //         <div className="relative">
  //           {/* Timeline Line */}
  //           <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-primary via-secondary to-accent transform md:-translate-x-1/2" />

  //           {/* Experience Items */}
  //           {experiences.map((experience, index) => (
  //             <motion.div
  //               key={experience.title}
  //               initial={{ opacity: 0, y: 50 }}
  //               animate={isInView ? { opacity: 1, y: 0 } : {}}
  //               transition={{ duration: 0.6, delay: 0.2 + index * 0.15 }}
  //               className={`relative flex flex-col md:flex-row gap-8 mb-12 ${
  //                 index % 2 === 0 ? "md:flex-row-reverse" : ""
  //               }`}
  //             >
  //               {/* Timeline Dot */}
  //               <div className="absolute left-0 md:left-1/2 w-4 h-4 bg-primary rounded-full transform -translate-x-1/2 ring-4 ring-background z-10" />

  //               {/* Content */}
  //               <div className={`flex-1 pl-8 md:pl-0 ${index % 2 === 0 ? "md:pr-12" : "md:pl-12"}`}>
  //                 <motion.div
  //                   whileHover={{ scale: 1.02 }}
  //                   className="glass-card p-6 rounded-2xl hover-glow"
  //                 >
  //                   <div className="flex items-center gap-2 text-primary mb-2">
  //                     <Briefcase className="w-4 h-4" />
  //                     <span className="font-semibold">{experience.company}</span>
  //                   </div>
  //                   <h3 className="text-xl font-bold mb-2">{experience.title}</h3>
  //                   <div className="flex items-center gap-2 text-sm text-muted-foreground mb-4">
  //                     <Calendar className="w-4 h-4" />
  //                     <span className="font-mono">{experience.period}</span>
  //                   </div>
  //                   <p className="text-muted-foreground mb-4 leading-relaxed">
  //                     {experience.description}
  //                   </p>
  //                   <div className="flex flex-wrap gap-2">
  //                     {experience.technologies.map((tech) => (
  //                       <span
  //                         key={tech}
  //                         className="px-3 py-1 text-xs font-mono bg-muted text-muted-foreground rounded-full"
  //                       >
  //                         {tech}
  //                       </span>
  //                     ))}
  //                   </div>
  //                 </motion.div>
  //               </div>

  //               {/* Spacer for alternating layout */}
  //               <div className="hidden md:block flex-1" />
  //             </motion.div>
  //           ))}
  //         </div>
  //       </div>
  //     </div>
  //   </section>
  // );
//};