# AGENTS — Reglas de Desarrollo B2B para Nóvum Industrial

Guía de contexto para asistentes y coding agents que implementen o modifiquen la web.

## 1. Prioridades y Fuentes de Verdad
1. `content.md`: Fuente de verdad editorial (textos, títulos, servicios, preguntas).
2. `brief-design.md`: Sistema visual, paleta, contrastes y tipografías autorizadas.
3. `arquitecture.md`: Arquitectura B2B, orden de secciones e interactividad.
4. `assets-manifest.md`: Catálogo oficial de imágenes y assets.
5. `src/config/contact.js`: Configuración centralizada de contacto y servicios autorizados.

## 2. Posicionamiento Estratégico B2B
El posicionamiento es **"Soluciones industriales a medida"**.
Nóvum no es una tienda de impresión 3D, catálogo de piezas ni servicio por gramo.
Comunica: análisis de problemas técnicos y desarrollo de soluciones para empresas, fábricas y talleres, buscando relaciones de socio técnico recurrente.

Lógica de comunicación:
**Problema → análisis → solución → implementación → resultado.**

La ingeniería, el diseño CAD y la fabricación aditiva son herramientas que respaldan la propuesta, nunca el mensaje principal.

## 3. Lo que NO se debe inventar
No crear ni publicar sin aprobación comercial explícita:
- Métricas o porcentajes de satisfacción.
- Cantidad de proyectos o años de experiencia.
- Certificaciones o habilitaciones técnicas.
- Tolerancias garantizadas o propiedades de materiales no confirmadas.
- Resultados económicos o ahorros monetarios.
- Testimonios o declaraciones de clientes.
- Logos de clientes inventados o enlaces a redes genéricas.
- Precios, planes fijos, contratos o tiempos garantizados para Partner Industrial.
- Presentar Inventario Digital como software, portal web o stock físico existente.
- Presentar Productos Propios como catálogo con stock físico inmediato.

## 4. Contacto y Consulta Técnica
- Centralizado en `src/config/contact.js`.
- No usar formulario backend, WhatsApp, bases de datos ni servicios externos.
- Sin correo confirmado, no generar mailto ficticio; mostrar aviso visible de revisión:
  `Versión para revisión: falta confirmar el correo de contacto antes de publicar`.
- La guía de consulta editable debe poder visualizarse y copiarse siempre.
- Incluir botón "Copiar guía de consulta" con fallback seleccionable si falla el portapapeles.
- Cada CTA de solución preselecciona el servicio en `#contacto` mediante `data-consulta`.

## 5. Recorrido de Secciones y Navegación
Orden estricto:
Inicio (`#inicio`) → Problemas (`#problemas`) → Soluciones (`#soluciones`) → Sectores (`#sectores`, con compatibilidad `#experiencia`) → Proceso (`#proceso`) → Capacidades (`#capacidades`) → Preguntas frecuentes (`#faq`) → Contacto (`#contacto`) → Footer.

Navegación principal: Inicio, Soluciones, Sectores, Proceso, Capacidades, Contacto.

## 6. Control Previo a Publicación (Release Check)
- Ejecutar `npm run check:release` antes de publicar.
- Debe fallar con código 1 si el correo no está confirmado o si existen marcadores como `[EMAIL_DE_CONTACTO]`.

## 7. QA y Accesibilidad
- Un solo `<h1>` en toda la página.
- Enfoque WCAG AA: contraste verificado, foco visible, navegación completa por teclado.
- Menú móvil accesible con control de scroll y cierre con Escape (devolviendo el foco al disparador).
- Soporte para `prefers-reduced-motion` en animaciones.
- Cero scroll horizontal en resoluciones desde 320 px hasta 1440 px+.
