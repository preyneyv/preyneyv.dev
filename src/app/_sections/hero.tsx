import { MotionImage, useIsInitialRender } from '@/components/custom-motion'
import GlitchCanvas from '@/components/glitchy-canvas'
import { motion, useScroll, useTransform } from 'framer-motion'
import Link from 'next/link'
import { useRef } from 'react'
import profesh from './assets/profesh.jpeg'
import Image from 'next/image'

function ResponsiveBR() {
  return (
    <>
      <br className="hidden sm:block" />
      <span className="inline sm:hidden">&nbsp;</span>
    </>
  )
}

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
      className="text-2xl md:text-3xl leading-none relative mb-16 md:mb-32 flex flex-col justify-end"
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
      <motion.div
        className="absolute right-0 w-1/2 top-0 grayscale brightness-50"
        initial={{ opacity: 0, transform: 'translateY(20px)' }}
        animate={{ opacity: 1, transform: 'translateY(0)' }}
        transition={{ delay: isInitial ? 2 : 0, duration: 1 }}
      >
        <motion.div
          className="w-full -scale-x-100 aspect-square max-w-[50vh] absolute right-0"
          style={{
            clipPath: `polygon(
              50% 0,
              100% 50%, 50% 100%,
              0 50%
            )`,
          }}
          initial="initial"
          whileHover="hover"
        >
          <Image
            src={profesh}
            alt="self-picture"
            className="w-full"
            priority
            placeholder="blur"
          />
          <motion.div
            className="w-full h-full absolute top-0 right-0"
            variants={{
              initial: {
                opacity: 0,
              },
              hover: {
                opacity: 1,
              },
            }}
          >
            <video muted autoPlay loop playsInline className="w-full h-full">
              <source src="/chin-scratch.mp4" />
            </video>
          </motion.div>
        </motion.div>
      </motion.div>
      <motion.div
        transition={{
          staggerChildren: 0.4,
          delayChildren: isInitial ? 1.5 : 0,
        }}
        initial="initial"
        animate="animate"
      >
        <motion.p className="w-fit mb-[1em]" variants={childVariants}>
          Full-stack developer with a passion for
          <ResponsiveBR />
          user experience and real-time systems.
        </motion.p>
        <motion.p className="w-fit mb-[1em]" variants={childVariants}>
          <Link href="https://results.worldskills.org/results?event=364&offset=0&skill=609&base_skill=127">
            WorldSkills 2019 Silver Medalist
            <ResponsiveBR />
            in Web Technologies.
          </Link>
        </motion.p>
        <motion.p className="w-fit" variants={childVariants}>
          Currently transforming client
          <ResponsiveBR />
          experiences at McKinsey Digital.
        </motion.p>
      </motion.div>
    </div>
  )
}
