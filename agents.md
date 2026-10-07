# AGENTS — reglas para desarrollar la web de Nóvum Industrial

Este archivo es la guía de contexto para cualquier coding agent o asistente que implemente o modifique la web.

## 1. Prioridades
1. Respetar `content.md` como fuente de verdad editorial.
2. Respetar `brief-design.md` como sistema visual.
3. Respetar `arquitecture.md` como arquitectura y comportamiento.
4. Usar `assets-manifest.md` para elegir imágenes; no inventar assets equivalentes si ya existe uno.
5. Mantener la web rápida, accesible y responsive.

## 2. Posicionamiento
Nóvum no debe presentarse como una tienda de impresión 3D ni como un catálogo de máquinas.

La impresión 3D debe estar muy presente visualmente y como capacidad técnica, pero el mensaje principal es:
**resolver problemas técnicos industriales con diseño, ingeniería, fabricación e integración de procesos.**

Evitar copy como:
- "Imprimimos cualquier cosa".
- "Precio por gramo".
- "20 impresoras disponibles" como propuesta central.

Preferir:
- problema → diagnóstico → diseño → fabricación → control → solución.

## 3. No inventar
No crear ni publicar sin aprobación:
- métricas de satisfacción;
- cantidad de proyectos;
- años de experiencia;
- certificaciones;
- tolerancias garantizadas;
- materiales o tecnologías no confirmadas;
- resultados económicos o ahorros;
- testimonios;
- logos de clientes inventados;
- relaciones institucionales no formalizadas.

Clientes autorizados para texto en esta versión:
- Aceros del Oeste SA
- Bodega Los Andes
- Minera Cordillera
- Packing San Rafael

Si no existen logos oficiales, usar nombres tipográficos.

## 4. Contacto
El CTA actual abre correo electrónico mediante `mailto:`.
- No usar formulario salvo instrucción nueva.
- No usar WhatsApp salvo instrucción nueva.
- No mostrar "mensaje enviado" tras un click en mailto.
- El email definitivo permanece como `[EMAIL_DE_CONTACTO]` hasta que sea confirmado.

## 5. Stack
El handoff es **stack-agnostic**.
No migrar automáticamente a React/Next/Astro/Vue sin que el repositorio o el usuario lo definan.

Si el proyecto ya tiene stack:
- seguir su estructura;
- reutilizar componentes existentes;
- respetar lint, formatter y tests.

Si es greenfield y no hay decisión:
- priorizar HTML semántico, CSS mantenible y JS mínimo;
- separar componentes por sección;
- evitar dependencias innecesarias.

## 6. CSS / design tokens
Crear tokens a partir de `brief-design.md`.
Ejemplo:
```css
:root {
  --color-charcoal: #404146;
  --color-black: #000000;
  --color-orange: #FF8134;
  --color-white: #FFFFFF;
  --surface-light: #F5F5F3;
  --surface-dark: #151619;
  --font-display: "Helios Extended", "Arial Narrow", Arial, sans-serif;
  --font-body: "Inter", system-ui, sans-serif;
}
```

## 7. Imágenes
- Mantener PNG fuente en repo de diseño; generar WebP/AVIF para producción.
- Hero: `backgrounds/hero-workshop-cad-transition.png`.
- Cards de servicios: transparentes `service-*`.
- Capacidades: backgrounds `cad-studio`, `fdm-production`, `precision-printing`, `materials-workbench`, `quality-control`.
- CTA: `backgrounds/cta-workshop-dark.png`.
- No estirar imágenes.
- Definir dimensiones y `aspect-ratio`.
- Lazy load debajo del hero.

## 8. Tipografías
- No commitear archivos de fuentes sin verificar licencia.
- Helios Extended requiere el archivo/licencia autorizados.
- Inter se usa para interfaz y cuerpo.
- No distorsionar tipografías con `transform: scaleX()`.

## 9. Accesibilidad
- WCAG AA como objetivo mínimo.
- Focus visible.
- Menú usable por teclado.
- FAQ con `aria-expanded`.
- No depender solo del color para estados.
- `prefers-reduced-motion`.
- Alt text según `assets-manifest.md`.

## 10. SEO y contenido
- Un solo H1.
- H2 por sección.
- El texto visible debe ser HTML real, no estar rasterizado.
- No repetir keywords de forma artificial.
- Title/meta desde `content.md`.

## 11. QA antes de merge
- [ ] Header sticky no tapa anchors.
- [ ] CTA mailto funciona en desktop y mobile.
- [ ] No queda `[EMAIL_DE_CONTACTO]` en producción.
- [ ] Sin overflow horizontal en 320 px.
- [ ] Lighthouse sin imágenes sobredimensionadas.
- [ ] Navegación completa por teclado.
- [ ] Contrastes revisados.
- [ ] Assets optimizados.
- [ ] No hay claims no documentados.
- [ ] Nombres de clientes coinciden con `content.md`.
