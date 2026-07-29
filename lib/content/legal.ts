/** Provisional legal copy for Fase 1 — replace with counsel-approved PDFs later */

export const legalBodies: Record<
  string,
  { status: string; paragraphs: string[] }
> = {
  privacidad: {
    status: "Provisional",
    paragraphs: [
      "HackaToB 2026, organizado por Technology on Business (ToB), recoge datos de contacto cuando dejas tu interés o te postulas: nombre, correo, track de interés, perfil y mensaje opcional.",
      "Usamos esos datos únicamente para gestionar la convocatoria, comunicarte novedades del evento y, si aplica, el proceso de selección. No vendemos tu información.",
      "Puedes solicitar acceso, rectificación o eliminación escribiendo a tob@itcr.ac.cr o derojas@estudiantec.cr. Este texto es provisional y se actualizará antes del inicio del evento.",
    ],
  },
  terminos: {
    status: "Provisional",
    paragraphs: [
      "Al usar hackatob.cr y enviar datos de interés, aceptas que la información del sitio es orientativa y puede actualizarse. Dejar interés no crea un contrato de participación ni garantiza cupo.",
      "La participación efectiva en HackaToB 2026 estará sujeta al reglamento oficial, al código de conducta y a la confirmación de cupo por parte de la organización.",
      "ToB se reserva el derecho de modificar fechas, sedes o condiciones por causas de fuerza mayor, comunicándolo por los canales oficiales.",
    ],
  },
  reglamento: {
    status: "En preparación",
    paragraphs: [
      "El reglamento oficial detallará modalidades (Ideación, Prototipado, MVP funcional), checkpoints, entregables, uso de IA, evaluación y sanciones.",
      "Se publicará antes de la apertura del formulario oficial de postulación.",
    ],
  },
  "propiedad-intelectual": {
    status: "En preparación",
    paragraphs: [
      "Como principio general, los equipos conservan la propiedad de lo que construyan, salvo acuerdos específicos con partners de reto que se comunicarán por escrito.",
      "El documento completo se publicará antes del evento.",
    ],
  },
  "uso-de-ia": {
    status: "En preparación",
    paragraphs: [
      "Se permitirá el uso de herramientas de inteligencia artificial con declaración transparente y cumplimiento de un reglamento de uso responsable.",
      "El detalle (qué declarar, qué está prohibido y cómo se verifica) se publicará en el reglamento oficial.",
    ],
  },
  "uso-de-imagen": {
    status: "En preparación",
    paragraphs: [
      "Durante el evento podrán capturarse fotografías y video para difusión institucional de HackaToB y Technology on Business.",
      "Las condiciones de autorización se incluirán en el formulario oficial y en el documento de uso de imagen.",
    ],
  },
  "codigo-de-conducta": {
    status: "Provisional",
    paragraphs: [
      "HackaToB es un espacio seguro, inclusivo y respetuoso. No se toleran acoso, discriminación, intimidación ni conductas que pongan en riesgo a otras personas.",
      "Reporta incidentes a tob@itcr.ac.cr o a la coordinación de innovación. La organización podrá expulsar a quien incumpla este código sin derecho a reclamo de cupo.",
      "Este texto es un marco mínimo; la versión completa se publicará antes del evento.",
    ],
  },
};
