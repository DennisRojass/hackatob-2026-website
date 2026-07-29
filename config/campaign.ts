import { event } from "@/config/event";
import type { CampaignPhase } from "@/lib/types/event";

/**
 * INTEREST_OPEN is the confirmed live phase (lista de interés).
 * PRELAUNCH is treated as an alias of INTEREST_OPEN for PROMPT compatibility.
 */
export type { CampaignPhase };

export const campaignPhase: CampaignPhase = "INTEREST_OPEN";

export function getPrimaryCta(phase: CampaignPhase = campaignPhase) {
  switch (phase) {
    case "PRELAUNCH":
    case "INTEREST_OPEN":
      return {
        href: event.applyUrl,
        label: "Dejar interés",
        short: "Dejar interés",
      };
    case "APPLICATIONS_OPEN":
    case "APPLICATIONS_CLOSING":
      return {
        href: event.applyUrl,
        label: "Postularme",
        short: "Postularme",
      };
    case "SELECTION":
      return {
        href: event.applyUrl,
        label: "Consultar estado",
        short: "Mi estado",
      };
    case "EVENT_ACTIVE":
      return { href: "/#programa", label: "Ver programa", short: "Programa" };
    case "DEMO_DAY":
      return { href: "/#programa", label: "Ver Demo Day", short: "Demo Day" };
    case "POST_EVENT":
      return {
        href: "/#trayectoria",
        label: "Ver trayectoria",
        short: "Resultados",
      };
    default:
      return {
        href: event.applyUrl,
        label: "Dejar interés",
        short: "Dejar interés",
      };
  }
}

export function getAnnouncementCopy(phase: CampaignPhase = campaignPhase) {
  switch (phase) {
    case "PRELAUNCH":
    case "INTEREST_OPEN":
      return {
        badge: "Lista de interés",
        text: `${event.datesLabel} · Hasta ${event.capacity} cupos · ${event.applyDeadlineLabel}`,
        textMobile: `${event.datesLabel} · ${event.capacity} cupos`,
        cta: "Dejar interés →",
      };
    case "APPLICATIONS_OPEN":
      return {
        badge: "Postulaciones abiertas",
        text: `Postulaciones abiertas · Hasta ${event.capacity} participantes`,
        textMobile: "Postulaciones abiertas",
        cta: "Postularme →",
      };
    case "APPLICATIONS_CLOSING":
      return {
        badge: "Últimos días",
        text: "Últimos días para postular a HackaToB 2026",
        textMobile: "Últimos días para postular",
        cta: "Completar solicitud →",
      };
    case "SELECTION":
      return {
        badge: "Selección",
        text: "La selección de participantes está en proceso",
        textMobile: "Selección en proceso",
        cta: "Consultar estado →",
      };
    case "EVENT_ACTIVE":
      return {
        badge: "En curso",
        text: "HackaToB 2026 está en marcha",
        textMobile: "HackaToB en marcha",
        cta: "Ver programa →",
      };
    case "DEMO_DAY":
      return {
        badge: "Demo Day",
        text: "Demo Day de HackaToB 2026",
        textMobile: "Demo Day",
        cta: "Ver agenda →",
      };
    case "POST_EVENT":
      return {
        badge: "Resultados",
        text: "Conoce la trayectoria y el ecosistema ToB",
        textMobile: "Resultados y trayectoria",
        cta: "Explorar →",
      };
  }
}

export function showCountdown(phase: CampaignPhase = campaignPhase) {
  return (
    phase === "INTEREST_OPEN" ||
    phase === "PRELAUNCH" ||
    phase === "APPLICATIONS_OPEN" ||
    phase === "APPLICATIONS_CLOSING" ||
    phase === "SELECTION"
  );
}
