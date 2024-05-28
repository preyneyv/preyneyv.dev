import { Project } from '../projects'

export default {
  name: 'Skin Explorer',
  slug: 'skin-explorer',
  tech: ['Next.js', 'Node.js', 'Redis'],
  links: [
    {
      type: 'external',
      url: 'https://skinexplorer.lol',
    },
    { type: 'github', url: 'https://github.com/preyneyv/lol-skin-explorer' },
  ],
  tagline: `Splash art viewer for League of Legends champions.`,
  description: (
    <>
      Preserves historical splash art and tracks changes. Automatically
      refreshes with new content whenever a new game patch is released.
    </>
  ),
  previewImage: {
    type: 'video',
    src: '/previews/skin-explorer.mp4',
  },
} satisfies Project
