# HackaToB 2026 — Website

Micrositio oficial de **HackaToB 2026**, la experiencia de innovación aplicada de [Technology on Business](https://tobcr.com) (TEC Cartago).

## Estado actual

| Campo | Valor |
|---|---|
| Fase de campaña | `INTEREST_OPEN` (lista de interés — CTA: **Dejar interés**) |
| Rutas | `/` (landing), `/postular`, `/contacto`, `/legal/*` |
| Alias | `/hackatob` → `/` (Opción A) |
| Tipografía | Syne + DM Sans |
| Build | `npm run typecheck` · `npm run lint` · `npm run build` |

## Stack

- Next.js 15 (App Router) + TypeScript
- Tailwind CSS v4
- Motion
- Zod (formulario de interés)
- Vercel Analytics

## Datos oficiales

Fuente: [`config/event.ts`](config/event.ts)

- **17–20 agosto 2026** · TEC Cartago · Demo Day Centro de las Artes
- Hasta **80** participantes · 15–20 equipos · máx. 4
- Tracks: HealthTrack · GreenTrack · FinTrack · The Next Big Thing
- Modalidades: Ideación · Prototipado · MVP funcional

## Arranque local

```bash
npm install
npm run dev
```

Abre [http://localhost:3000](http://localhost:3000).

## Scripts

| Comando | Descripción |
|---|---|
| `npm run dev` | Desarrollo |
| `npm run build` | Build de producción |
| `npm run start` | Servir build |
| `npm run lint` | ESLint |
| `npm run typecheck` | TypeScript (`tsc --noEmit`) |
| `npm run check` | typecheck + lint + build |

## Estructura

```
app/                  # Rutas App Router
components/           # UI, layout, marketing, brand
config/               # event, campaign, routes, social
lib/content/          # Copy y registros tipados (+ publication status)
public/brand/         # Assets oficiales publicados
public/media/tracks/  # Sparks por track
staging/              # Material NO publicado (pendiente de autorización)
docs/                 # Documentación completa del proyecto
```

## Documentación

Índice: [`docs/README.md`](docs/README.md)

| Área | Ruta |
|---|---|
| Sprint Final (specs + prompts + reporte) | [`docs/master-spec/sprint-final/`](docs/master-spec/sprint-final/) |
| Changelog del sprint | [`docs/CHANGELOG_SPRINT_FINAL.md`](docs/CHANGELOG_SPRINT_FINAL.md) |
| Marca | [`docs/brand/`](docs/brand/) |
| Diseño | [`docs/design/`](docs/design/) |
| Contenido | [`docs/content/`](docs/content/) |
| QA | [`docs/qa/`](docs/qa/) |

## Contenido e integridad

- Solo registros con status **`published`** aparecen en producción.
- Aliados / mentores / premios no confirmados usan fallbacks honestos.
- `staging/` **no** es contenido público.
- Leads del formulario se guardan en `data/` (gitignored).

## Backup local

Antes del sprint se creó:

`Desktop\HackaToB_v01_BACKUP_20260728_223420`

## Licencia / uso

Proyecto privado del equipo HackaToB / Technology on Business. No redistribuir assets de marca sin autorización.
