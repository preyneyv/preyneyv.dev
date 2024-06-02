'use client'

import SectionTitle from '@/components/section-title'
import { Project } from '@/data/projects'
import Multiselect from '@/ui/multiselect'
import { countBy, sortBy, uniq } from 'lodash-es'
import Link from 'next/link'
import { useMemo, useState } from 'react'
import ProjectList from './list'
import GlitchCanvas from '@/components/glitchy-canvas'
import { motion } from 'framer-motion'
import { useIsInitialRender } from '@/components/custom-motion'
import clsx from 'clsx'
import { useIsSizeLG } from '@/hooks/media-queries'

export default function ProjectView({
  projects: allProjects,
}: {
  projects: Project[]
}) {
  const isLarge = useIsSizeLG()
  const isInitial = useIsInitialRender()

  const allTech = useMemo(
    () => countBy(allProjects.flatMap((p) => p.tech)),
    [allProjects]
  )
  const sortedTech = useMemo(() => sortBy(Object.keys(allTech)), [allTech])
  const [selectedTech, setSelectedTech] = useState<string[]>([])

  const allOrgs = useMemo(
    () => uniq(allProjects.map((p) => p.for)).map((org) => org ?? 'Personal'),
    [allProjects]
  )
  const [selectedOrgs, setSelectedOrgs] = useState<string[]>([])

  const filteredProjects = useMemo(() => {
    let projects = allProjects
    if (selectedTech.length) {
      projects = projects.filter((p) =>
        p.tech.some((t) => selectedTech.includes(t))
      )
    }
    if (selectedOrgs.length) {
      const orgs = selectedOrgs.map((o) => (o === 'Personal' ? undefined : o))
      projects = projects.filter((p) => orgs.includes(p.for))
    }
    return projects
  }, [allProjects, selectedTech, selectedOrgs])

  return (
    <div className="grid grid-cols-1 lg:grid-cols-[250px_1fr] lg:gap-16">
      <div>
        <aside
          className={clsx(
            'hidden lg:flex flex-col justify-between bg-black/90 backdrop-blur-md z-50',
            'fixed left-0 top-0 w-[350px] max-w-[100vw] h-full px-9 py-8 border-r-[1px] border-dark',
            'lg:sticky lg:top-32 lg:h-[calc(100vh_-_256px)] lg:px-0 lg:w-auto lg:border-r-0 lg:bg-transparent lg:backdrop-blur-0'
          )}
        >
          <div className="border-l-[1px] border-dark absolute left-9 top-0 h-screen block lg:hidden" />
          <section>
            <SectionTitle>Filters</SectionTitle>

            <div className="mb-4">
              <Multiselect
                label="Tech Stack"
                options={sortedTech}
                value={selectedTech}
                setValue={setSelectedTech}
              />
            </div>
            <div className="mb-4">
              <Multiselect
                label="Organization"
                options={allOrgs}
                value={selectedOrgs}
                setValue={setSelectedOrgs}
              />
            </div>
            <p className="text-sm leading-none text-neutral-500">
              You can find more of my projects and experiments{' '}
              <Link
                className="border-b-[1px] border-b-grae"
                href="/github"
                target="_blank"
              >
                on GitHub.
              </Link>
            </p>
          </section>
          <motion.div
            className="w-24 ml-[1px] sticky bottom-0 lg:bottom-32"
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.2 }}
            transition={{ delay: isInitial ? 2 : 0, duration: 1 }}
          >
            <GlitchCanvas />
          </motion.div>
        </aside>
      </div>
      <ProjectList projects={isLarge ? filteredProjects : allProjects} />
    </div>
  )
}
