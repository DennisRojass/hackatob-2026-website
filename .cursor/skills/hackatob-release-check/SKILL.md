---
name: hackatob-release-check
description: Runs HackaToB pre-production checks—typecheck, lint, build, metadata, sitemap, robots, links, content integrity, and placeholders. Use before deploy, /hackatob-release-check, or release QA.
---

# HackaToB Release Check

Auditoría previa a producción.

## Ejecutar

1. Typecheck
2. Lint
3. Build
4. Tests si existen
5. Lighthouse solo si está configurado (no bloquear si no)

## Revisar manualmente / por código

- Metadata + `metadataBase` (`hackatob.cr`)
- `sitemap.ts` / `robots.ts`
- Canonical / OG (sin 404)
- Enlaces internos (`/#seccion` desde rutas hijas)
- Contenido: solo `published`; fase CTA correcta
- Placeholders / sociales vacíos ocultos
- Consola limpia en `/`, `/postular`, `/contacto`, un legal
- Skip link + reduced motion

## Criterios de fallo

- Build roto
- Copy engañoso en `INTEREST_OPEN`
- Logos/personas no autorizados visibles
- Overflow P0 en 390
- Assets de marca 404

## Salida

Pass/fail por ítem + riesgos residuales + `docs/qa/release-checklist.md` actualizado en notas (sin inventar checks pasados).

## Invocación

`/hackatob-release-check`
