import type { Project } from '../projects'
import previewImage from '../.../../../../public/previews/hateoas-but-client-side.png'

function HATEOAS() {
  return null
}

export default {
  name: 'HATEOAS but Client-Side and Offline',
  slug: 'hateoas-but-client-side',
  tagline: `Fully client-side, no-build HTMX todo list.`,
  description: (
    <>
      All requests are intercepted and handled by a service worker, resulting in
      a fully offline HATEOAS application. Also includes a basic HTTP router
      implementation for the service worker.
    </>
  ),
  tech: ['JavaScript', 'HTMX', 'Service Workers'],
  links: [
    {
      type: 'external',
      url: 'https://htmx-serviceworker-todo.vercel.app/',
    },
    {
      type: 'github',
      url: 'https://github.com/preyneyv/htmx-serviceworker-todo',
    },
  ],
  component: HATEOAS,
  previewImage: {
    type: 'image',
    src: previewImage,
  },
} satisfies Project
