'use client'

import { colors } from '@/constants'
import {
  MotionConfig,
  MotionValue,
  animate,
  easeInOut,
  motion,
  useMotionTemplate,
  useMotionValue,
  useMotionValueEvent,
  useScroll,
  useTransform,
} from 'framer-motion'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { ReactNode, useRef } from 'react'

function AEYAnim({
  progress: rawProgress,
  isFirst,
}: {
  progress: MotionValue<number>
  isFirst?: boolean
}) {
  const progress = useMotionValue(0)
  const animDirection = useRef(0)

  useMotionValueEvent(rawProgress, 'change', (v) => {
    if (v === 0) {
      if (animDirection.current !== -1) {
        animate(progress, 0, { velocity: 0.3, ease: 'circInOut' })
        animDirection.current = -1
      }
    } else {
      if (animDirection.current !== 1) {
        animate(progress, 1, { velocity: 0.3, ease: 'circInOut', delay: 0.3 })
        animDirection.current = 1
      }
    }
  })

  const overlap = 0.4
  const nameAStyle = {
    opacity: useTransform(progress, [0, 1 - overlap], [1, 0]),
    transform: useMotionTemplate`translateY(${useTransform(
      progress,
      [0, 1 - overlap],
      [0, -0.4]
    )}em)`,
  }
  const nameEYStyle = {
    width: useTransform(
      progress,
      [0, 1],
      isFirst ? ['1.17em', '2.22em'] : ['0.96em', '2.3em']
    ),
    opacity: useTransform(progress, [overlap, 1], [0, 1]),
    transform: useMotionTemplate`translateY(${useTransform(
      progress,
      [overlap, 1],
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
        d={`M10,${height} L${height},10 H10000`}
        stroke={colors.dark}
        strokeWidth={1}
        fill="transparent"
      />
    </motion.svg>
  )
}

const MotionLink = motion(Link)
function NavLink({
  href,
  children,
  newTab,
}: {
  href: string
  children?: ReactNode
  newTab?: boolean
}) {
  const path = usePathname()
  const isActive = path === href
  return (
    <motion.div
      className="-mb-1"
      variants={{
        initial: { opacity: 0, translateY: '2em' },
        animate: {
          opacity: 1,
          translateY: 0,
          transition: { duration: 1 },
        },
      }}
    >
      <MotionLink
        href={href}
        scroll={false}
        className="w-28 overflow-clip text-right block"
        whileHover={'hover'}
        animate={isActive ? ['hover', 'active'] : undefined}
        target={newTab ? '_blank' : undefined}
      >
        <motion.div
          className="relative block"
          initial={{ translateX: 0 }}
          variants={{
            hover: {
              translateX: '-1.8em',
            },
            active: {
              color: colors.bloo,
            },
          }}
        >
          {children}
          <span className="text-grae absolute -right-1 top-0 translate-x-full block">
            ⁄⁄
          </span>
        </motion.div>
      </MotionLink>
    </motion.div>
  )
}

export default function Header() {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end start'],
  })

  // const isLandingPage = usePathname() === '/'
  // const progress = useMotionValue(0)
  // useEffect(() => {
  //   const animProperties = {
  //     duration: 0.5,
  //   }
  //   if (isLandingPage) {
  //     animate(progress, scrollYProgress.get(), animProperties)
  //     return scrollYProgress.on('change', (value) => {
  //       progress.animation?.complete()
  //       progress.set(value)
  //     })
  //   } else {
  //     animate(progress, 1, animProperties)
  //   }
  // }, [isLandingPage, scrollYProgress])
  const progress = scrollYProgress

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

  return (
    <MotionConfig
      transition={{
        type: 'tween',
      }}
    >
      <div className="pb-72 relative pointer-events-none" ref={ref}>
        <motion.div
          className="bg-dark fixed top-0 border-l-[1px] border-l-dark -z-10"
          transition={{ duration: 1.4 }}
          initial={{ height: 0 }}
          animate={{ height: `100vh` }}
        />
        <motion.header
          className="fixed w-screen z-20 bg-gradient-to-b from-black from-[10%] to-transparent left-0 top-0 pt-24 flex justify-center"
          style={headerStyle}
        >
          <motion.div className="w-full max-w-7xl">
            <div className="flex justify-between w-full relative">
              <div className="relative select-none">
                <motion.h1
                  className="font-syne font-extrabold uppercase leading-[0.76]"
                  style={h1Style}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.5, duration: 1 }}
                >
                  <Link href="/" className="pointer-events-auto">
                    <motion.span className="absolute left-0 flex">
                      Pr
                      <AEYAnim progress={p2} isFirst />
                      n
                      <AEYAnim progress={p2} />
                      <span>v</span>
                    </motion.span>
                  </Link>
                  <br />
                  <motion.span
                    className="block"
                    style={{ opacity: useTransform(p1, [0, 1], [1, 0]) }}
                  >
                    Nutalapati
                  </motion.span>
                </motion.h1>
                <HeaderAccent progress={p1} />
              </div>
              <motion.nav
                className="flex flex-col text-right items-end uppercase text-[13px] justify-between font-bold pointer-events-auto"
                initial={'initial'}
                animate={'animate'}
                variants={{
                  animate: {
                    transition: {
                      delayChildren: 1.1,
                      staggerChildren: 0.1,
                    },
                  },
                }}
              >
                <NavLink href="/projects">Projects</NavLink>
                <NavLink newTab href="/resume">
                  Resume
                </NavLink>
                <NavLink newTab href="/github">
                  GitHub
                </NavLink>
                <NavLink href="/contact">Contact</NavLink>
              </motion.nav>

              <motion.div
                className="bg-dark absolute right-0 border-r-[1px] border-r-dark -z-10 h-screen origin-bottom"
                initial={{ scaleY: 0 }}
                animate={{ scaleY: 1 }}
                transition={{ delay: 0.5, type: 'keyframes', duration: 0.8 }}
              />
            </div>
            <motion.div
              initial={{
                translateY: '0.2em',
                opacity: 0,
                pointerEvents: 'auto',
              }}
              animate={{ translateY: 0, opacity: 1, pointerEvents: 'none' }}
              transition={{ duration: 0.5, delay: 1 }}
            >
              <motion.h3
                style={{ opacity: useTransform(p1, [0, 1], [1, 0]) }}
                className="text-2xl"
              >
                Software Engineer & Designer
              </motion.h3>
            </motion.div>
          </motion.div>
        </motion.header>
      </div>
    </MotionConfig>
  )
}
