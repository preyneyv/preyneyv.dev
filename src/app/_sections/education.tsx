import { MotionImage } from '@/components/custom-motion'
import SectionTitle from '@/components/section-title'
import { motion, useScroll, useTransform } from 'framer-motion'
import { useEffect, useMemo, useRef, useState } from 'react'
import image from './assets/georgia-tech.jpeg'

const courses = [
  { number: 3451, course: 'Computer Graphics' },
  { number: 3510, course: 'Design and Analysis of Algorithms' },
  { number: 3600, course: 'Introduction to Artificial Intelligence' },
  { number: 3630, course: 'Introduction to Robotics and Perception' },
  { number: 4510, course: 'Automata and Complexity' },
  { number: 4590, course: 'Computer Audio' },
  { number: 4641, course: 'Machine Learning' },
  { number: 4731, course: 'Game AI' },
]

function useElementSize() {
  const ref = useRef<HTMLDivElement>(null)
  const [size, setSize] = useState<
    { width: number; height: number } | undefined
  >(undefined)
  useEffect(() => {
    if (!ref.current) return
    const obs = new ResizeObserver(([entry]) => {
      setSize({
        width: entry.contentRect.width,
        height: entry.contentRect.height,
      })
    })
    obs.observe(ref.current)
    return () => obs.disconnect()
  }, [ref])

  return { ref, size }
}

function TextMarquee({ text }: { text: string }) {
  const container = useElementSize()
  const textSize = useElementSize()
  const repeatCount = useMemo(
    () =>
      container.size && textSize.size
        ? Math.ceil(container.size.width / textSize.size.width) + 1
        : 0,
    [container.size, textSize.size]
  )
  const duration = useMemo(
    () => (textSize.size ? textSize.size.width / 60 : 1),
    [textSize.size]
  )

  const repeatedText = useMemo(() => text.repeat(repeatCount), [repeatCount])
  return (
    <div
      ref={container.ref}
      className="w-full h-full relative overflow-clip pointer-events-none select-none"
    >
      <motion.div
        className="absolute left-0 pointer-events-none"
        initial={{
          translateX: 0,
        }}
        animate={{ translateX: -(textSize.size?.width ?? 0) }}
        transition={{
          ease: 'linear',
          repeat: Infinity,
          duration,
        }}
      >
        <div className="opacity-0" ref={textSize.ref}>
          {text}
        </div>
        <div className="absolute left-0 top-0">{repeatedText}</div>
      </motion.div>
    </div>
  )
}

export default function Education() {
  return (
    <section>
      <SectionTitle>Education</SectionTitle>
      <div className="relative">
        <div className="relative">
          <div className="absolute border-b-[1px] border-dark w-screen -left-16 top-[28px] -z-10" />
          <h2 className="text-3xl font-bold">
            Georgia Institute of Technology
          </h2>
          <div className="flex justify-between items-center">
            <h3 className="text-md">Bachelor of Science in Computer Science</h3>
            <h3 className="text-right text-md leading-[0.8]">GPA: 3.94</h3>
          </div>
          <div className="flex text-xs uppercase font-bold leading-none items-center">
            <h3 className="text-bloo">Aug 2020 &mdash; Dec 2022</h3>
          </div>
        </div>
        <h4 className="uppercase font-semibold text-xs flex gap-2 mt-4">
          Intelligence
          <span className="text-grae">⁄</span>
          Media
        </h4>
        <ul className="text-xl leading-none">
          {courses.map((course, i) => (
            <li key={i} className="relative pt-2">
              <div className="relative flex overflow-x-clip">
                <div className="bg-black">{course.course}</div>
                <div className="font-bold text-dark text-center absolute left-0 -z-10 w-full h-full ">
                  <TextMarquee text={`CS${course.number}`} />
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}

export function GTImage() {
  const target = useRef(null)
  const scroll = useScroll({
    target,
    offset: ['-20% end', '120% start'],
  })

  return (
    <div className="relative -z-20 overflow-clip" ref={target}>
      <motion.div className="absolute top-1/2 -translate-y-1/2 -z-60">
        <MotionImage
          src={image}
          alt="Me after graduation"
          className="block"
          style={{
            translateY: useTransform(
              scroll.scrollYProgress,
              [-0.4, 1],
              ['-20%', '20%']
            ),
          }}
        />
      </motion.div>
    </div>
  )
}
