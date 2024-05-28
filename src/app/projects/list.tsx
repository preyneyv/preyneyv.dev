'use client'

import { useHover } from 'react-use'
import { MotionLink, useIsInitialRender } from '@/components/custom-motion'
import { colors } from '@/constants'
import { Project } from '@/data/projects'
import IconButton from '@/ui/icon-button'
import {
  Catalog,
  Launch,
  LogoGithub,
  OverflowMenuHorizontal,
  Search,
  Video,
} from '@carbon/icons-react'
import { motion } from 'framer-motion'
import { OverflowList } from 'react-overflow-list'
import PreviewImageProvider, { usePreviewImage } from './preview'

const DiagonalSVG = () => {
  const pathProps = {
    fill: 'none',
    stroke: colors.dark,
    strokeWidth: 1,
  }
  return (
    <svg
      className="absolute right-0 top-0 pointer-events-none -z-10"
      style={{
        height: 10000,
        width: '100vw',
        transform: `translate(100%, -100%) translate(0, 20px) scaleY(-100%)`,
      }}
    >
      <motion.path
        d={`M0 0 L10000,10000`}
        {...pathProps}
        variants={{
          initial: { pathLength: 0, transition: { duration: 0 } },
          hover: { pathLength: 1, transition: { duration: 10 } },
        }}
      />
    </svg>
  )
}

const TechListItem = (item: string, idx: number) => {
  return (
    <span className="mr-4 text-bloo font-bold" key={idx}>
      {item}
    </span>
  )
}
const TechListOverflow = (items: string[]) => {
  return (
    <>
      <span className="flex-1" />
      <motion.div whileHover="hover" initial="initial">
        <span className="relative">
          <OverflowMenuHorizontal className="text-grae hover:text-white transition-colors" />
          <motion.div
            className="absolute right-0 bottom-0 whitespace-nowrap translate-y-full"
            variants={{
              initial: { pointerEvents: 'none' },
              hover: { pointerEvents: 'auto' },
            }}
          >
            <motion.ul
              className="bg-black border-[1px] border-dark px-2 py-1"
              variants={{
                initial: { opacity: 0, translateY: -3 },
                hover: { opacity: 1, translateY: 0 },
              }}
            >
              {items.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </motion.ul>
          </motion.div>
        </span>
      </motion.div>
    </>
  )
}
function TechList({ items }: { items: string[] }) {
  return (
    <OverflowList
      className="text-sm items-center whitespace-nowrap"
      collapseFrom="end"
      minVisibleItems={0}
      items={items}
      itemRenderer={TechListItem}
      overflowRenderer={TechListOverflow}
    />
  )
}

function ProjectListItem({ project }: { project: Project }) {
  const previewImage = usePreviewImage(project)

  // TODO: replace this with project slug when pages are implemented.
  const projectTarget = project.links[0].url

  return (
    <motion.div
      className="block group text-pretty relative"
      variants={{
        initial: {
          opacity: 0,
        },
        animate: { opacity: 1 },
      }}
      transition={{ duration: 1 }}
    >
      <motion.div
        whileHover="hover"
        initial="initial"
        onHoverStart={previewImage.onHoverStart}
        onHoverEnd={previewImage.onHoverEnd}
      >
        <div className="border-b-[1px] border-b-dark -mt-[4px] absolute right-0 top-[24px] w-full -z-10 origin-right" />
        <motion.div
          className="border-l-[1px] border-l-dark absolute -left-[1px]  h-full -z-10 origin-top"
          variants={{
            initial: { scaleY: 0 },
            hover: {
              scaleY: 1,
            },
          }}
          transition={{ duration: 0.3, type: 'tween' }}
        />
        <DiagonalSVG />
        <motion.ul
          className="flex flex-col gap-0 absolute -left-10 -top-[6px] h-full"
          variants={{
            hover: {
              transition: {
                when: 'beforeChildren',
                staggerChildren: 0.3,
              },
            },
          }}
        >
          {project.links.map((link) => (
            <motion.li
              key={link.type}
              style={{ translateX: 0 }}
              variants={{
                initial: { translateX: '5%', opacity: 0 },
                hover: {
                  translateX: 0,
                  opacity: 1,
                  transition: {
                    delay: 0.1,
                  },
                },
              }}
            >
              <MotionLink
                href={link.url}
                target="_blank"
                className="p-2 block text-neutral-600 hover:text-white transition-colors duration-700"
              >
                {link.type === 'github' && <LogoGithub size={20} />}
                {link.type === 'external' && <Launch size={20} />}
                {link.type === 'article' && <Catalog size={20} />}
                {link.type === 'video' && <Video size={20} />}
              </MotionLink>
            </motion.li>
          ))}
        </motion.ul>
        <MotionLink href={projectTarget} target="_blank" className="mb-1 block">
          <header className="flex justify-between">
            <h2 className="text-2xl font-bold group-hover:font-extrabold transition-[font-weight] leading-none">
              {project.name}
            </h2>
          </header>
          {project.for && (
            <h4 className="text-xs uppercase tracking-wider font-bold text-neutral-500">
              <span className="text-grae mr-1">⁄⁄</span>
              {project.for}
            </h4>
          )}
          <div className="my-2 leading-snug">
            {project.tagline ? (
              <>
                <span>{project.tagline}&nbsp;</span>
                <span className="text-neutral-500 group-hover:text-white transition-colors duration-700">
                  {project.description}
                </span>
              </>
            ) : (
              project.description
            )}
          </div>
        </MotionLink>

        <TechList items={project.tech} />
      </motion.div>
    </motion.div>
  )
}

// TODO: implement project search
function ProjectSearch() {
  const isInitial = useIsInitialRender()
  return (
    <motion.header
      className="flex mb-8 bg-black"
      initial={{
        opacity: 0,
        clipPath: `polygon(
          calc(100% + 5rem) 0,
          calc(100% + 5rem) 0,
          100% 5rem,
          100% 5rem
        )`,
      }}
      animate={{
        opacity: 1,
        clipPath: `polygon(
        0 0,
        calc(100% + 5rem) 0,
        100% 5rem,
        -5rem 5rem
      )`,
      }}
      transition={{
        duration: 0.7,
        delay: isInitial ? 1 : 0.5,
      }}
    >
      <input
        type="search"
        className="w-full bg-transparent font-space-grotesk border-y-[1px] border-dark text-2xl outline-none font-semibold placeholder:text-grae"
        placeholder="Search Projects"
      />
      <IconButton className="aspect-square w-20 border-[1px] border-dark">
        <Search size={28} />
      </IconButton>
    </motion.header>
  )
}

export default function ProjectList({ projects }: { projects: Project[] }) {
  const isInitial = useIsInitialRender()
  return (
    <div style={{ containerType: 'inline-size' }}>
      <h1 className="font-syne font-extrabold uppercase text-[8cqw] -mt-[0.37em]">
        Projects
      </h1>
      <PreviewImageProvider>
        <motion.div
          className="grid gap-8"
          initial="initial"
          animate="animate"
          transition={{
            staggerChildren: 0.1,
            delayChildren: isInitial ? 1.5 : 1,
          }}
        >
          {projects.map((project) => (
            <ProjectListItem key={project.slug} project={project} />
          ))}
        </motion.div>
      </PreviewImageProvider>
    </div>
  )
}
