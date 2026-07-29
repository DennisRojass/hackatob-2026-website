# Visual Language — HackaToB 2026

## Principios

1. **Señal > decoración** — cada elemento explica función (progreso, track, decisión)
2. **Una composición por sección** — no repetir el shell anterior
3. **Institucional premium** — TEC/ToB legibles; energía sin gamer
4. **Datos verificables** — cifras solo desde `config/event.ts`
5. **Honestidad de fase** — INTEREST_OPEN no se viste de APPLICATIONS_OPEN

## Layout

| Token conceptual | Guía |
|------------------|------|
| Container | ~max-w-6xl / ~1240px contenido |
| Reading width | ~760px para párrafos largos |
| Section space | Amplio en desktop; compactar en móvil sin aplastar Hero |
| Header | Sticky; altura cómoda (~64–76px) |

Usar espaciado del sistema Tailwind/CSS existente; no inventar escalas paralelas.

## Superficies

Preferencia: fondo profundo + borde `--line` + panel sobrio.  
Card glass / glow: excepción, no default.

## Iconografía

- Lucide permitido con moderación
- No icono-en-círculo-coloreado en cada fila
- Tracks: código + nombre + textura > icon pack genérico

## Motion language

Reveal corto; ambiental lento y escaso; scroll solo si explica rail/nodos/rúbrica. Ver `.cursor/rules/40-motion.mdc`.

## Densidad

- Desktop: editorial, aire
- Mobile: apilar, no comprimir display hasta overflow (P0 histórico en Hero)
- Marquees / chips: solo datos confirmados

## Diferenciación ToB vs HackaToB

| | ToB | HackaToB |
|--|-----|----------|
| Job | Congreso / ecosistema | Convertir builders + operar hackathon |
| Señal | Hexágono / Master the Chaos (sitio ToB) | Signal System + Spark |
| CTA | Aliado / inscribirse ToB | Dejar interés / Postularme (fase) |
