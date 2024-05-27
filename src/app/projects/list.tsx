'use client'
import { Project } from '@/data/projects'
import Link from 'next/link'

function ProjectListItem({ project }: { project: Project }) {
  return (
    <Link href={`/projects/${project.slug}`} className="block py-4 group">
      <h2 className="text-3xl font-bold  uppercase group-hover:font-extrabold transition-[font-weight]">
        {project.name}
      </h2>
      <div>{project.description}</div>
    </Link>
  )
}

export default function ProjectList({ projects }: { projects: Project[] }) {
  return (
    <div className="grid">
      {projects.map((project) => (
        <ProjectListItem key={project.slug} project={project} />
      ))}
    </div>
  )
}
