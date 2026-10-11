# Manifest de assets

Todos los nombres están normalizados para desarrollo. Los PNG fuente se conservan aunque luego se generen WebP/AVIF derivados.

## Referencias
| Archivo | Uso |
|---|---|
| `assets/images/reference/mockup-selected.png` | referencia visual principal de layout |
| `assets/images/reference/brand-palette.png` | paleta oficial |
| `assets/images/reference/typography-reference.png` | tipografías de marca |

## Logos
| Archivo | Uso |
|---|---|
| `assets/logo/logo-black-transparent.png` | header sobre fondo claro |
| `assets/logo/logo-white-transparent.png` | footer / fondo oscuro |
| `assets/logo/logo-black-reference.png` | referencia original |
| `assets/logo/logo-orange-white-reference.png` | variante de marca |
| `assets/logo/logo-white-black-orange-reference.png` | variante de marca |
| `assets/logo/logo-reference-sheet.png` | hoja comparativa original |

## Transparentes — servicios / capacidades
| Archivo | Uso recomendado | Alt sugerido |
|---|---|---|
| `hero-printer-cad-overlay.png` | hero alternativo / mobile / composición sin fondo | Impresora 3D fabricando una pieza industrial con superposición CAD |
| `service-soluciones-industriales.png` | card Soluciones industriales | Engranaje técnico impreso en 3D |
| `service-repuesto-tecnico.png` | card Repuestos | Soporte técnico impreso en 3D |
| `service-ingenieria-inversa.png` | card Ingeniería inversa | Carcasa técnica reconstruida para fabricación |
| `service-prototipado.png` | card Prototipado | Impulsor de turbina impreso en 3D |
| `service-pequenas-series.png` | card Pequeñas series | Lote de bujes impresos en 3D |
| `capability-cad.png` | capacidad CAD, cuando se necesite objeto aislado | Monitor con modelo CAD de una pieza técnica |
| `capability-fdm.png` | capacidad FDM, objeto aislado | Impresora 3D fabricando un soporte técnico |
| `capability-materials.png` | materiales, objeto aislado | Bobinas y pellets de materiales para impresión 3D |
| `capability-quality.png` | calidad, objeto aislado | Calibre digital midiendo una pieza impresa en 3D |

## Con fondo — secciones fotográficas
| Archivo | Uso recomendado | Focal point |
|---|---|---|
| `hero-workshop-cad-transition.png` | Hero desktop principal | derecha |
| `cad-studio.png` | card/feature Diseño CAD | centro-derecha |
| `fdm-production.png` | card/feature Impresión 3D FDM | centro-derecha |
| `precision-printing.png` | card/feature Alta precisión | centro |
| `materials-workbench.png` | card/feature Materiales técnicos | centro |
| `quality-control.png` | card/feature Control dimensional | centro-derecha |
| `cta-workshop-dark.png` | fondo CTA final | derecha; izquierda libre para copy |
| `small-series-production.png` | apoyo Pequeñas series / sección de producción | centro |

## Reglas
- No recortar objetos transparentes tan cerca que se pierda su silueta.
- Para cards, usar `object-fit: contain`.
- Para fotografías de fondo, usar `object-fit: cover` y `object-position` según focal point.
- No usar simultáneamente más de 2–3 imágenes complejas en el mismo viewport.
- Añadir overlay oscuro solo cuando haga falta para contraste de texto.
- Evitar insertar texto dentro de las imágenes.

## Active reference hero asset
- `assets/images/backgrounds/hero-taller-transformacion.jpg` is the full workshop transformation photograph used by the current hero, with live HTML callouts and actions.
- Historical hero exports are not required by this composition and are not included in this work unit.

## Sectores — assets activos
- `assets/images/seccion07/seccion07-foto-cnc-mecanizado.png`: fotografía CNC monocromática, recortada diagonalmente mediante CSS.
- Los seis iconos lineales y los perímetros chevrón se dibujan con SVG nativos en index.html. No se requieren exportaciones raster de iconos ni de marcos.
