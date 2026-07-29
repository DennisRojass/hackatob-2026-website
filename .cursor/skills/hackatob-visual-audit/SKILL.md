---
name: hackatob-visual-audit
description: Audits the HackaToB landing visually across four viewports, scores sections, and detects generic patterns before any redesign. Use when the user asks for a visual audit, /hackatob-visual-audit, or before redesigning sections.
---

# HackaToB Visual Audit

Auditar la landing **sin modificar código** hasta entregar el informe.

## Flujo

1. Leer `.cursor/rules/*` y `docs/design/art-direction.md`, `anti-generic-checklist.md`, `section-blueprints.md`
2. Confirmar datos en `docs/content/official-data.md` y `config/event.ts`
3. Ejecutar la app (`npm run dev`) si no está corriendo
4. Abrir Browser en:
   - 1440 × 1000
   - 1280 × 800
   - 768 × 1024
   - 390 × 844
5. Capturar al menos: Hero, Tracks, Programa, Evaluación, CTA final
6. Puntuar cada sección 1–10 (función + identidad Signal System + responsive)
7. Detectar patrones genéricos (cards consecutivas, glass, blobs, Lucide-en-círculo, glow, copy vacío)
8. Separar problemas de diseño vs contenido vs técnico
9. Clasificar P0 / P1 / P2
10. Entregar auditoría; **no editar** hasta aprobación

## Formato de salida

- Resumen ejecutivo
- Tabla por sección: score · problema · causa · cambio · prioridad · archivos
- Patrones genéricos
- Riesgos de contenido
- Plan priorizado
- Decisión requerida si hay contradicciones

## Invocación

`/hackatob-visual-audit`
