import type { FC, ReactNode } from "react";

import { StaticImageData } from "next/image";
import arcaptcha from "./projects/arcaptcha";
import brawhallaEsportsBrawlhallaCom from "./projects/brawlhalla-esports/brawlhalla-com";
import brawlhallaEsportsOdinsJournal from "./projects/brawlhalla-esports/odins-journal";
import brawlhallaEsportsReactiveStageLighting from "./projects/brawlhalla-esports/reactive-stage-lighting";
import brawlhallaEsportsStreamToolkit from "./projects/brawlhalla-esports/stream-toolkit";
import codeDumper from "./projects/code-dumper";
import hateoasButClientSide from "./projects/hateoas-but-client-side";
import reinforcementLearningAdventures from "./projects/reinforcement-learning-adventures";
import rubiksCubeRlAgents from "./projects/rubiks-cube-rl-agents";
import skinExplorer from "./projects/skin-explorer";
import sonaButItsPlayedOnAPiano from "./projects/sona-but-its-played-on-a-piano";
import telestrator from "./projects/telestrator";
import usePrompt from "./projects/use-prompt";
import yarralytics from "./projects/yarralytics";

export type Project = {
  name: string;
  slug: string;
  tech: string[];
  links: { type: "external" | "github" | "video" | "article"; url: string }[];
  description?: ReactNode;
  component?: FC;
  for?: string;
  tagline?: string;
  previewImage?:
    | {
        type: "image";
        src: string | StaticImageData;
      }
    | {
        type: "video";
        src: string;
      };
};

export default [
  arcaptcha,
  usePrompt,
  yarralytics,
  telestrator,
  hateoasButClientSide,
  brawlhallaEsportsStreamToolkit,
  brawhallaEsportsBrawlhallaCom,
  brawlhallaEsportsOdinsJournal,
  codeDumper,
  skinExplorer,
  reinforcementLearningAdventures,
  rubiksCubeRlAgents,
  sonaButItsPlayedOnAPiano,
  brawlhallaEsportsReactiveStageLighting,
] as Project[];
