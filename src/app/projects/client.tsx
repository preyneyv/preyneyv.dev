'use client'

import GlitchCanvas from '@/components/glitchy-canvas'
import SectionTitle from '@/components/section-title'
import { Project } from '@/data/projects'
import Multiselect from '@/ui/multiselect'
import { countBy } from 'lodash-es'
import Link from 'next/link'
import { useMemo, useState } from 'react'
import ProjectList from './list'

export default function ProjectView({
  projects: allProjects,
}: {
  projects: Project[]
}) {
  const allTech = useMemo(
    () => countBy(allProjects.flatMap((p) => p.tech)),
    [allProjects]
  )
  const sortedTech = useMemo(() => Object.keys(allTech), [allTech])
  const [selectedTech, setSelectedTech] = useState<string[]>([])

  const filteredProjects = useMemo(() => {
    if (selectedTech.length === 0) {
      return allProjects
    }
    return allProjects.filter((p) =>
      p.tech.some((t) => selectedTech.includes(t))
    )
  }, [allProjects, selectedTech])

  return (
    <div className="grid grid-cols-[400px_2fr] gap-16">
      <div>
        <aside className="sticky top-32">
          <section>
            <SectionTitle>FILTERS</SectionTitle>
            <Multiselect options={sortedTech} />
          </section>
          <p className="text-lg leading-none text-neutral-500">
            You can find more of my projects and experiments{' '}
            <Link
              className="border-b-[1px] border-b-grae"
              href="/github"
              target="_blank"
            >
              on GitHub.
            </Link>
          </p>
        </aside>
      </div>
      <ProjectList projects={filteredProjects} />
    </div>
  )
}
