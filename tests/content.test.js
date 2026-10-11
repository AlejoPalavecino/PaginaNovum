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
    assert.ok(html.includes('Tu problema') && html.includes('nuestra ingeniería'));
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
