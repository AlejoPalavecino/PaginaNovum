# ODD Feature: Landing Web Nóvum Industrial (`landing-novum`)

## Objetivo
Implementar la landing page one-page B2B de Nóvum Industrial orientada a convertir necesidades técnicas industriales en consultas por correo electrónico (`mailto:`), respetando estrictamente el paquete de handoff editorial, visual y técnico.

## Por qué
Nóvum Industrial requiere una presencia digital que comunique su propuesta de valor: resolución de problemas técnicos industriales mediante diseño, ingeniería inversa, fabricación aditiva y control de calidad, diferenciándose de un servicio genérico de impresión 3D por catálogo o por gramo.

## Alcance y Restricciones
- **Fuente de verdad editorial:** `content.md` (no alterar copys, títulos ni servicios).
- **Fuente de verdad visual:** `brief-design.md` (paleta `#FF8134`, `#000000`, `#404146`, `#FFFFFF`, neutros UI y tipografías Helios Extended / Inter).
- **Fuente de verdad técnica:** `arquitecture.md` y `AGENTS.md`.
- **Assets:** Usar exclusivamente los provistos en `assets/` según `assets-manifest.md`.
- **Restricciones críticas:**
  - Sin métricas de satisfacción, clientes falsos, logos no autorizados ni testimonios inventados.
  - Clientes autorizados sólo como nombres tipográficos: Aceros del Oeste SA, Bodega Los Andes, Minera Cordillera, Packing San Rafael.
  - CTA principal mailto con plantilla preformateada. Email visible parametrizado como `[EMAIL_DE_CONTACTO]` hasta definición final.
  - Accesibilidad WCAG AA, focus visible, navegación por teclado, `prefers-reduced-motion` y responsive garantizado desde 320 px sin scroll horizontal.

## Estrategia de Entrega
- Estrategia: `single-pr` (desarrollo local por work units).
- Pronóstico inicial: ~600-900 líneas de código (HTML semántico + CSS modular + JS nativo).

---

## Plan de Fases y Checklist de Tareas

### Fase 1: Cimientos y Design System (Setup & Tokens)
- [x] `TASK-1.1`: Inicializar proyecto con Vite (npm/Node), estructura modular y scripts de desarrollo/build. *(Ruta: Delegated)*
- [x] `TASK-1.2`: Crear sistema de tokens CSS (`src/styles/tokens.css`) con paleta de marca, superficies UI, escalas fluidas (`clamp`), espaciados y radio de bordes. *(Ruta: Delegated)*
- [x] `TASK-1.3`: Crear reset moderno y reglas base (`src/styles/reset.css`, `src/styles/base.css`) con focus visible y soporte para `prefers-reduced-motion`. *(Ruta: Delegated)*
- [x] `TASK-1.4`: Configurar carga optimizada de Inter y stack de fallback técnico para Helios Extended sin distorsión artificial. *(Ruta: Delegated)*
- [x] `TASK-1.5`: Verificar build limpio y validar render inicial en `index.html`. *(Ruta: Delegated)*

### Fase 2: Esqueleto semántico y Layout global
- [x] `TASK-2.1`: Crear estructura HTML5 semántica completa de la landing con todos los IDs de anclaje según `arquitecture.md`. *(Ruta: Delegated)*
- [x] `TASK-2.2`: Implementar `SiteHeader` sticky con logo negro (`assets/logo/logo-black-transparent.png`), menú de anclas y botón CTA. *(Ruta: Delegated)*
- [x] `TASK-2.3`: Configurar `scroll-margin-top` en todas las secciones para navegación suave sin solapamiento del header. *(Ruta: Delegated)*
- [x] `TASK-2.4`: Implementar `SiteFooter` con logo blanco (`assets/logo/logo-white-transparent.png`), datos institucionales y navegación secundaria. *(Ruta: Delegated)*
- [x] `TASK-2.5`: Validar layout de contenedores de ancho máximo (`1280px`) y grilla base. *(Ruta: Delegated)*

### Fase 3: Secciones de contenido e integración de assets
- [x] `TASK-3.1`: Implementar sección `Hero` (`#inicio`) con focal point derecho (`hero-workshop-cad-transition.png`) y jerarquía de CTAs. *(Ruta: Delegated)*
- [x] `TASK-3.2`: Implementar sección `Problemas` (`#problemas`) con grilla 3x2 / stack responsive de los 6 dolores técnicos. *(Ruta: Delegated)*
- [x] `TASK-3.3`: Implementar sección `Soluciones` (`#soluciones`) con las 5 tarjetas de servicio transparentes y card destacada. *(Ruta: Delegated)*
- [x] `TASK-3.4`: Implementar sección `Experiencia` (`#experiencia`) con los 4 clientes autorizados resueltos tipográficamente. *(Ruta: Delegated)*
- [x] `TASK-3.5`: Implementar sección `Proceso` (`#proceso`) con fondo grafito/oscuro y 5 pasos conectados. *(Ruta: Delegated)*
- [x] `TASK-3.6`: Implementar sección `Capacidades` (`#capacidades`) con las 5 tarjetas con fotografías ambientales. *(Ruta: Delegated)*
- [x] `TASK-3.7`: Implementar sección `CTA Final` (`#contacto`) con fondo `cta-workshop-dark.png` y enlace mailto preconfigurado. *(Ruta: Delegated)*

### Fase 4: Interactividad y accesibilidad (JS nativo)
- [x] `TASK-4.1`: Implementar acordeón de `FAQ` (`#faq`) accesible (`aria-expanded`, navegación por teclado, toggle nativo). *(Ruta: Delegated)*
- [x] `TASK-4.2`: Implementar navegación responsive para móviles con toggle accesible y control de scroll. *(Ruta: Delegated)*
- [x] `TASK-4.3`: Implementar helper de enlace mailto con codificación de parámetros URL. *(Ruta: Delegated)*

### Fase 5: QA, performance y checklist de entrega
- [x] `TASK-5.1`: Auditoría de layout responsive en 320 px, 768 px y 1100 px+ (cero overflow horizontal). *(Ruta: Delegated)*
- [x] `TASK-5.2`: Verificación de contrastes WCAG AA en modo oscuro y claro. *(Ruta: Delegated)*
- [x] `TASK-5.3`: Auditoría de performance de assets (dimensiones explícitas `width`/`height`, lazy-loading). *(Ruta: Delegated)*
- [x] `TASK-5.4`: Verificación del checklist de QA de `AGENTS.md`. *(Ruta: Delegated)*

---

## Progreso y Próximo Paso
- **Estado actual:** Fases 1, 2, 3, 4 y 5 completadas al 100%. Checklist de entrega verificado.
- **Ruta declarada:** Direct execution / Delegated worker.
- **Nivel de riesgo:** Mínimo / Producción lista (bundle Vite compilado con éxito, cero horizontal overflow en 320px, contrastes WCAG AA verificados, fidelidad editorial estricta con content.md).
- **Próximo paso:** Entrega final al usuario y revisión de handoff.
