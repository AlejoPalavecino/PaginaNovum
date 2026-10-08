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
