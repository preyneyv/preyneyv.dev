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
  const sortedTech = useMemo(() => {
    return Object.keys(allTech)
    // orderBy(Object.entries(allTech), [1, 0], ['desc', 'asc'])
  }, [allTech])
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

            {/* <ul className=" text-sm">
              {sortedTech.map(([label, count]) => {
                const isSelected = selectedTech.includes(label)
                return (
                  <li key={label}>
                    <label className="select-none flex py-1 items-center">
                      <motion.div
                        className="bg-dark h-[1px]"
                        animate={
                          isSelected
                            ? {
                                width: 32,
                              }
                            : { width: 16 }
                        }
                      />
                      <input
                        className="hidden"
                        type="checkbox"
                        checked={isSelected}
                        onChange={(e) =>
                          e.target.checked
                            ? setSelectedTech(selectedTech.concat(label))
                            : setSelectedTech(
                                selectedTech.filter((l) => l !== label)
                              )
                        }
                      />
                      <span>{label}</span>
                      <span className="inline-block px-1 py-0.5 min-w-6 text-center ml-2 bg-dark text-neutral-400 text-xs">
                        {count}
                      </span>
                    </label>
                  </li>
                )
              })}
            </ul> */}
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
        <div className="w-24 opacity-20 fixed bottom-24 translate-x-0.5 hover:opacity-40">
          <GlitchCanvas layer={2} />
        </div>
      </div>
      <ProjectList projects={filteredProjects} />
    </div>
  )
}
