import { Project } from '../../projects'

export default {
  name: 'Stream Toolkit (Gjallarhorn)',
  slug: 'brawlhalla-esports/stream-toolkit',
  professional: 'Brawlhalla Esports',
  tech: ['React', 'Node.js', 'WebSockets', 'AWS'],
  links: [
    { type: 'github', url: 'https://github.com/BMG-Esports/gjallarhorn' },
  ],
  description: (
    <>
      Resilient, multi-user, real-time system to ingest tournament data from
      several systems (start.gg, internal APIs, game spectator clients) and
      consolidate it for downstream CG software (CharacterWorks, Aston, vMix).
    </>
  ),
} satisfies Project
