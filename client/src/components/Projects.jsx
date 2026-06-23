import { motion } from 'framer-motion';
import { HiExternalLink, HiCode } from 'react-icons/hi';
import { FaGithub } from 'react-icons/fa';
import SectionHeading from './ui/SectionHeading';

const projectGradients = [
  'from-blue-500 to-purple-600',
  'from-emerald-500 to-teal-600',
  'from-orange-500 to-red-500',
  'from-pink-500 to-rose-600',
];

function ProjectCard({ project, index }) {
  const gradient = projectGradients[index % projectGradients.length];

  return (
    <motion.article
      className="glass-card overflow-hidden group flex flex-col h-full p-0"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <div className={`h-48 bg-gradient-to-br ${gradient} relative overflow-hidden`}>
        <div className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition-colors" />
        <div className="absolute inset-0 flex items-center justify-center">
          <HiCode className="w-16 h-16 text-white/30 group-hover:scale-110 transition-transform duration-300" />
        </div>
        <div className="absolute top-4 right-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
          {project.github_url && (
            <a
              href={project.github_url}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg bg-white/20 backdrop-blur-sm hover:bg-white/30 transition-colors"
              aria-label={`View ${project.title} on GitHub`}
            >
              <FaGithub className="w-4 h-4 text-white" />
            </a>
          )}
          {project.live_url && (
            <a
              href={project.live_url}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg bg-white/20 backdrop-blur-sm hover:bg-white/30 transition-colors"
              aria-label={`View ${project.title} live demo`}
            >
              <HiExternalLink className="w-4 h-4 text-white" />
            </a>
          )}
        </div>
      </div>

      <div className="p-6 flex flex-col flex-1">
        <h3 className="text-xl font-semibold text-text dark:text-white mb-2 group-hover:text-primary transition-colors">
          {project.title}
        </h3>
        <p className="text-text-muted dark:text-slate-400 text-sm mb-4 flex-1 leading-relaxed">
          {project.description}
        </p>

        <div className="flex flex-wrap gap-2 mb-4">
          {project.technologies?.map((tech) => (
            <span
              key={tech}
              className="px-3 py-1 text-xs font-medium rounded-full bg-primary/10 text-primary dark:bg-primary/20"
            >
              {tech}
            </span>
          ))}
        </div>

        <div className="flex gap-3 mt-auto">
          {project.github_url && (
            <a
              href={project.github_url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-2 rounded-xl text-sm font-medium bg-slate-100 dark:bg-slate-800 hover:bg-primary hover:text-white transition-all"
            >
              <FaGithub className="w-4 h-4" />
              GitHub
            </a>
          )}
          {project.live_url && (
            <a
              href={project.live_url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-2 rounded-xl text-sm font-medium btn-primary py-2"
            >
              <HiExternalLink className="w-4 h-4" />
              Live Demo
            </a>
          )}
        </div>
      </div>
    </motion.article>
  );
}

export default function Projects({ projects }) {
  return (
    <section id="projects" className="section-padding bg-surface/50 dark:bg-slate-900/50">
      <div className="max-w-7xl mx-auto">
        <SectionHeading
          title="Featured Projects"
          subtitle="A selection of projects that showcase my skills and passion for development."
        />

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={project.id || project.title} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
