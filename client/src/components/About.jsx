import { motion } from 'framer-motion';
import { HiAcademicCap, HiLightBulb, HiUser } from 'react-icons/hi';
import SectionHeading from './ui/SectionHeading';

const cards = [
  { key: 'about', icon: HiUser, title: 'About Me', field: 'about' },
  { key: 'education', icon: HiAcademicCap, title: 'Education', field: 'education' },
  { key: 'objectives', icon: HiLightBulb, title: 'Career Objectives', field: 'career_objectives' },
];

export default function About({ profile }) {
  return (
    <section id="about" className="section-padding bg-surface/50 dark:bg-slate-900/50">
      <div className="max-w-7xl mx-auto">
        <SectionHeading
          title="About Me"
          subtitle="Get to know more about my background, education, and career aspirations."
        />

        <div className="grid md:grid-cols-3 gap-6">
          {cards.map((card, index) => {
            const Icon = card.icon;
            return (
              <motion.div
                key={card.key}
                className="glass-card group"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="w-12 h-12 rounded-xl gradient-bg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <Icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-text dark:text-white mb-3">{card.title}</h3>
                <p className="text-text-muted dark:text-slate-400 leading-relaxed">
                  {profile[card.field]}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
