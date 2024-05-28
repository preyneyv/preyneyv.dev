'use client'

import { AnimateHeight } from '@/components/animate-height'
import SectionTitle from '@/components/section-title'
import IconButton from '@/ui/icon-button'
import { ChevronLeft, ChevronRight } from '@carbon/icons-react'
import clsx from 'clsx'
import {
  AnimatePresence,
  MotionConfig,
  motion,
  useAnimationControls,
} from 'framer-motion'
import { useEffect, useRef, useState } from 'react'

import data from '@/data/experience'

function Selector({
  index,
  setIndex,
}: {
  index: number
  setIndex: (index: number) => void
}) {
  const ref = useRef<HTMLDivElement>(null)
  const animationControls = useAnimationControls()
  const lastIdx = useRef(index)
  useEffect(() => {
    if (lastIdx.current === index) {
      return
    }
    const offset =
      (ref.current?.children[index] as HTMLElement)?.offsetLeft ?? 0
    animationControls.start({
      x: -offset,
    })
    lastIdx.current = index
  }, [index, ref])

  return (
    <motion.div
      ref={ref}
      drag="x"
      animate={animationControls}
      transition={{ duration: 0.8, ease: 'circOut' }}
      className="flex gap-4 font-syne uppercase text-4xl font-extrabold whitespace-nowrap leading-none relative select-none"
      dragTransition={{
        timeConstant: 150,
        modifyTarget(value) {
          const children = Array.from(
            (ref.current?.children ?? []) as HTMLElement[]
          )
          let idx = children.findLastIndex((el) => el.offsetLeft < -value)
          idx = idx === -1 ? 0 : idx
          lastIdx.current = idx
          setIndex(idx)
          return -children[idx].offsetLeft
        },
      }}
    >
      {data.map((exp, i) => {
        const isActive = i === index
        return (
          <h2
            key={i}
            onClick={() => {
              if (isActive) return
              setIndex(i)
            }}
            className={clsx(
              'transition-all duration-300 font-[800] relative active:cursor-grabbing',
              isActive && 'text-white',
              !isActive && 'text-dark hover:text-grae cursor-pointer'
            )}
          >
            {exp.company}
          </h2>
        )
      })}
    </motion.div>
  )
}

export default function Experience() {
  const [index, setIndex] = useState(0)
  const active = data[index]
  return (
    <MotionConfig
      transition={{
        type: 'tween',
        ease: 'easeInOut',
      }}
    >
      <section>
        <SectionTitle>Experience</SectionTitle>
        <Selector index={index} setIndex={setIndex} />
        <AnimateHeight>
          <div className="flex justify-between">
            <AnimatePresence mode="wait" initial={false}>
              <motion.h3
                key={index}
                initial={{ opacity: 0, translateY: '-0.2em' }}
                animate={{ opacity: 1, translateY: '0em' }}
                exit={{ opacity: 0, translateY: '0.2em' }}
                className="text-2xl leading-none"
              >
                {active.role}
              </motion.h3>
            </AnimatePresence>
            <div className="flex pr-2">
              <IconButton
                disabled={index === 0}
                onClick={() => setIndex(Math.max(0, index - 1))}
              >
                <ChevronLeft size={24} />
              </IconButton>
              <IconButton
                disabled={index === data.length - 1}
                onClick={() => setIndex(Math.min(data.length - 1, index + 1))}
              >
                <ChevronRight size={24} />
              </IconButton>
            </div>
          </div>
          <AnimatePresence mode="wait" initial={false}>
            <motion.h3
              key={index}
              initial={{ opacity: 0, translateY: '-0.2em' }}
              transition={{ delay: 0.03 }}
              animate={{
                opacity: 1,
                translateY: '0em',
              }}
              exit={{ opacity: 0, translateY: '0.2em' }}
              className="uppercase text-bloo text-xs font-bold mt-4"
            >
              {active.start} &mdash; {active.end}
            </motion.h3>
          </AnimatePresence>
          <AnimatePresence mode="popLayout" initial={false}>
            <motion.div
              key={index}
              initial={{ opacity: 0, translateY: '-0.2em' }}
              animate={{
                opacity: 1,
                translateY: '0em',
                transition: { delay: 0.7, duration: 0.3 },
              }}
              exit={{ opacity: 0, translateY: '0.2em' }}
              className="text-xl max-w-4xl text-pretty [&_p]:mb-[1em]"
            >
              {active.description}
            </motion.div>
          </AnimatePresence>
        </AnimateHeight>
      </section>
    </MotionConfig>
  )
}
