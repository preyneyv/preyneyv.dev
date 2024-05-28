import projects from '@/data/projects'
import ProjectList from './list'
import Aside from './aside'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Projects',
}

export default function Page() {
  const mapped = projects.map((p) => {
    // Remove component from data before serializing it for render.
    const { component: _, ...rest } = p
    return rest
  })

  return (
    <>
      <div className="grid grid-cols-[400px_2fr] gap-16">
        <Aside />
        <ProjectList projects={mapped} />
      </div>
    </>
  )
}
