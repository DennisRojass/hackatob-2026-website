# Brand System — HackaToB 2026

## Posicionamiento

HackaToB es el programa de innovación aplicada de **Technology on Business**. No es una landing genérica de hackathon: es la plataforma pública de una competencia institucional con retos reales de Costa Rica.

**Idea de marca digital:** una señal que conecta retos, talento y resultados (**SIGNAL SYSTEM**).

## Personalidad

| Sí | No |
|----|-----|
| Joven, tecnológica, premium | Infantil, gamer |
| Institucional y rigurosa | Corporativa genérica / SaaS |
| Energética y optimista | Crypto / neon casino |
| Clara y verificable | Hype vacío |

## Arquitectura de marca

1. **HackaToB** — nombre del evento / producto digital (`hackatob.cr`)
2. **ToB** — organizador (`tobcr.com`) — “Powered by ToB”
3. **TEC** — sede y respaldo académico
4. **Aliados** — solo con status `published`

## Tipografía (congelada)

| Rol | Familia | Variable |
|-----|---------|----------|
| Display | **Syne** | `--font-syne` |
| Body | **DM Sans** | `--font-body` |

**Decisión:** KEEP Syne + DM Sans (ya en `app/fonts.ts`). No migrar a Inter / Space Grotesk / Sora sin aprobación.

Escalas sugeridas: display 700–800, tracking negativo, LH ~0.95–1.1; body 400–500, LH 1.55–1.7; labels uppercase 600, tracking 0.08–0.12em.

## Color (tokens vivos en `app/globals.css`)

- Fondo: `--bg` / `--bg-deep`
- Marca: `--blue` `#3d7cff`, `--cyan` `#5ce1ff`, `--spark` `#ffe14a`, `--purple` `#8b5cf6`
- Tracks: `--health`, `--green`, `--fin`, `--next`
- Texto: `--white`, `--muted`; línea `--line`

No hardcodear hex nuevos en componentes.

## Voz

- Español CR, oraciones cortas, datos primero
- CTA fase-aware (`INTEREST_OPEN` → “Dejar interés”)
- Prohibido: “transforma el futuro”, “innovación sin límites”, “change-makers”

## Spark

Ver `logo-usage.md`. Máximo narrativo, mínimo decorativo.
