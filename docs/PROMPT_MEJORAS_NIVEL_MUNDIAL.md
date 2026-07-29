# Prompt maestro — mejoras nivel mundial HackaToB 2026

**Uso:** copia **todo el bloque** entre las líneas `<<<PROMPT_INICIO>>>` y `<<<PROMPT_FIN>>>`, pégalo en un chat nuevo en **Agent mode**, y envíalo. No edites este archivo a menos que actualices la especificación.

**Alcance de esta pasada:** P0 + P1 clave.  
**Fuera de alcance ahora:** P2 (portal, auth, en vivo, proyectos, admin, CMS, i18n EN, E2E) — solo documentado al final del prompt.

---

<<<PROMPT_INICIO>>>

# IMPLEMENTAR: HackaToB 2026 — mejoras nivel mundial (P0 + P1)

## Rol
Eres el agente de implementación en el repo `HackaToB_v01` (Next.js 15 App Router + Tailwind v4 + Motion). Ejecuta **toda** esta especificación en una sola pasada. No preguntes por alternativas: las decisiones ya están fijadas abajo. No edites archivos de plan en `.cursor/plans/`. No hagas commit a menos que el usuario lo pida explícitamente.

## Contexto del proyecto
- Landing Fase 1 ya existe (Sitemap V3): home con 16 secciones + `/postular` + `/contacto` + `/legal/*`.
- Stack: Next 15, React 19, Tailwind 4, Motion, lucide-react.
- Colores oficiales: azul `#3d7cff`, celeste `#5ce1ff`, amarillo `#ffe14a`, morado `#8b5cf6`.
- Marca: logo HackaToB + Spark + Powered by ToB.

## Datos oficiales CONGELADOS (no contradecir)
- Fechas: 17–20 agosto 2026 · TEC Cartago · Demo Day Centro de las Artes
- Hasta **80** participantes · **15–20** equipos · máx. **4**
- Tracks: **HealthTrack · GreenTrack · FinTrack · The Next Big Thing**
- Modalidades: **Ideación · Prototipado · MVP funcional**
- Prohibido: 60 cupos, MediTrack, solo 3 tracks, solo 2 modalidades
- Prohibido publicar mentores/sponsors/premios $ / retos inventados como confirmados

## Decisiones fijadas (no negociar en esta pasada)
1. **Postulación:** waitlist / registro de interés en `/postular` (formulario ligero). Formulario completo + Supabase = Fase 2 (solo documentar al final).
2. **Copy de fase:** tono HONESTO — no decir “postulación abierta” ni “crear cuenta” si no existen. Usar: “Lista de interés”, “Recibir novedades”, “Formulario oficial próximamente”.
3. **Social:** ocultar WhatsApp / Instagram / LinkedIn si son placeholders. Solo mostrar correos verificados + canales con URL real (sin `XXXXXXXX`, sin `/company/tob` genérico a menos que `socialVerified=true`).
4. **Analytics:** integrar `@vercel/analytics` si es trivial; además dejar en `site.ts` un bloque `analytics` configurable (Plausible/GA id vacío = no inyectar script).
5. **Assets:** cero 404. Si falta PNG, apuntar a SVG existente (`hackatob-logo.svg`, `spark.svg`) o crear OG SVG/JPG mínimo 1200×630. Favicon + apple-icon en `app/`.
6. **Stats comunidad:** no mostrar “16 / 14 / 5” como hechos si `mentorsConfirmed === false`. Mostrar “En formación” o metas con label claro.
7. **Links internos:** desde cualquier ruta usar `/#seccion` (no `#seccion` solo) en Header/Footer cuando el href sea ancla de la home.
8. **Skip link:** apuntar a `#contenido` (el `<main>`).

## Orden de trabajo
Marca todos los TODOs en progreso y completa en este orden: P0 → P1 → build → checklist de aceptación.

---

# P0 — Bloqueantes (implementar TODO)

## P0.1 Config central — `lib/content/site.ts`
Añadir / ajustar:

```ts
export const campaignPhase =
  "INTEREST_OPEN" as const; // INTEREST_OPEN | APPLICATIONS_OPEN | SELECTION | EVENT_ACTIVE | DEMO_DAY | POST_EVENT

export const social = {
  emailMain: "tob@itcr.ac.cr",
  emailInnovation: "derojas@estudiantec.cr",
  whatsapp: "", // vacío = oculto
  instagram: "", // vacío = oculto
  linkedin: "", // vacío = oculto
};

export const analytics = {
  vercelAnalytics: true,
  plausibleDomain: "", // ej. "hackatob.cr" — vacío = no cargar
  gaMeasurementId: "", // vacío = no cargar
};

export const mentorsConfirmed = false;
export const sponsorsConfirmed = false;
```

- Mantener `applyUrl: "/postular"`.
- Ajustar textos de `applicationSteps` para no prometer “Crear una cuenta” en esta fase. Ejemplo: “Dejar tus datos de interés”, “Esperar apertura del formulario oficial”, etc.
- Actualizar FAQ de contacto si menciona WhatsApp placeholder.

## P0.2 Copy phase-honest
Archivos:
- `components/layout/AnnouncementBar.tsx`
- `components/marketing/Apply.tsx`
- `app/postular/page.tsx`
- `components/marketing/Hero.tsx` (si dice postulaciones abiertas)
- `components/layout/MobileCTA.tsx` — CTA puede decir “Dejar interés” o “Postularme” → `/postular` (la página explica honestamente)

Copy objetivo cuando `campaignPhase === "INTEREST_OPEN"`:
- Barra: “Lista de interés abierta · 17–20 ago 2026 · Hasta 80 cupos”
- CTA: “Dejar interés →” / “Registrarme”
- Apply eyebrow: “Próxima convocatoria” o “Lista de interés”
- Nunca: “Postulación abierta” / “Iniciar solicitud” como si hubiera form oficial live
- Siempre: “Enviar datos no garantiza un cupo”

Cuando más adelante `APPLICATIONS_OPEN`, el copy puede volver a “Postularme” — deja un helper `getPrimaryCta()` en `site.ts` o `lib/campaign.ts` que lea `campaignPhase`.

## P0.3 ContactLinks — gates
Archivo: `components/shared/ContactLinks.tsx`
- Mostrar siempre correos `emailMain` y `emailInnovation`.
- Mostrar WhatsApp/IG/LinkedIn **solo** si el string no está vacío y no contiene `XXXX`.
- No renderizar botones rotos.

## P0.4 Community stats
Archivo: `components/marketing/Community.tsx`
- Si `!mentorsConfirmed`: no presentar 16/14/5 como confirmados. Usar copy “Meta de acompañamiento” o solo el bloque “Próximamente conocerás…”.
- Mantener CTA “Quiero ser mentor” por mailto.

## P0.5 Assets, OG, favicon (cero 404)
- Auditar rutas: `/brand/hackatob-logo.png`, `/brand/spark.png`, `/gallery/*`, OG en `app/layout.tsx`.
- Si PNG no existe: cambiar `Logo.tsx`, `SparkMascot.tsx`, `Footer.tsx` a SVG existentes **o** copiar/generar PNG.
- Crear `app/icon.svg` (o icon.png) y `app/apple-icon.png` si faltan.
- OG: imagen 1200×630 en `public/brand/og-hackatob-2026.jpg` o `.svg` + metadata `openGraph.images` y `twitter` cards en `app/layout.tsx`.
- Verificar `metadataBase` = `https://hackatob.cr`.

## P0.6 Waitlist en `/postular`
Archivo principal: `app/postular/page.tsx` (+ componentes client si hace falta).

Formulario ligero (UI premium, paleta oficial):
- Campos: nombre completo, email, track de interés (select 4 tracks + “Aún no sé”), perfil (select corto: Tecnología / Producto / Negocio / Otro), mensaje opcional, checkbox consentimiento (privacidad `/legal/privacidad`).
- Submit: **Server Action** que:
  1. Valida con Zod (añadir dependencia `zod` si no está).
  2. En esta fase: guarda en log server **o** redirige a `mailto:` prellenado **y** muestra pantalla de éxito en la misma página (“Recibimos tu interés”). Preferencia: éxito in-page + opcional `mailto:` fallback link.
  3. No inventar backend Supabase todavía.
- Estados UI: idle / submitting / success / error.
- Accesible: labels, `aria-invalid`, focus visible.
- Mantener pasos informativos y `ContactLinks` debajo.

## P0.7 Analytics
- Instalar e integrar `@vercel/analytics` en `app/layout.tsx` si `analytics.vercelAnalytics`.
- Si `plausibleDomain` o `gaMeasurementId` no vacíos, inyectar script; si vacíos, no inyectar.
- No inventar IDs falsos.

---

# P1 — Competir a nivel 2026 (implementar TODO)

## P1.1 SEO técnico
- Crear `app/sitemap.ts` con rutas reales: `/`, `/postular`, `/contacto`, `/legal`, y cada `/legal/[slug]`. **No** incluir anclas `#`.
- Crear `app/robots.ts` permitiendo `/` y apuntando al sitemap `https://hackatob.cr/sitemap.xml`.
- Enriquecer JSON-LD Event en `layout.tsx`: `image`, `url` de postular, `organizer`, fechas ISO.

## P1.2 Links hash robustos
- `Header.tsx`, `Footer.tsx`, `AnnouncementBar` (si aplica): anclas de home como `/#evento`, `/#tracks`, etc.
- CTA internos en marketing pueden seguir `#tracks` solo en la home; desde páginas hijas usar `/#...`.

## P1.3 Error boundaries
- `app/not-found.tsx` — branded, CTA a `/` y `/postular`
- `app/error.tsx` — client component con reset
- `app/loading.tsx` — skeleton sobrio (sin spinner genérico feo)

## P1.4 Hero más limpio
Archivo: `components/marketing/Hero.tsx`
- Primer viewport: brand line + headline + 1 frase + CTA group + Spark.
- Métricas: debajo del fold inmediato (strip ya existente OK) — no saturar con countdown duplicado.
- Un solo countdown del sitio: el de Agenda (ya existe). No reintroducir countdown en Hero.
- Marquee: solo datos confirmados (tracks/modalidades/Demo Day) — OK.

## P1.5 Legal mínimo usable
En stubs críticos `privacidad`, `terminos`, `codigo-de-conducta` (`app/legal/[slug]/page.tsx`):
- Sustituir “en preparación” vacío por **texto base provisional** claro (2–4 párrafos) + aviso “Versión provisional — documento oficial antes del evento”.
- Otros stubs pueden quedar cortos pero enlazados.
- Footer ya debe apuntar a estas rutas.

## P1.6 A11y
- Skip link → `#contenido`
- Countdown en Agenda: región `aria-live="polite"` con texto accesible (“Faltan X días…”)
- FAQ: mantener `aria-expanded` / `aria-controls`
- `prefers-reduced-motion` respetado (Motion + CSS)

## P1.7 Limpieza menor
- Eliminar o no montar código muerto confuso (`Gallery.tsx` si está duplicado por `ToBHistory` — preferir un solo componente; borrar el no usado o reexportar).
- Quitar allowlist de `i.pravatar.cc` en `next.config.ts` si ya no se usan avatares remotos en UI publicada.
- Asegurar que `mentors` fake no se rendericen con `mentorsConfirmed=false` (ya debería estar).

---

# Criterios de aceptación (obligatorio al final)
1. `npm run build` exitoso.
2. Cero botones sociales con URL placeholder visibles.
3. Ningún copy “postulación abierta / crear cuenta” engañoso en fase `INTEREST_OPEN`.
4. `/postular` tiene formulario de interés usable + estado de éxito.
5. `/sitemap.xml` y `/robots.txt` responden en build.
6. OG/favicon no 404.
7. Anclas desde `/contacto` llegan a home sections vía `/#...`.
8. No commits a menos que el usuario lo pida.
9. Actualiza `sitemap.txt` humano si cambian rutas/fases.

## Verificación manual sugerida
- Home, `/postular` (submit success), `/contacto`, `/legal/privacidad`
- Mobile CTA
- Reduced motion (si puedes simular)

---

# P2 — NO IMPLEMENTAR AHORA (solo roadmap en README o comentario final en tu respuesta)

Documenta brevemente al usuario (no construyas):
1. Formulario oficial multi-paso + Supabase Auth/DB + Turnstile + Resend
2. Portal participante (cupo, equipo, agenda, entregables)
3. Demo Day `/en-vivo` + votación
4. Galería `/proyectos`
5. Admin selección/contenido/evaluación
6. CMS (retos/mentores/agenda sin deploy)
7. i18n ES/EN
8. Playwright E2E + security headers CSP
9. CTAs 100% phase-aware automáticos

Cuando el usuario diga “implementa Fase 2”, usa este bloque P2 como brief.

## Estilo de implementación
- Diferencias mínimas y enfocadas; reutiliza Button, Section, Reveal, tokens CSS.
- Paleta azul/celeste/amarillo/morado.
- Motion: solo transform/opacity; `useReducedMotion`.
- Español Costa Rica, tono institucional premium.

## Entrega
Al terminar: resumen corto en español de qué cambió, rutas tocadas, y qué debe reemplazar el usuario en `site.ts` (`social.*`, `analytics.*`, `campaignPhase`).

<<<PROMPT_FIN>>>

---

## Cómo usar este archivo

1. Abre un chat nuevo en Cursor en **Agent mode**.
2. Copia **desde** `<<<PROMPT_INICIO>>>` **hasta** `<<<PROMPT_FIN>>>` (puedes omitir las marcas si quieres; el contenido interno es lo que importa).
3. Pega y envía. El agente debe implementar P0+P1 sin pedirte opciones.

## Notas para ti (humano)
- Cuando tengas WhatsApp/IG/LinkedIn reales, pégalos en `social` y dejarán de ocultarse.
- Cuando el formulario oficial esté listo, cambia `campaignPhase` a `APPLICATIONS_OPEN`.
- Este prompt **no** despliega portal ni Demo Day; eso es P2.
