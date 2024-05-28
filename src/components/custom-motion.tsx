'use client'

import { AnimatePresence, motion } from 'framer-motion'
import { LayoutRouterContext } from 'next/dist/shared/lib/app-router-context.shared-runtime'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import {
  PropsWithChildren,
  ReactNode,
  createContext,
  useContext,
  useRef,
} from 'react'

export const MotionLink = motion(Link)

/**
 * Freeze all rendered components at time of render. Used for route transitions
 *
 * TODO: This is a hack. Still an open issue for Next.js App Router
 * https://github.com/vercel/next.js/issues/49279#issuecomment-1675393849
 */
function FrozenRouter(props: PropsWithChildren<{}>) {
  const context = useContext(LayoutRouterContext)
  const frozen = useRef(context).current

  return (
    <LayoutRouterContext.Provider value={frozen}>
      {props.children}
    </LayoutRouterContext.Provider>
  )
}

const MotionInitialCtx = createContext(true)
export const MotionPageTransition = ({ children }: { children: ReactNode }) => {
  const path = usePathname()

  // Determine if this is the initial load or not. Useful for shortening
  // lengthy reveals into faster ones on navigate

  const firstPath = useRef(path)
  const isInitial = useRef(true)
  isInitial.current &&= path === firstPath.current

  // if (process.env.NODE_ENV !== 'production') {
  //   return children
  // }

  return (
    <MotionInitialCtx.Provider value={isInitial.current ?? true}>
      <div className="relative w-full">
        <AnimatePresence>
          <motion.div
            className="w-full"
            key={path}
            initial={{ opacity: 0, translateY: 0 }}
            animate={{ opacity: 1, transition: { delay: 0.3 } }}
            exit={{ opacity: 0, translateY: '-1vh', position: 'absolute' }}
          >
            <FrozenRouter>{children}</FrozenRouter>
          </motion.div>
        </AnimatePresence>
      </div>
    </MotionInitialCtx.Provider>
  )
}

export const useIsInitialRender = () => useContext(MotionInitialCtx)
