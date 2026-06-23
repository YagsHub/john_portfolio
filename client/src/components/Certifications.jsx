import { motion } from 'framer-motion';
import { HiBadgeCheck, HiExternalLink } from 'react-icons/hi';
import SectionHeading from './ui/SectionHeading';

function CertificationCard({ cert, index }) {
  const issueDate = cert.issue_date
    ? new Date(cert.issue_date).toLocaleDateString('en-US', { month: 'long', year: 'numeric' })
    : '';

  return (
    <motion.div
      className="glass-card group"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <div className="flex items-start gap-4">
        <div className="w-12 h-12 rounded-xl gradient-bg flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
          <HiBadgeCheck className="w-6 h-6 text-white" />
        </div>
        <div className="flex-1 min-w-0">
          <h3 className="text-lg font-semibold text-text dark:text-white mb-1 group-hover:text-primary transition-colors">
            {cert.title}
          </h3>
          <p className="text-primary text-sm font-medium mb-1">{cert.issuer}</p>
          {issueDate && (
            <p className="text-xs text-text-muted dark:text-slate-500 mb-3">Issued {issueDate}</p>
          )}
          <p className="text-text-muted dark:text-slate-400 text-sm leading-relaxed mb-4">
            {cert.description}
          </p>
          {cert.credential_url && (
            <a
              href={cert.credential_url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm font-medium text-primary hover:underline"
            >
              View Credential
              <HiExternalLink className="w-4 h-4" />
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
}

export default function Certifications({ certifications }) {
  return (
    <section id="certifications" className="section-padding bg-surface/50 dark:bg-slate-900/50">
      <div className="max-w-4xl mx-auto">
        <SectionHeading
          title="Certifications"
          subtitle="Professional certifications that validate my skills and continuous learning."
        />

        <div className="grid gap-6">
          {certifications.map((cert, index) => (
            <CertificationCard key={cert.id || cert.title} cert={cert} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
