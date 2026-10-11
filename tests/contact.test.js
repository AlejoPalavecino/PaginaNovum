import { describe, it } from 'node:test';
import assert from 'node:assert/strict';
import {
  ALLOWED_SERVICES,
  DEFAULT_SERVICE,
  isEmailConfirmed,
  normalizeService,
  buildSubject,
  buildBody,
  buildMailtoUrl
} from '../src/config/contact.js';

describe('Contact Configuration & B2B Mailto Generator', () => {
  it('recognizes placeholder or invalid emails as unconfirmed', () => {
    assert.equal(isEmailConfirmed('[EMAIL_DE_CONTACTO]'), false);
    assert.equal(isEmailConfirmed(''), false);
    assert.equal(isEmailConfirmed(null), false);
    assert.equal(isEmailConfirmed('not-an-email'), false);
    assert.equal(isEmailConfirmed('contacto@novumindustrial.com'), true);
  });

  it('normalizes authorized B2B services correctly', () => {
    assert.equal(ALLOWED_SERVICES.length, 8);
    assert.equal(normalizeService('Partner Industrial'), 'Partner Industrial');
    assert.equal(normalizeService('partner industrial'), 'Partner Industrial');
    assert.equal(normalizeService('Repuesto Express'), 'Repuesto Express');
    assert.equal(normalizeService('Ingeniería Inversa'), 'Ingeniería Inversa');
    assert.equal(normalizeService('Inventario Digital'), 'Inventario Digital');
    assert.equal(normalizeService('Solución Industrial'), 'Solución Industrial');
    assert.equal(normalizeService('Prototipado'), 'Prototipado');
    assert.equal(normalizeService('Producción seriada'), 'Producción seriada');
    assert.equal(normalizeService('Productos propios'), 'Productos propios');
  });

  it('falls back to DEFAULT_SERVICE for invalid service inputs', () => {
    assert.equal(normalizeService('Servicio Inventado'), DEFAULT_SERVICE);
    assert.equal(normalizeService(''), DEFAULT_SERVICE);
    assert.equal(normalizeService(null), DEFAULT_SERVICE);
  });

  it('formats subject according to B2B requirement', () => {
    const subject = buildSubject('Partner Industrial');
    assert.equal(subject, 'Consulta técnica B2B desde la web — Nóvum Industrial: Partner Industrial');
    const generalSubject = buildSubject();
    assert.equal(generalSubject, 'Consulta técnica B2B desde la web — Nóvum Industrial: Consulta general');
  });

  it('formats body with exact editable template', () => {
    const body = buildBody('Repuesto Express');
    assert.ok(body.includes('Hola equipo de Nóvum Industrial,'));
    assert.ok(body.includes('Consulta: Repuesto Express'));
    assert.ok(body.includes('Empresa:'));
    assert.ok(body.includes('Nombre y función:'));
    assert.ok(body.includes('Equipo, pieza o problema a resolver:'));
    assert.ok(body.includes('Impacto en la operación (parada, mantenimiento, mejora o desarrollo):'));
    assert.ok(body.includes('Necesidad puntual o recurrente:'));
    assert.ok(body.includes('Cantidad aproximada:'));
    assert.ok(body.includes('Plazo que necesitamos:'));
    assert.ok(body.includes('Información disponible (pieza, fotos, planos o modelo):'));
  });

  it('returns null for mailto when email is unconfirmed', () => {
    const mailto = buildMailtoUrl('Solución Industrial', { email: '[EMAIL_DE_CONTACTO]' });
    assert.equal(mailto, null);
  });

  it('generates valid URL-encoded mailto when email is confirmed', () => {
    const mailto = buildMailtoUrl('Solución Industrial', {
      email: 'contacto@novumindustrial.com',
      baseSubject: 'Consulta técnica B2B desde la web — Nóvum Industrial'
    });
    assert.ok(mailto.startsWith('mailto:contacto@novumindustrial.com?subject='));
    assert.ok(mailto.includes('Soluci%C3%B3n%20Industrial'));
  });
});

describe('Express inquiry encoding', () => {
  it('includes the selected service and entered problem without the long guide', async () => {
    const { buildExpressBody, buildExpressMailtoUrl } = await import('../src/config/contact.js');
    assert.equal(typeof buildExpressBody, 'function');
    const problem = 'Repuesto dañado & plano #4\nNecesitamos adaptación: 20% "más".';
    const url = buildExpressMailtoUrl('ingeniería inversa', problem, { email: 'test@example.com' });
    const params = new URLSearchParams(url.split('?')[1]);
    assert.ok(params.get('subject').includes('Ingeniería Inversa'));
    assert.equal(params.get('body'), buildExpressBody('Ingeniería Inversa', problem));
    assert.ok(params.get('body').includes(problem));
    assert.equal(params.get('body').includes('Nombre y función:'), false);
    assert.ok(buildExpressBody('Inventado', 'Una pieza').includes('Consulta general'));
  });

  it('does not create links for an invalid address or an empty problem', async () => {
    const { buildExpressMailtoUrl } = await import('../src/config/contact.js');
    assert.equal(typeof buildExpressMailtoUrl, 'function');
    for (const email of ['[EMAIL_DE_CONTACTO]', '', 'invalid']) {
      assert.equal(buildExpressMailtoUrl('Repuesto Express', 'Pieza dañada', { email }), null);
    }
    assert.equal(buildExpressMailtoUrl('Repuesto Express', '  ', { email: 'test@example.com' }), null);
  });
});

describe('Reference consultation details', () => {
  it('encodes only provided optional fields while preserving the service and problem', async () => {
    const { buildConsultationBody, buildConsultationMailtoUrl } = await import('../src/config/contact.js');
    assert.equal(typeof buildConsultationBody, 'function');
    const details = { company: 'Taller Ñ & Hijos', name: 'María — mantenimiento', replyContact: '+54 123', problem: 'Pieza #5\nSe rompió', deadline: '' };
    const url = buildConsultationMailtoUrl('partner industrial', details, { email: 'test@example.com' });
    const body = new URLSearchParams(url.split('?')[1]).get('body');
    assert.equal(body, buildConsultationBody('Partner Industrial', details));
    for (const value of ['Taller Ñ & Hijos', 'María — mantenimiento', '+54 123', 'Pieza #5\nSe rompió']) assert.ok(body.includes(value));
    assert.equal(body.includes('Plazo que necesitás:'), false);
    assert.ok(body.includes('Consulta: Partner Industrial'));
    assert.equal(buildConsultationMailtoUrl('general', details, { email: '[EMAIL_DE_CONTACTO]' }), null);
    assert.equal(buildConsultationMailtoUrl('general', { problem: ' ' }, { email: 'test@example.com' }), null);
  });
});

it('uses the business-confirmed address for a prepared Unicode consultation without sending it', async () => {
  const { CONTACT_CONFIG, buildConsultationMailtoUrl } = await import('../src/config/contact.js');
  assert.equal(CONTACT_CONFIG.email, 'novum.industrial.ar@gmail.com');
  const problem = 'Necesitamos un repuesto: piñón #3 & eje\nMáquina detenida';
  const url = buildConsultationMailtoUrl('Ingeniería Inversa', { problem, company: 'Fábrica Ñ' });
  assert.ok(url.startsWith('mailto:novum.industrial.ar@gmail.com?subject='));
  const params = new URLSearchParams(url.split('?')[1]);
  assert.ok(params.get('subject').includes('Ingeniería Inversa'));
  assert.ok(params.get('body').includes(problem));
  assert.ok(params.get('body').includes('Fábrica Ñ'));
});
