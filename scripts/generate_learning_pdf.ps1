# Generate HackaToB learning PDF (PowerShell, ASCII only)
$ErrorActionPreference = "Stop"
$outPath = "c:\Users\rojas\OneDrive\Desktop\HackaToB_v01\HackaToB_Guia_de_Aprendizajes.pdf"

function Escape-Pdf([string]$s) {
  return ($s -replace '\\', '\\' -replace '\(', '\(' -replace '\)', '\)')
}

$pages = @()
function Add-Page([string[]]$lines) {
  $script:pages += , $lines
}

Add-Page @(
  "",
  "",
  "HACKATOB 2026",
  "Guia de Aprendizajes",
  "",
  "Resumen de lo esencial para construir el landing",
  "profesional: estrategia, arquitectura, contenido,",
  "Motion, trabajo en pareja, stack y plan de 5 dias.",
  "",
  "------------------------------------------------",
  "Innova. Conecta. Impacta.",
  "17-20 agosto 2026  |  60 cupos",
  "GreenTrack / MediTrack / FinTrack",
  "Technology on Business / TEC",
  "------------------------------------------------",
  "",
  "Documento de estudio personal - Version 1.0",
  "Julio 2026"
)

Add-Page @(
  "1. VISION DEL PRODUCTO",
  "",
  "HackaToB no es solo una competencia: es un sistema",
  "digital del evento. La web debe explicar que es,",
  "generar confianza (ToB + TEC), convertir interes en",
  "postulaciones de calidad y acompanhar hasta Demo Day.",
  "",
  "OBJETIVO DE CONVERSION",
  "En menos de 20 segundos: que es, si puedo participar,",
  "y cual es el siguiente paso (Postularme).",
  "",
  "CICLO: Descubrir > Postular > Preparar > Construir > Presentar",
  "",
  "FUENTE DE VERDAD (no inventar)",
  "- Fechas: 17-20 agosto 2026 / Demo Day 20",
  "- 60 cupos / 10-15 equipos / max. 4 personas",
  "- Tracks: GreenTrack, MediTrack, FinTrack",
  "- Modalidades: Ideacion + MVP funcional",
  "- Tagline: Innova. Conecta. Impacta.",
  "- Lovable = inspiracion visual, NO fuente de datos"
)

Add-Page @(
  "2. RELACION TOB + HACKATOB",
  "",
  "HackaToB pertenece a Technology on Business.",
  "En marca es hijo de ToB; en web puede vivir como",
  "sitio hermano con identidad propia (Spark).",
  "",
  "DOMINIOS RECOMENDADOS",
  "- tobcr.com              -> congreso ToB (companhero)",
  "- hackatob.tobcr.com     -> HackaToB (tu)",
  "- Links cruzados en ambos navs",
  "",
  "REPOS (mejor para 2 personas)",
  "- Dos repos: tob-website y hackatob-website",
  "- Dos proyectos Vercel en el mismo team",
  "- Cloudflare DNS + SSL Full (strict)",
  "- Branch protection en main + PRs",
  "",
  "Ownership claro: cada quien su repo. Se integran",
  "por contrato (URLs, marca, copy), no pelean archivos.",
  "",
  "CONTRATO MINIMO",
  "- URLs finales acordadas",
  "- Logos TEC/ToB compartidos; Spark solo HackaToB",
  "- Fechas/metricas solo del Documento Maestro",
  "- Sync diseno 2x/semana / standup async diario"
)

Add-Page @(
  "3. ALCANCE EN 5 DIAS",
  "",
  "SI (lanzamiento de convocatoria)",
  "- Landing one-page con anclas",
  "- Hero + Spark + metricas + countdown",
  "- Confianza, que es (5 pasos), quien puede",
  "- 3 tracks, retos, modalidades, agenda",
  "- Requisitos + form (Supabase o Tally)",
  "- FAQ + CTA final + footer",
  "- Motion basico + mobile + Vercel",
  "",
  "NO (despues del launch)",
  "- Portal privado, login, team matching",
  "- Admin panel completo",
  "- Demo Day en vivo / votacion",
  "- Galeria dinamica / CMS pesado",
  "",
  "Entrega profesional dia 5 = landing + postulacion.",
  "La plataforma completa es Fase 2+."
)

Add-Page @(
  "4. STACK TECNICO",
  "",
  "Dominio/DNS/WAF ...... Cloudflare",
  "Hosting/Deploy ....... Vercel (preview por PR)",
  "Framework ............ Next.js App Router + TypeScript",
  "UI ................... Tailwind + tokens CSS de marca",
  "Animaciones .......... Motion (ex Framer Motion)",
  "Backend/Auth/DB ...... Supabase (Postgres + RLS)",
  "Forms ................ Zod + RHF + Server Actions",
  "Email (opcional) ..... Resend",
  "Captcha .............. Cloudflare Turnstile",
  "",
  "CARPETAS MENTALES",
  "- app/(marketing)/  paginas publicas",
  "- components/ layout, marketing, motion, spark, ui",
  "- lib/content/  todo el copy",
  "- lib/motion.ts tokens de animacion",
  "- public/ logo + spark",
  "- supabase/migrations/ cuando llegue el form"
)

Add-Page @(
  "5. ORDEN DEL LANDING (SCROLL)",
  "",
  "0  Announcement bar",
  "1  Header (logo, nav, Postularme, link ToB)",
  "2  Hero (que/cuando/cupos/CTAs/Spark)",
  "3  Confianza (ToB + TEC)",
  "4  Que es (5 pasos)",
  "5  Quienes pueden",
  "6  Tracks (Green / Medi / Fin + Top 3 global)",
  "7  Retos",
  "8  Modalidades (Ideacion vs MVP)",
  "9  Programa (17-20 ago)",
  "10 Postulacion + requisitos (60 cupos)",
  "11 Mentores / Jurado / Rubrica",
  "12 Premios + continuidad",
  "13 Aliados",
  "14 FAQ",
  "15 CTA final + Footer",
  "",
  "Regla: cada seccion = UNA pregunta + UNA accion."
)

Add-Page @(
  "6. CONTENIDO Y DISENO",
  "",
  "COPY",
  "- H1: Cuatro dias para convertir retos reales",
  "  en soluciones con impacto.",
  "- Solicitud NO garantiza cupo (mensaje obligatorio)",
  "- Nunca publicar premios/logos sin confirmar",
  "- Placeholders honestos > datos inventados",
  "",
  "DISENO",
  "- Azul oscuro / electrico / celeste + amarillo Spark",
  "- Hero full-bleed: marca + headline + frase + CTAs + Spark",
  "- No cards en el hero; una idea por seccion",
  "- Spark = guia narrativa, no wallpaper",
  "",
  "MOMENTOS SPARK (solo 4)",
  "- Hero (idle)",
  "- Confirmacion postulacion (celebrate)",
  "- CTA final (point)",
  "- Demo Day espera (waiting)",
  "Prohibido en jurado, rechazos o pitch en vivo."
)

Add-Page @(
  "7. MOTION - QUE ES Y COMO USARLO",
  "",
  "Motion es una libreria de animacion para React.",
  "Describes ESTADOS visuales; Motion interpola.",
  "",
  "Cambio mental:",
  "  De 'como animo esto' -> 'en que estado esta esto'",
  "",
  "TRES CAPAS",
  "- Ambiental (8-20s): glows, anillo logo, Spark float",
  "- Explicativo (una vez): timelines, barras, pasos",
  "- Interactivo: hover <=1.03, tabs, filtros, form",
  "",
  "80% DEL PODER",
  "- initial / animate / transition",
  "- variants + staggerChildren (grids)",
  "- whileHover / whileTap / whileInView",
  "",
  "NIVEL PREMIUM",
  "- AnimatePresence (salidas / filtros)",
  "- layout / layoutId (FAQ, tabs)",
  "- useScroll + useTransform (agenda)",
  "- pathLength (anillo del logo)",
  "- motion values + useSpring (sin re-renders)",
  "- useAnimate (secuencia intro logo)"
)

Add-Page @(
  "7B. MOTION - REGLAS Y TOKENS",
  "",
  "RENDIMIENTO",
  "- Solo transform y opacity (GPU)",
  "- viewport once: true en reveals",
  "- prefers-reduced-motion / MotionConfig",
  "- Menos loops en movil",
  "- Confetti max 1s, una sola vez",
  "",
  "TOKENS",
  "- Rise: 18-24px",
  "- Duracion reveal: 450-650ms",
  "- Stagger: 80-120ms",
  "- Hover scale <= 1.03 / elevacion 4-8px",
  "- Ease: [0.22, 1, 0.36, 1]",
  "- Tween = scroll/carga / Spring = gestos",
  "",
  "LOGO",
  "- Intro: barras -> anillo -> estrella",
  "- Idle: anillo ~22s; hover: destello",
  "- Ideal: SVG inline (PNG ok en Dia 1)",
  "",
  "SPARK ESTADOS",
  "- idle / enter / hover / point / celebrate / waiting"
)

Add-Page @(
  "8. PLAN DIA 1 (4 HORAS)",
  "",
  "Meta: repo + Vercel + tokens + Header/Footer + Hero.",
  "",
  "BLOQUE 1 (50 min) - cimientos",
  "- create-next-app (TS + Tailwind + App Router)",
  "- GitHub + push main",
  "- Importar en Vercel -> preview",
  "",
  "BLOQUE 2 (60 min) - marca",
  "- public/logo-hackatob.png + spark.png",
  "- CSS variables en globals.css",
  "- Header + Footer + layout",
  "",
  "BLOQUE 3 (75 min) - Hero",
  "- Copy oficial + metricas + CTAs",
  "- Responsive 390px",
  "- Motion: reveal titulo + Spark float",
  "",
  "BLOQUE 4 (40 min) - cierre pro",
  "- README + mensaje al companhero",
  "- Retro: aprendi / corte / Dia 2",
  "",
  "DIAS 2-5",
  "2 secciones historia / 3 conversion / 4 form / 5 launch"
)

Add-Page @(
  "9. FLUJO PROFESIONAL (GIT + EQUIPO)",
  "",
  "- No trabajar directo en main (post-setup)",
  "- Rama: feature/hero-spark",
  "- Commits: feat: / fix: / style: / docs:",
  "- 1 PR = 1 cosa; review del companhero",
  "- Preview Vercel en el PR",
  "",
  "STANDUP ASYNC",
  "Hoy: ...",
  "Manana: ...",
  "Bloqueo: ...",
  "",
  "APRENDER SIN BLOQUEARTE",
  "- 70/30: docs minimas + construir",
  "- Si algo tarda >2h: cortalo",
  "- Roto en staging > perfecto en la cabeza",
  "- Preguntar sin miedo; PRs chicos; README",
  "",
  "RUTA MOTION (PRACTICA)",
  "1 Hero / 2 botones / 3 Reveal / 4 tracks stagger",
  "5 Spark loop / 6 FAQ layout / 7 tabs layoutId",
  "8 filtros AnimatePresence / 9 agenda scroll",
  "10 logo pathLength / 11-13 opcionales Dia 5"
)

Add-Page @(
  "10. CHECKLIST DE LANZAMIENTO",
  "",
  "[ ] <20s: que / cuando / cupos / como postular",
  "[ ] Mobile usable sin zoom",
  "[ ] CTA Postularme en nav + hero + final",
  "[ ] Form recibe datos reales",
  "[ ] Sin logos/premios no confirmados",
  "[ ] HTTPS + dominio apuntando",
  "[ ] Title + Open Graph correctos",
  "[ ] prefers-reduced-motion respetado",
  "[ ] Legales enlazados o placeholder honesto",
  "[ ] Link cruzado ToB <-> HackaToB",
  "",
  "------------------------------------------------",
  "FRASE PARA RECORDAR",
  "",
  "Landing corta que convierte + sitemap despues.",
  "Motion explica, no decora.",
  "Spark guia, no satura.",
  "Dos repos, un dominio padre,",
  "un objetivo: postulaciones de calidad.",
  "------------------------------------------------",
  "",
  "Basado en Documento Maestro HackaToB 2026,",
  "arquitectura Cloudflare/Vercel/Next/Supabase/Motion",
  "y plan de trabajo ToB + HackaToB.",
  "",
  "Technology on Business / TEC / Cartago"
)

$objMap = @{}
$pageIds = @()
$contentIds = @()
$nextId = 4

for ($i = 0; $i -lt $pages.Count; $i++) {
  $pageIds += $nextId
  $nextId++
  $contentIds += $nextId
  $nextId++
}

$contentStreams = @()
foreach ($lines in $pages) {
  $sb = New-Object System.Text.StringBuilder
  [void]$sb.AppendLine("BT")
  [void]$sb.AppendLine("/F1 11 Tf")
  [void]$sb.AppendLine("50 780 Td")
  [void]$sb.AppendLine("15 TL")
  $first = $true
  foreach ($line in $lines) {
    $e = Escape-Pdf $line
    if (-not $first) { [void]$sb.AppendLine("T*") }
    $first = $false
    if ($line -match '^[0-9]+[Bb]?\. ' -or $line -eq "HACKATOB 2026" -or $line -eq "Guia de Aprendizajes") {
      [void]$sb.AppendLine("/F1 14 Tf")
      [void]$sb.AppendLine("($e) Tj")
      [void]$sb.AppendLine("/F1 11 Tf")
    } else {
      [void]$sb.AppendLine("($e) Tj")
    }
  }
  [void]$sb.AppendLine("ET")
  $contentStreams += $sb.ToString()
}

$kids = ($pageIds | ForEach-Object { "$_ 0 R" }) -join " "
$objMap[1] = "<< /Type /Catalog /Pages 2 0 R >>"
$objMap[2] = "<< /Type /Pages /Kids [$kids] /Count $($pageIds.Count) >>"
$objMap[3] = "<< /Type /Font /Subtype /Type1 /BaseFont /Helvetica >>"

for ($i = 0; $i -lt $pages.Count; $i++) {
  $pageObjId = $pageIds[$i]
  $contentObjId = $contentIds[$i]
  $objMap[$pageObjId] = "<< /Type /Page /Parent 2 0 R /MediaBox [0 0 612 792] /Contents $contentObjId 0 R /Resources << /Font << /F1 3 0 R >> >> >>"
  $stream = $contentStreams[$i]
  $len = [System.Text.Encoding]::ASCII.GetByteCount($stream)
  $objMap[$contentObjId] = "<< /Length $len >>`nstream`n$stream`nendstream"
}

$ms = New-Object System.IO.MemoryStream
$writer = New-Object System.IO.StreamWriter($ms, [System.Text.Encoding]::ASCII)
$writer.NewLine = "`n"
function Write-Line([string]$t) { $writer.Write($t); $writer.Write("`n") }

Write-Line "%PDF-1.4"
$offsets = @{}
$maxId = ($objMap.Keys | Measure-Object -Maximum).Maximum

for ($id = 1; $id -le $maxId; $id++) {
  $offsets[$id] = $ms.Length
  Write-Line "$id 0 obj"
  Write-Line $objMap[$id]
  Write-Line "endobj"
}

$xrefPos = $ms.Length
Write-Line "xref"
Write-Line "0 $($maxId + 1)"
Write-Line "0000000000 65535 f "
for ($id = 1; $id -le $maxId; $id++) {
  Write-Line ("{0:D10} 00000 n " -f $offsets[$id])
}
Write-Line "trailer"
Write-Line "<< /Size $($maxId + 1) /Root 1 0 R >>"
Write-Line "startxref"
Write-Line "$xrefPos"
Write-Line "%%EOF"
$writer.Flush()

[System.IO.File]::WriteAllBytes($outPath, $ms.ToArray())
$writer.Dispose()
$ms.Dispose()
Write-Output "OK $outPath bytes=$((Get-Item $outPath).Length) pages=$($pages.Count)"
