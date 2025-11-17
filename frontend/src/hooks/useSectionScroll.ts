import { useEffect } from 'react';

const HEADER_OFFSET = 96;

export function useSectionScroll(targetId?: string) {
  useEffect(() => {
    if (!targetId || typeof window === 'undefined') return;

    const handleScroll = () => {
      const element = document.getElementById(targetId);
      if (!element) return;

      const top = element.getBoundingClientRect().top + window.scrollY - HEADER_OFFSET;
      window.scrollTo({ top: Math.max(top, 0), behavior: 'smooth' });
    };

    const timeout = window.setTimeout(() => {
      window.requestAnimationFrame(handleScroll);
    }, 50);

    return () => window.clearTimeout(timeout);
  }, [targetId]);
}
