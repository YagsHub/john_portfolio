import { FaGithub, FaLinkedin, FaFacebook, FaEnvelope } from 'react-icons/fa';
import { HiHeart } from 'react-icons/hi';
import { socialLinks } from '../data/fallbackData';

const footerLinks = [
  { icon: FaGithub, href: socialLinks.github, label: 'GitHub' },
  { icon: FaLinkedin, href: socialLinks.linkedin, label: 'LinkedIn' },
  { icon: FaFacebook, href: socialLinks.facebook, label: 'Facebook' },
  { icon: FaEnvelope, href: socialLinks.email, label: 'Email' },
];

export default function Footer({ profile }) {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-secondary text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center text-center">
          <h3 className="text-2xl font-bold mb-2">{profile?.name || 'Your Name'}</h3>
          <p className="text-white/70 mb-6">{profile?.title || 'Full-Stack Developer'}</p>

          <div className="flex gap-4 mb-8">
            {footerLinks.map(({ icon: Icon, href, label }) => (
              <a
                key={label}
                href={href}
                target={href.startsWith('mailto') ? undefined : '_blank'}
                rel={href.startsWith('mailto') ? undefined : 'noopener noreferrer'}
                className="p-3 rounded-xl bg-white/10 hover:bg-white/20 transition-all hover:-translate-y-1"
                aria-label={label}
              >
                <Icon className="w-5 h-5" />
              </a>
            ))}
          </div>

          <div className="w-full max-w-md h-px bg-white/20 mb-6" />

          <p className="text-white/60 text-sm flex items-center gap-1">
            &copy; {year} {profile?.name || 'Your Name'}. Built with
            <HiHeart className="w-4 h-4 text-red-400" />
            using React & Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  );
}
