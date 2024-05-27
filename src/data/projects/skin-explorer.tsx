import { Project } from '../projects'

export default {
  name: 'Skin Explorer',
  slug: 'skin-explorer',
  tech: ['Next.js', 'Node.js', 'Redis'],
  links: [{ type: 'github', url: 'https://github.com/preyneyv/code-dumper' }],
  description: (
    <>
      Splash art viewer for League of Legends champions. Categorized by
      champion, skinline, and universe. Additionally preserves historical splash
      art and tracks changes.
    </>
  ),
} satisfies Project
