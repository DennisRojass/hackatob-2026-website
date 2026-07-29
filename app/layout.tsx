import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/next";
import { AnnouncementBar } from "@/components/layout/AnnouncementBar";
import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { MobileCTA } from "@/components/layout/MobileCTA";
import { AmbientBackground } from "@/components/visual/AmbientBackground";
import { NodeNetwork } from "@/components/visual/NodeNetwork";
import { ScrollProgress } from "@/components/visual/ScrollProgress";
import { fontDisplay, fontSans } from "@/app/fonts";
import { analytics, site } from "@/lib/content/site";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://hackatob.cr"),
  title: {
    default: "HackaToB 2026 | Innovación, tecnología e impacto en Costa Rica",
    template: "%s | HackaToB 2026",
  },
  description:
    "HackaToB 2026: cuatro días de innovación con Technology on Business en el TEC, Cartago. Hasta 80 participantes · 4 tracks · Demo Day en vivo.",
  openGraph: {
    title: "HackaToB 2026 | Cuatro días para construir",
    description:
      "Hasta 80 participantes · HealthTrack, GreenTrack, FinTrack y The Next Big Thing · 17–20 agosto 2026 · TEC Cartago.",
    type: "website",
    locale: "es_CR",
    url: "https://hackatob.cr",
    images: [
      {
        url: "/brand/og-hackatob-2026.svg",
        width: 1200,
        height: 630,
        alt: "HackaToB 2026",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "HackaToB 2026 | Cuatro días para construir",
    description:
      "Hasta 80 participantes · 4 tracks · Demo Day en el Centro de las Artes.",
    images: ["/brand/og-hackatob-2026.svg"],
  },
  icons: {
    icon: "/brand/hackatob-isotipo-oficial.png",
    apple: "/brand/hackatob-isotipo-oficial.png",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Event",
  name: "HackaToB 2026",
  startDate: "2026-08-17",
  endDate: "2026-08-20",
  eventAttendanceMode: "https://schema.org/OfflineEventAttendanceMode",
  eventStatus: "https://schema.org/EventScheduled",
  image: [`${site.domain}/brand/og-hackatob-2026.svg`],
  location: {
    "@type": "Place",
    name: "Tecnológico de Costa Rica · Campus Central",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Cartago",
      addressCountry: "CR",
    },
  },
  organizer: {
    "@type": "Organization",
    name: "Technology on Business",
    url: site.tobUrl,
    email: site.email,
  },
  offers: {
    "@type": "Offer",
    url: `${site.domain}/postular`,
    price: "0",
    priceCurrency: "USD",
    availability: "https://schema.org/InStock",
  },
  description:
    "Hackathon de innovación de cuatro días: HealthTrack, GreenTrack, FinTrack y The Next Big Thing.",
  url: site.domain,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className={`${fontSans.variable} ${fontDisplay.variable}`}>
      <body className="bg-bg font-sans text-white antialiased">
        <a href="#contenido" className="skip-link">
          Saltar al contenido
        </a>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {analytics.plausibleDomain ? (
          <script
            defer
            data-domain={analytics.plausibleDomain}
            src="https://plausible.io/js/script.js"
          />
        ) : null}
        {analytics.gaMeasurementId ? (
          <>
            <script
              async
              src={`https://www.googletagmanager.com/gtag/js?id=${analytics.gaMeasurementId}`}
            />
            <script
              dangerouslySetInnerHTML={{
                __html: `window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}gtag('js',new Date());gtag('config','${analytics.gaMeasurementId}');`,
              }}
            />
          </>
        ) : null}
        <AmbientBackground />
        <NodeNetwork />
        <ScrollProgress />
        <AnnouncementBar />
        <Header />
        <main id="contenido" className="pb-20 md:pb-0">
          {children}
        </main>
        <Footer />
        <MobileCTA />
        {analytics.vercelAnalytics ? <Analytics /> : null}
      </body>
    </html>
  );
}
