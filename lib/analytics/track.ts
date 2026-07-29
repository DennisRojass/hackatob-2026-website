/** Analytics event names — wire to providers later */
export const AnalyticsEvents = {
  interestSubmit: "interest_submit",
  ctaClick: "cta_click",
  navClick: "nav_click",
} as const;

export type AnalyticsEvent =
  (typeof AnalyticsEvents)[keyof typeof AnalyticsEvents];
