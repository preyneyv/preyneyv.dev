import { Project } from '../../projects'

export default {
  name: 'Brawlhalla.com Design Refresh',
  slug: 'brawlhalla-esports/brawlhalla-com',
  professional: 'Brawlhalla Esports',
  tech: ['Figma', 'SvelteKit', 'WordPress', 'AWS'],
  links: [{ type: 'external', url: 'https://brawlhalla.com' }],
  description: (
    <>
      A design refresh for the Brawlhalla website, migrating from a Divi-powered
      WordPress theme to a headless WordPress CMS and a SvelteKit front-end.
    </>
  ),
} satisfies Project
