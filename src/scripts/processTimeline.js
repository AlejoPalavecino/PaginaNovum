/**
 * ==========================================================================
 * Nóvum Industrial — Process Section Interactive Scroll Timeline (#proceso)
 * Scroll-driven vertical progress line, node activation, connector drawing,
 * and card reveal animations via requestAnimationFrame + IntersectionObserver.
 * ==========================================================================
 */

export function initProcessTimeline() {
  const section = document.getElementById('proceso');
  const progressLine = document.getElementById('process-line-progress');
  if (!section || !progressLine) return;

  const prefersReducedMotion = () =>
    window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  const stepItems = Array.from(section.querySelectorAll('.process-step-item'));
  // Thresholds matching vertical node placements (01: ~10%, 02: ~27%, 03: ~45%, 04: ~64%, 05: ~83%)
  const stepThresholds = [0.08, 0.24, 0.42, 0.61, 0.79];

  // If user requests reduced motion, immediately activate all elements statically
  if (prefersReducedMotion()) {
    progressLine.style.transform = 'scaleY(1)';
    stepItems.forEach((item) => item.classList.add('is-active'));
    return;
  }

  let isIntersecting = false;
  let rafId = null;

  const updateProgress = () => {
    const rect = section.getBoundingClientRect();
    const windowHeight = window.innerHeight;

    // Start progress as section enters view (when top reaches 75% of viewport)
    // and complete as section center passes view (when bottom reaches 30% of viewport)
    const startY = windowHeight * 0.75;
    const totalDistance = rect.height + windowHeight * 0.25;
    const currentDistance = startY - rect.top;

    let progress = currentDistance / totalDistance;
    progress = Math.min(Math.max(progress, 0), 1);

    progressLine.style.transform = `scaleY(${progress.toFixed(3)})`;

    stepItems.forEach((item, index) => {
      const threshold = stepThresholds[index] !== undefined ? stepThresholds[index] : index / stepItems.length;
      if (progress >= threshold) {
        if (!item.classList.contains('is-active')) {
          item.classList.add('is-active');
        }
      } else {
        if (item.classList.contains('is-active')) {
          item.classList.remove('is-active');
        }
      }
    });
  };

  const onScroll = () => {
    if (!isIntersecting) return;
    if (rafId) cancelAnimationFrame(rafId);
    rafId = requestAnimationFrame(updateProgress);
  };

  const observer = new IntersectionObserver(
    ([entry]) => {
      isIntersecting = entry.isIntersecting;
      if (isIntersecting) {
        updateProgress();
        window.addEventListener('scroll', onScroll, { passive: true });
        window.addEventListener('resize', onScroll, { passive: true });
      } else {
        window.removeEventListener('scroll', onScroll);
        window.removeEventListener('resize', onScroll);
        if (rafId) cancelAnimationFrame(rafId);
      }
    },
    {
      rootMargin: '100px 0px 100px 0px',
      threshold: 0
    }
  );

  observer.observe(section);
  updateProgress();

  return () => {
    observer.disconnect();
    window.removeEventListener('scroll', onScroll);
    window.removeEventListener('resize', onScroll);
    if (rafId) cancelAnimationFrame(rafId);
  };
}
