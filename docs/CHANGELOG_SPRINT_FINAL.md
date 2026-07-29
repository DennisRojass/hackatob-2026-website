# Changelog — Sprint Final HackaToB 2026

Registro del avance congelado al crear el repositorio GitHub.

## Resumen

Se cerró el Sprint Final del micrositio: specs ingeridas, assets oficiales cableados, secciones alineadas al Signal System, QA typecheck/lint/build en verde.

## Decisiones aplicadas

- **Rutas Opción A:** app en `/` con redirects `/hackatob` → `/`, `/hackatob/postular` → `/postular`, legal y contacto equivalentes.
- **Campaña:** `INTEREST_OPEN` — CTA “Dejar interés” vía `config/campaign.ts`.
- **Tipografía:** Syne + DM Sans (sin Stack Sans / Radnika hasta licencia).
- **Color:** paleta ToB (`#0DB6FF` … `#114A82`) en tokens de `app/globals.css`.
- **Logo:** isotipo oficial PNG + wordmark tipográfico (sin fingir wordmark en imagen).
- **TEC:** sede institucional; fuera de `partners` comerciales.
- **Staging:** Dojo / WWT / P&G / Dennis fuera de `public/` hasta autorización.

## Lotes

| Lote | Alcance |
|---|---|
| 0 | Tokens, brand-assets, anchors, partners, redirects |
| 1 | Campaign / Header / Hero |
| 2 | Respaldo + Experiencia |
| 3 | Participantes + Tracks (Sparks reales) |
| 4 | Retos (honestos) + Modalidades |
| 5 | Programa + Participar |
| 6 | Evaluación + Ecosistema |
| 7 | Trayectoria (sin galería falsa) + FAQ |
| 8 | CTA final + Footer |
| 9 | Postular (JSONL local) + legal noindex + SEO |

## Assets publicados cableados

- `public/brand/hackatob-isotipo-oficial.png`
- `public/brand/spark-principal.png`
- Imagotipos / isotipos ToB + `tec-logo.png`
- Sparks: `public/media/tracks/{health,green,fin,next}/`

## QA al cierre

- `npm run typecheck` — OK
- `npm run lint` — OK
- `npm run build` — OK

## Docs de referencia del sprint

Ver `docs/master-spec/sprint-final/` especialmente:

- `08_PROMPT_MAESTRO_SPRINT_FINAL_EJECUTABLE.txt`
- `09_REPORTE_CIERRE_SPRINT_FINAL.txt`
- `10_PLAN_AQ_AUDITORIA.txt`

## Pendientes no bloqueantes

- Backend definitivo de leads (Supabase/Resend)
- Confirmación de aliados y personas
- Fotos hero / campus / trayectoria
- Dominio canónico final
- Documentos legales firmados
