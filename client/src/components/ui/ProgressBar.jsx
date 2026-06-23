import { motion } from 'framer-motion';

export default function ProgressBar({ value, label, delay = 0 }) {
  return (
    <div className="space-y-2">
      {(label || value) && (
        <div className="flex justify-between items-center">
          {label && <span className="text-sm font-medium text-text dark:text-slate-200">{label}</span>}
          <span className={`text-sm text-text-muted dark:text-slate-400 ${!label ? 'mx-auto' : ''}`}>{value}%</span>
        </div>
      )}
      <div className="h-2 bg-slate-200 dark:bg-slate-700 rounded-full overflow-hidden">
        <motion.div
          className="h-full rounded-full gradient-bg"
          initial={{ width: 0 }}
          whileInView={{ width: `${value}%` }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay, ease: 'easeOut' }}
        />
      </div>
    </div>
  );
}
