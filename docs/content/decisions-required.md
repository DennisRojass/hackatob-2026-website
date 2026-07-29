# Decisions Required — Auditoría HackaToB 2026

Lista de **10 decisiones humanas** pendientes (auditoría Fase 1). Resolver antes o durante el rediseño visual (PROMPT 02).

| # | Decisión | Contexto | Default temporal en repo |
|---|----------|----------|---------------------------|
| 1 | **¿Logo oficial adjunto (brackets + Spark geométrico) reemplaza PNG/SVG actuales como única marca?** | Marca canónica vs assets en `public/brand/` | SVG actuales en uso; inventario documentado |
| 2 | **¿Fase oficial = `INTEREST_OPEN` y CTA = “Dejar interés” (no “Postularme”) hasta abrir form?** | PROMPT 01 hablaba de PRELAUNCH | **`INTEREST_OPEN` live; `PRELAUNCH` = alias**; CTA Dejar interés |
| 3 | **¿Qué H1 de Hero prevalece?** Sitio vs copy PROMPT 02 (“Cuatro días para convertir retos…”) | Consistencia campaña | **Mantener “Cuatro días. Cuatro áreas.”** hasta decidir |
| 4 | **¿Mantener Syne + DM Sans o migrar a Space Grotesk / Inter?** | PROMPT tipografía vs repo | **KEEP Syne + DM Sans** — no migrar sin aprobación |
| 5 | **¿Contacto público solo institucional (`tob@itcr.ac.cr`) o también innovación personal?** | `derojas@estudiantec.cr` + teléfonos en config | Ambos en config; decisión de exposición pendiente |
| 6 | **¿Hay sponsors/mentores con autorización escrita para `published`?** | Arrays draft / personas vacías | Nada published; fallbacks honestos |
| 7 | **¿Rúbrica % y “premios tech 60/40” confirmados para UI?** | Brief vs riesgo de cambio | Mostrados en content; marcar si se vuelve provisional |
| 8 | **¿Destino waitlist: solo log, email (Resend), o Supabase?** | `/postular` Server Action | Log / éxito in-page (Fase 1) |
| 9 | **¿Inicializar Git + rama `redesign/hackatob-professional` + snapshot?** | Workspace sin `.git` en auditoría | Pendiente humano |
| 10 | **¿Legal provisional indexable o `noindex` hasta abogado?** | Form referencia `/legal/privacidad` | Indexable hoy; valorar noindex |

## Cómo cerrar una decisión

1. Anotar la resolución aquí (fecha + dueño)  
2. Actualizar `config/*` / `lib/content/*` / copy docs  
3. No dejar contradicciones entre PROMPT 02 y el sitio  

## Ya resuelto en sistema base (no reabrir sin causa)

- Capacidad **80** / equipos **15–20** / tracks **HealthTrack+3** / modalidades **3**  
- Fechas **17–20 ago 2026** · TEC · Demo Day **Centro de las Artes**  
- Tipografía: **Syne + DM Sans** (keep)  
- Campaña: **INTEREST_OPEN** (+ alias PRELAUNCH)
