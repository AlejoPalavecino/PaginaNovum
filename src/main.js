/**
 * ==========================================================================
 * Nóvum Industrial — Main Application Script
 * Phase 4: Interactivity & Accessibility (WCAG AA Compliant)
 * ==========================================================================
 */

import './styles/main.css';
import { initHeroParallax } from './scripts/heroAnimation.js';
import { initProblemsDiagram } from './scripts/problemsDiagram.js';
import { initExperienceCarousel } from './scripts/experienceCarousel.js';
import { initProcessTimeline } from './scripts/processTimeline.js';
import { initCapabilitiesSection } from './scripts/capabilitiesSection.js';

/**
 * Mailto CTA Central Configuration
 * As specified in arquitecture.md Section 3 and content.md.
 */
export const CONTACT_CONFIG = {
  email: '[EMAIL_DE_CONTACTO]',
  subject: 'Consulta técnica desde la web - Nóvum Industrial',
  body: [
    'Hola equipo de Nóvum,',
    '',
    'Quisiera consultar por una necesidad técnica.',
    '',
    'Empresa:',
    'Nombre y cargo:',
    'Localidad / provincia:',
    'Pieza, equipo o problema a resolver:',
    'Cantidad aproximada:',
    'Plazo deseado:',
    ''
  ].join('\n')
};

/**
 * Builds the URL-encoded mailto string with subject and body parameters.
 * @param {typeof CONTACT_CONFIG} config
 * @returns {string} URL-encoded mailto link
 */
export function buildMailtoUrl(config = CONTACT_CONFIG) {
  const subjectEncoded = encodeURIComponent(config.subject);
  const bodyEncoded = encodeURIComponent(config.body);
  return `mailto:${config.email}?subject=${subjectEncoded}&body=${bodyEncoded}`;
}

/**
 * Initializes and normalizes all mailto CTA anchors across the document.
 */
export function initMailtoLinks(config = CONTACT_CONFIG) {
  const mailtoUrl = buildMailtoUrl(config);
  const mailtoLinks = document.querySelectorAll('a[href^="mailto:"]');

  mailtoLinks.forEach((link) => {
    link.setAttribute('href', mailtoUrl);
  });
}

/**
 * Accessible FAQ Accordion Component
 * - Full ARIA state synchronization (aria-expanded, aria-controls, role="region")
 * - CSS Grid smooth transition (0fr -> 1fr) with prefers-reduced-motion support
 * - WAI-ARIA APG keyboard navigation (Enter, Space, ArrowUp, ArrowDown, Home, End)
 */
export function initAccordion() {
  const triggers = Array.from(document.querySelectorAll('.faq-trigger'));
  if (!triggers.length) return;

  const prefersReducedMotion = () =>
    window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  /**
   * Opens an accordion item
   */
  function openPanel(trigger, panel, item) {
    // Show panel before transitioning so CSS Grid can interpolate from 0fr
    panel.hidden = false;
    // Force browser reflow
    void panel.offsetHeight;

    trigger.setAttribute('aria-expanded', 'true');
    panel.classList.add('is-open');
    if (item) item.classList.add('is-open');
  }

  /**
   * Closes an accordion item
   */
  function closePanel(trigger, panel, item) {
    trigger.setAttribute('aria-expanded', 'false');
    panel.classList.remove('is-open');
    if (item) item.classList.remove('is-open');

    if (prefersReducedMotion()) {
      panel.hidden = true;
    } else {
      const handleTransitionEnd = (event) => {
        if (event.target !== panel) return;
        panel.removeEventListener('transitionend', handleTransitionEnd);
        if (trigger.getAttribute('aria-expanded') === 'false') {
          panel.hidden = true;
        }
      };
      panel.addEventListener('transitionend', handleTransitionEnd);
    }
  }

  /**
   * Toggles an accordion item
   */
  function toggleItem(trigger) {
    const panelId = trigger.getAttribute('aria-controls');
    const panel = document.getElementById(panelId);
    if (!panel) return;

    const item = trigger.closest('.faq-item');
    const isExpanded = trigger.getAttribute('aria-expanded') === 'true';

    if (isExpanded) {
      closePanel(trigger, panel, item);
    } else {
      openPanel(trigger, panel, item);
    }
  }

  triggers.forEach((trigger, index) => {
    // Mouse / Pointer activation
    trigger.addEventListener('click', () => {
      toggleItem(trigger);
    });

    // Keyboard navigation per WAI-ARIA APG Accordion pattern
    trigger.addEventListener('keydown', (event) => {
      let targetIndex = null;

      switch (event.key) {
        case 'ArrowDown':
          event.preventDefault();
          targetIndex = (index + 1) % triggers.length;
          break;
        case 'ArrowUp':
          event.preventDefault();
          targetIndex = (index - 1 + triggers.length) % triggers.length;
          break;
        case 'Home':
          event.preventDefault();
          targetIndex = 0;
          break;
        case 'End':
          event.preventDefault();
          targetIndex = triggers.length - 1;
          break;
        default:
          return;
      }

      if (targetIndex !== null && triggers[targetIndex]) {
        triggers[targetIndex].focus();
      }
    });
  });
}

/**
 * Accessible Mobile Navigation Drawer
 * - Hamburger toggle updating aria-expanded and aria-label
 * - Escape key closes drawer and returns focus to toggle button
 * - Anchor link click closes drawer on mobile
 * - Outside click closes drawer
 * - Body scroll lock on mobile (body.nav-open)
 */
export function initMobileNavigation() {
  const toggleBtn = document.getElementById('nav-toggle');
  const mainNav = document.getElementById('main-nav');

  if (!toggleBtn || !mainNav) return;

  function closeMenu() {
    toggleBtn.setAttribute('aria-expanded', 'false');
    toggleBtn.setAttribute('aria-label', 'Abrir menú');
    mainNav.classList.remove('is-open');
    document.body.classList.remove('nav-open');
  }

  function openMenu() {
    toggleBtn.setAttribute('aria-expanded', 'true');
    toggleBtn.setAttribute('aria-label', 'Cerrar menú');
    mainNav.classList.add('is-open');
    document.body.classList.add('nav-open');
  }

  toggleBtn.addEventListener('click', () => {
    const isExpanded = toggleBtn.getAttribute('aria-expanded') === 'true';
    if (isExpanded) {
      closeMenu();
    } else {
      openMenu();
    }
  });

  // Close drawer when clicking any anchor link inside navigation
  mainNav.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => {
      if (window.innerWidth < 992) {
        closeMenu();
      }
    });
  });

  // Close drawer on Escape key and return focus to toggle button
  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape' && toggleBtn.getAttribute('aria-expanded') === 'true') {
      closeMenu();
      toggleBtn.focus();
    }
  });

  // Close drawer on clicking outside
  document.addEventListener('click', (event) => {
    if (
      toggleBtn.getAttribute('aria-expanded') === 'true' &&
      !mainNav.contains(event.target) &&
      !toggleBtn.contains(event.target)
    ) {
      closeMenu();
    }
  });

  // Automatically reset drawer when resizing to desktop
  window.addEventListener('resize', () => {
    if (window.innerWidth >= 992 && toggleBtn.getAttribute('aria-expanded') === 'true') {
      closeMenu();
    }
  });
}

/**
 * Active Navigation Scrollspy using IntersectionObserver
 * Accurately highlights current section link without false positives.
 */
export function initActiveNavObserver() {
  const navLinks = Array.from(document.querySelectorAll('.site-nav .nav-link'));
  if (!navLinks.length) return;

  const navMap = new Map();
  navLinks.forEach((link) => {
    const href = link.getAttribute('href');
    if (href && href.startsWith('#')) {
      navMap.set(href.slice(1), link);
    }
  });

  const observedSections = Array.from(document.querySelectorAll('section[id]'))
    .filter((sec) => navMap.has(sec.id));

  if (!observedSections.length) return;

  function setActiveLink(activeId) {
    navLinks.forEach((link) => {
      const href = link.getAttribute('href');
      if (href === `#${activeId}`) {
        link.classList.add('active');
        link.setAttribute('aria-current', 'page');
      } else {
        link.classList.remove('active');
        link.removeAttribute('aria-current');
      }
    });
  }

  const visibleEntries = new Map();

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        visibleEntries.set(entry.target.id, entry);
      });

      let bestSectionId = null;
      let maxRatio = 0;

      visibleEntries.forEach((entry, id) => {
        if (entry.isIntersecting && entry.intersectionRatio > maxRatio) {
          maxRatio = entry.intersectionRatio;
          bestSectionId = id;
        }
      });

      if (bestSectionId) {
        setActiveLink(bestSectionId);
      }
    },
    {
      root: null,
      rootMargin: '-15% 0px -50% 0px',
      threshold: [0, 0.2, 0.4, 0.6, 0.8, 1.0]
    }
  );

  observedSections.forEach((section) => observer.observe(section));
}

/**
 * Floating Pill Navbar Scroll Observer
 * Adds subtle background & shadow elevation when scrolled.
 */
export function initFloatingPillNavbar() {
  const header = document.querySelector('.site-header');
  if (!header) return;

  const updateHeader = () => {
    const isScrolled = window.scrollY > 20;
    header.classList.toggle('is-scrolled', isScrolled);
  };

  window.addEventListener('scroll', updateHeader, { passive: true });
  updateHeader();
}

// Bootstrap all modules once DOM is ready
document.addEventListener('DOMContentLoaded', () => {
  initMailtoLinks();
  initAccordion();
  initMobileNavigation();
  initActiveNavObserver();
  initHeroParallax();
  initFloatingPillNavbar();
  initProblemsDiagram();
  initExperienceCarousel();
  initProcessTimeline();
  initCapabilitiesSection();
});
