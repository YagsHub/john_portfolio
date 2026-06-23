import { motion } from 'framer-motion';
import {
  SiHtml5, SiCss, SiJavascript, SiReact, SiNextdotjs, SiTailwindcss,
  SiNodedotjs, SiExpress, SiPhp,
  SiMysql, SiPostgresql, SiMongodb,
  SiGit, SiGithub, SiPostman,
} from 'react-icons/si';
import { VscVscode } from 'react-icons/vsc';
import SectionHeading from './ui/SectionHeading';
import ProgressBar from './ui/ProgressBar';
import { skillCategoryLabels } from '../data/fallbackData';

const iconMap = {
  HTML: SiHtml5,
  CSS: SiCss,
  JavaScript: SiJavascript,
  'React.js': SiReact,
  React: SiReact,
  'Next.js': SiNextdotjs,
  'Tailwind CSS': SiTailwindcss,
  'Node.js': SiNodedotjs,
  'Express.js': SiExpress,
  PHP: SiPhp,
  MySQL: SiMysql,
  PostgreSQL: SiPostgresql,
  MongoDB: SiMongodb,
  Git: SiGit,
  GitHub: SiGithub,
  Postman: SiPostman,
  'VS Code': VscVscode,
};

const iconColors = {
  HTML: 'text-orange-500',
  CSS: 'text-blue-500',
  JavaScript: 'text-yellow-500',
  'React.js': 'text-cyan-500',
  React: 'text-cyan-500',
  'Next.js': 'text-white dark:text-slate-200',
  'Tailwind CSS': 'text-teal-500',
  'Node.js': 'text-green-500',
  'Express.js': 'text-slate-600 dark:text-slate-300',
  PHP: 'text-indigo-500',
  MySQL: 'text-blue-600',
  PostgreSQL: 'text-blue-400',
  MongoDB: 'text-green-600',
  Git: 'text-orange-600',
  GitHub: 'text-slate-800 dark:text-white',
  Postman: 'text-orange-500',
  'VS Code': 'text-blue-500',
};

function SkillCard({ skill, index }) {
  const Icon = iconMap[skill.name] || SiJavascript;
  const color = iconColors[skill.name] || 'text-primary';

  return (
    <motion.div
      className="glass-card text-center group cursor-default"
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: index * 0.05 }}
      whileHover={{ y: -5 }}
    >
      <div className="w-14 h-14 mx-auto mb-3 rounded-xl bg-slate-100 dark:bg-slate-800 flex items-center justify-center group-hover:scale-110 transition-transform">
        <Icon className={`w-7 h-7 ${color}`} />
      </div>
      <h4 className="font-semibold text-text dark:text-white text-sm">{skill.name}</h4>
      <div className="mt-3">
        <ProgressBar value={skill.proficiency} label="" delay={index * 0.05} />
      </div>
    </motion.div>
  );
}

export default function Skills({ skills }) {
  const categories = Object.keys(skills);

  return (
    <section id="skills" className="section-padding">
      <div className="max-w-7xl mx-auto">
        <SectionHeading
          title="Skills & Technologies"
          subtitle="Technologies and tools I work with to bring ideas to life."
        />

        <div className="space-y-12">
          {categories.map((category, catIndex) => (
            <motion.div
              key={category}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: catIndex * 0.1 }}
            >
              <h3 className="text-xl font-semibold text-text dark:text-white mb-6 flex items-center gap-3">
                <span className="w-8 h-1 gradient-bg rounded-full" />
                {skillCategoryLabels[category] || category}
              </h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-4">
                {skills[category].map((skill, index) => (
                  <SkillCard key={skill.id || skill.name} skill={skill} index={index} />
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
