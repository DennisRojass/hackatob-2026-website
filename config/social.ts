import { event } from "@/config/event";

/** Leave empty to hide. Never use XXXX / placeholder / example.com */
export const social = {
  emailMain: event.email,
  emailInnovation: event.innovationEmail,
  whatsapp: "",
  instagram: "",
  linkedin: "",
} as const;

export const analytics = {
  vercelAnalytics: true,
  plausibleDomain: "",
  gaMeasurementId: "",
} as const;
