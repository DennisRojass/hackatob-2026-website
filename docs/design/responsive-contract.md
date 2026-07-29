# Responsive Contract

## Viewports de referencia

| Nombre | Ancho × alto | Prioridad |
|--------|--------------|-----------|
| Desktop | 1440 × 1000 | Primario diseño |
| Laptop | 1280 × 800 | Primario |
| Tablet | 768 × 1024 | Secundario |
| Mobile | 390 × 844 | Primario QA |

## Breakpoint behavior

- **≥1280:** composiciones asimétricas / rails horizontales permitidos
- **768–1279:** simplificar columnas (2→1 o stack parcial); mantener jerarquía
- **≤767:** una columna; nav colapsada; CTA sticky/móvil visible; Spark no debe empujar el H1 fuera de viewport de forma ilegible

## Contratos no negociables

1. Sin overflow horizontal
2. Sin truncar copy crítico del Hero (H1 + subtítulo + CTA)
3. Touch targets ≥ 44×44
4. CTA de fase alcanzable sin zoom
5. Imágenes con tamaño intrínseco / `next/image` para evitar CLS grave
6. Reduced motion respetado en los cuatro anchos

## Hero

- Altura: útil (~min 70–82vh en desktop), no infinita
- Métricas: pueden ir bajo el fold inmediato; no saturar primer viewport
- En 390: revisar Syne (display ancho) — permitir wrap, no clip

## Header / Announcement

- Announcement compacta en móvil (fase + 1 dato + CTA)
- Header no debe tapar skip-link ni H1 al enfocar

## QA

Usar skill `/hackatob-responsive-qa` y checklist `docs/qa/visual-checklist.md`.
