'use client'

import { accentLine } from '@/constants'
import {
  MotionValue,
  easeInOut,
  motion,
  useMotionTemplate,
  useScroll,
  useTransform,
} from 'framer-motion'
import Link from 'next/link'
import { ReactNode, useRef } from 'react'

function AEYAnim({
  progress: rawProgress,
  isFirst,
}: {
  progress: MotionValue<number>
  isFirst?: boolean
}) {
  const progress = useTransform(rawProgress, [0.1, 1], [0, 1])
  const nameAStyle = {
    opacity: useTransform(progress, [0, 1], [1, 0]),
    transform: useMotionTemplate`translateY(${useTransform(
      progress,
      [0, 1],
      [0, -0.4]
    )}em)`,
  }
  const nameEYStyle = {
    width: useTransform(
      progress,
      [0, 1],
      isFirst ? ['1.18em', '2.22em'] : ['0.96em', '2.3em']
    ),
    opacity: useTransform(progress, [0, 1], [0, 1]),
    transform: useMotionTemplate`translateY(${useTransform(
      progress,
      [0, 1],
      [0.4, 0]
    )}em)`,
  }
  return (
    <span className="relative inline-flex">
      <motion.span style={nameAStyle} className="absolute">
        a
      </motion.span>
      <motion.span className="opacity-0 block" style={nameEYStyle}>
        ey
      </motion.span>
    </span>
  )
}

function HeaderAccent({ progress }: { progress: MotionValue<number> }) {
  const height = 200
  return (
    <motion.svg
      className="absolute w-screen right-0 bottom-0 -z-10 pointer-events-none"
      style={{
        height,
        transform: `translate(${height - 4}px, 7px) rotate(180deg)`,
        opacity: useTransform(progress, [0, 1], [1, 0]),
      }}
    >
      <motion.path
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: 10 }}
        d={`M10 ${height} L${height} 10 H10000`}
        stroke={accentLine}
        strokeWidth={2}
        fill="transparent"
      />
    </motion.svg>
  )
}

function NavLink({ href, children }: { href: string; children?: ReactNode }) {
  return (
    <Link className="leading-none" href={href}>
      {children}
    </Link>
  )
}

export default function Header() {
  const ref = useRef(null)
  let { scrollYProgress: progress } = useScroll({
    target: ref,
    offset: ['start start', 'end start'],
  })
  const midpoint = 0.5
  const p1 = useTransform(
    useTransform(progress, [0, midpoint], [0, 1]),
    easeInOut
  )
  const p2 = useTransform(
    useTransform(progress, [midpoint, 1], [0, 1]),
    easeInOut
  )

  const headerStyle = {
    transform: useMotionTemplate`translateY(${useTransform(
      p1,
      [0, 1],
      [0, -48]
    )}px)`,
  }

  const h1Style = {
    fontSize: useTransform(p1, [0, 1], ['60px', '40px']),
  }

  const nutalapatiStyle = {
    opacity: useTransform(p1, [0, 1], [1, 0]),
  }

  return (
    <div className="pt-24 pb-40 relative" ref={ref}>
      <motion.header
        className="fixed w-full max-w-7xl z-20"
        style={headerStyle}
      >
        <div className="flex justify-between w-full relative">
          <div className="relative">
            <motion.h1
              className="font-syne font-extrabold uppercase leading-[0.76]"
              style={h1Style}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 1 }}
            >
              <motion.span className="absolute left-0 flex select-none pointer-events-none">
                Pr
                <AEYAnim progress={p2} isFirst />
                n
                <AEYAnim progress={p2} />
                <span>v</span>
              </motion.span>
              <span className="text-transparent">Pranav </span>
              <motion.span className="block" style={nutalapatiStyle}>
                Nutalapati
              </motion.span>
            </motion.h1>
            <HeaderAccent progress={p1} />
          </div>
          <nav className="flex flex-col text-right items-end uppercase text-[13px] justify-between font-bold">
            <NavLink href="/projects">Projects</NavLink>
            <NavLink href="/resume">Resume</NavLink>
            <NavLink href="/github">GitHub</NavLink>
            <NavLink href="/contact">Contact</NavLink>
          </nav>
          <div className="bg-dark absolute right-0 h-screen w-0.5 -z-10 translate-x-0.5" />
        </div>
        <motion.h3 style={nutalapatiStyle} className="text-2xl">
          Software Developer & Designer
        </motion.h3>
      </motion.header>
    </div>
  )
}
