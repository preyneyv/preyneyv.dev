import { ReactNode } from 'react'

export type FeaturedProject = {
  name: string
  slug: string
  description: ReactNode
  tech: string[]
  links: { type: 'external' | 'github'; url: string }[]
}

export default [
  {
    name: 'Yarralytics',
    slug: 'yarralytics',
    description: 'In-depth post-game performance analytics for Brawlhalla.',
    tech: ['Next.js', 'Rust', 'Azure'],
    links: [{ type: 'external', url: 'https://yarralytics.bh' }],
  },
  {
    name: 'Telestrator',
    slug: 'telestrator',
    description: 'Freehand illustration tool for sports and esports analysts.',
    tech: ['Rust', 'WebRTC', 'NVENC'],
    links: [{ type: 'github', url: 'https://github.com/preyneyv/telestrator' }],
  },
  {
    name: 'Client-Side HATEOAS',
    slug: 'hateoas-but-client-side',
    description:
      'HTMX with a service worker "backend" handling requests, fully offline.',
    tech: ['JavaScript', 'HTMX', 'Service Workers'],
    links: [
      {
        type: 'github',
        url: 'https://github.com/preyneyv/htmx-serviceworker-todo',
      },
      {
        type: 'external',
        url: 'https://htmx-serviceworker-todo.vercel.app/',
      },
    ],
  },
] satisfies FeaturedProject[]
