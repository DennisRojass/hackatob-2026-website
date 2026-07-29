export const routes = {
  home: "/",
  apply: "/postular",
  contact: "/contacto",
  legal: "/legal",
  legalSlugs: [
    "privacidad",
    "terminos",
    "reglamento",
    "propiedad-intelectual",
    "uso-de-ia",
    "uso-de-imagen",
    "codigo-de-conducta",
  ] as const,
  /** Spec aliases mapped to root (Option A) */
  hackatob: "/hackatob",
  anchors: {
    inicio: "/#inicio",
    respaldo: "/#respaldo",
    experiencia: "/#experiencia",
    participantes: "/#participantes",
    tracks: "/#tracks",
    retos: "/#retos",
    modalidades: "/#modalidades",
    programa: "/#programa",
    participar: "/#participar",
    evaluacion: "/#evaluacion",
    ecosistema: "/#ecosistema",
    premios: "/#premios",
    aliados: "/#aliados",
    trayectoria: "/#trayectoria",
    faq: "/#faq",
    contacto: "/#contacto",
  },
} as const;

export const nav = [
  { href: routes.anchors.experiencia, label: "El evento" },
  { href: routes.anchors.tracks, label: "Tracks" },
  { href: routes.anchors.retos, label: "Retos" },
  { href: routes.anchors.programa, label: "Programa" },
  { href: routes.anchors.participar, label: "Participar" },
  { href: routes.anchors.faq, label: "FAQ" },
] as const;

export const navSecondary = [
  { href: routes.anchors.evaluacion, label: "Evaluación" },
  { href: routes.anchors.ecosistema, label: "Mentores y jurado" },
  { href: routes.anchors.premios, label: "Premios" },
  { href: routes.anchors.aliados, label: "Aliados" },
  { href: routes.anchors.trayectoria, label: "Trayectoria" },
  { href: routes.anchors.contacto, label: "Contacto" },
] as const;
