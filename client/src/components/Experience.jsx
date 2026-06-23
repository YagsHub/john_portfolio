import { motion } from 'framer-motion';
import { HiBriefcase, HiAcademicCap, HiCode } from 'react-icons/hi';
import SectionHeading from './ui/SectionHeading';
import { experienceTypeLabels, experienceTypeColors } from '../data/fallbackData';

const typeIcons = {
  internship: HiBriefcase,
  freelance: HiCode,
  academic: HiAcademicCap,
};

function formatDate(dateStr) {
  if (!dateStr) return 'Present';
  return new Date(dateStr).toLocaleDateString('en-US', { month: 'short', year: 'numeric' });
}

function TimelineItem({ item, index }) {
  const Icon = typeIcons[item.type] || HiBriefcase;
  const colorClass = experienceTypeColors[item.type] || 'bg-primary';

  return (
    <motion.div
      className="relative pl-8 pb-12 last:pb-0"
      initial={{ opacity: 0, x: -30 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <div className="absolute left-0 top-0 w-4 h-4 rounded-full gradient-bg ring-4 ring-background dark:ring-slate-950" />
      <div className="absolute left-[7px] top-4 bottom-0 w-0.5 bg-slate-200 dark:bg-slate-700 last:hidden" />

      <div className="glass-card ml-4">
        <div className="flex flex-wrap items-center gap-3 mb-3">
          <div className={`w-10 h-10 rounded-xl ${colorClass} flex items-center justify-center`}>
            <Icon className="w-5 h-5 text-white" />
          </div>
          <div className="flex-1 min-w-0">
            <h3 className="text-lg font-semibold text-text dark:text-white">{item.title}</h3>
            <p className="text-primary font-medium text-sm">{item.company}</p>
          </div>
          <span className="px-3 py-1 text-xs font-medium rounded-full bg-primary/10 text-primary">
            {experienceTypeLabels[item.type] || item.type}
          </span>
        </div>

        <p className="text-sm text-text-muted dark:text-slate-400 mb-3">
          {formatDate(item.start_date)} — {item.is_current ? 'Present' : formatDate(item.end_date)}
        </p>

        <p className="text-text-muted dark:text-slate-400 leading-relaxed text-sm">
          {item.description}
        </p>
      </div>
    </motion.div>
  );
}

export default function Experience({ experience }) {
  return (
    <section id="experience" className="section-padding">
      <div className="max-w-3xl mx-auto">
        <SectionHeading
          title="Experience"
          subtitle="My professional journey through internships, freelance work, and academic projects."
        />

        <div className="relative">
          {experience.map((item, index) => (
            <TimelineItem key={item.id || item.title} item={item} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
