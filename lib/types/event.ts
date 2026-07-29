export type PublicationStatus =
  | "draft"
  | "pending"
  | "confirmed"
  | "published"
  | "hidden"
  | "archived";

export type CampaignPhase =
  | "PRELAUNCH"
  | "INTEREST_OPEN"
  | "APPLICATIONS_OPEN"
  | "APPLICATIONS_CLOSING"
  | "SELECTION"
  | "EVENT_ACTIVE"
  | "DEMO_DAY"
  | "POST_EVENT";

export type TrackCode = "HT" | "GT" | "FT" | "TNBT";

export type EventConfig = {
  name: string;
  tagline: string;
  domain: string;
  aliasDomain: string;
  tobUrl: string;
  timezone: string;
  datesLabel: string;
  startIso: string;
  endIso: string;
  location: string;
  locationShort: string;
  demoDayVenue: string;
  capacity: number;
  teamsMin: number;
  teamsMax: number;
  maxTeamSize: number;
  trackCount: number;
  modalityCount: number;
  tracks: ReadonlyArray<{ code: TrackCode; slug: string; name: string }>;
  modalities: ReadonlyArray<string>;
  applyUrl: string;
  applyDeadlineLabel: string;
  email: string;
  phone: string;
  phoneHref: string;
  innovationEmail: string;
  innovationPhone: string;
  innovationPhoneHref: string;
};

export type PersonRecord = {
  id: string;
  name: string;
  role: string;
  organization?: string;
  specialty?: string;
  photo?: string;
  linkedin?: string;
  status: PublicationStatus;
};

export type PartnerRecord = {
  id: string;
  name: string;
  href: string;
  logo: string;
  color: string;
  category: string;
  status: PublicationStatus;
};
