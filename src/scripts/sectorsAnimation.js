/**
 * ==========================================================================
 * Nóvum Industrial — Sectors Section Scroll Reveal Controller (#sectores)
 * Handles subtle scroll entry animations (header, diagonal photo, and
 * staggered chevron modules) respecting prefers-reduced-motion.
 * ==========================================================================
 */

export function initSectorsAnimation() {
  const section = document.getElementById('sectores');
  if (!section) return;

  const prefersReducedMotion = () =>
    window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  if (prefersReducedMotion() || typeof IntersectionObserver !== 'function') {
    section.classList.add('is-revealed');
    return;
  }

  section.classList.add('sectors-motion-ready');
  const observer = new IntersectionObserver(
    ([entry]) => {
      if (entry.isIntersecting) {
        section.classList.add('is-revealed');
        observer.disconnect();
      }
    },
    {
      root: null,
      rootMargin: '0px 0px -10% 0px',
      // Whole-section ratios can be unreachable for tall responsive layouts.
      threshold: 0
    }
  );

  observer.observe(section);
}
