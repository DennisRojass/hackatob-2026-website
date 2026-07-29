---
name: hackatob-section-builder
description: Builds or redesigns a single HackaToB landing section following its Signal System blueprint, official content, and QA gates. Use when implementing one section, /hackatob-section-builder, or batch redesign of at most two sections.
---

# HackaToB Section Builder

Construir **una** sección (máximo dos por ejecución) con identidad Signal System.

## Antes de editar

Leer:

- `docs/design/section-blueprints.md` (blueprint de la sección)
- `docs/design/art-direction.md`
- `docs/content/official-data.md` + `page-copy.md`
- `config/event.ts` / `config/campaign.ts`
- Componente actual + sección anterior y siguiente

Explicar:

1. Composición elegida
2. Por qué no es genérica
3. Archivos a tocar

## Flujo

1. Definir composición (rail / nodos / panel / timeline / etc. — no card grid por defecto)
2. Implementar con tokens y componentes existentes
3. Browser: 1440 y 390 mínimo; ideal 1280 y 768
4. Corregir overflow, jerarquía, contraste
5. typecheck + lint (+ build si el cambio es amplio)
6. Informar archivos, pruebas, pendientes
7. **No continuar** con otra sección sin pedirlo

## Restricciones

- No inventar contenido
- No cards para todo
- No repetir la composición de la sección anterior
- No dependencias nuevas sin justificar
- Respetar reduced motion y solo contenido `published`
- No rediseñar el sistema UI completo

## Invocación

`/hackatob-section-builder` — sección: `[NOMBRE]`
