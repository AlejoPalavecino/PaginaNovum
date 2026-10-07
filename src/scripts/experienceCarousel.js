/**
 * ==========================================================================
 * Nóvum Industrial — Experience Section Infinite Loop Marquee (#experiencia)
 * Smooth left-to-right automatic infinite loop, pause-on-hover/touch,
 * and prefers-reduced-motion support.
 * ==========================================================================
 */

export function initExperienceCarousel() {
  const viewport = document.querySelector('.experience-marquee-viewport');
  const track = document.getElementById('experience-track');

  if (!viewport || !track) return;

  const prefersReducedMotion = () =>
    window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  let halfWidth = track.scrollWidth / 2;
  let currentX = -halfWidth;
  let isPaused = false;
  const baseSpeed = 0.32; // Calibrated slower pace for subtle, legible marquee glide
  let animationFrameId = null;

  const updateDimensions = () => {
    halfWidth = track.scrollWidth / 2;
    if (halfWidth > 0 && currentX >= 0) {
      currentX = -halfWidth;
    }
  };

  window.addEventListener('resize', updateDimensions, { passive: true });

  // Pause loop when user hovers or focuses on items
  viewport.addEventListener('mouseenter', () => {
    isPaused = true;
  });
  viewport.addEventListener('mouseleave', () => {
    isPaused = false;
  });
  viewport.addEventListener('focusin', () => {
    isPaused = true;
  });
  viewport.addEventListener('focusout', () => {
    isPaused = false;
  });

  // Pause on mobile touch interaction
  viewport.addEventListener('touchstart', () => {
    isPaused = true;
  }, { passive: true });
  viewport.addEventListener('touchend', () => {
    isPaused = false;
  }, { passive: true });

  // Animation frame loop
  const tick = () => {
    if (!prefersReducedMotion() && !isPaused) {
      currentX += baseSpeed;
    }

    // Infinite seamless wrap
    if (halfWidth > 0) {
      while (currentX >= 0) {
        currentX -= halfWidth;
      }
      while (currentX < -halfWidth) {
        currentX += halfWidth;
      }
    }

    track.style.transform = `translate3d(${currentX.toFixed(2)}px, 0, 0)`;
    animationFrameId = requestAnimationFrame(tick);
  };

  requestAnimationFrame(() => {
    updateDimensions();
    currentX = -halfWidth;
    track.style.transform = `translate3d(${currentX.toFixed(2)}px, 0, 0)`;
    tick();
  });

  return () => {
    if (animationFrameId) cancelAnimationFrame(animationFrameId);
    window.removeEventListener('resize', updateDimensions);
  };
}
