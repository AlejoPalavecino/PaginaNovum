# Arquitectura web — Nóvum Industrial (Versión B2B)

## 1. Objetivo
Construir una landing B2B de una sola página orientada a convertir necesidades técnicas industriales en consultas por correo electrónico (`mailto:`).
El posicionamiento es **"Soluciones industriales a medida"**: análisis de problemas técnicos y desarrollo de soluciones para empresas, fábricas y talleres, buscando relaciones de socio técnico recurrente.

Lógica de comunicación:
**Problema → análisis → solución → implementación → resultado.**

Recorrido ordenado:
1. **Inicio** (`#inicio`): Propuesta de valor B2B y diagnóstico de necesidades.
2. **Problemas** (`#problemas`): 6 dolores operativos comunes de la industria.
3. **Soluciones** (`#soluciones`): 8 líneas con jerarquía clara (Partner Industrial, 4 complementarias, 3 de desarrollo y producción).
4. **Sectores** (`#sectores`, con ancla `#experiencia`): Sectores objetivo con desafíos técnicos reales.
5. **Proceso** (`#proceso`): 5 etapas del problema a la solución funcional.
6. **Capacidades** (`#capacidades`): Las herramientas al servicio de la solución (CAD, relevamiento, fabricación aditiva, prototipado, organización digital).
7. **Preguntas frecuentes** (`#faq`): 7 respuestas claras sobre información requerida, tiempos, viabilidad y alcances.
8. **Contacto** (`#contacto`): Consulta técnica por correo con selección de servicio, guía editable y aviso de revisión si no hay correo confirmado.
9. **Footer**: Marca, navegación actualizada y cierre institucional.

---

## 2. Arquitectura de información

### Header (`#site-header`)
- Logo Nóvum Industrial sobre fondo claro.
- Navegación por anchors:
  - Inicio → `#inicio`
  - Soluciones → `#soluciones`
  - Sectores → `#sectores`
  - Proceso → `#proceso`
  - Capacidades → `#capacidades`
  - Contacto → `#contacto`
- CTA principal: **Escribinos por correo** (asociado a consulta general en `#contacto`).
- Sticky en desktop con elevación sutil; drawer accesible en mobile con control de foco y tecla Escape.

### 01 — Hero (`#inicio`)
- Eyebrow: `INGENIERÍA, DISEÑO Y FABRICACIÓN · B2B`
- H1 único: `SOLUCIONES INDUSTRIALES A MEDIDA.`
- Descripción: `¿Un repuesto que no conseguís? ¿Una máquina que necesita una adaptación? Analizamos el problema, diseñamos la solución y la fabricamos para tu empresa.`
- CTA principal a `#contacto` (`data-consulta="Consulta general"`).
- CTA secundario a `#soluciones`.
- 3 indicadores clave: Diagnóstico técnico, Diseño e ingeniería, Fabricación funcional.

### 02 — Problemas (`#problemas`)
- 6 problemas técnicos conectados en diagrama interactivo accesible:
  1. Falta de repuestos
  2. Piezas discontinuadas
  3. Esperas que frenan
  4. Repuestos sin organizar
  5. Equipos que adaptar
  6. Desarrollos por validar
- Mobile: tarjetas legibles sin depender de hover ni animaciones.

### 03 — Soluciones (`#soluciones`)
Estructura jerárquica:
- **Tarjeta principal destacada:** Partner Industrial (relación técnica de largo plazo).
- **4 soluciones complementarias:** Repuesto Express, Ingeniería Inversa, Inventario Digital, Solución Industrial.
- **Fila de desarrollo y producción:** Prototipado, Producción seriada, Productos propios.
- Todos los CTA sincronizan el nombre exacto de la solución hacia `#contacto`.
- Nota técnica: alcance, materiales y plazos se definen para cada caso. Alternativa: "Orientame sobre mi necesidad".

### 04 — Sectores (`#sectores`)
- Reemplaza la franja de clientes previa por sectores industriales objetivo.
- Ancla auxiliar `#experiencia` para garantizar compatibilidad con enlaces históricos.
- 6 sectores: Industria manufacturera, Talleres y mantenimiento, Ingeniería y automatización, Maquinaria y equipamiento, Agroindustria, Laboratorios.
- Texto complementario y CTA general a `#contacto`.

### 05 — Proceso (`#proceso`)
- 5 pasos sincronizados:
  1. Problema
  2. Análisis
  3. Solución
  4. Implementación
  5. Resultado

### 06 — Capacidades (`#capacidades`)
- 5 capacidades técnicas en bento grid:
  1. Ingeniería y diseño
  2. Relevamiento y digitalización
  3. Fabricación de soluciones
  4. Prototipado funcional
  5. Organización digital
- Nota: imágenes como referencia visual; condiciones se evalúan por proyecto.

### 07 — Preguntas frecuentes (`#faq`)
- Acordeón accesible por teclado (WAI-ARIA APG).
- 7 preguntas y respuestas en HTML directo.

### 08 — Contacto (`#contacto`)
- Centralizado en `src/config/contact.js`.
- Indicador dinámico de servicio seleccionado: "Tu consulta: [Servicio]".
- Botón para preparar consulta por correo (`mailto:` generado solo con correo confirmado).
- Botón para copiar guía de consulta preformateada al portapapeles, con fallback visible si el API falla.
- Aviso visible en modo revisión: "Versión para revisión: falta confirmar el correo de contacto antes de publicar".
- Aclaración: el correo se abre y envía desde la aplicación del usuario.

### Footer
- Logo Nóvum Industrial.
- Navegación: Inicio, Soluciones, Sectores, Proceso, Capacidades, Contacto.
- Tagline de cierre: "Tu próximo desafío. Una solución a medida."
- Eliminación de teléfonos ficticios, correos de muestra y enlaces externos no autorizados.

---

## 3. Control previo a publicación
- Script `npm run check:release` (`scripts/check-release.js`).
- Falla y detiene el build si `CONTACT_CONFIG.email` contiene marcadores como `[EMAIL_DE_CONTACTO]` o formato inválido.
