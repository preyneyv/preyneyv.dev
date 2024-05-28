import { Project } from '../projects'

export default {
  name: 'Code Dumper',
  slug: 'code-dumper',
  tech: ['Python'],
  links: [{ type: 'github', url: 'https://github.com/preyneyv/code-dumper' }],
  tagline: `Extracts the minimal subset of code for a given function to run, similar
  to Webpack’s tree shaking.`,
  description: (
    <>
      Parses Python AST and recursively builds a per-statement dependency tree.
    </>
  ),
} satisfies Project
