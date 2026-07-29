# Publication Status

## Estados

| Status | Significado | ¿UI producción? |
|--------|-------------|-----------------|
| `draft` | Borrador interno | No |
| `pending` | En revisión / autorización | No |
| `confirmed` | Aprobado, aún no live | No (salvo preview auth futura) |
| `published` | Autorizado a mostrar | **Sí** |
| `hidden` | Retirado temporal | No |
| `archived` | Histórico | No (salvo sección memoria explícita) |

Helpers: `lib/types/content.ts` (`isPublished`).

## Inventario actual (resumen)

| Dominio | Estado | Notas |
|---------|--------|-------|
| Evento / tracks / modalidades / fechas | published (config) | Congelado |
| Campaña INTEREST_OPEN | published | PRELAUNCH alias |
| Mentores / personas | vacío / no published | `lib/content/people.ts` |
| Partners / sponsors | `draft` | No render logos |
| Retos oficiales | no published | Solo previews honestos |
| Premios montos $ | no published | Copy de reconocimiento sin montos |
| Legal | provisional | Ver decisión noindex |
| Social IG/LI/WA | vacío = oculto | `config/social.ts` |
| Galería ToB | published paths | Verificar 404 |

## Fallbacks UI

- **Mentores:** “Próximamente conocerás a quienes te acompañarán.”  
- **Aliados:** “Estamos conformando el ecosistema de aliados de HackaToB 2026.”  
- **Retos:** “Los retos oficiales serán publicados próximamente.”  
- **Premios:** “Los premios y oportunidades se anunciarán junto con los aliados oficiales.”  

## Regla de oro

Un boolean fácil de voltear **no** debe publicar logos o personas. Preferir `status: "published"` por ítem.
