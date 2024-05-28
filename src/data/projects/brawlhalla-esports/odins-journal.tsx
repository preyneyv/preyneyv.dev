import { Project } from '../../projects'

export default {
  name: "Odin's Journal",
  slug: 'brawlhalla-esports/odins-journal',
  for: 'Brawlhalla Esports',
  tech: ['React', 'Twitch PubSub', 'AWS', 'Figma'],
  links: [{ type: 'external', url: 'https://twitch.tv/brawlhalla' }],
  tagline: `Twitch Extension to esports viewership experience.`,
  description: (
    <>
      Displays interactive statistics, tournament bracket updates, and viewer
      votes in an overlay window.
    </>
  ),
} satisfies Project
