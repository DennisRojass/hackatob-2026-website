# Release Checklist

Usar con `/hackatob-release-check` antes de producción.

## Build & calidad

- [ ] `npx tsc --noEmit` (o `npm run typecheck`)
- [ ] `npm run lint`
- [ ] `npm run build`
- [ ] Tests existentes en verde (si hay)

## SEO / metadata

- [ ] `metadataBase` = https://hackatob.cr
- [ ] Title / description / OG / Twitter
- [ ] OG asset sin 404
- [ ] `/sitemap.xml` y `/robots.txt`
- [ ] JSON-LD Event coherente con fechas oficiales

## Contenido & campaña

- [ ] `campaignPhase === INTEREST_OPEN` (o fase intencional)
- [ ] CTA “Dejar interés” si INTEREST_OPEN
- [ ] Sin “postulación abierta” engañosa
- [ ] Mentores/sponsors solo published
- [ ] Cifras 80 / 15–20 / 4 tracks / 3 modalidades
- [ ] Fechas 17–20 ago 2026 · TEC · Centro de las Artes

## Rutas smoke

- [ ] `/`
- [ ] `/postular` (submit → success)
- [ ] `/contacto`
- [ ] `/legal/privacidad` (y links footer)
- [ ] Anclas desde `/contacto` vía `/#...`

## A11y / visual

- [ ] Visual checklist 4 viewports
- [ ] Teclado en nav, FAQ, form
- [ ] Reduced motion spot-check

## Seguridad básica

- [ ] Sin `.env` commiteado
- [ ] Sin secretos en client bundle
- [ ] Links externos razonables (`rel` donde toque)

## Firma de release

| Campo | Valor |
|-------|--------|
| Fecha | |
| Responsable | |
| Fase campaña | |
| Notas / riesgos | |
