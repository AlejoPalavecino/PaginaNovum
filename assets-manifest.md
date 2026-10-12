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

## Hero — Tu problema, nuestra ingeniería
| Archivo | Uso recomendado | Focal point / Tipo |
|---|---|---|
| `assets/images/backgrounds/hero-taller-transformacion.jpg` | Fondo principal hero (composición maestra 3D con banco, piezas, calibre y plano CAD) | derecha (78%) |
| `assets/images/transparent/hero/hero/assets/01_fondo_taller_industrial.png` | Fondo taller sin piezas (variante limpia) | centro-abajo |
| `assets/images/transparent/hero/hero/assets/02_pieza_danada.png` | Objeto transparente pieza dañada / problema | centro |
| `assets/images/transparent/hero/hero/assets/03_pieza_solucion.png` | Objeto transparente pieza mecanizada / solución técnica | centro |
| `assets/images/transparent/hero/hero/assets/04_overlay_cad.png` | Capa wireframe / plano CAD superpuesto a la solución | centro |
| `assets/images/transparent/hero/hero/assets/05_flecha_transformacion.png` | Referencia flecha de transformación naranja | centro |

## Con fondo — secciones fotográficas
| Archivo | Uso recomendado | Focal point |
|---|---|---|
| `hero-workshop-cad-transition.png` | Hero desktop secundario / archivo histórico | derecha |
| `cad-studio.png` | card/feature Diseño CAD | centro-derecha |
| `fdm-production.png` | card/feature Impresión 3D FDM | centro-derecha |
| `precision-printing.png` | card/feature Alta precisión | centro |
| `materials-workbench.png` | card/feature Materiales técnicos | centro |
| `quality-control.png` | card/feature Control dimensional | centro-derecha |
| `cta-workshop-dark.png` | fondo CTA final | derecha; izquierda libre para copy |
| `small-series-production.png` | apoyo Pequeñas series / sección de producción | centro |

## Sección 07 — Con quiénes buscamos trabajar
| Archivo | Uso recomendado | Tipo |
|---|---|---|
| `assets/images/seccion07/seccion07-foto-cnc-mecanizado.png` | Fotografía industrial recortada diagonalmente con clip-path | PNG fuente; WebP activo derivado |
| `assets/images/seccion07/seccion07-marco-diagonal-naranja.png` | Marco/acento diagonal naranja | PNG fuente; marco SVG activo |
| `assets/images/seccion07/seccion07-icono-industria-manufacturera.png` | Icono sector 01 Manufactura | PNG fuente; WebP activo derivado |
| `assets/images/seccion07/seccion07-icono-talleres-mantenimiento.png` | Icono sector 02 Mantenimiento | PNG fuente; WebP activo derivado |
| `assets/images/seccion07/seccion07-icono-ingenieria-automatizacion.png` | Icono sector 03 Control & CAD | PNG fuente; WebP activo derivado |
| `assets/images/seccion07/seccion07-icono-maquinaria-equipamiento.png` | Icono sector 04 Equipamiento | PNG fuente; WebP activo derivado |
| `assets/images/seccion07/seccion07-icono-agroindustria.png` | Icono sector 05 Agro & Packing | PNG fuente; WebP activo derivado |
| `assets/images/seccion07/seccion07-icono-laboratorios.png` | Icono sector 06 I+D & Control | PNG fuente; WebP activo derivado |

## Reglas
- No recortar objetos transparentes tan cerca que se pierda su silueta.
- Para cards, usar `object-fit: contain`.
- Para fotografías de fondo, usar `object-fit: cover` y `object-position` según focal point.
- No usar simultáneamente más de 2–3 imágenes complejas en el mismo viewport.
- Añadir overlay oscuro solo cuando haga falta para contraste de texto.
- Evitar insertar texto dentro de las imágenes.

## Contacto — reutilización de assets aprobados
- Fondo de taller: `assets/images/transparent/hero/hero/assets/01_fondo_taller_industrial.png` (1672 × 941), sin texto ni interfaz incrustada.
- Pieza y CAD: `assets/images/transparent/seccion05_como_trabajamos_assets/seccion05-pieza_industrial_principal.png` y `seccion05-pieza_wireframe_cad.png` (1448 × 1086), decorativos debajo del contexto editorial.
- La captura de referencia no se utiliza como imagen de producción. Los archivos fuente existentes se conservan sin modificaciones.

## Sectores — referencia industrial
- Se reutiliza la fotografía CNC aprobada con filtro monocromático y recorte diagonal en CSS.
- SRL-02 utiliza derivados WebP de los seis iconos proporcionados. Sus originales PNG se conservan sin modificación; los contornos, flechas y marco diagonal siguen siendo SVG nativos.
- La captura de referencia no se utiliza como imagen de producción.

## Estado de entrega — activos frente a exportaciones históricas
- **Assets activos en esta entrega:** `assets/images/backgrounds/hero-taller-transformacion.jpg`, `assets/images/seccion07/seccion07-foto-cnc-mecanizado.webp`, los seis iconos WebP enumerados abajo y `assets/images/transparent/hero/hero/assets/01_fondo_taller_industrial.png`, junto con las imágenes ya utilizadas por el resto de la página.
- **Exportaciones históricas no utilizadas ni incluidas en esta entrega:** marco diagonal e iconos PNG de `assets/images/seccion07/`, exportaciones de `assets/images/transparent/seccion07-sectores-industriales/` y demás archivos del paquete `assets/images/transparent/hero/` salvo el fondo activo indicado. El catálogo no implica uso ni publicación de estos archivos.
- Los contornos de Sectores son SVG nativos y los seis iconos activos son derivados WebP de los PNG históricos. Los originales se conservan sin borrar y no se cargan como iconos de producción.
- `.atl/` y `.codegraph/` son metadatos locales de herramientas, no assets del cliente.

## SRL-02 — derivados activos proporcionados
| Archivo en assets/images/seccion07/ | Dimensiones | Bytes | Fuente |
|---|---|---:|---|
| `seccion07-foto-cnc-mecanizado.webp` | 1100 × 825 | 72878 | PNG homónimo proporcionado |
| `seccion07-icono-agroindustria.webp` | 160 × 160 | 5378 | PNG homónimo proporcionado |
| `seccion07-icono-industria-manufacturera.webp` | 160 × 160 | 4098 | PNG homónimo proporcionado |
| `seccion07-icono-ingenieria-automatizacion.webp` | 160 × 160 | 6798 | PNG homónimo proporcionado |
| `seccion07-icono-laboratorios.webp` | 160 × 160 | 4978 | PNG homónimo proporcionado |
| `seccion07-icono-maquinaria-equipamiento.webp` | 160 × 160 | 4794 | PNG homónimo proporcionado |
| `seccion07-icono-talleres-mantenimiento.webp` | 160 × 160 | 5764 | PNG homónimo proporcionado |

- Foto: WebP de 1100 × 825, sin modificar el PNG original conceptual. No acredita equipamiento propio, precisión ni certificaciones.
- Iconos: alpha preservado, margen transparente conservador normalizado y padding uniforme, 160 × 160 para visualización de 64 px. La caja translúcida pertenece al recurso, no se agrega otro fondo CSS.
- Ocho fuentes revisadas: foto, marco y seis iconos. Producción usa siete imágenes WebP más un marco SVG responsive permitido por el brief; no se afirma que carguen ocho imágenes. El marco PNG no se necesita.
