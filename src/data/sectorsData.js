/**
 * ==========================================================================
 * Nóvum Industrial — Sectors / Target Industries Data (#sectores)
 * Canonical content registry checked against static HTML by regression tests.
 * No client-side renderer is required for the six semantic sector modules.
 * ==========================================================================
 */

export const SECTORS_DATA = Object.freeze([
  {
    id: '01',
    number: '01',
    tag: 'MANUFACTURA',
    name: 'Industria manufacturera',
    icon: './assets/images/seccion07/seccion07-icono-industria-manufacturera.webp',
    hasArrow: true
  },
  {
    id: '02',
    number: '02',
    tag: 'MANTENIMIENTO',
    name: 'Talleres y mantenimiento',
    icon: './assets/images/seccion07/seccion07-icono-talleres-mantenimiento.webp',
    hasArrow: true
  },
  {
    id: '03',
    number: '03',
    tag: 'CONTROL & CAD',
    name: 'Ingeniería y automatización',
    icon: './assets/images/seccion07/seccion07-icono-ingenieria-automatizacion.webp',
    hasArrow: true
  },
  {
    id: '04',
    number: '04',
    tag: 'EQUIPAMIENTO',
    name: 'Maquinaria y equipamiento',
    icon: './assets/images/seccion07/seccion07-icono-maquinaria-equipamiento.webp',
    hasArrow: true
  },
  {
    id: '05',
    number: '05',
    tag: 'AGRO & PACKING',
    name: 'Agroindustria',
    icon: './assets/images/seccion07/seccion07-icono-agroindustria.webp',
    hasArrow: true
  },
  {
    id: '06',
    number: '06',
    tag: 'I+D & CONTROL',
    name: 'Laboratorios',
    icon: './assets/images/seccion07/seccion07-icono-laboratorios.webp',
    hasArrow: false
  }
]);
