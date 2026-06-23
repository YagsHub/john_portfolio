import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { HiMenu, HiX, HiMoon, HiSun } from "react-icons/hi";
import { navLinks } from "../data/fallbackData";

export default function Navbar({ isDark, toggleDark }) {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  return (
    <motion.nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "glass shadow-md py-3" : "bg-transparent py-5"
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          <a
            href="#home"
            className="text-xl font-bold gradient-text"
            aria-label="Home"
          >
            John Vincent B. Yagong
          </a>

          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-sm font-medium text-text-muted hover:text-primary dark:text-slate-300 dark:hover:text-primary transition-colors"
              >
                {link.name}
              </a>
            ))}
            <button
              onClick={toggleDark}
              className="p-2 rounded-xl hover:bg-primary/10 transition-colors"
              aria-label={
                isDark ? "Switch to light mode" : "Switch to dark mode"
              }
            >
              {isDark ? (
                <HiSun className="w-5 h-5 text-yellow-400" />
              ) : (
                <HiMoon className="w-5 h-5 text-secondary" />
              )}
            </button>
          </div>

          <div className="flex items-center gap-2 md:hidden">
            <button
              onClick={toggleDark}
              className="p-2 rounded-xl hover:bg-primary/10 transition-colors"
              aria-label={
                isDark ? "Switch to light mode" : "Switch to dark mode"
              }
            >
              {isDark ? (
                <HiSun className="w-5 h-5 text-yellow-400" />
              ) : (
                <HiMoon className="w-5 h-5 text-secondary" />
              )}
            </button>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-xl hover:bg-primary/10 transition-colors"
              aria-label={isOpen ? "Close menu" : "Open menu"}
              aria-expanded={isOpen}
            >
              {isOpen ? (
                <HiX className="w-6 h-6" />
              ) : (
                <HiMenu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="md:hidden glass border-t border-white/20 dark:border-slate-700/50"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="px-4 py-4 space-y-1">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="block px-4 py-3 rounded-xl text-text-muted hover:text-primary hover:bg-primary/5 dark:text-slate-300 transition-colors"
                >
                  {link.name}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
