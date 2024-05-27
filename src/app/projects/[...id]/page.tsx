'use client'
import projects from '@/data/projects'
import { notFound } from 'next/navigation'
import ProjectDetail from './detail'
export default function Page({ params }: { params: { id: string[] } }) {
  const project = projects.find((p) => p.slug === params.id.join('/'))
  if (!project) {
    return notFound()
  }
  return <ProjectDetail project={project} />
}
