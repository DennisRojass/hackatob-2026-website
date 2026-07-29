# Asset Inventory — HackaToB 2026

Inventario de `public/brand/` y media relacionada. Actualizar al añadir/quitar archivos.

## Marca

| Archivo | Estado | Notas |
|---------|--------|-------|
| `hackatob-logo.svg` | Presente | UI principal |
| `spark.svg` | Presente | Mascota |
| `tob-isotipo.svg` | Presente | Trust / footer |
| `tec-logo.svg` | Presente | Trust / footer |
| `og-hackatob-2026.svg` | Presente | OG; ideal migrar a 1200×630 foto/JPG oficial |
| `hackatob-logo.png` / `spark.png` | Verificar | Si se referencian en código, deben existir (cero 404) |

## Sponsors (no publicados)

| Archivo | Status contenido | Nota |
|---------|------------------|------|
| `sponsors/stellar.svg` | draft | No mostrar hasta `published` |
| `sponsors/wwt.svg` | draft | idem |
| `sponsors/intel.svg` | draft | idem |
| `sponsors/pg.svg` | draft | idem |
| `sponsors/bn.svg` | draft | idem |

## Galería / trayectoria

| Ruta | Uso | Nota |
|------|-----|------|
| `/gallery/equipo-tob-past.png` | ToBHistory | Foto documental ToB |
| `/gallery/cierre-cultural.png` | ToBHistory | Centro de las Artes / cultura |

## App icons

- `app/icon.*` / `apple-icon.*` — verificar en release check (sin 404)

## Raw / video

- `public/raw/`, `public/video/` — ignorados por Cursor indexing; no servir sin optimización

## Reglas

- Cero 404 en rutas referenciadas por componentes
- No usar `i.pravatar.cc` ni avatares remotos inventados
- Fotografía: ángulos documentales; ver prohibiciones en `docs/design/art-direction.md`
