'use client'

import SectionTitle from '@/components/section-title'
import { accentLine } from '@/constants'
import { motion } from 'framer-motion'
import Link from 'next/link'
import data from './data.json'

type Datum = (typeof data)[number]

function StarburstSVG() {
  const h = 160
  const w = 40
  const pathProps = {
    fill: 'none',
    stroke: accentLine,
    strokeWidth: 1,
  }
  return (
    <svg
      className="absolute left-0 top-0 pointer-events-none -z-10"
      style={{
        height: '10000px',
        width: '100vw',
        transform: `translate(-100%, -100%) translate(0.5px, 26px)  translate(${w}px, ${h}px) rotate(180deg)`,
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
          transition={{ duration: 15 }}
        />
      </g>
    </svg>
  )
}

function Project({
  project,
  isSentinel,
}: {
  project: Datum
  isSentinel?: boolean
}) {
  return (
    <Link href={`/projects/${project.slug}`} className="block">
      <motion.div
        className="flex flex-col relative"
        initial="initial"
        whileHover="hover"
      >
        <StarburstSVG />
        <h3 className="font-bold text-2xl leading-none">{project.name}</h3>
        <div className="relative pt-4 flex-1 flex flex-col">
          <motion.div
            variants={{
              initial: { height: 0 },
              hover: {
                height: `calc(100% + 2em)`,
                transition: {
                  delay: 0.2,
                },
              },
            }}
            className="absolute border-l-[1px] border-dark left-0 w-full -top-[1em]"
          />
          <motion.div
            variants={{
              initial: { width: 0 },
              hover: {
                width: `calc(100% + 1em)`,
                transition: {
                  delay: 0.5,
                },
              },
            }}
            className="absolute border-b-[1px] border-dark -left-[1em] bottom-0"
          />

          <p className="text-lg leading-tight">{project.description}</p>
          <div className="flex-1" />
          <ul className="flex gap-6 text-sm mt-2">
            {project.tech.map((tag) => (
              <li key={tag}>{tag}</li>
            ))}
          </ul>
        </div>
      </motion.div>
    </Link>
  )
}

export default function FeaturedProjects() {
  return (
    <section>
      <SectionTitle>Featured Projects</SectionTitle>

      <div className="grid grid-cols-3 gap-16 relative">
        {data.map((project, i) => (
          <Project key={project.slug} project={project} isSentinel={i === 2} />
        ))}
        <svg className="w-screen absolute right-0 -scale-x-100 top-[1.5em] -z-10 pointer-events-none">
          <path
            d="M0,2 H10000"
            fill="none"
            stroke={accentLine}
            strokeWidth={1}
          />
        </svg>
      </div>
    </section>
  )
}
