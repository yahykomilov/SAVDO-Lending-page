import { useEffect, useRef } from 'react';

export function useScrollReveal() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
    );

    const selectors = '.fade-up, .fade-left, .fade-right, .fade-scale-in';
    const children = el.querySelectorAll(selectors);
    children.forEach((child) => observer.observe(child));

    if (
      el.classList.contains('fade-up') ||
      el.classList.contains('fade-left') ||
      el.classList.contains('fade-right') ||
      el.classList.contains('fade-scale-in')
    ) {
      observer.observe(el);
    }

    return () => observer.disconnect();
  }, []);

  return ref;
}
