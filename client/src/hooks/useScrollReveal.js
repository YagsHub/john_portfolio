import { useEffect, useRef } from 'react';
import { useInView } from 'framer-motion';

export function useScrollReveal(options = {}) {
  const ref = useRef(null);
  const isInView = useInView(ref, {
    once: true,
    margin: '-80px',
    ...options,
  });

  return { ref, isInView };
}

export function useSmoothScroll() {
  useEffect(() => {
    const handleClick = (e) => {
      const href = e.target.closest('a')?.getAttribute('href');
      if (href?.startsWith('#')) {
        e.preventDefault();
        const target = document.querySelector(href);
        if (target) {
          target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }
    };

    document.addEventListener('click', handleClick);
    return () => document.removeEventListener('click', handleClick);
  }, []);
}
