#!/usr/bin/env node

/**
 * ==========================================================================
 * Pre-release Validation Script
 * Verifies that the contact configuration has a confirmed valid email
 * and no pending placeholder markers before deploying to production.
 * ==========================================================================
 */

import { CONTACT_CONFIG, isEmailConfirmed } from '../src/config/contact.js';

console.log('--- Verificando preparación para publicación (release check) ---');

const email = CONTACT_CONFIG.email;

if (!isEmailConfirmed(email)) {
  console.error('\n❌ ERROR: El correo de contacto no está confirmado para producción.');
  console.error(`   Valor actual en src/config/contact.js: "${email}"`);
  console.error('   Motivo: Se detectó un marcador pendiente ([EMAIL_DE_CONTACTO]) o un formato inválido.');
  console.error('\n⚠️  Antes de publicar en producción, configurá una dirección de correo real autorizada.');
  process.exit(1);
}

console.log(`\n✅ Correo de contacto verificado y válido para producción: ${email}`);
console.log('✅ Verificación previa a publicación exitosa.');
process.exit(0);
