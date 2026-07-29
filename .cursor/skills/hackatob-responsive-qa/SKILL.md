---
name: hackatob-responsive-qa
description: Reviews HackaToB responsive layout, accessibility, and visual stability at 1440, 1280, 768, and 390. Use for mobile overflow fixes, /hackatob-responsive-qa, or after section changes.
---

# HackaToB Responsive QA

Revisar responsive, a11y básica y estabilidad visual.

## Viewports obligatorios

| Nombre | Tamaño |
|--------|--------|
| Desktop | 1440 × 1000 |
| Laptop | 1280 × 800 |
| Tablet | 768 × 1024 |
| Mobile | 390 × 844 |

## Verificar

- Overflow horizontal / texto truncado (esp. Hero display)
- Header sticky + menú móvil
- CTA primario visible (barra, hero, mobile CTA)
- Legibilidad y densidad
- Touch targets ≥ 44 × 44
- Focus visible
- `prefers-reduced-motion`
- Imágenes sin layout shift grosero
- Altura del Hero (no aplastado ni infinito)

## Flujo

1. Abrir Browser en los cuatro viewports
2. Listar defectos con severidad y archivo
3. Corregir P0 (overflow / CTA / foco)
4. Re-verificar viewport afectado
5. typecheck/lint si hubo cambios de código

## Invocación

`/hackatob-responsive-qa`
