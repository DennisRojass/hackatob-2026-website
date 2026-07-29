# Definition of Done — HackaToB 2026

Una tarea (sección, fix o release) está **terminada** solo si cumple:

## Ingeniería

- [ ] Typecheck limpio
- [ ] Lint limpio
- [ ] Build exitoso
- [ ] Sin errores de consola en rutas tocadas
- [ ] Sin dependencias nuevas injustificadas

## Contenido

- [ ] Datos desde `config/event.ts` / content tipado
- [ ] Solo ítems `published` (o fallbacks honestos)
- [ ] CTA y copy alineados a `campaignPhase` (`INTEREST_OPEN`)
- [ ] Sin placeholders, pravatar, links falsos, montos inventados

## Visual / Signal System

- [ ] Composición distinta a la sección vecina (si hubo rediseño)
- [ ] Pasa anti-generic checklist relevante
- [ ] Sin overflow en 1440 / 1280 / 768 / 390
- [ ] CTA visible; Hero legible en móvil

## Accesibilidad

- [ ] Teclado + foco visible
- [ ] Semántica / un H1
- [ ] Contraste AA en texto crítico
- [ ] `prefers-reduced-motion` respetado
- [ ] Targets táctiles ≥ 44×44

## Entrega

- [ ] Lista de archivos modificados
- [ ] Pruebas ejecutadas + resultado
- [ ] Pendientes / decisiones abiertas enlazadas

Si falta un ítem bloqueante → no declarar Done.
