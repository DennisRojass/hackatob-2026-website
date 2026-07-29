# -*- coding: utf-8 -*-
"""Generate HackaToB moderator speeches PDF."""
from pathlib import Path

try:
    from fpdf import FPDF
except ImportError:
    import subprocess
    import sys

    subprocess.check_call([sys.executable, "-m", "pip", "install", "fpdf2", "-q"])
    from fpdf import FPDF


OUT = Path(__file__).resolve().parents[1] / "HackaToB_Guia_Speeches_Moderador.pdf"

# Windows system fonts with full Spanish support
FONT_DIR = Path(r"C:\Windows\Fonts")
FONT_REG = FONT_DIR / "arial.ttf"
FONT_BOLD = FONT_DIR / "arialbd.ttf"
FONT_ITALIC = FONT_DIR / "ariali.ttf"
FONT_BI = FONT_DIR / "arialbi.ttf"


SPEECHES = [
    {
        "n": 1,
        "title": "Apertura oficial del evento",
        "when": "Día 1, después del check-in",
        "duration": "2:30",
        "tone": "Cálido, con peso institucional",
        "dont": "Premios sin confirmar, cifras no firmadas, ni «esto va a ser muy difícil».",
        "body": (
            "Buenos días. Bienvenidos a HackaToB 2026, en el Tecnológico de Costa Rica.\n\n"
            "Durante los próximos cuatro días, ustedes son sesenta personas con una tarea "
            "muy concreta: convertir retos reales de este país en soluciones con impacto. "
            "No van a simular un proyecto. Van a construir algo que el jueves defenderán "
            "frente a un jurado.\n\n"
            "Quiero ser claro en algo desde el minuto uno: aquí no gana el equipo que "
            "escriba más código. Gana el equipo que entienda mejor un problema, que "
            "proponga algo viable, y que lo demuestre con honestidad.\n\n"
            "Van a tener mentores, van a tener tiempo protegido para construir, y van a "
            "tener una regla del juego transparente que les voy a explicar en un momento.\n\n"
            "Lo único que les pido hoy es esto: elijan un problema que de verdad les "
            "importe. Los siguientes tres días van a ser mucho más fáciles si lo hacen "
            "bien hoy.\n\n"
            "Bienvenidos. Empecemos."
        ),
    },
    {
        "n": 2,
        "title": "Reglas del juego: tracks, modalidades y rúbrica",
        "when": "Día 1, justo después de la apertura",
        "duration": "3:00",
        "tone": "Didáctico, cero ambigüedad",
        "dont": "Improvisar pesos de la rúbrica. Tenla proyectada mientras hablas.",
        "body": (
            "Antes de que formen equipos, necesito que todos salgan de esta sala "
            "entendiendo tres cosas: dónde compiten, cómo compiten, y cómo se evalúan.\n\n"
            "Primero, los tracks. GreenTrack es sostenibilidad y clima. MediTrack es "
            "salud digital. FinTrack es finanzas e inclusión. Eligen uno. Los tres "
            "compiten además por el Top 3 global.\n\n"
            "Segundo, las modalidades. Pueden entrar en Ideación o en MVP funcional. "
            "Ideación significa problema validado, propuesta de valor, prototipo "
            "navegable y hoja de ruta. MVP significa producto demostrable, con "
            "arquitectura y repositorio. Y esto es importante: se evalúan de forma "
            "proporcional a la modalidad que eligieron. Un buen Ideación gana a un MVP "
            "mediocre. No elijan MVP por orgullo.\n\n"
            "Tercero, la rúbrica. No hay sorpresas: Impacto y Viabilidad técnica valen "
            "veinte por ciento cada uno. Problema, Innovación y Producto/UX valen quince "
            "cada uno. Continuidad diez. Pitch cinco.\n\n"
            "Léanla bien, porque es literalmente el mapa de dónde poner su energía.\n\n"
            "Última cosa: pueden usar herramientas de inteligencia artificial, con una "
            "condición — lo declaran de forma transparente en su entrega. Ocultar eso "
            "sí es motivo de sanción.\n\n"
            "¿Preguntas sobre reglas? Las de producto se las guardan para los mentores."
        ),
    },
    {
        "n": 3,
        "title": "Cierre del Día 1 — lanzamiento a construir",
        "when": "Día 1, final de jornada",
        "duration": "1:30",
        "tone": "Enfoque y calma",
        "dont": "No anuncies cambios de agenda de viva voz sin publicarlas en el canal oficial.",
        "body": (
            "Cierro el día uno. Hoy hicieron lo más importante y lo menos visible: "
            "eligieron equipo, track y problema.\n\n"
            "Mañana el objetivo es uno solo: validar. Quiero que mañana en la tarde "
            "cada equipo pueda decirme quién sufre este problema y cómo lo saben. No "
            "una suposición. Evidencia: una entrevista, un dato, una fuente.\n\n"
            "Les voy a pedir algo que va contra su instinto: no se lancen a construir "
            "esta noche sin evidencia. El error más caro de una hackathon es construir "
            "tres días la solución a un problema que nadie tenía.\n\n"
            "Mañana arrancamos con un stand-up de dos minutos por equipo: qué hicieron, "
            "qué harán hoy, dónde están bloqueados.\n\n"
            "Todos los anuncios oficiales salen por el canal oficial. Si algo no salió "
            "por ahí, no es oficial.\n\n"
            "Descansen de verdad. Nos vemos mañana."
        ),
    },
    {
        "n": 4,
        "title": "Stand-up matutino",
        "when": "Días 2 y 3, al abrir la jornada",
        "duration": "1:00 (tú) + 2 min por equipo",
        "tone": "Rápido, casi deportivo",
        "dont": "No dejes que se convierta en pitch. Corta con amabilidad si se alargan.",
        "body": (
            "Buenos días. Arrancamos con stand-up. Formato estricto, dos minutos por "
            "equipo, tres frases:\n\n"
            "Uno: qué lograron. Dos: qué van a lograr hoy. Tres: cuál es su bloqueo.\n\n"
            "No es una presentación, no necesitan slides, no me expliquen su solución. "
            "Esto no es para impresionarme, es para que los mentores sepan a quién ir a "
            "rescatar primero.\n\n"
            "Si su bloqueo es técnico, lo anoto y les asigno mentoría. Si su bloqueo es "
            "de alcance, hablamos ustedes y yo.\n\n"
            "Empezamos por [nombre del equipo]."
        ),
        "tip": "Anota bloqueos en una lista visible y asigna mentores en el acto.",
    },
    {
        "n": 5,
        "title": "Checkpoint de mediodía — el llamado al realismo",
        "when": "Día 2, mediodía",
        "duration": "1:30",
        "tone": "Honesto, protector, sin miedo",
        "dont": "No humilles a ningún equipo en público. Empuja al realismo, no a la vergüenza.",
        "body": (
            "Pausa de dos minutos. Este es el checkpoint más incómodo del evento y es "
            "el que más equipos salva.\n\n"
            "Quiero que cada equipo responda tres preguntas, entre ustedes, en voz alta:\n\n"
            "Primera: ¿qué van a demostrar el jueves en tres minutos? Si no lo pueden "
            "decir en una frase, su alcance está mal.\n\n"
            "Segunda: ¿qué van a cortar? No pregunto si van a cortar. Van a cortar. "
            "Pregunto qué.\n\n"
            "Tercera: ¿alguien de este equipo está trabajando solo? Si una persona lleva "
            "todo el peso, ese equipo no llega al jueves.\n\n"
            "Tienen diez minutos para decidirlo y quiero que me digan qué cortaron. "
            "Reducir alcance aquí no es rendirse: es la decisión que más puntos les va "
            "a dar en viabilidad."
        ),
    },
    {
        "n": 6,
        "title": "Anuncio del Feature Freeze",
        "when": "Día 3, media tarde",
        "duration": "1:00",
        "tone": "Firme, no negociable",
        "dont": "No hagas excepciones «solo para este equipo». La regla o es de todos o no existe.",
        "body": (
            "Atención todos. A partir de este momento entramos en feature freeze.\n\n"
            "Significa que no se agrega nada nuevo. Nada. Lo que existe ahora es lo que "
            "van a presentar mañana.\n\n"
            "De aquí en adelante solo se hace tres cosas: estabilizar lo que ya "
            "funciona, preparar la demo, y ensayar el pitch.\n\n"
            "Sé exactamente lo que están pensando: «es solo una cosa más y queda "
            "increíble». Esa cosa más es la que rompe la demo mañana frente al jurado. "
            "Lo he visto muchas veces.\n\n"
            "Su prioridad ahora es que algo funcione sin fallar, no que todo exista a "
            "medias.\n\n"
            "A partir de ahora: pulir, no inventar."
        ),
    },
    {
        "n": 7,
        "title": "Briefing de entrega oficial",
        "when": "Día 3, antes del deadline",
        "duration": "2:00",
        "tone": "Operativo, con countdown visible",
        "dont": "No extiendas el deadline en vivo. Si hay excepción, es previa y escrita.",
        "body": (
            "Escuchen bien esto, porque es lo único del evento que no tiene segunda "
            "oportunidad.\n\n"
            "La ventana de entrega oficial cierra a las [HORA]. El reloj está "
            "proyectado ahí y es el reloj que manda.\n\n"
            "Una entrega válida incluye: el enlace a su proyecto o repositorio, la "
            "documentación mínima según su modalidad, la declaración de uso de "
            "herramientas de IA, y el nombre de quien presenta.\n\n"
            "Tres advertencias que les van a salvar el jueves:\n\n"
            "Uno: suban un video de respaldo de la demo. Si mañana falla el internet, "
            "ese video es su proyecto.\n\n"
            "Dos: no dependan de una sola laptop. Que dos personas del equipo tengan "
            "todo.\n\n"
            "Tres: entreguen treinta minutos antes, no en el último minuto. Los "
            "últimos minutos siempre se llenan de problemas.\n\n"
            "Después del cierre publico el orden de presentación de mañana. Ese orden "
            "no se cambia."
        ),
    },
    {
        "n": 8,
        "title": "Apertura de Demo Day + reglas de pitch",
        "when": "Día 4, inicio",
        "duration": "2:30",
        "tone": "Ceremonial al abrir, quirúrgico al explicar reglas",
        "dont": "No improvises tiempos distintos por equipo. Justicia = misma regla para todos.",
        "body": (
            "Buenos días, y bienvenidos al Demo Day de HackaToB 2026.\n\n"
            "Hace tres días estas personas llegaron con una idea y una hoja en blanco. "
            "Hoy tienen un proyecto que van a defender. Eso ya es un logro, "
            "independientemente de lo que diga el jurado en unas horas.\n\n"
            "Un agradecimiento al Tecnológico de Costa Rica, a nuestros mentores que "
            "trabajaron sin reflectores, y al jurado por su tiempo.\n\n"
            "Ahora las reglas, y aplican igual para todos sin excepción.\n\n"
            "Cada equipo tiene tres a cuatro minutos de presentación. La demo va "
            "dentro de ese tiempo. A los treinta segundos finales les hago una señal. "
            "Cuando el tiempo termina, corto. No es descortesía, es justicia con el "
            "equipo que sigue.\n\n"
            "Después hay dos a tres minutos de preguntas del jurado. Todos los equipos "
            "reciben la misma cantidad de preguntas.\n\n"
            "Al público: sin interrupciones durante los pitches. Aplausos al final, y "
            "aplaudan fuerte.\n\n"
            "El jurado evalúa con la rúbrica que todos conocen desde el día uno. Está "
            "proyectada.\n\n"
            "Primer equipo, prepárense. Empezamos."
        ),
    },
    {
        "n": 9,
        "title": "Micro-script repetible por equipo (Demo Day)",
        "when": "Día 4, entre cada pitch",
        "duration": "20 segundos por transición",
        "tone": "Neutro y parejo — la neutralidad es la justicia",
        "dont": "No rescates al equipo en el Q&A. Tú no eres su abogado.",
        "body": (
            "AL PRESENTAR:\n"
            "Recibimos a [nombre del equipo], track [track], modalidad [Ideación / MVP]. "
            "Tienen [N] minutos. Cuando estén listos… empiezan ahora.\n\n"
            "A LOS 30 SEGUNDOS:\n"
            "Treinta segundos.\n\n"
            "AL CORTAR:\n"
            "Tiempo. Gracias. Jurado, adelante con las preguntas.\n\n"
            "AL CERRAR EL Q&A:\n"
            "Cerramos. Un aplauso para [equipo]. Siguiente equipo, un minuto para el "
            "cambio de setup.\n\n"
            "SI LA DEMO FALLA:\n"
            "Pausamos su tiempo treinta segundos. Si no levanta, pasamos al video de "
            "respaldo."
        ),
        "tip": (
            "Disciplinas que no puedes romper: misma introducción y mismo tiempo para "
            "todos; no rescatar en Q&A; aplicar el plan B de demo fallida igual con todos."
        ),
    },
    {
        "n": 10,
        "title": "Premiación y cierre del evento",
        "when": "Día 4, final",
        "duration": "3:00",
        "tone": "Celebración genuina, cierre con futuro",
        "dont": "Nunca leas resultados desde el celular. Papel o pantalla; practica los nombres.",
        "body": (
            "Antes de los resultados, quiero decir algo que es más importante que el "
            "podio.\n\n"
            "Hace tres días había sesenta personas que en su mayoría no se conocían. "
            "Hoy hay [N] proyectos presentados y defendidos en público. Ninguno de "
            "ustedes se va con las manos vacías: se van con un proyecto, con un "
            "equipo, y con la evidencia de que pueden construir algo real en cuatro "
            "días.\n\n"
            "El jurado deliberó con la rúbrica publicada desde el día uno. Las "
            "decisiones fueron cerradas y hubo discusión seria en cada categoría. Eso "
            "habla del nivel.\n\n"
            "Empezamos con las menciones especiales. [Mención]: para [equipo], por "
            "[razón concreta].\n\n"
            "(Pausa antes del Top 3 — el silencio hace el momento.)\n\n"
            "Tercer lugar de HackaToB 2026: [equipo].\n"
            "Segundo lugar: [equipo].\n"
            "Y el primer lugar de HackaToB 2026: [equipo]. Felicitaciones.\n\n"
            "Una última cosa, y va para todos, no solo para el podio: HackaToB no "
            "termina hoy. Los proyectos con potencial tienen camino de continuidad "
            "con ToB y con el TEC, y vamos a contactar a los equipos que quieran "
            "seguir. Lo que construyeron aquí puede no morir el jueves — eso depende "
            "de ustedes.\n\n"
            "Gracias a los mentores, al jurado, al TEC y a cada persona que no durmió "
            "bien esta semana.\n\n"
            "Innova. Conecta. Impacta. Nos vemos en la próxima. Foto grupal, todos aquí."
        ),
    },
]


class PDF(FPDF):
    def __init__(self):
        super().__init__(format="A4")
        self.set_auto_page_break(auto=True, margin=16)
        if FONT_REG.exists():
            self.add_font("Body", "", str(FONT_REG))
            self.add_font("Body", "B", str(FONT_BOLD))
            self.add_font("Body", "I", str(FONT_ITALIC))
            if FONT_BI.exists():
                self.add_font("Body", "BI", str(FONT_BI))
            self.font_family = "Body"
        else:
            self.font_family = "Helvetica"

    def header(self):
        if self.page_no() == 1:
            return
        self.set_font(self.font_family, "I", 8)
        self.set_text_color(100, 116, 139)
        self.cell(0, 6, "HackaToB 2026  |  Guía de Speeches del Moderador", align="L")
        self.ln(8)

    def footer(self):
        self.set_y(-12)
        self.set_font(self.font_family, "I", 8)
        self.set_text_color(148, 163, 184)
        self.cell(0, 8, f"Página {self.page_no()}/{{nb}}", align="C")

    def h1(self, text):
        self.set_font(self.font_family, "B", 18)
        self.set_text_color(10, 31, 68)
        self.multi_cell(0, 8, text)
        self.ln(2)

    def h2(self, text):
        self.ln(2)
        self.set_font(self.font_family, "B", 13)
        self.set_text_color(0, 114, 188)
        self.multi_cell(0, 7, text)
        self.ln(1)

    def h3(self, text):
        self.ln(1)
        self.set_font(self.font_family, "B", 11)
        self.set_text_color(15, 23, 42)
        self.multi_cell(0, 6, text)
        self.ln(0.5)

    def body(self, text):
        self.set_font(self.font_family, "", 10)
        self.set_text_color(30, 41, 59)
        self.multi_cell(0, 5.4, text)
        self.ln(1)

    def bullet(self, text):
        self.set_font(self.font_family, "", 10)
        self.set_text_color(30, 41, 59)
        x = self.get_x()
        self.set_x(x + 3)
        self.multi_cell(0, 5.2, f"•  {text}")

    def callout(self, text):
        self.ln(1)
        self.set_fill_color(240, 249, 255)
        self.set_draw_color(102, 204, 238)
        self.set_font(self.font_family, "B", 9)
        self.set_text_color(10, 31, 68)
        self.multi_cell(0, 5.5, text, border=1, fill=True)
        self.ln(2)

    def meta_row(self, label, value):
        self.set_font(self.font_family, "B", 9)
        self.set_text_color(0, 114, 188)
        self.write(5, f"{label}: ")
        self.set_font(self.font_family, "", 9)
        self.set_text_color(30, 41, 59)
        self.multi_cell(0, 5, value)

    def speech_box(self, text):
        self.ln(1)
        self.set_fill_color(248, 250, 252)
        self.set_draw_color(226, 232, 240)
        self.set_font(self.font_family, "", 10)
        self.set_text_color(15, 23, 42)
        # Slight inset feel
        self.set_x(self.l_margin + 2)
        usable = self.w - self.l_margin - self.r_margin - 4
        self.multi_cell(usable, 5.6, text, border=1, fill=True)
        self.ln(2)


def build():
    pdf = PDF()
    pdf.alias_nb_pages()
    pdf.add_page()

    # Cover
    pdf.ln(24)
    pdf.set_font(pdf.font_family, "B", 28)
    pdf.set_text_color(10, 31, 68)
    pdf.multi_cell(0, 12, "HackaToB 2026")
    pdf.set_font(pdf.font_family, "B", 16)
    pdf.set_text_color(0, 114, 188)
    pdf.multi_cell(0, 8, "Guía de Speeches del Moderador")
    pdf.ln(3)
    pdf.set_font(pdf.font_family, "", 11)
    pdf.set_text_color(51, 65, 85)
    pdf.multi_cell(
        0,
        6,
        "Los 10 discursos más importantes para moderar el evento con claridad, "
        "ritmo y justicia. Textos listos para leer en voz alta.",
    )
    pdf.ln(4)
    pdf.callout(
        "Innova. Conecta. Impacta.  |  17–20 agosto 2026  |  Demo Day 20  |  "
        "TEC Cartago  |  Technology on Business"
    )
    pdf.ln(2)
    pdf.h3("Cómo usar esta guía")
    for t in [
        "Ningún speech pasa de 3 minutos. La autoridad viene de la brevedad.",
        "Practica en voz alta una vez el día anterior.",
        "Los corchetes [así] son placeholders: rellénalos antes de salir a escena.",
        "Imprime el Speech 9 aparte: lo vas a usar 10–15 veces el Demo Day.",
        "Una sola voz oficial da tiempos y reglas. Eso eres tú.",
    ]:
        pdf.bullet(t)
    pdf.ln(2)
    pdf.set_font(pdf.font_family, "I", 9)
    pdf.set_text_color(100, 116, 139)
    pdf.multi_cell(0, 5, "Documento operativo del organizador · Versión 1.0 · Julio 2026")

    # Index
    pdf.add_page()
    pdf.h1("Índice de los 10 speeches")
    for s in SPEECHES:
        pdf.bullet(f"{s['n']:02d}. {s['title']}  —  {s['when']}  ({s['duration']})")
    pdf.ln(3)
    pdf.callout(
        "Mapa de los 4 días: Día 1 alinear · Día 2 validar · Día 3 entregar · Día 4 defender."
    )

    # Speeches
    for s in SPEECHES:
        pdf.add_page()
        pdf.h1(f"Speech {s['n']:02d}")
        pdf.h2(s["title"])
        pdf.meta_row("Cuándo", s["when"])
        pdf.meta_row("Duración", s["duration"])
        pdf.meta_row("Tono", s["tone"])
        pdf.ln(2)
        pdf.h3("Texto para decir")
        pdf.speech_box(s["body"])
        pdf.callout(f"No digas / no hagas: {s['dont']}")
        if s.get("tip"):
            pdf.h3("Tip del moderador")
            pdf.body(s["tip"])

    # Annex mentors
    pdf.add_page()
    pdf.h1("Anexo A — Briefing a mentores")
    pdf.body(
        "Léelo en 90 segundos el Día 1, antes de que entren a la sala."
    )
    pdf.speech_box(
        "Gracias por estar. Su rol no es construir el proyecto del equipo. Su rol es "
        "hacer mejores preguntas y desbloquear.\n\n"
        "Reglas: mismos minutos por equipo cuando haya fila; no tomen el teclado; "
        "si ven un bloqueo crítico, me avisan a mí o al floor lead.\n\n"
        "Pregunta mágica: «¿Qué van a demostrar el jueves en tres minutos?»\n\n"
        "Si un equipo está demasiado amplio, ayúdenlos a cortar. Eso es mentoría de "
        "calidad, no falta de ambición."
    )

    # Annex jury
    pdf.h1("Anexo B — Briefing a jurado")
    pdf.body(
        "Léelo el Día 3 al cierre o el Día 4 temprano, antes de los pitches."
    )
    pdf.speech_box(
        "Evalúan con la rúbrica publicada: Impacto 20%, Viabilidad técnica 20%, "
        "Problema 15%, Innovación 15%, Producto/UX 15%, Continuidad 10%, Pitch 5%.\n\n"
        "Evalúan proporcional a la modalidad (Ideación vs MVP). Más código no es "
        "automáticamente más puntos.\n\n"
        "Misma cantidad de preguntas por equipo. Si hay conflicto de interés, se "
        "abstienen de puntuar ese equipo y lo reportan antes.\n\n"
        "Desempate: Impacto → Viabilidad → Pitch.\n\n"
        "La deliberación es cerrada. No se discuten scores con el público."
    )

    # Checklist
    pdf.add_page()
    pdf.h1("Anexo C — Checklist rápido por día")
    pdf.h3("Día 1 — Apertura + workshops")
    for t in [
        "Check-in completo",
        "Speech 01 apertura",
        "Speech 02 reglas + rúbrica proyectada",
        "Equipos cerrados (máx. 4)",
        "Track + modalidad elegidos",
        "Speech 03 cierre + anuncio stand-up",
    ]:
        pdf.bullet(f"[ ] {t}")
    pdf.h3("Día 2 — Validar y construir")
    for t in [
        "Speech 04 stand-up",
        "Mentorías asignadas",
        "Speech 05 checkpoint mediodía",
        "Evidencia de problema por equipo",
        "Prototipo o arquitectura visible",
    ]:
        pdf.bullet(f"[ ] {t}")
    pdf.h3("Día 3 — Integrar y entregar")
    for t in [
        "Speech 04 stand-up",
        "Speech 06 feature freeze",
        "Ensayos de pitch con timer",
        "Speech 07 entrega oficial + countdown",
        "Tech check + orden de presentación publicado",
    ]:
        pdf.bullet(f"[ ] {t}")
    pdf.h3("Día 4 — Demo Day")
    for t in [
        "Briefing jurado (Anexo B)",
        "Speech 08 apertura Demo Day",
        "Speech 09 en cada pitch (timer visible)",
        "Deliberación cerrada",
        "Speech 10 premiación + cierre + foto",
    ]:
        pdf.bullet(f"[ ] {t}")

    pdf.ln(6)
    pdf.h2("Frase para recordar")
    pdf.callout(
        "Una voz oficial. Un objetivo por día. Mismos tiempos para todos. "
        "Ritmo + claridad + justicia."
    )
    pdf.ln(3)
    pdf.set_font(pdf.font_family, "I", 9)
    pdf.set_text_color(100, 116, 139)
    pdf.multi_cell(
        0,
        5,
        "HackaToB 2026 · Technology on Business · Tecnológico de Costa Rica · Cartago\n"
        "Documento para uso del organizador / moderador del evento.",
    )

    OUT.parent.mkdir(parents=True, exist_ok=True)
    pdf.output(str(OUT))
    print(f"OK:{OUT}")


if __name__ == "__main__":
    build()
