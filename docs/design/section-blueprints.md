# Section Blueprints — HackaToB 2026

19 blueprints para la landing + chrome. Cada uno: función, composición, contenido, interacción, movimiento, aceptación, errores.

Componentes actuales viven en `components/layout/*` y `components/marketing/*` (no renombrar en sistema base).

---

## 1. Announcement Bar

- **Función:** Estado de campaña + CTA corto.
- **Desktop:** Barra full-bleed; badge fase · 1–2 datos · CTA texto.
- **Tablet/Móvil:** Compactar a badge + dato clave + CTA; sin wrap excesivo.
- **Contenido:** Desde `getAnnouncementCopy()` / `INTEREST_OPEN` → “Lista de interés”.
- **Interacción:** Link a `/postular` o ancla.
- **Movimiento:** Ninguno o fade mínimo; no carousel acelerado.
- **Aceptación:** Fase honesta; legible en 390.
- **Evitar:** Tres mensajes largos competiendo con el Hero.

## 2. Header

- **Función:** Orientación + conversión persistente.
- **Desktop:** Logo · nav anclas · CTA primary.
- **Tablet:** Nav reducida o overflow menú.
- **Móvil:** Logo + menú + CTA icon/short.
- **Contenido:** `config/routes.ts`; CTA `getPrimaryCta()`.
- **Interacción:** `aria-current`; menú teclado; links `/#seccion` desde rutas hijas.
- **Movimiento:** Sticky sobrio; sin órbita que robe foco al logo.
- **Aceptación:** CTA siempre alcanzable; contraste AA.
- **Evitar:** Glow excesivo; logo no canónico.

## 3. Hero

- **Función:** Claridad en &lt;20s + conversión.
- **Desktop:** Editorial asimétrico — texto izq / Spark der; placa fecha+sede; sin dashboard.
- **Tablet:** Misma jerarquía, Spark menor.
- **Móvil:** Stack; H1 wrap sin clip; CTA stack; métricas debajo.
- **Contenido INTEREST_OPEN:** H1 confirmado **“Cuatro días. Cuatro áreas.”** + línea Spark “Una oportunidad para construir.”; subtítulo con 80 / retos / mentoría / Demo Day. CTA “Dejar interés”.
- **Interacción:** Primary + secondary “Explorar retos”.
- **Movimiento:** Text reveal + Spark idle; ambiental ≤3.
- **Aceptación:** Qué/cuándo/dónde/cupos/siguiente paso; sin overflow 390.
- **Evitar:** Countdown duplicado; métricas saturando primer viewport.

## 4. Confianza (Trust)

- **Función:** Respaldo ToB → TEC → HackaToB → Demo Day.
- **Desktop:** Línea / rail institucional conectado; logos con jerarquía.
- **Tablet/Móvil:** Rail vertical o pasos numerados.
- **Contenido:** Solo instituciones confirmadas; sin sponsors draft.
- **Interacción:** Links a tobcr.com / TEC si aplica.
- **Movimiento:** Draw-line sutil en rail.
- **Aceptación:** No se lee como “logo cloud” SaaS.
- **Evitar:** 3 cards glass + Lucide idénticos.

## 5. Evento (WhatIs)

- **Función:** Qué es + recorrido del programa.
- **Desktop:** Narrativa + nodos del proceso (aprender→…→conectar) en rail.
- **Tablet/Móvil:** Timeline vertical.
- **Contenido:** Definición oficial; 6 pasos desde `processSteps`.
- **Interacción:** Anclas suaves a tracks/participar.
- **Movimiento:** Nodos al scroll.
- **Aceptación:** Proceso entendible sin seis cards iguales.
- **Evitar:** Feature grid genérico.

## 6. Audiencia

- **Función:** Quién puede participar.
- **Desktop:** Tres familias en bloque editorial / diagrama de equipo (no chips sueltos masivos).
- **Móvil:** Stack de familias.
- **Contenido:** `audienceFamilies` (tech / producto / negocio).
- **Interacción:** CTA secundario a postular.
- **Movimiento:** Reveal staggered leve.
- **Aceptación:** Inclusión clara (no solo “devs”).
- **Evitar:** Tag cloud decorativa.

## 7. Tracks

- **Función:** Cuatro áreas de competencia.
- **Desktop:** Tablero 2×2 o cuadrantes conectados; textura por track; códigos HT/GT/FT/TNBT.
- **Móvil:** Stack con rail lateral de códigos.
- **Contenido:** `tracks` + descriptions oficiales.
- **Interacción:** Focus/tap revela detalle (no solo hover).
- **Movimiento:** Conexiones suaves; sin dim agresivo hover-only.
- **Aceptación:** Cada track distinguible sin leer párrafos largos.
- **Evitar:** Cuatro cards glow + Lucide clonados.

## 8. Retos (Challenges)

- **Función:** Motor de decisión / anticipación de briefs.
- **Desktop:** Dossiers / briefs con código + estado; no blog cards.
- **Móvil:** Lista de briefs.
- **Contenido:** Previews honestos o “retos oficiales próximamente” si no published.
- **Interacción:** Filtrar por track (si hay datos); proponer reto mailto.
- **Movimiento:** Borde/estado por track.
- **Aceptación:** Cero retos inventados como oficiales.
- **Evitar:** Cuatro cards preview idénticas tipo blog.

## 9. Modalidades

- **Función:** Escalera Ideación → Prototipado → MVP.
- **Desktop:** Escalera / madurez vertical u horizontal con entregables.
- **Móvil:** Escalera vertical.
- **Contenido:** `modalities` + deliverables.
- **Interacción:** Expandir entregables.
- **Movimiento:** Progresión de peldaños.
- **Aceptación:** Queda claro que más código ≠ mejor nota automática.
- **Evitar:** Pricing cards.

## 10. Programa (Agenda)

- **Función:** Cuatro días + resultado por día.
- **Desktop:** Nav por día sticky + detalle (foco/resultado); un countdown del sitio.
- **Móvil:** Días en tabs/accordion.
- **Contenido:** `agenda` / `agendaDays`; Demo Day Centro de las Artes.
- **Interacción:** Selección de día; `aria-live` en countdown.
- **Movimiento:** Rail de progreso 20→100.
- **Aceptación:** Un solo countdown global.
- **Evitar:** Cuatro glass cards idénticas + look dashboard.

## 11. Participar (Apply)

- **Función:** Funnel hacia interés/postulación.
- **Desktop:** Pasos + requisitos + CTA dominante fase-aware.
- **Móvil:** CTA arriba/abajo; pasos compactos.
- **Contenido:** `applicationSteps`, `requirements`; INTEREST_OPEN honesto.
- **Interacción:** Link `/postular`.
- **Movimiento:** Progreso de pasos.
- **Aceptación:** “Enviar datos no garantiza cupo”.
- **Evitar:** Prometer cuenta/portal inexistente.

## 12. Evaluación

- **Función:** Transparencia de rúbrica y jurado.
- **Desktop:** Matriz / barras editoriales; perfiles de juez como roles (no avatares fake).
- **Móvil:** Lista de criterios %.
- **Contenido:** `rubric`, `judgeProfiles` — marcar si % están “confirmed” o “provisional”.
- **Interacción:** Ninguna crítica o expand.
- **Movimiento:** Barras al enter; sin confeti.
- **Aceptación:** Sobrio, legible, sin gamificación.
- **Evitar:** Confeti / trophy spam.

## 13. Comunidad

- **Función:** Acompañamiento (mentores/workshops) sin inventar roster.
- **Desktop:** Editorial + metas claramente etiquetadas (“Meta”, no hecho).
- **Móvil:** Stack.
- **Contenido:** `communityTargets` solo como meta si `!mentorsConfirmed`.
- **Interacción:** Mailto “quiero ser mentor”.
- **Movimiento:** Mínimo.
- **Aceptación:** Cero pravatar / nombres fake.
- **Evitar:** Presentar 16/14/5 como confirmados.

## 14. Premios

- **Función:** Reconocimiento Top 3 + continuidad (sin $ inventados).
- **Desktop:** Resultado + continuidad en fichas desiguales / podium editorial.
- **Móvil:** Lista 01–03 + tech.
- **Contenido:** `prizes` — sin montos hasta published.
- **Interacción:** CTA aliados/continuar si aplica.
- **Movimiento:** Leve.
- **Aceptación:** No parece tienda de trofeos Lucide.
- **Evitar:** Cuatro Trophy cards `card-gradient` idénticas.

## 15. Aliados

- **Función:** Ecosistema por categoría.
- **Desktop:** Jerarquía por tipo; logos solo `published`.
- **Móvil:** Lista por categoría.
- **Contenido:** Categorías siempre; logos gated.
- **Interacción:** Link externo con `rel` seguro.
- **Movimiento:** Sin marquee acelerado.
- **Aceptación:** Fallback “conformando ecosistema…” si vacío.
- **Evitar:** Publicar drafts al flip de un boolean.

## 16. Trayectoria (ToBHistory)

- **Función:** Memoria ToB / contexto cultural TEC.
- **Desktop:** Foto documental grande + caption; no “ediciones HackaToB” inventadas.
- **Móvil:** Imagen full-bleed + texto bajo.
- **Contenido:** `gallery` con alts reales.
- **Interacción:** Ninguna o lightbox futuro.
- **Movimiento:** Reveal foto.
- **Aceptación:** Capciones específicas; assets existentes.
- **Evitar:** Mosaico stock genérico.

## 17. FAQ

- **Función:** Objeciones y logística.
- **Desktop:** Acordeón por categorías mentales (cupos, tracks, IA…).
- **Móvil:** Acordeón full width.
- **Contenido:** `faq` alineado a fase INTEREST_OPEN.
- **Interacción:** `aria-expanded` / `aria-controls`.
- **Movimiento:** Height suave o ninguno.
- **Aceptación:** Respuestas verificables; contacto real.
- **Evitar:** Glass card decorativa sin a11y.

## 18. CTA final

- **Función:** Conversión de cierre.
- **Desktop:** Una acción dominante; señales convergentes; Spark permitido.
- **Móvil:** CTA full width.
- **Contenido:** Misma fase que Hero; recordatorio fechas/sede.
- **Interacción:** Primary CTA.
- **Movimiento:** Spark point; sin segunda aurora igual al Hero.
- **Aceptación:** Un solo mensaje de acción.
- **Evitar:** Clonar Hero completo.

## 19. Footer

- **Función:** Legal, contacto, marca, ToB.
- **Desktop:** Columnas (nav, legal, contacto, logos).
- **Móvil:** Stack.
- **Contenido:** `legalPages`, emails; sociales solo si URL real.
- **Interacción:** Links `/legal/*`, mailto, tobcr.com.
- **Movimiento:** Ninguno.
- **Aceptación:** Legales alcanzables; SVG canónico.
- **Evitar:** Strip de logos draft; WhatsApp placeholder.
