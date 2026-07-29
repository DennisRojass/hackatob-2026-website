/**
 * Official published brand paths for HackaToB 2026.
 * Staging assets must never be imported here.
 */
export const brandAssets = {
  hackatobIsotipo: "/brand/hackatob-isotipo-oficial.png",
  sparkPrincipal: "/brand/spark-principal.png",
  tobImagotipoColorHorizontal: "/brand/tob-imagotipo-color-horizontal.png",
  tobImagotipoColorVertical: "/brand/tob-imagotipo-color-vertical.png",
  tobImagotipoBlancoHorizontal: "/brand/tob-imagotipo-blanco-horizontal.png",
  tobIsotipoColor: "/brand/tob-isotipo-color.png",
  tobIsotipoBlanco: "/brand/tob-isotipo-blanco.png",
  tecLogo: "/brand/tec-logo.png",
  tracks: {
    health: "/media/tracks/health/spark-health.png",
    green: "/media/tracks/green/spark-green.png",
    fin: "/media/tracks/fin/spark-fin.png",
    next: "/media/tracks/next/spark-next.png",
  },
} as const;

export const trackSparkBySlug: Record<string, string> = {
  healthtrack: brandAssets.tracks.health,
  greentrack: brandAssets.tracks.green,
  fintrack: brandAssets.tracks.fin,
  "the-next-big-thing": brandAssets.tracks.next,
};
