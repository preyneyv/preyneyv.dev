import type { FC, ReactNode } from 'react'

import hateoasButClientSide from './projects/hateoas-but-client-side'
import telestrator from './projects/telestrator'
import yarralytics from './projects/yarralytics'
import codeDumper from './projects/code-dumper'
import skinExplorer from './projects/skin-explorer'
import reinforcementLearningAdventures from './projects/reinforcement-learning-adventures'
import rubiksCubeRlAgents from './projects/rubiks-cube-rl-agents'
import sonaButItsPlayedOnAPiano from './projects/sona-but-its-played-on-a-piano'
import brawhallaEsportsBrawlhallaCom from './projects/brawlhalla-esports/brawlhalla-com'
import brawlhallaEsportsOdinsJournal from './projects/brawlhalla-esports/odins-journal'
import brawlhallaEsportsReactiveStageLighting from './projects/brawlhalla-esports/reactive-stage-lighting'
import brawlhallaEsportsStreamToolkit from './projects/brawlhalla-esports/stream-toolkit'

export type Project = {
  name: string
  slug: string
  tech: string[]
  links: { type: 'external' | 'github' | 'video' | 'article'; url: string }[]
  description?: ReactNode
  component?: FC
  for?: string
  tagline?: string
}

export default [
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
] as Project[]
