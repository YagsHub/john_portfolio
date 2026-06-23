import { useState } from "react";
import { motion } from "framer-motion";
import { HiDownload, HiMail } from "react-icons/hi";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { socialLinks } from "../data/fallbackData";

function AnimatedBackground() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      <div className="absolute -top-40 -right-40 w-80 h-80 bg-primary/20 rounded-full blur-3xl animate-float" />
      <div
        className="absolute top-1/2 -left-20 w-60 h-60 bg-secondary/15 rounded-full blur-3xl animate-float"
        style={{ animationDelay: "2s" }}
      />
      <div
        className="absolute -bottom-20 right-1/3 w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-float"
        style={{ animationDelay: "4s" }}
      />
      <div
        className="absolute inset-0 opacity-[0.03] dark:opacity-[0.05]"
        style={{
          backgroundImage:
            "radial-gradient(circle, #4E67EB 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
      />
    </div>
  );
}

function ProfileAvatar({ name, imageUrl }) {
  const [imageError, setImageError] = useState(false);

  const initials =
    name
      ?.split(" ")
      .map((n) => n[0])
      .join("")
      .slice(0, 2)
      .toUpperCase() || "YN";

  const showImage = imageUrl && !imageError;

  return (
    <div className="relative">
      <div className="absolute inset-0 gradient-bg rounded-full blur-md opacity-40 scale-110" />
      <div className="relative w-48 h-48 sm:w-76 sm:h-76 rounded-full gradient-bg p-1">
        <div className="w-full h-full rounded-full bg-surface dark:bg-slate-800 flex items-center justify-center overflow-hidden">
          {showImage ? (
            <img
              src={imageUrl}
              alt={`${name} profile`}
              className="w-full h-full object-cover object-top"
              loading="eager"
              decoding="async"
              onError={() => setImageError(true)}
            />
          ) : (
            <span className="text-4xl sm:text-5xl font-bold gradient-text">
              {initials}
            </span>
          )}
        </div>
      </div>
    </div>
  );
}

export default function Hero({ profile }) {
  const { name, title, introduction, resume_url, profile_image_url } = profile;

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center section-padding pt-32"
    >
      <AnimatedBackground />

      <div className="relative max-w-7xl mx-auto w-full">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="order-2 lg:order-1 text-center lg:text-left"
          >
            <motion.p
              className="text-primary font-semibold mb-2"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              Hello, I&apos;m
            </motion.p>
            <motion.h1
              className="text-4xl sm:text-5xl lg:text-6xl font-bold text-text dark:text-white mb-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              {name}
            </motion.h1>
            <motion.h2
              className="text-2xl sm:text-3xl font-semibold gradient-text mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
            >
              {title}
            </motion.h2>
            <motion.p
              className="text-lg text-text-muted dark:text-slate-400 mb-8 max-w-xl mx-auto lg:mx-0"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
            >
              {introduction}
            </motion.p>

            <motion.div
              className="flex flex-wrap gap-4 justify-center lg:justify-start mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
            >
              <a href={resume_url || "#"} className="btn-primary" download>
                <HiDownload className="w-5 h-5" />
                Download Resume
              </a>
              <a href="#contact" className="btn-secondary">
                <HiMail className="w-5 h-5" />
                Contact Me
              </a>
            </motion.div>

            <motion.div
              className="flex gap-4 justify-center lg:justify-start"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7 }}
            >
              <a
                href={socialLinks.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-xl glass hover:bg-primary/10 transition-all hover:-translate-y-1"
                aria-label="GitHub"
              >
                <FaGithub className="w-5 h-5" />
              </a>
              <a
                href={socialLinks.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-xl glass hover:bg-primary/10 transition-all hover:-translate-y-1"
                aria-label="LinkedIn"
              >
                <FaLinkedin className="w-5 h-5" />
              </a>
            </motion.div>
          </motion.div>

          <motion.div
            className="order-1 lg:order-2 flex justify-center"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <ProfileAvatar name={name} imageUrl={profile_image_url} />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
