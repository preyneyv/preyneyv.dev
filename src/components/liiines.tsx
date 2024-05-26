'use client'

import { ReactNode, createContext } from 'react'

type CtxValue = {}

const LiiinesContext = createContext<CtxValue>({})

export function LiiinesContainer({ children }: { children?: ReactNode }) {
  return (
    <LiiinesContext.Provider value={{}}>
      {children}
      <svg className="absolute left-0 top-0 w-full h-full -z-10"></svg>
    </LiiinesContext.Provider>
  )
}
