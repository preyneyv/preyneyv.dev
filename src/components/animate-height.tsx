'use client'

import { ReactNode, useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'

export function AnimateHeight({
  children,
  duration,
}: {
  children?: ReactNode
  duration?: number
}) {
  const ref = useRef(null)
  const [height, setHeight] = useState<number | 'auto'>('auto')
  useEffect(() => {
    const observer = new ResizeObserver(([size]) =>
      setHeight(size.contentRect.height)
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])
  return (
    <motion.div
      transition={{ duration }}
      className="overflow-visible"
      style={{ height }}
      animate={{ height }}
    >
      <div ref={ref}>{children}</div>
    </motion.div>
  )
}
