'use client'

import { MotionLink } from '@/components/custom-motion'
import SectionTitle from '@/components/section-title'
import { colors } from '@/constants'
import { Launch, LogoGithub } from '@carbon/icons-react'
import clsx from 'clsx'
import { motion } from 'framer-motion'

import data, { FeaturedProject } from '@/data/featured-projects'
import Link from 'next/link'
import ChevyButton from '@/ui/chevy-button'

function StarburstSVG() {
  const h = 160
  const w = 16
  const pathProps = {
    fill: 'none',
    stroke: colors.dark,
    strokeWidth: 1,
  }
  return (
    <svg
      className="absolute left-0 top-0 pointer-events-none -z-10"
      style={{
        height: '10000px',
        width: '100vw',
        transform: `translate(-100%, -100%) translate(0.5px, 22px)  translate(${w}px, ${h}px) rotate(180deg)`,
      }}
    >
      <g transform={`translate(${w},${h})`}>
        <motion.path
          d={`M${w},${-w} L${-w},${w}`}
          {...pathProps}
          variants={{
            initial: { pathLength: 0 },
            hover: { pathLength: 1 },
          }}
        />
        <motion.path
          d={`M0,0 L10000,10000`}
          {...pathProps}
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 10, delay: 0.5 }}
        />
      </g>
    </svg>
  )
}

function ProjectCard({ project }: { project: FeaturedProject }) {
  return (
    <motion.div className="relative" initial="initial" whileHover="hover">
      <StarburstSVG />
      <MotionLink href={`/projects/${project.slug}`} className="flex flex-col">
        <h3 className="font-bold text-2xl leading-none">{project.name}</h3>
        <div className="relative pt-4 flex-1 flex flex-col">
          <motion.div
            variants={{
              initial: { height: 0 },
              hover: {
                height: `calc(100% + 1em)`,
              },
            }}
            className={clsx(
              'absolute border-dark left-0 w-full -top-[1em] pointer-events-none border-l-[1px]'
            )}
          />
          <motion.div
            variants={{
              initial: { width: 0 },
              hover: {
                width: `calc(100% + 1em)`,
                transition: {
                  delay: 0.3,
                },
              },
            }}
            className={clsx(
              'absolute border-b-[1px] border-dark -left-[1em] bottom-0 pointer-events-none'
            )}
          />

          <p className="text-lg leading-tight">{project.description}</p>
          <div className="flex-1" />
          <div className="mt-2">
            <ul className="flex gap-6 text-sm text-bloo">
              {project.tech.map((tag) => (
                <li key={tag}>{tag}</li>
              ))}
            </ul>
          </div>
        </div>
      </MotionLink>
      <motion.ul className="absolute flex justify-end bottom-0 left-0 translate-y-full w-full">
        {project.links.map((link) => (
          <motion.li
            key={link.type}
            variants={{
              initial: { translateX: '-10%', opacity: 0 },
              hover: {
                translateX: 0,
                opacity: 1,
                transition: { delay: 0.5, duration: 0.2 },
              },
            }}
          >
            <MotionLink
              href={link.url}
              target="_blank"
              className="p-2 block text-neutral-600 hover:text-white transition-colors duration-300"
            >
              {link.type === 'github' && <LogoGithub size={20} />}
              {link.type === 'external' && <Launch size={20} />}
            </MotionLink>
          </motion.li>
        ))}
      </motion.ul>
    </motion.div>
  )
}

export default function FeaturedProjects() {
  return (
    <section>
      <header className="flex justify-between">
        <Link href={'/projects'}>
          <SectionTitle>Projects</SectionTitle>
        </Link>
        <Link href={'/projects'}>
          <ChevyButton>View More</ChevyButton>
        </Link>
      </header>

      <motion.div className="grid grid-cols-3 gap-8 relative">
        {data.map((project) => (
          <ProjectCard key={project.slug} project={project} />
        ))}
        <svg
          className="w-screen absolute right-0 -scale-x-100 top-[1.5em] -z-10 pointer-events-none"
          style={{
            transform: 'translateY(-4px)',
          }}
        >
          <path
            d="M0,2 H10000"
            fill="none"
            stroke={colors.dark}
            strokeWidth={1}
          />
        </svg>
      </motion.div>
    </section>
  )
}
