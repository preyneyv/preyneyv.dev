'use client'
import { Project } from '@/data/projects'
import Link from 'next/link'

function ProjectLineItem({ project }: { project: Project }) {
  return (
    <Link href={`/projects/${project.slug}`}>
      <h2>{project.name}</h2>
      <p>{project.description}</p>
    </Link>
  )
}

export default function ProjectList({ projects }: { projects: Project[] }) {
  return (
    <div>
      {projects.map((project) => (
        <ProjectLineItem key={project.slug} project={project} />
      ))}
    </div>
  )
}
