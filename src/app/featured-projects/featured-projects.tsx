'use client'

import SectionTitle from '@/components/section-title'
import Link from 'next/link'
import data from './data.json'

type Datum = (typeof data)[number]

function Project({ project }: { project: Datum }) {
  return (
    <Link href={`/projects/${project.slug}`} className="flex flex-col">
      <h3 className="font-bold text-2xl">{project.name}</h3>
      <p className="text-lg leading-tight mt-4">{project.description}</p>
      <div className="flex-1" />
      <ul className="flex gap-6 text-sm mt-2">
        {project.tech.map((tag) => (
          <li key={tag}>{tag}</li>
        ))}
      </ul>
    </Link>
  )
}

export default function FeaturedProjects() {
  return (
    <section>
      <SectionTitle>Featured Projects</SectionTitle>

      <div className="grid grid-cols-3 gap-16">
        {data.map((project) => (
          <Project key={project.slug} project={project} />
        ))}
      </div>
    </section>
  )
}
