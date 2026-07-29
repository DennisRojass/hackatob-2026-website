# -*- coding: utf-8 -*-
"""Generate HackaToB learning PDF."""
from pathlib import Path

try:
    from fpdf import FPDF
except ImportError:
    import subprocess, sys
    subprocess.check_call([sys.executable, "-m", "pip", "install", "fpdf2", "-q"])
    from fpdf import FPDF


OUT = Path(__file__).resolve().parents[1] / "HackaToB_Guia_de_Aprendizajes.pdf"


class PDF(FPDF):
    def header(self):
        if self.page_no() == 1:
            return
        self.set_font("Helvetica", "I", 8)
        self.set_text_color(100, 116, 139)
        self.cell(0, 6, "HackaToB 2026  |  Guia de Aprendizajes", align="L")
        self.ln(8)

    def footer(self):
        self.set_y(-12)
        self.set_font("Helvetica", "I", 8)
        self.set_text_color(148, 163, 184)
        self.cell(0, 8, f"Pagina {self.page_no()}/{{nb}}", align="C")

    def h1(self, text):
        self.set_font("Helvetica", "B", 20)
        self.set_text_color(10, 31, 68)
        self.multi_cell(0, 9, text)
        self.ln(2)

    def h2(self, text):
        self.ln(3)
        self.set_font("Helvetica", "B", 13)
        self.set_text_color(0, 114, 188)
        self.multi_cell(0, 7, text)
        self.ln(1)

    def h3(self, text):
        self.ln(2)
        self.set_font("Helvetica", "B", 11)
        self.set_text_color(15, 23, 42)
        self.multi_cell(0, 6, text)
        self.ln(0.5)

    def body(self, text):
        self.set_font("Helvetica", "", 10)
        self.set_text_color(30, 41, 59)
        self.multi_cell(0, 5.2, text)
        self.ln(1)

    def bullet(self, text):
        self.set_font("Helvetica", "", 10)
        self.set_text_color(30, 41, 59)
        x = self.get_x()
        self.set_x(x + 3)
        self.multi_cell(0, 5.2, f"-  {text}")

    def callout(self, text):
        self.ln(1)
        self.set_fill_color(240, 249, 255)
        self.set_draw_color(102, 204, 238)
        self.set_font("Helvetica", "B", 9)
        self.set_text_color(10, 31, 68)
        self.multi_cell(0, 5.5, text, border=1, fill=True)
        self.ln(2)

    def kv(self, key, value):
        self.set_font("Helvetica", "B", 10)
        self.set_text_color(0, 114, 188)
        self.write(5.2, f"{key}: ")
        self.set_font("Helvetica", "", 10)
        self.set_text_color(30, 41, 59)
        self.multi_cell(0, 5.2, value)


def build():
    pdf = PDF(format="A4")
    pdf.alias_nb_pages()
    pdf.set_auto_page_break(auto=True, margin=16)
    pdf.add_page()

    # Cover
    pdf.ln(28)
    pdf.set_font("Helvetica", "B", 28)
    pdf.set_text_color(10, 31, 68)
    pdf.multi_cell(0, 12, "HackaToB 2026")
    pdf.set_font("Helvetica", "B", 16)
    pdf.set_text_color(0, 114, 188)
    pdf.multi_cell(0, 8, "Guia de Aprendizajes")
    pdf.ln(4)
    pdf.set_font("Helvetica", "", 11)
    pdf.set_text_color(51, 65, 85)
    pdf.multi_cell(
        0,
        6,
        "Resumen de lo esencial para construir el landing profesional:\n"
        "estrategia, arquitectura, contenido, Motion, trabajo en pareja,\n"
        "stack tecnico y plan de 5 dias.",
    )
    pdf.ln(6)
    pdf.callout(
        "Innova. Conecta. Impacta.  |  17-20 agosto 2026  |  60 cupos  |  "
        "GreenTrack · MediTrack · FinTrack  |  Technology on Business · TEC"
    )
    pdf.ln(4)
    pdf.set_font("Helvetica", "I", 9)
    pdf.set_text_color(100, 116, 139)
    pdf.multi_cell(0, 5, "Documento de estudio personal · Version 1.0 · Julio 2026")

    # 1 Vision
    pdf.add_page()
    pdf.h1("1. Vision del producto")
    pdf.body(
        "HackaToB no es solo una competencia: es un sistema digital del evento. "
        "La web debe explicar que es, generar confianza institucional (ToB + TEC), "
        "convertir interes en postulaciones de calidad y acompanhar el ciclo hasta "
        "el Demo Day."
    )
    pdf.h3("Objetivo de conversion")
    pdf.callout(
        "En menos de 20 segundos el visitante debe saber: que es HackaToB, "
        "si puede participar, y cual es el siguiente paso (Postularme)."
    )
    pdf.h3("Ciclo del evento")
    for step in [
        "DESCUBRIR — proposito, fechas, tracks, valor",
        "POSTULAR — solicitud individual o por equipo",
        "PREPARAR — cupo, equipo, retos, agenda",
        "CONSTRUIR — mentorias, checkpoints, entregables",
        "PRESENTAR — Demo Day, Top 3, continuidad",
    ]:
        pdf.bullet(step)

    pdf.h3("Fuente de verdad (no inventar)")
    pdf.bullet("Fechas: 17-20 agosto 2026 · Demo Day 20")
    pdf.bullet("60 cupos · 10-15 equipos · maximo 4 personas")
    pdf.bullet("Tracks oficiales: GreenTrack, MediTrack, FinTrack")
    pdf.bullet("Modalidades: Ideacion + MVP funcional")
    pdf.bullet("Tagline: Innova. Conecta. Impacta.")
    pdf.bullet("Lovable es inspiracion visual, no fuente de datos (sus tracks/metricas difieren)")

    # 2 TOB relation
    pdf.add_page()
    pdf.h1("2. Relacion ToB + HackaToB")
    pdf.body(
        "HackaToB pertenece a Technology on Business. En marca es hijo de ToB; "
        "en web puede vivir como sitio hermano con identidad propia (Spark)."
    )
    pdf.h3("Arquitectura de dominios recomendada")
    pdf.bullet("tobcr.com  →  landing del congreso ToB (companhero)")
    pdf.bullet("hackatob.tobcr.com  →  landing HackaToB (tu)")
    pdf.bullet("Links cruzados: ToB → HackaToB / HackaToB → «← ToB»")
    pdf.h3("Repos (mejor para 2 personas)")
    pdf.bullet("Dos repos separados: tob-website y hackatob-website")
    pdf.bullet("Dos proyectos Vercel en el mismo team")
    pdf.bullet("Cloudflare DNS + SSL Full (strict)")
    pdf.bullet("Branch protection en main + PRs obligatorios")
    pdf.callout(
        "Ownership claro: cada quien es dueno de su repo. Se integran por contrato "
        "(URLs, marca, copy oficial), no pelean el mismo archivo."
    )
    pdf.h3("Contrato minimo entre ustedes")
    pdf.bullet("URLs finales acordadas")
    pdf.bullet("Logos TEC/ToB compartidos; Spark solo en HackaToB")
    pdf.bullet("Fechas y metricas solo del Documento Maestro")
    pdf.bullet("Sync de diseno 2x por semana (30 min)")
    pdf.bullet("Mensaje diario async: hoy / manana / bloqueo")

    # 3 Scope 5 days
    pdf.add_page()
    pdf.h1("3. Alcance realista en 5 dias (solo o en pareja)")
    pdf.h3("SI (lanzamiento de convocatoria)")
    for t in [
        "Landing one-page con anclas",
        "Hero + Spark + metricas + countdown",
        "Confianza ToB/TEC, que es (5 pasos), quien puede",
        "3 tracks, retos (estaticos/JSON), modalidades, agenda",
        "Requisitos + form de postulacion (Supabase o Tally)",
        "FAQ + CTA final + footer legal",
        "Motion basico + mobile + deploy Vercel",
    ]:
        pdf.bullet(t)
    pdf.h3("NO (despues del launch)")
    for t in [
        "Portal privado, login, team matching",
        "Admin panel completo",
        "Demo Day en vivo / votacion Realtime",
        "Galeria dinamica de proyectos",
        "CMS pesado / Edge Functions complejas",
    ]:
        pdf.bullet(t)
    pdf.callout(
        "Entrega profesional del dia 5 = landing + postulacion funcionando. "
        "La plataforma completa es Fase 2+."
    )

    # 4 Stack
    pdf.add_page()
    pdf.h1("4. Stack tecnico")
    pdf.kv("Dominio / DNS / WAF", "Cloudflare")
    pdf.kv("Hosting / Deploy", "Vercel (preview por PR)")
    pdf.kv("Framework", "Next.js App Router + TypeScript")
    pdf.kv("UI", "Tailwind CSS + tokens CSS (marca)")
    pdf.kv("Animaciones", "Motion (ex Framer Motion)")
    pdf.kv("Backend / Auth / DB", "Supabase (Postgres + RLS + Storage)")
    pdf.kv("Forms", "Zod + React Hook Form + Server Actions")
    pdf.kv("Email (opcional dia 5)", "Resend")
    pdf.kv("Captcha", "Cloudflare Turnstile")
    pdf.ln(2)
    pdf.h3("Por que este stack")
    pdf.body(
        "Next + Supabase es el sweet spot para landing + postulaciones + crecimiento "
        "a portal. Motion cubre animaciones premium sin GSAP. Cloudflare + Vercel "
        "dan dominio profesional y previews para trabajar en pareja."
    )
    pdf.h3("Estructura de carpetas mental")
    pdf.bullet("app/(marketing)/  — paginas publicas")
    pdf.bullet("components/layout, marketing, motion, spark, ui")
    pdf.bullet("lib/content/  — todo el copy (no hardcode en JSX)")
    pdf.bullet("lib/motion.ts  — tokens de animacion")
    pdf.bullet("public/  — logo + spark")
    pdf.bullet("supabase/migrations/  — cuando llegue el form")

    # 5 Landing structure
    pdf.add_page()
    pdf.h1("5. Estructura del landing (orden de scroll)")
    sections = [
        "0 Announcement bar — estado de convocatoria",
        "1 Header — logo, nav, Postularme, link ToB",
        "2 Hero — que / cuando / cupos / CTAs / Spark",
        "3 Confianza — ToB + TEC + aliados confirmados",
        "4 Que es — 5 pasos: Postulate, Conecta, Construye, Presenta, Continua",
        "5 Quienes pueden — tech / producto / negocio-impacto",
        "6 Tracks — GreenTrack, MediTrack, FinTrack + Top 3 global",
        "7 Retos — grid filtrable (solo retos completos)",
        "8 Modalidades — Ideacion vs MVP (evaluacion proporcional)",
        "9 Programa — 17 apertura · 18 build · 19 entrega · 20 Demo Day",
        "10 Postulacion + requisitos — 60 cupos, estados, team matching",
        "11 Mentores / Jurado / Rubrica — transparencia",
        "12 Premios — Top 3 + continuidad (montos solo si confirmados)",
        "13 Aliados — CTAs: patrocinar / reto / mentor",
        "14 FAQ — eliminar objeciones",
        "15 CTA final + Footer — legales + contacto",
    ]
    for s in sections:
        pdf.bullet(s)
    pdf.ln(1)
    pdf.callout(
        "Regla editorial: cada seccion responde UNA pregunta y cierra con UNA accion. "
        "Nada se publica por decoracion."
    )

    # 6 Content rules
    pdf.add_page()
    pdf.h1("6. Contenido y diseno — reglas de oro")
    pdf.h3("Copy")
    pdf.bullet("Hero H1: «Cuatro dias para convertir retos reales en soluciones con impacto.»")
    pdf.bullet("Mensaje obligatorio: enviar solicitud NO garantiza cupo")
    pdf.bullet("Nunca publicar premios/logos/mentores sin confirmar")
    pdf.bullet("Placeholder honestos > datos inventados (evitar estilo Lovable con speakers fake)")
    pdf.h3("Diseno visual")
    pdf.bullet("Azul oscuro / electrico / celeste + amarillo Spark")
    pdf.bullet("Fondo profundo, glows contenidos, grid sutil")
    pdf.bullet("Hero full-bleed: marca + 1 headline + 1 frase + CTAs + Spark")
    pdf.bullet("No cards en el hero; una idea por seccion")
    pdf.bullet("Spark = guia narrativa, no wallpaper repetido")
    pdf.h3("Momentos Spark (solo 4)")
    pdf.bullet("Hero (idle)")
    pdf.bullet("Confirmacion de postulacion (celebrate)")
    pdf.bullet("CTA final (point)")
    pdf.bullet("Demo Day en espera (waiting)")
    pdf.body("Prohibido: Spark en jurado, rechazos o durante pitch en vivo.")

    # 7 Motion
    pdf.add_page()
    pdf.h1("7. Motion — que es y como usarlo")
    pdf.body(
        "Motion (antes Framer Motion) es una libreria de animacion para React. "
        "En lugar de programar animaciones a mano, describes ESTADOS visuales "
        "(initial / animate / exit) y Motion interpola, cancela y reanuda bien."
    )
    pdf.h3("Cambio mental")
    pdf.callout(
        "De «como animo esto»  →  a «en que estado esta esto»."
    )
    pdf.h3("Tres capas de movimiento")
    pdf.bullet("Ambiental (8-20s): glows, anillo del logo, Spark flotando")
    pdf.bullet("Explicativo (una vez): timelines, barras, pasos, rubrica")
    pdf.bullet("Interactivo: hover max scale 1.03, tabs, filtros, form")
    pdf.h3("Conceptos que dan el 80%")
    pdf.bullet("initial / animate / transition — entrada basica")
    pdf.bullet("variants + staggerChildren — grids en cascada")
    pdf.bullet("whileHover / whileTap / whileInView — gestos y scroll reveal")
    pdf.h3("Conceptos premium")
    pdf.bullet("AnimatePresence — animar salidas (filtros de retos)")
    pdf.bullet("layout / layoutId — FAQ y tabs Ideacion/MVP")
    pdf.bullet("useScroll + useTransform — linea de agenda al scroll")
    pdf.bullet("pathLength — dibujar anillo del logo / conexiones")
    pdf.bullet("Motion values + useSpring — animar sin re-renders")
    pdf.bullet("useAnimate — secuencias (barras → anillo → estrella)")
    pdf.h3("Reglas de rendimiento")
    pdf.bullet("Animar solo transform y opacity (GPU)")
    pdf.bullet("viewport once: true en reveals")
    pdf.bullet("prefers-reduced-motion / MotionConfig reducedMotion=\"user\"")
    pdf.bullet("Menos loops en movil; sin particulas densas")
    pdf.bullet("Confetti max 1s y solo una vez (Demo Day / premios)")
    pdf.h3("Tokens sugeridos")
    pdf.bullet("Rise: 18-24px · Duracion reveal: 450-650ms · Stagger: 80-120ms")
    pdf.bullet("Hover: scale <= 1.03 · Elevacion: 4-8px")
    pdf.bullet("Ease premium: [0.22, 1, 0.36, 1]")
    pdf.bullet("Tween = scroll/carga · Spring = interaccion del usuario")

    # 8 Logo + Spark motion
    pdf.add_page()
    pdf.h1("8. Logo y Spark — especificacion de motion")
    pdf.h3("Logo")
    pdf.bullet("Intro: barras entran → anillo se dibuja → estrella destella")
    pdf.bullet("Idle nav: anillo rota ~22s; hover acelera + destello estrella")
    pdf.bullet("Scroll: logo scale 1→0.85; header con blur 16-20px")
    pdf.bullet("Ideal: SVG inline (PNG esta bien en Dia 1)")
    pdf.h3("Spark — estados")
    pdf.bullet("idle — float y:[-10,0] 5.5s + rotate ±2°")
    pdf.bullet("enter — scale 0.85→1, delay 0.3s")
    pdf.bullet("hover — tilt 6°, scale 1.05, una chispa")
    pdf.bullet("point — inclinado al CTA (CTA final)")
    pdf.bullet("celebrate — bounce + chispas (confirmacion form)")
    pdf.bullet("waiting — float lento 8s (/en-vivo)")

    # 9 Day plan
    pdf.add_page()
    pdf.h1("9. Plan Dia 1 (4 horas)")
    pdf.body("Meta: repo + Vercel + tokens + Header/Footer + Hero con Spark.")
    pdf.h3("Bloque 1 (50 min) — cimientos")
    pdf.bullet("create-next-app (TS + Tailwind + App Router)")
    pdf.bullet("GitHub repo + push main")
    pdf.bullet("Importar en Vercel → preview URL")
    pdf.h3("Bloque 2 (60 min) — marca")
    pdf.bullet("public/logo-hackatob.png + public/spark.png")
    pdf.bullet("CSS variables de marca en globals.css")
    pdf.bullet("Header + Footer + layout")
    pdf.h3("Bloque 3 (75 min) — Hero")
    pdf.bullet("Copy oficial + metricas + CTAs")
    pdf.bullet("Responsive 390px")
    pdf.bullet("Motion minimo: reveal titulo + Spark float")
    pdf.h3("Bloque 4 (40 min) — cierre pro")
    pdf.bullet("README + mensaje al companhero con links")
    pdf.bullet("Retro personal: que aprendi / que corto / Dia 2")
    pdf.callout(
        "Checkpoints Dia 1: localhost hero · preview Vercel · nav con link ToB · "
        "commits claros · mensaje al companhero."
    )

    pdf.h3("Dias 2-5 (mapa corto)")
    pdf.bullet("Dia 2: confianza, que es, quien puede, tracks, retos")
    pdf.bullet("Dia 3: modalidades, agenda, requisitos, FAQ, CTA final")
    pdf.bullet("Dia 4: form postulacion + pulido responsive/a11y")
    pdf.bullet("Dia 5: copy final, OG, dominio Cloudflare, soft launch")

    # 10 Git workflow
    pdf.add_page()
    pdf.h1("10. Flujo profesional (Git + equipo)")
    pdf.bullet("Nunca trabajar directo en main (despues del setup)")
    pdf.bullet("Rama: feature/hero-spark")
    pdf.bullet("Commits: feat: / fix: / style: / docs:")
    pdf.bullet("1 PR = 1 cosa; pedir review al companhero")
    pdf.bullet("Preview de Vercel en el PR = revisar sin pelear")
    pdf.h3("Standup async (3 lineas)")
    pdf.body("Hoy: ...\nManana: ...\nBloqueo: ...")
    pdf.h3("Como aprender sin bloquearte")
    pdf.bullet("70/30: documentacion minima + construir")
    pdf.bullet("Si algo tarda >2h (auth, admin, CMS): cortalo")
    pdf.bullet("Roto en staging > perfecto en la cabeza")
    pdf.bullet("Preguntar sin miedo; PRs chicos; README siempre")

    # 11 Learning path Motion
    pdf.add_page()
    pdf.h1("11. Ruta de aprendizaje Motion (practica)")
    steps = [
        "1 initial/animate/transition → titulo del Hero",
        "2 whileHover/whileTap → botones Postularme",
        "3 whileInView once → componente Reveal",
        "4 variants + stagger → grid de tracks",
        "5 loops Infinitos → Spark float + glow",
        "6 layout → acordeon FAQ",
        "7 layoutId → tabs Ideacion/MVP",
        "8 AnimatePresence → filtros de retos",
        "9 useScroll/useTransform → timeline agenda",
        "10 pathLength → anillo del logo",
        "11 motion values + spring → glow al mouse (opcional)",
        "12 useAnimate → intro del logo (opcional)",
        "13 MotionConfig + LazyMotion → optimizacion final",
    ]
    for s in steps:
        pdf.bullet(s)
    pdf.ln(2)
    pdf.callout(
        "Pasos 1-5 = Dia 1-2. Pasos 11-13 solo si sobra tiempo el Dia 5."
    )

    # 12 Checklist
    pdf.add_page()
    pdf.h1("12. Checklist de lanzamiento")
    for t in [
        "En <20s se entiende que / cuando / cupos / como postular",
        "Mobile usable sin zoom",
        "CTA Postularme en nav + hero + final",
        "Form recibe datos reales",
        "Sin logos/premios no confirmados",
        "HTTPS + dominio apuntando",
        "Title + Open Graph correctos",
        "prefers-reduced-motion respetado",
        "Reglamento / privacidad / PI / IA enlazados o placeholder honesto",
        "Link cruzado ToB ↔ HackaToB funcionando",
    ]:
        pdf.bullet(f"[ ] {t}")

    pdf.ln(6)
    pdf.h2("Frase para recordar")
    pdf.callout(
        "Landing corta que convierte + sitemap profundo despues. "
        "Motion explica, no decora. Spark guia, no satura. "
        "Dos repos, un dominio padre, un objetivo: postulaciones de calidad."
    )
    pdf.ln(4)
    pdf.set_font("Helvetica", "I", 9)
    pdf.set_text_color(100, 116, 139)
    pdf.multi_cell(
        0,
        5,
        "Basado en: Documento Maestro Landing HackaToB 2026, arquitectura "
        "Cloudflare/Vercel/Next/Supabase/Motion, y plan de trabajo ToB + HackaToB.\n"
        "Technology on Business · Tecnologico de Costa Rica · Cartago",
    )

    OUT.parent.mkdir(parents=True, exist_ok=True)
    pdf.output(str(OUT))
    print(f"OK:{OUT}")


if __name__ == "__main__":
    build()
