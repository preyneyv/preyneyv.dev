'use client'

import { AnimateHeight } from '@/components/animate-height'
import SectionTitle from '@/components/section-title'
import clsx from 'clsx'
import { AnimatePresence, MotionConfig, motion } from 'framer-motion'
import { useEffect, useRef, useState } from 'react'
import data from './data.json'

function Selector({
  index,
  setIndex,
}: {
  index: number
  setIndex: (index: number) => void
}) {
  const [offset, setOffset] = useState(0)
  const ref = useRef<HTMLDivElement>(null)
  const opt = ref.current?.children[index] as HTMLHeadingElement
  useEffect(() => setOffset(opt?.offsetLeft ?? 0), [opt])
  return (
    <div
      ref={ref}
      className="flex gap-4 font-syne uppercase text-4xl font-extrabold whitespace-nowrap leading-none relative transition-transform duration-700"
      style={{ transform: `translateX(${-offset}px)` }}
    >
      {data.map((exp, i) => {
        const isActive = i === index
        return (
          <h2
            key={i}
            onClick={(e) => {
              if (isActive) return
              setIndex(i)
            }}
            className={clsx(
              'transition-all duration-300 font-[770]',
              isActive && 'text-white',
              !isActive && 'text-dark hover:text-grae cursor-pointer'
            )}
          >
            {exp.company}
          </h2>
        )
      })}
    </div>
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
      <section className="mb-24">
        <SectionTitle>Experience</SectionTitle>
        <Selector index={index} setIndex={setIndex} />
        <AnimateHeight>
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
            <motion.p
              key={index}
              initial={{ opacity: 0, translateY: '-0.2em' }}
              animate={{
                opacity: 1,
                translateY: '0em',
                transition: { delay: 0.7, duration: 0.3 },
              }}
              exit={{ opacity: 0, translateY: '0.2em' }}
              className="text-xl max-w-4xl"
            >
              {active.description}
            </motion.p>
          </AnimatePresence>
        </AnimateHeight>
      </section>
    </MotionConfig>
  )
}
