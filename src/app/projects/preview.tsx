'use client'

import { AnimateHeight } from '@/components/animate-height'
import { MotionImage } from '@/components/custom-motion'
import { Project } from '@/data/projects'
import {
  AnimatePresence,
  EventInfo,
  MotionConfig,
  MotionValue,
  motion,
  useMotionTemplate,
  useMotionValue,
  useSpring,
} from 'framer-motion'
import Image from 'next/image'
import {
  ReactNode,
  createContext,
  useCallback,
  useContext,
  useEffect,
  useRef,
  useState,
} from 'react'
import { createPortal } from 'react-dom'

const PreviewImageContext = createContext<{
  updateProject: (
    project: Project,
    set: boolean,
    left: number | undefined
  ) => void
} | null>(null)

export function usePreviewImage(project: Project) {
  const ctx = useContext(PreviewImageContext)
  if (!ctx) {
    throw new Error('usePreviewImage must be used within PreviewImageContext.')
  }
  const onHoverStart = (event: PointerEvent, info: EventInfo) => {
    ctx.updateProject(
      project,
      true,
      (event.target as HTMLElement)?.getBoundingClientRect().left
    )
  }
  const onHoverEnd = (event: PointerEvent, info: EventInfo) => {
    ctx.updateProject(
      project,
      false,
      (event.target as HTMLElement)?.getBoundingClientRect().left
    )
  }

  useEffect(() => {
    // Remove this project from active, if it currently is active.
    ctx.updateProject(project, false, undefined)
  }, [])

  return { onHoverStart, onHoverEnd }
}

function PreviewImage({
  project: rawProject,
  x,
}: {
  project: Project | null
  x: MotionValue<number>
}) {
  const y = useMotionValue(0)
  useEffect(() => {
    const listener = (e: MouseEvent) => {
      y.set(e.clientY)
    }
    document.addEventListener('mousemove', listener, { passive: true })
    return () => {
      document.removeEventListener('mousemove', listener)
    }
  }, [])
  const springY = useSpring(y, {
    bounce: 0,
  })
  const motionTranslate = useMotionTemplate`translate(${x}px, ${springY}px) translate(-100%, -50%) translate(-60px, 0)`

  const lastProject = useRef(rawProject)
  const [haveImage, setHaveImage] = useState(!!rawProject?.previewImage)
  const resetTimeout = useRef<any>()
  useEffect(() => {
    clearTimeout(resetTimeout.current)
    if (rawProject?.previewImage) lastProject.current = rawProject
    if (rawProject?.previewImage) {
      setHaveImage(true)
    } else {
      resetTimeout.current = setTimeout(() => {
        setHaveImage(false)
      }, 150)
    }
    return () => {
      clearTimeout(resetTimeout.current)
    }
  }, [rawProject])

  const project = rawProject?.previewImage ? rawProject : lastProject.current
  if (!project) return

  return createPortal(
    <MotionConfig transition={{ type: 'tween' }}>
      <motion.div
        className="fixed z-50 pointer-events-none left-0 top-0 flex flex-col items-center w-96"
        style={{
          transform: motionTranslate,
        }}
        initial="hide"
        animate={haveImage ? 'show' : 'hide'}
      >
        <motion.div
          className="border-b-[1px] border-grae absolute origin-right"
          style={{ width: 'calc(100% + 0.5em)', bottom: 0, right: `-0.5em` }}
          variants={{
            hide: { scaleX: 0 },
            show: { scaleX: 1, transition: { delay: 0.3, type: 'tween' } },
          }}
        />
        <motion.div
          className="border-r-[1px] border-grae absolute origin-center"
          style={{ height: 'calc(100% + 1em)', bottom: `-0.5em`, right: 0 }}
          variants={{
            hide: { scaleY: 0, transition: { delay: 0.3, type: 'tween' } },
            show: { scaleY: 1 },
          }}
        />
        <motion.div
          className="border-t-[1px] border-grae absolute origin-right"
          style={{ width: 'calc(100% + 0.5em)', top: 0, right: `-0.5em` }}
          variants={{
            hide: { scaleX: 0 },
            show: { scaleX: 1, transition: { delay: 0.3, type: 'tween' } },
          }}
        />
        <motion.div
          className="my-1 mr-1 bg-black/90 backdrop-blur-sm"
          variants={{
            hide: {
              clipPath: `polygon(
                100% 0%,
                100% 0%,
                100% 100%,
                100% 100%
              )`,
            },
            show: {
              clipPath: `polygon(
                0% 0%,
                100% 0%,
                100% 100%,
                0% 100%
              )`,
            },
          }}
        >
          <AnimateHeight>
            <motion.div
              variants={{
                hide: { opacity: 0 },
                show: { opacity: 1, transition: { delay: 0.5 } },
              }}
            >
              {project.previewImage!.type === 'image' && (
                <Image
                  className="w-96"
                  src={project.previewImage!.src}
                  alt={project.name}
                />
              )}
              {project.previewImage!.type === 'video' && (
                <video
                  className="w-96"
                  controls={false}
                  autoPlay
                  muted
                  loop
                  key={project.previewImage!.src}
                >
                  <source src={project.previewImage!.src} />
                </video>
              )}
            </motion.div>
          </AnimateHeight>
        </motion.div>
      </motion.div>
    </MotionConfig>,
    document.body
  )
}

export default function PreviewImageProvider({
  children,
}: {
  children: ReactNode
}) {
  const [activeProject, setActiveProject] = useState<null | Project>(null)
  const x = useMotionValue(0)

  const updateProject = useCallback(
    (project: Project, set: boolean, left: number | undefined) => {
      if (set) setActiveProject(project)
      else setActiveProject(null)
      left !== undefined && x.set(left)
    },
    [setActiveProject]
  )

  return (
    <div className="relative">
      <PreviewImageContext.Provider value={{ updateProject }}>
        {children}
      </PreviewImageContext.Provider>
      <PreviewImage project={activeProject} x={x} />
    </div>
  )
}
