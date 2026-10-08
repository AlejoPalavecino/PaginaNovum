/**
 * ==========================================================================
 * Nóvum Industrial — Contact Configuration & Business Logic (B2B)
 * Centralizes contact email, whitelist validation, mailto generation,
 * and consultation template formatting.
 * ==========================================================================
 */

export const ALLOWED_SERVICES = Object.freeze([
  'Partner Industrial',
  'Repuesto Express',
  'Ingeniería Inversa',
  'Inventario Digital',
  'Solución Industrial',
  'Prototipado',
  'Producción seriada',
  'Productos propios'
]);

export const DEFAULT_SERVICE = 'Consulta general';

export const CONTACT_CONFIG = {
  // Pending commercial validation: must be set to a valid address before publication
  email: '[EMAIL_DE_CONTACTO]',
  baseSubject: 'Consulta técnica B2B desde la web — Nóvum Industrial'
};

/**
 * Checks if the contact email has been definitively confirmed.
 * Rejects placeholders, empty values, and invalid formats.
 * @param {string} email
 * @returns {boolean}
 */
export function isEmailConfirmed(email = CONTACT_CONFIG.email) {
  if (!email || typeof email !== 'string') return false;
  const trimmed = email.trim();
  if (trimmed.includes('[') || trimmed.includes(']') || trimmed.includes('EMAIL_DE_CONTACTO')) {
    return false;
  }
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(trimmed);
}

/**
 * Normalizes an incoming service name against the authorized whitelist.
 * @param {string|null|undefined} service
 * @returns {string} Normalized service name or DEFAULT_SERVICE
 */
export function normalizeService(service) {
  if (!service || typeof service !== 'string') return DEFAULT_SERVICE;
  const trimmed = service.trim();
  const found = ALLOWED_SERVICES.find(
    (item) => item.toLowerCase() === trimmed.toLowerCase()
  );
  return found || DEFAULT_SERVICE;
}

/**
 * Generates the standardized email subject.
 * @param {string} service
 * @returns {string}
 */
export function buildSubject(service = DEFAULT_SERVICE) {
  const normalized = normalizeService(service);
  return `${CONTACT_CONFIG.baseSubject}: ${normalized}`;
}

/**
 * Generates the consultation guide body for the email application.
 * @param {string} service
 * @returns {string}
 */
export function buildBody(service = DEFAULT_SERVICE) {
  const normalized = normalizeService(service);
  return [
    'Hola equipo de Nóvum Industrial,',
    '',
    `Consulta: ${normalized}`,
    '',
    'Empresa:',
    'Nombre y función:',
    'Correo o teléfono para responder:',
    'Localidad / provincia:',
    '',
    'Equipo, pieza o problema a resolver:',
    'Impacto en la operación (parada, mantenimiento, mejora o desarrollo):',
    'Necesidad puntual o recurrente:',
    'Cantidad aproximada:',
    'Plazo que necesitamos:',
    '',
    'Información disponible (pieza, fotos, planos o modelo):',
    '',
    'Quedamos atentos para conversar y evaluar el caso.'
  ].join('\n');
}

/**
 * Builds the URL-encoded mailto link.
 * If the email is not confirmed, returns null to avoid generating a fictitious link.
 * @param {string} service
 * @param {typeof CONTACT_CONFIG} config
 * @returns {string|null}
 */
export function buildMailtoUrl(service = DEFAULT_SERVICE, config = CONTACT_CONFIG) {
  if (!isEmailConfirmed(config.email)) {
    return null;
  }
  const subject = encodeURIComponent(buildSubject(service));
  const body = encodeURIComponent(buildBody(service));
  return `mailto:${config.email.trim()}?subject=${subject}&body=${body}`;
}
