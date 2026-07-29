export type {
  CampaignPhase,
  EventConfig,
  PartnerRecord,
  PersonRecord,
  PublicationStatus,
  TrackCode,
} from "@/lib/types/event";

/** Only `published` items may appear in production UI */
export function isPublished<T extends { status: string }>(item: T): boolean {
  return item.status === "published";
}
