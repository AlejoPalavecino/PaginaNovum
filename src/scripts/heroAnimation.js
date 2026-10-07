/**
 * ==========================================================================
 * Nóvum Industrial — Hero Image Animation Module
 * Kept completely static as requested: no scroll-driven parallax or 3D pointer tilt.
 * ==========================================================================
 */

export function initHeroParallax() {
  const heroImg = document.querySelector('.hero-bg-img');
  if (heroImg) {
    heroImg.style.transform = 'none';
  }
}
