import { Project } from '../../projects'

export default {
  name: 'Stream Toolkit (Gjallarhorn)',
  slug: 'brawlhalla-esports/stream-toolkit',
  for: 'Brawlhalla Esports',
  tech: ['React', 'Node.js', 'WebSockets', 'AWS'],
  links: [
    { type: 'github', url: 'https://github.com/BMG-Esports/gjallarhorn' },
  ],
  tagline: `Real-time system to ingest and tournament data for live production.`,
  description: (
    <>
      Consolidates data for downstream CG software (CharacterWorks, Aston,
      vMix). Architected to be resilient against dependent service (start.gg,
      internal APIs, game spectator clients) failure without downtime for the
      livestream.
    </>
  ),
} satisfies Project
