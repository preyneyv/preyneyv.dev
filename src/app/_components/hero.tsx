import { useIsInitialRender } from '@/components/custom-motion'
import GlitchCanvas from '@/components/glitchy-canvas'
import {
  motion,
  useMotionValueEvent,
  useScroll,
  useTransform,
} from 'framer-motion'
import { useEffect, useRef } from 'react'

export default function Hero() {
  const isInitial = useIsInitialRender()
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end start'],
  })

  const childVariants = {
    initial: {
      opacity: 0,
      translateY: '1em',
    },
    animate: {
      opacity: 1,
      translateY: 0,
      transition: {
        duration: 1,
      },
    },
  }
  return (
    <div
      ref={ref}
      className="text-3xl leading-none relative mb-32 flex flex-col justify-end"
      style={{
        height: `calc(100vh - 160px - 14rem)`,
        minHeight: '320px',
        maxHeight: '80vw',
      }}
    >
      <motion.div
        style={{ opacity: useTransform(scrollYProgress, [0, 0.7], [1, 0]) }}
      >
        <motion.div
          className="absolute bottom-0 right-0 w-24"
          initial={{
            opacity: 0,
          }}
          animate={{
            opacity: 0.2,
          }}
          transition={{ delay: isInitial ? 2 : 0, duration: 1 }}
        >
          <GlitchCanvas />
        </motion.div>
      </motion.div>
      <motion.div className="absolute w-full h-full top-0 left-[1px] -z-10" />
      <motion.div
        transition={{
          staggerChildren: 0.4,
          delayChildren: isInitial ? 1.5 : 0,
        }}
        initial="initial"
        animate="animate"
      >
        <motion.p className="mb-[1em]" variants={childVariants}>
          Full-stack engineer with a passion for
          <br />
          user experience and real-time systems.
        </motion.p>
        <motion.p className="mb-[1em]" variants={childVariants}>
          WorldSkills 2019 Silver Medalist
          <br />
          in Web Technologies.
        </motion.p>
        <motion.p variants={childVariants}>
          Currently transforming client
          <br />
          experiences at McKinsey Digital.
        </motion.p>
      </motion.div>
    </div>
  )
}
