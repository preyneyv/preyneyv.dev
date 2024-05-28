import projects from '@/data/projects'
import { Metadata } from 'next'
import ProjectView from './client'

export const metadata: Metadata = {
  title: 'Projects',
}

export default function Page() {
  const mapped = projects.map((p) => {
    // Remove component from data before serializing it for render.
    const { component: _, ...rest } = p
    return rest
  })

  return <ProjectView projects={mapped} />
}
