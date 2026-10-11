import { describe, it } from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import path from 'node:path';

describe('HTML Structure & B2B Editorial Integrity', () => {
  const htmlPath = path.resolve('index.html');
  const html = fs.readFileSync(htmlPath, 'utf-8');

  it('contains exactly one <h1> element', () => {
    const h1Matches = html.match(/<h1[\s>]/gi) || [];
    assert.equal(h1Matches.length, 1, `Expected 1 <h1>, found ${h1Matches.length}`);
  });

  it('contains the single authorized H1 title text', () => {
    assert.ok(
      html.includes('Tu problema') && html.includes('nuestra ingeniería'),
      'H1 does not contain authorized title'
    );
  });

  it('contains the required page title and meta description', () => {
    assert.ok(html.includes('<title>Nóvum Industrial | Soluciones industriales a medida para empresas</title>'));
    assert.ok(html.includes('Repuestos, ingeniería inversa, inventario digital y desarrollos a medida. Un socio técnico para resolver necesidades de mantenimiento, producción e ingeniería.'));
  });

  it('contains the 8 authorized B2B solutions', () => {
    const solutions = [
      'Partner Industrial',
      'Repuesto Express',
      'Ingeniería Inversa',
      'Inventario Digital',
      'Solución Industrial',
      'Prototipado',
      'Producción seriada',
      'Productos propios'
    ];
    for (const sol of solutions) {
      assert.ok(html.includes(sol), `Missing solution: ${sol}`);
    }
  });

  it('contains section #sectores and backwards-compatible anchor #experiencia without duplicate section IDs', () => {
    assert.ok(html.includes('id="sectores"'));
    assert.ok(html.includes('id="experiencia"'));
    const sectorSectionMatches = html.match(/id="sectores"/g) || [];
    assert.equal(sectorSectionMatches.length, 1);
    const expMatches = html.match(/id="experiencia"/g) || [];
    assert.equal(expMatches.length, 1);
  });

  it('contains the 6 target sectors in Sectores section', () => {
    const sectors = [
      'Industria manufacturera',
      'Talleres y mantenimiento',
      'Ingeniería y automatización',
      'Maquinaria y equipamiento',
      'Agroindustria',
      'Laboratorios'
    ];
    for (const sec of sectors) {
      assert.ok(html.includes(sec), `Missing sector: ${sec}`);
    }
  });

  it('contains the 5 process steps', () => {
    assert.ok(html.includes('Problema'));
    assert.ok(html.includes('Análisis'));
    assert.ok(html.includes('Solución'));
    assert.ok(html.includes('Implementación'));
    assert.ok(html.includes('Resultado'));
  });

  it('contains the 5 capabilities', () => {
    assert.ok(html.includes('Ingeniería y diseño'));
    assert.ok(html.includes('Relevamiento y digitalización'));
    assert.ok(html.includes('Fabricación de soluciones'));
    assert.ok(html.includes('Prototipado funcional'));
    assert.ok(html.includes('Organización digital'));
  });

  it('contains the 7 FAQ questions in accordion with accessible buttons', () => {
    const questions = [
      '¿Necesito tener planos o un modelo 3D?',
      '¿Pueden ayudarme con un repuesto discontinuado?',
      '¿Qué diferencia hay entre un trabajo puntual y Partner Industrial?',
      '¿Qué es un Inventario Digital?',
      '¿Repuesto Express tiene un plazo de entrega fijo?',
      '¿Fabrican pequeñas y medianas series?',
      '¿Qué información conviene enviar en la primera consulta?'
    ];
    for (const q of questions) {
      assert.ok(html.includes(q), `Missing FAQ question: ${q}`);
    }
  });

  it('does not contain prohibited mock phone or generic external social accounts', () => {
    assert.equal(html.includes('+54 261 000-0000'), false, 'Prohibited mock phone found');
    assert.equal(html.includes('linkedin.com/'), false, 'Prohibited generic linkedin found');
    assert.equal(html.includes('instagram.com/'), false, 'Prohibited generic instagram found');
    assert.equal(html.includes('youtube.com/'), false, 'Prohibited generic youtube found');
  });
});

describe('Reference hero presentation', () => {
  const html = fs.readFileSync(path.resolve('index.html'), 'utf8');
  const hero = html.match(/<section id="inicio"[\s\S]*?<\/section>/)[0];
  const css = fs.readFileSync(path.resolve('src/styles/components/hero.css'), 'utf8');

  it('keeps the existing navbar structure and consultation action', () => {
    const navbar = html.match(/<header[\s\S]*?<\/header>/)[0];
    assert.ok(navbar.includes('class="container header-container"'));
    assert.ok(navbar.includes('aria-controls="main-nav"'));
    assert.ok(navbar.includes('data-consulta="Consulta general"'));
    const links = [...navbar.matchAll(/class="nav-link[^\"]*"[^>]*>([^<]+)<\/a>/g)].map(match => match[1]);
    assert.deepEqual(links, ['Inicio', 'Soluciones', 'Sectores', 'Proceso', 'Capacidades', 'Contacto']);
  });

  it('uses a clean photograph with live accessible copy and CTA links', () => {
    assert.ok(hero.includes('hero-taller-transformacion.jpg'));
    assert.ok(hero.includes('Tu problema<br />'));
    assert.ok(hero.includes('nuestra ingeniería.'));
    assert.ok(hero.includes('href="#contacto"'));
    assert.ok(hero.includes('href="#proceso"'));
    assert.ok(hero.includes('data-consulta="Consulta general"'));
    assert.equal(hero.includes('codex-clipboard'), false);
    assert.equal(hero.includes('hero-supplied-workshop'), false);
  });

  it('presents a sentence-case headline and rectangular hero actions', () => {
    const title = css.match(/\.hero-title\s*\{([^}]+)\}/)[1];
    assert.ok(title.includes('text-transform: none'));
    for (const selector of ['btn-hero-primary', 'btn-hero-secondary']) {
      const rule = css.match(new RegExp('\\.' + selector + '\\s*\\{([^}]+)\\}'))[1];
      assert.ok(rule.includes('border-radius: 8px'));
    }
  });

  it('anchors mobile photography below the content without cropping away the parts', () => {
    assert.ok(css.includes('aspect-ratio: 16 / 9'));
    assert.ok(css.includes('padding-bottom: calc(56.25vw + 2rem)'));
    assert.ok(css.includes('.hero-callout-title { font-size: clamp(0.75rem'));
    assert.ok(css.includes('.hero-callout-desc { font-size: clamp(0.75rem'));
    assert.ok(css.includes('@media (prefers-reduced-motion: reduce)'));
  });
});

describe('Hero benefit icon consistency', () => {
  const html = fs.readFileSync(path.resolve('index.html'), 'utf8');
  const hero = html.match(/<section id="inicio"[\s\S]*?<\/section>/)[0];
  const icons = [...hero.matchAll(/<div class="hero-benefit-icon" aria-hidden="true">\s*(<svg[\s\S]*?<\/svg>)/g)].map(match => match[1]);

  it('keeps exactly three decorative icons paired with visible benefit labels', () => {
    assert.equal(icons.length, 3);
    for (const label of ['Soluciones a medida', 'Menos tiempos de espera', 'Acompañamiento técnico']) {
      assert.ok(hero.includes(`<span class="hero-benefit-text">${label}</span>`));
    }
  });

  it('uses a consistent outlined, non-scaling 24-unit icon system without ID collisions', () => {
    for (const icon of icons) {
      assert.ok(icon.includes('width="24" height="24" viewBox="0 0 24 24"'));
      assert.ok(icon.includes('stroke="currentColor" stroke-width="1.75"'));
      assert.ok(icon.includes('stroke-linecap="round" stroke-linejoin="round"'));
      assert.ok(icon.includes('focusable="false"'));
      assert.ok(icon.includes('vector-effect="non-scaling-stroke"'));
      assert.equal(/\bid=|<defs\b|<text\b|<image\b/.test(icon), false);
    }
  });
});

describe('Express contact structure', () => {
  const html = fs.readFileSync(path.resolve('index.html'), 'utf8');
  const contact = html.match(/<section id="contacto"[\s\S]*?<\/section>/)[0];
  it('provides one labeled problem field and an initially disabled email continuation', () => {
    assert.ok(contact.includes('for="contact-problem-textarea"'));
    assert.ok(contact.includes('¿Qué necesitás resolver?'));
    assert.ok(contact.includes('Preparar consulta por correo'));
    const button = contact.match(/<a[^>]*id="contact-mail-btn"[^>]*>/)[0];
    assert.ok(button.includes('aria-disabled="true"'));
    assert.equal(/\bhref=/.test(button), false);
    assert.ok(contact.includes('Versión para revisión: falta confirmar el correo de contacto antes de publicar'));
  });
  it('keeps manual-copy recovery hidden until clipboard failure', () => {
    const container = contact.match(/<div[^>]*id="contact-guide-fallback"[^>]*>/)[0];
    const textarea = contact.match(/<textarea[^>]*id="contact-guide-textarea"[^>]*>/)[0];
    assert.equal(/\bhidden\b/.test(container), true);
    assert.equal(/\breadonly\b/.test(textarea), true);
  });
});

describe('Reference contact presentation', () => {
  const html = fs.readFileSync(path.resolve('index.html'), 'utf8');
  const contact = html.match(/<section id="contacto"[\s\S]*?<\/section>/)[0];
  it('contains a native service selector and four explicitly optional fields', () => {
    assert.ok(contact.includes('<select id="contact-service-select"'));
    assert.ok(contact.includes('Prepará tu consulta'));
    for (const name of ['company', 'name', 'reply', 'deadline']) {
      assert.ok(contact.includes(`for="contact-${name}-input"`));
      const field = contact.match(new RegExp(`<input[^>]*id="contact-${name}-input"[^>]*>`))[0];
      assert.equal(/\brequired\b/.test(field), false);
    }
    assert.ok(contact.includes('Contanos qué'));
    assert.ok(contact.includes('necesitás resolver.'));
    assert.equal(contact.includes('codex-clipboard'), false);
  });
});

describe('Contact hierarchy and integrated footer', () => {
  const html = fs.readFileSync(path.resolve('index.html'), 'utf8');
  const contact = html.match(/<section id="contacto"[\s\S]*?<\/section>/)[0];
  const footer = html.match(/<footer class="site-footer"[\s\S]*?<\/footer>/)[0];
  it('stacks five compact, accessibly labeled fields in reference order', () => {
    const ids = ['company-input', 'name-input', 'reply-input', 'problem-textarea', 'deadline-input'];
    const positions = ids.map(id => contact.indexOf('id="contact-' + id + '"'));
    assert.ok(positions.every((position, index) => position >= 0 && (!index || position > positions[index - 1])));
    for (const id of ids) {
      assert.ok(contact.match(new RegExp('<label[^>]*for="contact-' + id + '"[^>]*class="contact-control-label"')));
    }
    assert.equal(contact.includes('contact-optional-grid'), false);
    assert.ok(contact.match(/<textarea[^>]*id="contact-problem-textarea"[^>]*rows="1"[^>]*required/));
    assert.ok(contact.match(/<strong id="contact-selected-service"[^>]*hidden/));
    const css = fs.readFileSync(path.resolve('src/styles/components/cta.css'), 'utf8');
    assert.ok(css.match(/\.contact-fields\s*\{[^}]*grid-template-columns: minmax\(0, 1fr\)/));
    assert.ok(css.match(/\.contact-input-shell\s*\{[^}]*min-height: 56px/));
    assert.ok(css.match(/\.contact-control-label\s*\{[^}]*clip-path: inset\(50%\)/));
  });
  it('places both full-width actions before hidden selectable recovery', () => {
    const actions = contact.match(/<div class="cta-actions-group">[\s\S]*?<\/div>/)[0];
    assert.ok(actions.includes('id="contact-mail-btn"'));
    assert.ok(actions.includes('id="contact-copy-guide-btn"'));
    assert.ok(actions.indexOf('contact-mail-btn') < actions.indexOf('contact-copy-guide-btn'));
    const guide = contact.slice(contact.indexOf('<div id="contact-guide-fallback"'));
    assert.equal(guide.includes('id="contact-copy-guide-btn"'), false);
    assert.ok(guide.match(/<textarea[^>]*id="contact-guide-textarea"[^>]*rows="2"/));
    assert.ok(guide.match(/<textarea[^>]*readonly/));
    assert.ok(guide.match(/<div[^>]*id="contact-guide-fallback"[^>]*hidden/));
    const css = fs.readFileSync(path.resolve('src/styles/components/cta.css'), 'utf8');
    const copyRule = css.match(/\.cta-button-copy\s*\{([^}]+)\}/)[1];
    assert.equal(copyRule.includes('width: auto'), false);
    assert.ok(css.match(/\.contact-input-shell textarea,\s*\.guide-fallback-textarea\s*\{[^}]*color-scheme: dark/));
  });
  it('uses the approved white logo and preserves the six legitimate footer links', () => {
    assert.ok(footer.includes('./assets/logo/logo-white-transparent.png'));
    const links = [...footer.matchAll(/class="footer-nav-link">([^<]+)<\/a>/g)].map(match => match[1]);
    assert.deepEqual(links, ['Inicio', 'Soluciones', 'Sectores', 'Proceso', 'Capacidades', 'Contacto']);
    assert.equal(/linkedin|instagram|whatsapp/i.test(footer), false);
    assert.ok(footer.includes('Una solución a medida.'));
  });
});

describe('Sectors reference presentation', () => {
  const html = fs.readFileSync(path.resolve('index.html'), 'utf8');
  const sectors = html.match(/<section id="sectores"[\s\S]*?<\/section>/)[0];
  const css = fs.readFileSync(path.resolve('src/styles/components/sectors.css'), 'utf8');
  it('pairs six decorative native outlined icons with unchanged sector labels', () => {
    const icons = [...sectors.matchAll(/<svg class="sector-icon"[^>]*>/g)];
    assert.equal(icons.length, 6);
    for (const [icon] of icons) {
      assert.ok(icon.includes('viewBox="0 0 24 24"'));
      assert.ok(icon.includes('stroke="currentColor"'));
      assert.ok(icon.includes('aria-hidden="true"'));
      assert.ok(icon.includes('focusable="false"'));
    }
    assert.equal(sectors.includes('seccion07-icono-'), false);
    assert.ok(sectors.includes('seccion07-foto-cnc-mecanizado.png'));
    assert.ok(sectors.includes('data-consulta="Consulta general"'));
  });
  it('keeps a monochrome photograph and a six-column ribbon with deliberate smaller grids', () => {
    assert.ok(css.includes('grayscale(1)'));
    assert.ok(css.includes('repeat(6, minmax(0, 1fr))'));
    assert.ok(css.includes('repeat(3, minmax(0, 1fr))'));
    assert.ok(css.includes('grid-template-columns: minmax(0, 1fr)'));
    assert.ok(css.includes('.sector-icon {'));
  });
  it('only conceals entrance animation content after progressive enhancement', () => {
    assert.ok(css.includes('.section-sectors.sectors-motion-ready:not(.is-revealed)'));
    assert.ok(css.includes('@media (prefers-reduced-motion: reduce)'));
    const script = fs.readFileSync(path.resolve('src/scripts/sectorsAnimation.js'), 'utf8');
    assert.ok(script.includes("typeof IntersectionObserver !== 'function'"));
    assert.ok(script.includes("section.classList.add('sectors-motion-ready')"));
  });
  it('reveals immediately without observation support or with reduced motion', () => {
    const source = fs.readFileSync(path.resolve('src/scripts/sectorsAnimation.js'), 'utf8').replace('export function', 'function');
    const run = new Function('document', 'window', 'IntersectionObserver', source + '; initSectorsAnimation();');
    for (const reduced of [false, true]) {
      const classes = new Set();
      run({ getElementById: () => ({ classList: { add(name) { classes.add(name); } } }) }, { matchMedia: () => ({ matches: reduced }) }, undefined);
      assert.ok(classes.has('is-revealed'));
      assert.equal(classes.has('sectors-motion-ready'), false);
    }
    const classes = new Set();
    let disconnected = false;
    class Observer {
      constructor(callback) { this.callback = callback; }
      observe() { this.callback([{ isIntersecting: true }]); }
      disconnect() { disconnected = true; }
    }
    run({ getElementById: () => ({ classList: { add(name) { classes.add(name); } } }) }, { matchMedia: () => ({ matches: false }) }, Observer);
    assert.ok(classes.has('sectors-motion-ready'));
    assert.ok(classes.has('is-revealed'));
    assert.equal(disconnected, true);
  });

});

it('draws six distinct interlocking sector perimeters rather than a shared rounded strip', () => {
  const html = fs.readFileSync(path.resolve('index.html'), 'utf8');
  const sector = html.match(/<section id="sectores"[\s\S]*?<\/section>/)[0];
  assert.equal([...sector.matchAll(/class="sector-module-outline"/g)].length, 6);
  const css = fs.readFileSync(path.resolve('src/styles/components/sectors.css'), 'utf8');
  assert.ok(css.includes('width: calc(100% + 32px)'));
  assert.ok(css.includes('.sector-module-outline {'));
  assert.equal(sector.includes('class="sector-chevron-divider"'), false);
});

it('keeps the sector final word and decorative dot together on narrow screens', () => {
  const html = fs.readFileSync(path.resolve('index.html'), 'utf8');
  assert.ok(html.includes('<span class="sectors-title-ending">reales<span class="sectors-title-dot"'));
  const css = fs.readFileSync(path.resolve('src/styles/components/sectors.css'), 'utf8');
  assert.ok(css.match(/\.sectors-title-ending\s*\{[^}]*white-space: nowrap/));
});

it('reveals a tall sector when less than fifteen percent can fit in the viewport', () => {
  const source = fs.readFileSync('src/scripts/sectorsAnimation.js', 'utf8').replace('export function', 'function');
  const run = new Function('document', 'window', 'IntersectionObserver', source + '; initSectorsAnimation();');
  const classes = new Set();
  class ShortViewportObserver {
    constructor(callback, options) { this.callback = callback; this.threshold = options.threshold; }
    observe() {
      if (this.threshold <= 0.005) this.callback([{ isIntersecting: true, intersectionRatio: 0.005 }]);
    }
    disconnect() {}
  }
  run({ getElementById: () => ({ classList: { add(name) { classes.add(name); } } }) }, { matchMedia: () => ({ matches: false }) }, ShortViewportObserver);
  assert.ok(classes.has('is-revealed'));
});

it('bounds the mobile menu to the viewport and lets its content scroll without shrinking', () => {
  const css = fs.readFileSync('src/styles/components/header.css', 'utf8');
  const mobile = css.slice(css.indexOf('@media (max-width: 991px)'));
  const nav = mobile.match(/\.site-nav\s*\{([^}]+)\}/)[1];
  assert.ok(nav.includes('max-height: calc(100vh - 84px)'));
  assert.ok(nav.includes('max-height: calc(100dvh - 84px)'));
  assert.ok(nav.includes('overflow-y: auto'));
  assert.ok(nav.includes('box-sizing: border-box'));
  for (const selector of ['nav-list', 'nav-cta-wrapper']) {
    const rule = mobile.match(new RegExp('\\.' + selector + '\\s*\\{([^}]+)\\}'))[1];
    assert.ok(rule.includes('flex-shrink: 0'));
  }
});

it('keeps associated contact labels visible persistently on narrow layouts', () => {
  const css = fs.readFileSync('src/styles/components/cta.css', 'utf8');
  const narrow = css.match(/@media \(max-width: 575px\)\s*\{([\s\S]*?)\n\}/)[1];
  const labels = narrow.match(/\.contact-control-label\s*\{([^}]+)\}/)[1];
  for (const declaration of ['position: static', 'width: auto', 'height: auto', 'clip-path: none', 'white-space: normal']) assert.ok(labels.includes(declaration));
  const html = fs.readFileSync('index.html', 'utf8');
  for (const id of ['company-input', 'name-input', 'reply-input', 'deadline-input']) assert.ok(html.match(new RegExp('<label[^>]*for="contact-' + id + '"[^>]*>[^<]*opcional')));
  assert.ok(html.match(/<label[^>]*for="contact-problem-textarea"[^>]*>[^<]*obligatorio/));
  assert.ok(css.includes('min-height: 56px'));
  assert.ok(css.includes('font-size: 1rem'));
});
