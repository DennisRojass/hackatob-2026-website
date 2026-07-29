import type { PartnerRecord } from "@/lib/types/event";
import { isPublished } from "@/lib/types/content";

/**
 * Commercial partners only. TEC is institutional (Trust), never a sponsor row.
 * All draft until written authorization + status published.
 * Staging logos (Dojo, WWT, P&G PNG) stay outside public until confirmed.
 */
export const partners: PartnerRecord[] = [
  {
    id: "wwt",
    name: "WWT",
    href: "https://www.wwt.com",
    logo: "/brand/sponsors/wwt.svg",
    color: "#00A3E0",
    category: "Technology Partner",
    status: "draft",
  },
  {
    id: "pg",
    name: "P&G",
    href: "https://www.pg.com",
    logo: "/brand/sponsors/pg.svg",
    color: "#003DA5",
    category: "Challenge Partner",
    status: "draft",
  },
];

export const publishedPartners = partners.filter(isPublished);

/** @deprecated Prefer publishedPartners.length > 0 */
export const sponsorsConfirmed = publishedPartners.length > 0;

/** Legacy shape for Allies when published */
export const sponsors = publishedPartners.map((p) => ({
  name: p.name,
  href: p.href,
  logo: p.logo,
  color: p.color,
}));

export const allyTypes = [
  "Presenting Partner",
  "Track Partner",
  "Challenge Partner",
  "Technology Partner",
  "Community Partner",
  "Media Partner",
  "In-kind Partner",
] as const;
