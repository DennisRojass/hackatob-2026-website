import { siteFromEvent } from "@/config/event";
import {
  campaignPhase as campaignPhaseConfig,
  getAnnouncementCopy as getAnnouncementCopyConfig,
  getPrimaryCta as getPrimaryCtaConfig,
  type CampaignPhase,
} from "@/config/campaign";
import { nav as navConfig, navSecondary as navSecondaryConfig } from "@/config/routes";
import { analytics as analyticsConfig, social as socialConfig } from "@/config/social";
import { mentorsConfirmed as mentorsConfirmedFlag } from "@/lib/content/people";
import {
  allyTypes as allyTypesConfig,
  sponsors as sponsorsPublished,
  sponsorsConfirmed as sponsorsConfirmedFlag,
} from "@/lib/content/partners";

export const site = siteFromEvent;

export type { CampaignPhase };
export const campaignPhase = campaignPhaseConfig;
export const social = socialConfig;
export const analytics = analyticsConfig;
export const mentorsConfirmed = mentorsConfirmedFlag;
export const sponsorsConfirmed = sponsorsConfirmedFlag;
export const getPrimaryCta = getPrimaryCtaConfig;
export const getAnnouncementCopy = getAnnouncementCopyConfig;
export const nav = navConfig;
export const navSecondary = navSecondaryConfig;
export const allyTypes = allyTypesConfig;
export const sponsors = sponsorsPublished;

/** Empty — no fictional mentors. Use lib/content/people.ts */
export const mentors: readonly never[] = [];

export const metrics = [
  { value: "17–20 ago", label: "2026" },
  { value: "80", label: "Participantes" },
  { value: "15–20", label: "Equipos" },
  { value: "4", label: "Tracks" },
  { value: "Top 3", label: "Global" },
] as const;

export const prizes = [
  {
    place: "01",
    title: "1.er lugar global",
    detail: "Reconocimiento Top 3 · visibilidad Demo Day · mentorship de continuidad",
  },
  {
    place: "02",
    title: "2.º lugar global",
    detail: "Exposición ante aliados · feedback del jurado · acceso a red ToB",
  },
  {
    place: "03",
    title: "3.er lugar global",
    detail: "Reconocimiento oficial · oportunidades de conexión con industria",
  },
  {
    place: "Tech",
    title: "Premios tecnológicos",
    detail: "60% evaluación general + 40% especialista tecnológico por track",
  },
] as const;

export const processSteps = [
  {
    id: "01",
    title: "Aprender",
    description: "Formación, reglas, workshops y contexto de los retos.",
  },
  {
    id: "02",
    title: "Definir",
    description: "Problema, usuario, modalidad, roles y plan de equipo.",
  },
  {
    id: "03",
    title: "Construir",
    description: "Validación, diseño, arquitectura y prototipo o MVP.",
  },
  {
    id: "04",
    title: "Validar",
    description: "Pruebas, mentorías, checkpoints y entrega oficial.",
  },
  {
    id: "05",
    title: "Presentar",
    description: "Demo Day, evaluación y Top 3 en el Centro de las Artes.",
  },
  {
    id: "06",
    title: "Conectar",
    description: "Feedback, exposición, continuidad y comunidad ToB.",
  },
] as const;

export const audienceFamilies = [
  {
    title: "Tecnología",
    skills: ["Desarrollo", "IA", "Datos", "Blockchain", "Ciberseguridad", "Ingeniería"],
  },
  {
    title: "Producto y diseño",
    skills: ["UX/UI", "Producto", "Investigación", "Prototipado", "Comunicación"],
  },
  {
    title: "Negocio e impacto",
    skills: ["Negocios", "Finanzas", "Salud", "Sostenibilidad", "Emprendimiento", "Pitch"],
  },
] as const;

export const tracks = [
  {
    slug: "healthtrack",
    name: "HealthTrack",
    title: "Tecnología para vivir mejor",
    color: "var(--health)",
    description:
      "Soluciones en salud, bienestar, tecnología médica, prevención y calidad de vida.",
    lines: [
      "Salud digital",
      "Prevención",
      "Nutrición",
      "Bienestar",
      "Accesibilidad",
      "Datos y seguimiento",
    ],
  },
  {
    slug: "greentrack",
    name: "GreenTrack",
    title: "Innovación para un futuro sostenible",
    color: "var(--green)",
    description:
      "Soluciones ambientales relacionadas con sostenibilidad, agricultura, residuos, comunidades y recursos naturales.",
    lines: [
      "Biodiversidad",
      "Agua",
      "Energía",
      "Residuos",
      "Economía circular",
      "Resiliencia climática",
    ],
  },
  {
    slug: "fintrack",
    name: "FinTrack",
    title: "Soluciones para una economía más accesible",
    color: "var(--fin)",
    description:
      "Soluciones financieras, fintech, transparencia, educación e inclusión económica.",
    lines: [
      "Inclusión financiera",
      "Pagos",
      "Pymes",
      "Educación financiera",
      "Fraude",
      "Ciberseguridad",
    ],
  },
  {
    slug: "the-next-big-thing",
    name: "The Next Big Thing",
    title: "Construye lo que todavía no existe",
    color: "var(--next)",
    description:
      "Soluciones abiertas con alto potencial de impacto, crecimiento o disrupción.",
    lines: [
      "IA",
      "Blockchain",
      "Automatización",
      "Nuevos modelos",
      "Ciudades inteligentes",
      "Alto crecimiento",
    ],
  },
] as const;

export const modalities = [
  {
    slug: "ideacion",
    name: "Ideación",
    description: "Idea estructurada con problema, solución y valor.",
    deliverables: [
      "Problema validado",
      "Usuario definido",
      "Evidencia",
      "Propuesta de valor",
      "Prototipo navegable",
      "Roadmap y pitch",
    ],
  },
  {
    slug: "prototipado",
    name: "Prototipado",
    description: "Representación visual o interactiva de la solución.",
    deliverables: [
      "Flujos de experiencia",
      "Wireframes o prototipo",
      "Validación de usabilidad",
      "Arquitectura inicial",
      "Plan de construcción",
      "Pitch",
    ],
  },
  {
    slug: "mvp-funcional",
    name: "MVP funcional",
    description: "Primera versión operativa con funciones principales.",
    deliverables: [
      "Producto demostrable",
      "Repositorio",
      "Arquitectura",
      "Pruebas",
      "Demo y documentación",
      "Plan de continuidad",
    ],
  },
] as const;

/** Preview lines per track — full challenges publish only when confirmed */
export const challengePreviews = [
  {
    track: "HealthTrack",
    code: "HT",
    color: "var(--health)",
    summary:
      "Salud digital, prevención, nutrición, bienestar y accesibilidad para comunidades prioritarias.",
    themes: ["Salud digital", "Prevención", "Bienestar", "Accesibilidad"],
  },
  {
    track: "GreenTrack",
    code: "GT",
    color: "var(--green)",
    summary:
      "Biodiversidad, agua, energía, residuos y resiliencia climática con impacto local.",
    themes: ["Biodiversidad", "Agua", "Energía", "Economía circular"],
  },
  {
    track: "FinTrack",
    code: "FT",
    color: "var(--fin)",
    summary:
      "Inclusión financiera, pymes, educación financiera y banca digital accesible.",
    themes: ["Inclusión", "Pymes", "Pagos", "Educación financiera"],
  },
  {
    track: "The Next Big Thing",
    code: "TNBT",
    color: "var(--next)",
    summary:
      "IA, tecnologías emergentes, automatización y nuevos modelos de alto potencial.",
    themes: ["IA", "Automatización", "Blockchain", "Nuevos modelos"],
  },
] as const;

export const agenda = [
  {
    day: "Lunes 17",
    name: "Activación y definición",
    focus: "Aprender, conectar y definir",
    result: "Equipo, track, reto, modalidad, problema, roles, plan y mentor",
    progress: 20,
  },
  {
    day: "Martes 18",
    name: "Diseño y desarrollo I",
    focus: "Definir y construir",
    result: "Problema validado, flujo, arquitectura, repositorio y prototipo",
    progress: 55,
  },
  {
    day: "Miércoles 19",
    name: "Desarrollo II y entrega",
    focus: "Integrar, probar y preparar",
    result: "Entrega final, pitch, demo y documentación",
    progress: 90,
  },
  {
    day: "Jueves 20",
    name: "Demo Day",
    focus: "Presentar, evaluar y conectar",
    result: "6 finalistas, Top 3 y oportunidades de continuidad",
    progress: 100,
  },
] as const;

export const applicationSteps = [
  "Conocer el evento y los tracks",
  "Revisar requisitos y modalidades",
  "Dejar tus datos de interés",
  "Esperar la apertura del formulario oficial",
  "Completar la solicitud cuando esté disponible",
  "Evaluación y selección",
  "Confirmación de cupo",
  "Team Matching",
  "Participación en HackaToB",
] as const;

export const requirements = [
  "Disponibilidad durante los cuatro días",
  "Participación activa y trabajo en equipo",
  "Aceptación del reglamento y código de conducta",
  "Cumplimiento de checkpoints y entregables",
  "Declaración de herramientas de inteligencia artificial",
  "Autorización de uso de datos e imagen cuando corresponda",
] as const;

export const rubric = [
  { criterion: "Comprensión del problema", percent: 15 },
  { criterion: "Impacto", percent: 20 },
  { criterion: "Innovación", percent: 15 },
  { criterion: "Viabilidad técnica", percent: 20 },
  { criterion: "Producto y experiencia de usuario", percent: 15 },
  { criterion: "Continuidad", percent: 10 },
  { criterion: "Pitch y demo", percent: 5 },
] as const;

export const judgeProfiles = [
  "Innovación",
  "Tecnología y arquitectura",
  "Producto y UX",
  "Negocio y escalabilidad",
  "Impacto y viabilidad sectorial",
] as const;

export const faq = [
  {
    q: "¿Quién puede participar?",
    a: "Estudiantes y perfiles de tecnología, producto, diseño, negocio e impacto. Puedes dejar interés individualmente o en equipo. No es obligatorio saber programar ni haber participado antes en un hackathon.",
  },
  {
    q: "¿Cuántos cupos hay?",
    a: "Hasta 80 participantes, organizados en 15 a 20 equipos de máximo 4 personas. Dejar interés o enviar una solicitud no garantiza un cupo.",
  },
  {
    q: "¿Cuáles son los tracks?",
    a: "HealthTrack, GreenTrack, FinTrack y The Next Big Thing. Todos los equipos compiten también por el Top 3 global.",
  },
  {
    q: "¿Qué modalidades existen?",
    a: "Ideación, Prototipado y MVP funcional. La evaluación es proporcional a la modalidad: más código no implica automáticamente mejor calificación.",
  },
  {
    q: "¿Cuándo y dónde es?",
    a: "Del lunes 17 al jueves 20 de agosto de 2026 en el Tecnológico de Costa Rica, Cartago. El Demo Day se realiza en el Centro de las Artes.",
  },
  {
    q: "¿Puedo usar inteligencia artificial?",
    a: "Sí, con declaración transparente de herramientas y cumplimiento del reglamento de uso responsable de IA.",
  },
  {
    q: "¿Cómo se evalúa?",
    a: "Con una rúbrica pública multidisciplinaria y un jurado de cinco personas (tres fijos y dos rotativos). Hay reglas de conflicto de interés y deliberación documentada.",
  },
  {
    q: "¿Cómo contacto al equipo?",
    a: "Technology on Business: tob@itcr.ac.cr. Coordinación de Innovación: derojas@estudiantec.cr. También puedes usar la página de contacto en hackatob.cr/contacto.",
  },
  {
    q: "¿Ya puedo postularme formalmente?",
    a: "Ahora puedes dejar tu interés en /postular. El formulario oficial de postulación se activará en una siguiente fase. Dejar tus datos no garantiza un cupo.",
  },
] as const;

export const gallery = [
  {
    src: "/gallery/equipo-tob-past.png",
    alt: "Participantes de Technology on Business durante una actividad en el Tecnológico de Costa Rica",
    caption: "Comunidad Technology on Business · TEC Cartago",
  },
  {
    src: "/gallery/cierre-cultural.png",
    alt: "Presentación cultural en el Centro de las Artes durante una actividad de Technology on Business",
    caption: "Cultura y escenario · Centro de las Artes / TEC",
  },
] as const;

export const legalPages = [
  { slug: "privacidad", title: "Política de privacidad" },
  { slug: "terminos", title: "Términos y condiciones" },
  { slug: "reglamento", title: "Reglamento oficial" },
  { slug: "propiedad-intelectual", title: "Propiedad intelectual" },
  { slug: "uso-de-ia", title: "Uso responsable de IA" },
  { slug: "uso-de-imagen", title: "Uso de imagen" },
  { slug: "codigo-de-conducta", title: "Código de conducta" },
] as const;

/** Agenda day timestamps (Costa Rica) for live countdown highlight */
export const agendaDays = [
  {
    ...agenda[0],
    startIso: "2026-08-17T09:00:00-06:00",
    endIso: "2026-08-17T18:00:00-06:00",
  },
  {
    ...agenda[1],
    startIso: "2026-08-18T09:00:00-06:00",
    endIso: "2026-08-18T18:00:00-06:00",
  },
  {
    ...agenda[2],
    startIso: "2026-08-19T09:00:00-06:00",
    endIso: "2026-08-19T18:00:00-06:00",
  },
  {
    ...agenda[3],
    startIso: "2026-08-20T09:00:00-06:00",
    endIso: "2026-08-20T18:00:00-06:00",
  },
] as const;
