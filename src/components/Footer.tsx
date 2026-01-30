import { motion } from "framer-motion";
import { Code2, Heart } from "lucide-react";

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-8 border-t border-border relative overflow-hidden">
      <div className="absolute inset-0 grid-pattern opacity-10" />
      
      <div className="container relative z-10 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            {/* Logo */}
            <motion.a
              href="#"
              className="flex items-center gap-2 text-foreground font-bold text-lg"
              whileHover={{ scale: 1.05 }}
            >
              <Code2 className="w-5 h-5 text-primary" />
              <span className="font-mono">Ahmed</span>
              <span className="text-gradient">...</span>
            </motion.a>

            {/* Copyright */}
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <span>© {currentYear} Ahmed Bahgat.</span>

            </div>

            {/* Quick Links */}
            <div className="flex items-center gap-6 text-sm">
              {["About", "Projects", "Contact"].map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  {item}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};