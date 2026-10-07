# Arquitectura web — Nóvum Industrial

## 1. Objetivo
Construir una landing B2B de una sola página que convierta necesidades técnicas industriales en consultas por correo.

La página debe explicar, en este orden:
1. qué resuelve Nóvum;
2. qué problemas reconoce;
3. qué soluciones ofrece;
4. qué experiencia/clientes respaldan la propuesta;
5. cómo trabaja;
6. qué capacidades tiene;
7. resolver objeciones frecuentes;
8. cerrar con un CTA por correo.

## 2. Arquitectura de información

### Header
- Logo Nóvum Industrial.
- Navegación por anchors:
  - Inicio → `#inicio`
  - Soluciones → `#soluciones`
  - Experiencia → `#experiencia`
  - Proceso → `#proceso`
  - Capacidades → `#capacidades`
  - Contacto → `#contacto`
- CTA principal: **Escribinos por correo**.
- Header sticky en desktop; puede simplificarse a menú compacto en mobile.

### 01 — Hero (`#inicio`)
Contenido:
- Eyebrow: `IMPRESIÓN 3D PARA LA INDUSTRIA`
- H1: `Soluciones técnicas a medida para la industria.`
- Descripción corta.
- CTA principal mailto.
- CTA secundario a `#soluciones`.
- Visual: impresora 3D + pieza funcional + transición CAD/pieza real.

### 02 — Problemas (`#problemas`)
Seis bloques:
1. El repuesto dejó de fabricarse.
2. Tenés la pieza, pero no los planos.
3. Necesitás adaptar un equipo.
4. Querés probar antes de producir.
5. Necesitás pocas unidades.
6. El proyecto involucra varios proveedores.

Desktop: 6 columnas o grid 3×2 según breakpoint.
Mobile: stack de una columna; evitar carrusel obligatorio.

### 03 — Soluciones (`#soluciones`)
Cinco cards:
- Soluciones industriales a medida.
- Repuestos técnicos bajo demanda.
- Ingeniería inversa.
- Prototipado funcional.
- Pequeñas series.

La primera puede tener mayor jerarquía visual.
Las imágenes deben ser objetos impresos en 3D o escenas directamente relacionadas con fabricación aditiva.

### 04 — Experiencia (`#experiencia`)
Clientes:
- Aceros del Oeste SA.
- Bodega Los Andes.
- Minera Cordillera.
- Packing San Rafael.

Regla: si no hay logotipos oficiales autorizados, mostrar nombres tipográficos. No inventar logotipos.

### 05 — Cómo trabajamos (`#proceso`)
Proceso visible completo:
1. Entendemos la necesidad.
2. Definimos la propuesta.
3. Diseñamos y probamos.
4. Fabricamos y controlamos.
5. Entregamos y acompañamos.

Desktop: secuencia horizontal.
Mobile: secuencia vertical.

### 06 — Capacidades (`#capacidades`)
Cinco capacidades visuales:
- Diseño y optimización CAD.
- Impresión 3D FDM.
- Impresión 3D de alta precisión.
- Materiales técnicos.
- Control dimensional.

Esta sección puede combinar cards de imagen con copy breve.
No afirmar capacidades, materiales o certificaciones que no hayan sido aprobados para publicación.

### 07 — FAQ (`#faq`)
Acordeón accesible con 6–8 preguntas.
- Debe funcionar con teclado.
- El contenido debe existir en HTML, no cargarse solo al abrir.
- Usar `button` + `aria-expanded` + región asociada.

### 08 — CTA final (`#contacto`)
- Título: `¿Qué necesitás resolver en tu empresa?`
- Texto breve.
- CTA: `Escribinos por correo`.
- Nota: se pueden adjuntar fotos, planos o documentación.

### Footer
- Logo.
- Navegación secundaria.
- Email visible cuando esté definido.
- Mendoza, Argentina.
- Redes oficiales cuando estén confirmadas.
- Política de privacidad cuando corresponda.

## 3. CTA por email

Mientras no exista formulario, el CTA debe usar `mailto:`.

Formato sugerido:
```text
mailto:[EMAIL_DE_CONTACTO]?subject=Consulta%20técnica%20desde%20la%20web%20-%20Nóvum%20Industrial&body=Hola%20equipo%20de%20Nóvum%2C%0A%0AQuisiera%20consultar%20por%20una%20necesidad%20técnica.%0A%0AEmpresa%3A%0ANombre%20y%20cargo%3A%0ALocalidad%20%2F%20provincia%3A%0APieza%2C%20equipo%20o%20problema%20a%20resolver%3A%0ACantidad%20aproximada%3A%0APlazo%20deseado%3A%0A
```

No mostrar confirmación de "consulta enviada" porque abrir el cliente de correo no confirma envío.

## 4. Componentes recomendados
- `SiteHeader`
- `Hero`
- `ProblemGrid`
- `SolutionCard`
- `ClientStrip`
- `ProcessSteps`
- `CapabilityCard`
- `FaqAccordion`
- `EmailCta`
- `SiteFooter`

## 5. Responsive
Breakpoints orientativos:
- Mobile: `< 768px`
- Tablet: `768–1099px`
- Desktop: `>= 1100px`

Criterios:
- Priorizar copy antes que imagen en mobile.
- No ocultar contenido esencial detrás de hover.
- Imágenes grandes con `object-fit: cover`; transparentes con `object-fit: contain`.
- Mantener targets táctiles de mínimo 44×44 px.

## 6. Performance
- Servir PNG transparentes como WebP/AVIF cuando el pipeline lo permita, conservando PNG fuente.
- Usar `srcset`/responsive images.
- Lazy-load debajo del hero.
- Preload solo del asset crítico del hero y de la tipografía display si la licencia lo permite.
- Definir `width` y `height` para evitar CLS.

## 7. Accesibilidad
- Contraste AA como mínimo.
- Focus visible.
- Navegación por teclado.
- `prefers-reduced-motion` para animaciones.
- Alt text descriptivo; decorativas con `alt=""`.
- Evitar texto incrustado en imágenes.

## 8. SEO básico
- H1 único en Hero.
- Jerarquía H2 por sección.
- Title y meta description definidos en `content.md`.
- Open Graph usando el mockup/hero adaptado a 1200×630.
- Schema Organization/LocalBusiness solo cuando los datos empresariales definitivos estén confirmados.
