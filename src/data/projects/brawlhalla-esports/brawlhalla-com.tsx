import { Project } from '../../projects'

export default {
  name: 'Brawlhalla.com Design Refresh',
  slug: 'brawlhalla-esports/brawlhalla-com',
  for: 'Brawlhalla Esports',
  tech: ['Figma', 'SvelteKit', 'WordPress', 'AWS'],
  links: [{ type: 'external', url: 'https://brawlhalla.com' }],
  tagline: `Design refresh for the Brawlhalla website.`,
  description: (
    <>
      Migrated from a Divi-powered WordPress theme to a headless WordPress CMS
      and a SvelteKit front-end.
    </>
  ),
  previewImage: {
    type: 'video',
    src: '/previews/brawlhalla-esports/brawlhalla-com.mp4',
  },
} satisfies Project
