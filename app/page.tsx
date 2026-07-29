import { Agenda } from "@/components/marketing/Agenda";
import { Allies } from "@/components/marketing/Allies";
import { Apply } from "@/components/marketing/Apply";
import { Audience } from "@/components/marketing/Audience";
import { Challenges } from "@/components/marketing/Challenges";
import { Community } from "@/components/marketing/Community";
import { Evaluation } from "@/components/marketing/Evaluation";
import { FAQ } from "@/components/marketing/FAQ";
import { FinalCTA } from "@/components/marketing/FinalCTA";
import { Hero } from "@/components/marketing/Hero";
import { Modalities } from "@/components/marketing/Modalities";
import { Prizes } from "@/components/marketing/Prizes";
import { ToBHistory } from "@/components/marketing/ToBHistory";
import { Tracks } from "@/components/marketing/Tracks";
import { Trust } from "@/components/marketing/Trust";
import { WhatIs } from "@/components/marketing/WhatIs";

export default function HomePage() {
  return (
    <>
      <Hero />
      <Trust />
      <WhatIs />
      <Audience />
      <Tracks />
      <Challenges />
      <Modalities />
      <Agenda />
      <Apply />
      <Evaluation />
      <Community />
      <Prizes />
      <Allies />
      <ToBHistory />
      <FAQ />
      <FinalCTA />
    </>
  );
}
