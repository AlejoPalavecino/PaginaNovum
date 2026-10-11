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
  buildConsultationBody,
  buildConsultationMailtoUrl
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

/** Reads the local consultation fields without changing visitor-authored content. */
function getConsultationDetails() {
  return {
    company: document.getElementById('contact-company-input')?.value || '',
    name: document.getElementById('contact-name-input')?.value || '',
    replyContact: document.getElementById('contact-reply-input')?.value || '',
    deadline: document.getElementById('contact-deadline-input')?.value || '',
    problem: document.getElementById('contact-problem-textarea')?.value || ''
  };
}

/** Refreshes only the email action, never the visitor's entered text. */
function updateConsultationMailAction() {
  const recovery = document.getElementById('contact-guide-fallback');
  if (recovery) recovery.hidden = true;
  const mailBtn = document.getElementById('contact-mail-btn');
  const url = buildConsultationMailtoUrl(currentConsultationService, getConsultationDetails(), CONTACT_CONFIG);
  if (!mailBtn) return;
  if (url) {
    mailBtn.setAttribute('href', url);
    mailBtn.classList.remove('is-disabled');
    mailBtn.removeAttribute('aria-disabled');
  } else {
    mailBtn.removeAttribute('href');
    mailBtn.classList.add('is-disabled');
    mailBtn.setAttribute('aria-disabled', 'true');
  }
}

/** Keeps the selected service in sync while preserving visitor-authored content. */
export function updateConsultationState(serviceName = DEFAULT_SERVICE) {
  currentConsultationService = normalizeService(serviceName);
  const serviceBadge = document.getElementById('contact-selected-service');
  if (serviceBadge) serviceBadge.textContent = currentConsultationService;
  const serviceSelect = document.getElementById('contact-service-select');
  if (serviceSelect) serviceSelect.value = currentConsultationService;
  const revisionNotice = document.getElementById('cta-revision-notice');
  if (revisionNotice) revisionNotice.hidden = isEmailConfirmed(CONTACT_CONFIG.email);
  updateConsultationMailAction();
}

/** Initializes local email continuation and generated-guide copying. */
export function initConsultationHandlers() {
  const problem = document.getElementById('contact-problem-textarea');
  const guide = document.getElementById('contact-guide-textarea');
  const recovery = document.getElementById('contact-guide-fallback');
  const feedback = document.getElementById('contact-copy-feedback');
  const setFeedback = (message, warning = false) => {
    if (!feedback) return;
    feedback.textContent = message;
    feedback.className = warning ? 'cta-feedback-msg is-warning' : 'cta-feedback-msg';
  };

  document.addEventListener('click', (event) => {
    const trigger = event.target.closest('[data-consulta]');
    if (trigger) updateConsultationState(trigger.getAttribute('data-consulta'));
  });
  document.getElementById('contact-reset-service')?.addEventListener('click', () => {
    updateConsultationState(DEFAULT_SERVICE);
  });
  for (const id of ['contact-problem-textarea', 'contact-company-input', 'contact-name-input', 'contact-reply-input', 'contact-deadline-input']) {
    document.getElementById(id)?.addEventListener('input', updateConsultationMailAction);
  }
  const serviceSelect = document.getElementById('contact-service-select');
  serviceSelect?.addEventListener('change', () => updateConsultationState(serviceSelect.value));

  const mailBtn = document.getElementById('contact-mail-btn');
  const continueByEmail = (event) => {
    updateConsultationMailAction();
    if (!isEmailConfirmed(CONTACT_CONFIG.email)) {
      event.preventDefault();
      setFeedback('El correo de contacto está pendiente de confirmación. Podés preparar tu consulta y copiar la guía opcional.', true);
    } else if (!problem?.value.trim()) {
      event.preventDefault();
      setFeedback('Contanos brevemente qué necesitás resolver para continuar por correo.', true);
      problem?.focus();
    }
  };
  mailBtn?.addEventListener('click', continueByEmail);
  mailBtn?.addEventListener('keydown', (event) => {
    if (event.key === 'Enter' && !mailBtn.getAttribute('href')) continueByEmail(event);
  });

  document.getElementById('contact-copy-guide-btn')?.addEventListener('click', async () => {
    const guideText = buildConsultationBody(currentConsultationService, getConsultationDetails());
    try {
      if (!navigator.clipboard || typeof navigator.clipboard.writeText !== 'function') {
        throw new Error('Clipboard unavailable');
      }
      await navigator.clipboard.writeText(guideText);
      if (recovery) recovery.hidden = true;
      setFeedback('Guía copiada al portapapeles. Podés pegarla en tu correo.');
    } catch {
      if (guide) guide.value = guideText;
      if (recovery) recovery.hidden = false;
      guide?.focus();
      guide?.select();
      setFeedback('No se pudo acceder al portapapeles. El texto está seleccionado: copialo directamente desde la guía.', true);
    }
  });
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
