# Brief de diseño — Nóvum Industrial

## 1. Concepto visual
**Industrial contemporáneo, técnico y modular.**

La página debe combinar:
- claridad editorial;
- retículas visibles y separadores finos;
- imágenes de fabricación aditiva y piezas funcionales;
- alto contraste blanco/negro;
- naranja de marca como acento y CTA;
- sensación de precisión sin caer en una estética futurista genérica.

Concepto conductor: **del problema / diseño digital a la pieza funcional**.

## 2. Paleta oficial de marca
Valores tomados de la referencia de marca:

| Token | Hex | Uso |
|---|---|---|
| `--color-charcoal` | `#404146` | superficies oscuras secundarias |
| `--color-black` | `#000000` | texto, fondos de contraste, footer |
| `--color-orange` | `#FF8134` | CTA, acentos, líneas técnicas |
| `--color-white` | `#FFFFFF` | fondos y texto sobre oscuro |

### Neutros UI sugeridos
No sustituyen la paleta de marca; sirven como sistema de interfaz.
- `--surface-light: #F5F5F3`
- `--surface-soft: #ECEDEB`
- `--text-muted: #62656A`
- `--border-light: #D9DADE`
- `--surface-dark: #151619`

## 3. Tipografía
### Display / títulos
**Helios Extended**
- H1, H2 principales, titulares de campaña.
- No deformar horizontalmente para simular un estilo condensado.
- Preferir cortes de línea controlados.

### Texto / interfaz
**Inter**
- body, navegación, botones, labels, cards, FAQ.

Escala inicial desktop:
- H1: 64–72 px / 0.95–1.0 line-height
- H2: 40–48 px / 1.05
- H3: 22–26 px / 1.15
- Body L: 18 px / 1.55
- Body: 16 px / 1.55
- Label: 12–14 px / 1.3, tracking leve

Mobile:
- H1: 38–44 px
- H2: 28–34 px
- H3: 20–22 px
- Body: 16 px

## 4. Layout
- Max content width: 1280 px.
- Grid desktop: 12 columnas.
- Gutter: 24 px.
- Section spacing: 96–120 px desktop; 56–72 px mobile.
- Bordes: 1 px.
- Radius: 4–8 px; evitar píldoras excesivas.
- Sombras: mínimas; preferir separación por contraste, borde y espacio.

## 5. Header
- Fondo claro, limpio.
- Logo negro.
- Navegación centrada/aireada.
- CTA naranja a la derecha.
- Active state con subrayado o línea naranja, no con fondo completo.

## 6. Hero
Dirección recomendada:
- izquierda: H1, texto, CTA;
- derecha: imagen de impresión 3D real con pieza funcional y overlay CAD;
- fondo claro o split claro/imagen;
- orange usado en palabra clave, botón y pequeñas líneas técnicas.

No usar una máquina CNC genérica como protagonista del hero.

## 7. Problemas
- cards o columnas ligeras;
- iconos lineales simples;
- sin fotos necesarias;
- mucho aire y copy breve.

## 8. Soluciones
- cards de producto/servicio con objeto 3D protagonista;
- fondo muy claro;
- una card destacada puede usar naranja;
- imágenes transparentes sobre superficies neutrales.

## 9. Clientes
- franja sobria y compacta.
- usar logos oficiales solo si existen archivos autorizados.
- mientras tanto, nombres tipográficos consistentes.

## 10. Proceso
- banda oscura o grafito para cambiar el ritmo.
- pasos conectados por línea o flechas discretas.
- números grandes o círculos simples.

## 11. Capacidades
- cards con imágenes fotográficas de contexto.
- CAD, impresora 3D, precisión, materiales y metrología.
- copy corto; la imagen demuestra la capacidad.

## 12. FAQ
- fondo claro.
- acordeones con separadores finos.
- icono `+` / `−` o chevron.

## 13. CTA final
- fondo oscuro con imagen ambiental o split oscuro/naranja.
- H2 grande.
- un solo CTA principal.
- no agregar métricas o claims no verificados.

## 14. Fotografía / CGI
Dirección:
- piezas funcionales, no objetos decorativos;
- capas de impresión visibles;
- filamentos/materiales técnicos;
- CAD y wireframes como apoyo;
- iluminación neutra con reflejos naranja;
- fondos de taller limpios, premium, con DOF moderada;
- evitar stock genérico de fábricas que no muestre fabricación aditiva.

## 15. Iconografía
- una sola familia lineal.
- grosor consistente 1.5–2 px.
- negro/charcoal con acentos naranja.
- no mezclar iconos outline con 3D o filled sin motivo.

## 16. Motion
- 180–250 ms.
- hover de cards: elevación mínima o cambio de borde.
- animaciones de entrada sutiles.
- respetar `prefers-reduced-motion`.

## 17. Regla estratégica de marca
La impresión 3D debe estar muy presente en el sistema visual porque es una capacidad central, pero el copy no debe reducir a Nóvum a "un servicio de impresión 3D". El mensaje principal es la resolución de problemas técnicos mediante diseño, ingeniería, fabricación aditiva y, cuando corresponde, integración de otros procesos.
