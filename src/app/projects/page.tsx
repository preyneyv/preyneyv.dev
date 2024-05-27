import projects from '@/data/projects'
import ProjectList from './list'

export default function Page() {
  const mapped = projects.map((p) => {
    // Remove component from data before serializing it for render.
    const { component: _, ...rest } = p
    return rest
  })
  return <ProjectList projects={mapped} />
}
