'use client'

import projects, { Project } from '@/data/projects'
import Aside from './aside'
import ProjectList from './list'
import { useMemo } from 'react'
import { countBy } from 'lodash-es'

export default function ProjectView({
  projects: allProjects,
}: {
  projects: Project[]
}) {
  const allTech = useMemo(
    () => countBy(allProjects.flatMap((p) => p.tech)),
    [allProjects]
  )
  console.log(allTech)
  return (
    <>
      <div className="grid grid-cols-[400px_2fr] gap-16">
        <Aside />
        <ProjectList projects={projects} />
      </div>
    </>
  )
}
