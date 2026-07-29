---
name: hackatob-content-integrity
description: Verifies HackaToB publishes only approved content—no placeholders, invented mentors/sponsors, stale capacity/tracks, or dishonest campaign copy. Use for content audits, /hackatob-content-integrity, or before release.
---

# HackaToB Content Integrity

Verificar que el sitio solo publique contenido aprobado.

## Flujo

1. Leer `docs/content/official-data.md`, `publication-status.md`, `decisions-required.md`
2. Revisar `config/event.ts`, `config/campaign.ts`, `lib/content/*`
3. Buscar en código/UI:
   - placeholders (`XXXX`, pravatar, lorem, “TBD”, fake LinkedIn)
   - sponsors/mentores sin `published`
   - datos duplicados o cifras inconsistentes (60 cupos, MediTrack, 3 tracks)
   - links vacíos o sociales ocultables
   - copy de fase incorrecto (`INTEREST_OPEN` ≠ “postulación abierta”)
4. Generar reporte: hallazgo · severidad · archivo · acción
5. Corregir **solo** con información confirmada; si falta dato → `decisions-required.md`

## Checklist rápido

- [ ] Capacidad 80 · equipos 15–20 · máx 4
- [ ] Tracks HT/GT/FT/TNBT · 3 modalidades
- [ ] Fechas 17–20 ago 2026 · TEC · Demo Day Centro de las Artes
- [ ] CTA acorde a `campaignPhase`
- [ ] Sin premios $ inventados
- [ ] Fallbacks honestos cuando no hay published

## Invocación

`/hackatob-content-integrity`
