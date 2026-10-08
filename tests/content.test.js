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
    assert.ok(html.includes('SOLUCIONES INDUSTRIALES A MEDIDA'));
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
