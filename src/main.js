/**
 * ==========================================================================
 * Nóvum Industrial — Main Application Script (B2B Architecture)
 * Phase 4 & B2B Adaptation: Interactivity, Accessibility & Consultation State
 * ==========================================================================
 */

import './styles/main.css';
import {
  CONTACT_CONFIG,
  DEFAULT_SERVICE,
  isEmailConfirmed,
  normalizeService,
  buildSubject,
  buildBody,
  buildMailtoUrl
} from './config/contact.js';
import { initHeroParallax } from './scripts/heroAnimation.js';
import { initProblemsDiagram } from './scripts/problemsDiagram.js';
import { initProcessTimeline } from './scripts/processTimeline.js';
import { initCapabilitiesSection } from './scripts/capabilitiesSection.js';
import { initSectorsAnimation } from './scripts/sectorsAnimation.js';

/**
 * Global Consultation State Management
 */
let currentConsultationService = DEFAULT_SERVICE;

/**
 * Updates the consultation UI and mailto configuration in the Contact section.
 * @param {string} serviceName
 */
export function updateConsultationState(serviceName = DEFAULT_SERVICE) {
  currentConsultationService = normalizeService(serviceName);

  // Update selected service badge
  const serviceBadge = document.getElementById('contact-selected-service');
  if (serviceBadge) {
    serviceBadge.textContent = currentConsultationService;
  }

  // Update revision notice & mailto button
  const mailBtn = document.getElementById('contact-mail-btn');
  const revisionNotice = document.getElementById('cta-revision-notice');
  const fallbackTextarea = document.getElementById('contact-guide-textarea');

  const confirmed = isEmailConfirmed(CONTACT_CONFIG.email);

  if (revisionNotice) {
    revisionNotice.hidden = confirmed;
  }

  if (mailBtn) {
    if (confirmed) {
      const mailtoUrl = buildMailtoUrl(currentConsultationService, CONTACT_CONFIG);
      mailBtn.setAttribute('href', mailtoUrl || '#contacto');
      mailBtn.classList.remove('is-disabled');
      mailBtn.removeAttribute('aria-disabled');
    } else {
      // Avoid fictitious mailto when email is unconfirmed
      mailBtn.setAttribute('href', '#contacto');
      mailBtn.classList.add('is-disabled');
      mailBtn.setAttribute('aria-disabled', 'true');
    }
  }

  // Update fallback textarea if present
  if (fallbackTextarea) {
    fallbackTextarea.value = buildBody(currentConsultationService);
  }
}

/**
 * Initializes consultation CTAs across the site.
 * Supports data-consulta on any button or anchor.
 */
export function initConsultationHandlers() {
  // Elements with data-consulta
  document.addEventListener('click', (event) => {
    const trigger = event.target.closest('[data-consulta]');
    if (!trigger) return;

    const requestedService = trigger.getAttribute('data-consulta');
    updateConsultationState(requestedService);
  });

  // Reset service button
  const resetBtn = document.getElementById('contact-reset-service');
  if (resetBtn) {
    resetBtn.addEventListener('click', () => {
      updateConsultationState(DEFAULT_SERVICE);
    });
  }

  // Mail button click check when unconfirmed
  const mailBtn = document.getElementById('contact-mail-btn');
  if (mailBtn) {
    mailBtn.addEventListener('click', (event) => {
      if (!isEmailConfirmed(CONTACT_CONFIG.email)) {
        event.preventDefault();
        const feedback = document.getElementById('contact-copy-feedback');
        if (feedback) {
          feedback.textContent = 'Aviso: el correo de contacto está pendiente de confirmación. Podés copiar la guía abajo.';
          feedback.className = 'cta-feedback-msg is-warning';
        }
        // Expose guide fallback for immediate inspection
        const fallbackContainer = document.getElementById('contact-guide-fallback');
        const fallbackTextarea = document.getElementById('contact-guide-textarea');
        if (fallbackContainer && fallbackTextarea) {
          fallbackContainer.hidden = false;
          fallbackTextarea.value = buildBody(currentConsultationService);
          fallbackTextarea.focus();
          fallbackTextarea.select();
        }
      }
    });
  }

  // Copy guide button
  const copyBtn = document.getElementById('contact-copy-guide-btn');
  const feedbackEl = document.getElementById('contact-copy-feedback');
  const fallbackContainer = document.getElementById('contact-guide-fallback');
  const fallbackTextarea = document.getElementById('contact-guide-textarea');

  if (copyBtn) {
    copyBtn.addEventListener('click', async () => {
      const guideText = buildBody(currentConsultationService);

      if (navigator.clipboard && typeof navigator.clipboard.writeText === 'function') {
        try {
          await navigator.clipboard.writeText(guideText);
          if (feedbackEl) {
            feedbackEl.textContent = 'Guía copiada al portapapeles. Podés pegarla en tu correo.';
            feedbackEl.className = 'cta-feedback-msg';
            setTimeout(() => {
              if (feedbackEl.textContent.includes('copiada')) {
                feedbackEl.textContent = '';
              }
            }, 5000);
          }
          if (fallbackContainer) fallbackContainer.hidden = true;
          return;
        } catch (err) {
          // Clipboard write failed: fall through to manual selection
        }
      }

      // Manual fallback
      if (fallbackContainer && fallbackTextarea) {
        fallbackContainer.hidden = false;
        fallbackTextarea.value = guideText;
        fallbackTextarea.focus();
        fallbackTextarea.select();
      }
      if (feedbackEl) {
        feedbackEl.textContent = 'No se pudo acceder automáticamente al portapapeles. Copiá el texto directamente desde el recuadro.';
        feedbackEl.className = 'cta-feedback-msg is-warning';
      }
    });
  }

  // Initial render
  updateConsultationState(DEFAULT_SERVICE);
}

/**
 * Accessible FAQ Accordion Component
 * - ARIA state synchronization (aria-expanded, aria-controls, role="region")
 * - CSS Grid smooth transition (0fr -> 1fr) with prefers-reduced-motion support
 * - WAI-ARIA APG keyboard navigation (Enter, Space, ArrowUp, ArrowDown, Home, End)
 */
export function initAccordion() {
  const triggers = Array.from(document.querySelectorAll('.faq-trigger'));
  if (!triggers.length) return;

  const prefersReducedMotion = () =>
    window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  function openPanel(trigger, panel, item) {
    panel.hidden = false;
    void panel.offsetHeight;
    trigger.setAttribute('aria-expanded', 'true');
    panel.classList.add('is-open');
    if (item) item.classList.add('is-open');
  }

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
    trigger.addEventListener('click', () => {
      toggleItem(trigger);
    });

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
 * - Body scroll lock on mobile
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

  mainNav.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => {
      if (window.innerWidth < 992) {
        closeMenu();
      }
    });
  });

  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape' && toggleBtn.getAttribute('aria-expanded') === 'true') {
      closeMenu();
      toggleBtn.focus();
    }
  });

  document.addEventListener('click', (event) => {
    if (
      toggleBtn.getAttribute('aria-expanded') === 'true' &&
      !mainNav.contains(event.target) &&
      !toggleBtn.contains(event.target)
    ) {
      closeMenu();
    }
  });

  window.addEventListener('resize', () => {
    if (window.innerWidth >= 992 && toggleBtn.getAttribute('aria-expanded') === 'true') {
      closeMenu();
    }
  });
}

/**
 * Active Navigation Scrollspy using IntersectionObserver
 * Highlights current section link accurately (including #sectores).
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

  // Map backward-compatible anchor #experiencia to #sectores link
  const sectoresLink = navMap.get('sectores');

  const observedSections = Array.from(document.querySelectorAll('section[id]'))
    .filter((sec) => navMap.has(sec.id) || sec.id === 'sectores');

  if (!observedSections.length) return;

  function setActiveLink(activeId) {
    navLinks.forEach((link) => {
      const href = link.getAttribute('href');
      const matches =
        href === `#${activeId}` ||
        (activeId === 'experiencia' && href === '#sectores') ||
        (activeId === 'sectores' && href === '#sectores');

      if (matches) {
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
  initConsultationHandlers();
  initAccordion();
  initMobileNavigation();
  initActiveNavObserver();
  initHeroParallax();
  initFloatingPillNavbar();
  initProblemsDiagram();
  initProcessTimeline();
  initCapabilitiesSection();
  initSectorsAnimation();
});
