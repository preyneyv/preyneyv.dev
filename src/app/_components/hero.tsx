import { useIsInitialRender } from '@/components/custom-motion'
import { motion } from 'framer-motion'

export default function Hero() {
  const isInitial = useIsInitialRender()
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
      className="text-3xl leading-none relative pb-32 flex flex-col justify-end"
      style={{
        height: `calc(100vh - 160px - 6rem)`,
        minHeight: '320px',
        maxHeight: '80vw',
      }}
    >
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
          Currently transforming client <br />
          experiences at McKinsey Digital.
        </motion.p>
      </motion.div>
    </div>
  )
}
