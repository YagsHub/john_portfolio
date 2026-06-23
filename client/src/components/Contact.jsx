import { useState } from 'react';
import { motion } from 'framer-motion';
import { HiMail, HiLocationMarker, HiPaperAirplane } from 'react-icons/hi';
import toast from 'react-hot-toast';
import SectionHeading from './ui/SectionHeading';
import LoadingSpinner from './ui/LoadingSpinner';
import { api } from '../services/api';

const initialForm = { full_name: '', email: '', subject: '', message: '' };

function validateForm(form) {
  const errors = {};
  if (!form.full_name.trim() || form.full_name.trim().length < 2) {
    errors.full_name = 'Name must be at least 2 characters';
  }
  if (!form.email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
    errors.email = 'Please enter a valid email address';
  }
  if (!form.subject.trim() || form.subject.trim().length < 3) {
    errors.subject = 'Subject must be at least 3 characters';
  }
  if (!form.message.trim() || form.message.trim().length < 10) {
    errors.message = 'Message must be at least 10 characters';
  }
  return errors;
}

export default function Contact({ profile }) {
  const [form, setForm] = useState(initialForm);
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: '' }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationErrors = validateForm(form);
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setLoading(true);
    try {
      const response = await api.submitContact(form);
      toast.success(response.message || 'Message sent successfully!');
      setForm(initialForm);
      setErrors({});
    } catch (error) {
      if (error.errors) {
        const fieldErrors = {};
        error.errors.forEach((err) => {
          fieldErrors[err.field] = err.message;
        });
        setErrors(fieldErrors);
      }
      toast.error(error.message || 'Failed to send message. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="section-padding">
      <div className="max-w-7xl mx-auto">
        <SectionHeading
          title="Get In Touch"
          subtitle="Have a project in mind or want to connect? I'd love to hear from you."
        />

        <div className="grid lg:grid-cols-5 gap-12">
          <motion.div
            className="lg:col-span-2 space-y-6"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="glass-card">
              <HiMail className="w-8 h-8 text-primary mb-3" />
              <h3 className="font-semibold text-text dark:text-white mb-1">Email</h3>
              <a
                href={`mailto:${profile.email}`}
                className="text-text-muted dark:text-slate-400 hover:text-primary transition-colors"
              >
                {profile.email}
              </a>
            </div>
            <div className="glass-card">
              <HiLocationMarker className="w-8 h-8 text-primary mb-3" />
              <h3 className="font-semibold text-text dark:text-white mb-1">Location</h3>
              <p className="text-text-muted dark:text-slate-400">{profile.location}</p>
            </div>
            <div className="glass-card gradient-bg text-white">
              <h3 className="font-semibold text-lg mb-2">Let&apos;s work together!</h3>
              <p className="text-white/80 text-sm">
                I&apos;m currently available for freelance projects and full-time opportunities.
              </p>
            </div>
          </motion.div>

          <motion.form
            onSubmit={handleSubmit}
            className="lg:col-span-3 glass-card space-y-5"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            noValidate
          >
            <div className="grid sm:grid-cols-2 gap-5">
              <div>
                <label htmlFor="full_name" className="block text-sm font-medium text-text dark:text-slate-200 mb-2">
                  Full Name
                </label>
                <input
                  type="text"
                  id="full_name"
                  name="full_name"
                  value={form.full_name}
                  onChange={handleChange}
                  className={`input-field ${errors.full_name ? 'border-red-500 focus:ring-red-500/50' : ''}`}
                  placeholder="John Doe"
                  aria-invalid={!!errors.full_name}
                  aria-describedby={errors.full_name ? 'full_name-error' : undefined}
                />
                {errors.full_name && (
                  <p id="full_name-error" className="mt-1 text-sm text-red-500" role="alert">
                    {errors.full_name}
                  </p>
                )}
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-text dark:text-slate-200 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  className={`input-field ${errors.email ? 'border-red-500 focus:ring-red-500/50' : ''}`}
                  placeholder="john@example.com"
                  aria-invalid={!!errors.email}
                  aria-describedby={errors.email ? 'email-error' : undefined}
                />
                {errors.email && (
                  <p id="email-error" className="mt-1 text-sm text-red-500" role="alert">
                    {errors.email}
                  </p>
                )}
              </div>
            </div>

            <div>
              <label htmlFor="subject" className="block text-sm font-medium text-text dark:text-slate-200 mb-2">
                Subject
              </label>
              <input
                type="text"
                id="subject"
                name="subject"
                value={form.subject}
                onChange={handleChange}
                className={`input-field ${errors.subject ? 'border-red-500 focus:ring-red-500/50' : ''}`}
                placeholder="Project Inquiry"
                aria-invalid={!!errors.subject}
                aria-describedby={errors.subject ? 'subject-error' : undefined}
              />
              {errors.subject && (
                <p id="subject-error" className="mt-1 text-sm text-red-500" role="alert">
                  {errors.subject}
                </p>
              )}
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium text-text dark:text-slate-200 mb-2">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={form.message}
                onChange={handleChange}
                rows={5}
                className={`input-field resize-none ${errors.message ? 'border-red-500 focus:ring-red-500/50' : ''}`}
                placeholder="Tell me about your project..."
                aria-invalid={!!errors.message}
                aria-describedby={errors.message ? 'message-error' : undefined}
              />
              {errors.message && (
                <p id="message-error" className="mt-1 text-sm text-red-500" role="alert">
                  {errors.message}
                </p>
              )}
            </div>

            <button type="submit" className="btn-primary w-full sm:w-auto" disabled={loading}>
              {loading ? (
                <LoadingSpinner size="sm" />
              ) : (
                <>
                  <HiPaperAirplane className="w-5 h-5" />
                  Send Message
                </>
              )}
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  );
}
