import type { PersonRecord } from "@/lib/types/event";
import { isPublished } from "@/lib/types/content";

/**
 * Mentors / judges / speakers.
 * Empty until real people are confirmed with authorization.
 * Do NOT add pravatar or invented LinkedIn profiles.
 */
export const people: PersonRecord[] = [];

export const publishedPeople = people.filter(isPublished);

/** @deprecated Prefer publishedPeople.length > 0 */
export const mentorsConfirmed = publishedPeople.length > 0;

/** Targets from Master Brief — operational goals, not confirmed roster counts */
export const communityTargets = {
  mentorsGoal: 16,
  workshopsGoal: 14,
  judgesGoal: 5,
} as const;
