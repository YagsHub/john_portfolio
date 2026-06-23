import { motion } from 'framer-motion';

export default function SectionHeading({ title, subtitle, align = 'center' }) {
  const alignClass = align === 'center' ? 'text-center mx-auto' : 'text-left';

  return (
    <motion.div
      className={`mb-12 ${alignClass}`}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <h2 className="section-title">
        <span className="gradient-text">{title}</span>
      </h2>
      {subtitle && <p className={`section-subtitle ${align === 'center' ? 'mx-auto' : ''}`}>{subtitle}</p>}
    </motion.div>
  );
}
