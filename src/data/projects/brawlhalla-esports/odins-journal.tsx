import { Project } from '../../projects'

export default {
  name: "Odin's Journal",
  slug: 'brawlhalla-esports/odins-journal',
  professional: 'Brawlhalla Esports',
  tech: ['React', 'Twitch PubSub', 'AWS', 'Figma'],
  links: [{ type: 'external', url: 'https://twitch.tv/brawlhalla' }],
  description: (
    <>
      Twitch Extension to enhance viewership experience by overlaying
      interactive statistics, tournament bracket updates, and viewer votes.
    </>
  ),
} satisfies Project
