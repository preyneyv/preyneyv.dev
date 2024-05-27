import type { Project } from '../projects'

function HATEOAS() {
  return null
}

export default {
  name: 'HATEOAS but Client-Side and Offline',
  slug: 'hateoas-but-client-side',
  description: (
    <>
      Fully client-side, no-build HTMX todo list. All requests are intercepted
      and handled by a service worker, resulting in a fully offline HATEOAS
      application. Also includes a basic HTTP router implementation for the
      service worker.
    </>
  ),
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
  component: HATEOAS,
} satisfies Project