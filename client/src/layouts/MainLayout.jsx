import { useState, useEffect } from 'react';
import { Toaster } from 'react-hot-toast';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import LoadingSpinner from '../components/ui/LoadingSpinner';
import { useDarkMode } from '../hooks/useDarkMode';
import { useSmoothScroll } from '../hooks/useScrollReveal';
import { api } from '../services/api';
import { fallbackProfile } from '../data/fallbackData';

export default function MainLayout({ children }) {
  const { isDark, toggle } = useDarkMode();
  const [profile, setProfile] = useState(fallbackProfile);
  useSmoothScroll();

  useEffect(() => {
    api.getProfile()
      .then((res) => setProfile(res.data))
      .catch(() => {});
  }, []);

  return (
    <div className="min-h-screen bg-background dark:bg-slate-950 transition-colors duration-300">
      <Navbar isDark={isDark} toggleDark={toggle} />
      <main>{children}</main>
      <Footer profile={profile} />
      <Toaster
        position="bottom-right"
        toastOptions={{
          duration: 4000,
          style: {
            background: isDark ? '#1e293b' : '#fff',
            color: isDark ? '#f1f5f9' : '#1e293b',
            borderRadius: '12px',
            border: isDark ? '1px solid #334155' : '1px solid #e2e8f0',
          },
        }}
      />
    </div>
  );
}

export function PageLoader() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-background dark:bg-slate-950">
      <LoadingSpinner size="lg" />
    </div>
  );
}
