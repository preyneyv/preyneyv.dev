'use client'

import { accentLine } from '@/constants'
import {
  ReactNode,
  createContext,
  useContext,
  useEffect,
  useMemo,
  useRef,
  useState,
} from 'react'

type CtxValue = {
  addLine: (key: string) => Liiine
  removeLine: (key: string) => void
} | null

const LiiinesContext = createContext<CtxValue>(null)

export function LiiinesContainer({ children }: { children?: ReactNode }) {
  const [lines, setLines] = useState<{ [key: string]: [number, Liiine] }>({})

  const fns = useMemo(
    () => ({
      // Mini reference-counter to clean up lines when they're no longer needed.
      addLine: (key: string) => {
        if (lines[key]) {
          setLines({ ...lines, [key]: [lines[key][0] + 1, lines[key][1]] })
          return lines[key][1]
        }
        const line = new Liiine()
        setLines({ ...lines, [key]: [1, line] })
        return line
      },
      removeLine: (key: string) => {
        if (!lines[key]) return
        const [count, line] = lines[key]
        if (count === 1) {
          delete lines[key]
          setLines({ ...lines })
          return
        }

        setLines({ ...lines, [key]: [count - 1, line] })
      },
    }),
    [setLines]
  )
  return (
    <LiiinesContext.Provider value={fns}>
      {children}
      <svg className="absolute left-0 top-0 w-full h-full -z-10">
        {Object.values(lines).map(([_, line]) => (
          <path
            d={line.render()}
            stroke={accentLine}
            strokeWidth={2}
            fill="transparent"
          />
        ))}
      </svg>
    </LiiinesContext.Provider>
  )
}

export function useLiiine(key: string) {
  const ctx = useContext(LiiinesContext)
  if (!ctx) throw new Error('useLiiine must be used within LiiinesContainer.')
  const { addLine, removeLine } = ctx
  const lineRef = useRef<Liiine>()
  useEffect(() => {
    lineRef.current = addLine(key)
    return () => removeLine(key)
  }, [key])
  return lineRef.current
}

export class Liiine {
  private coords: [number, number][] = []

  p(idx: number, cb: () => [number, number]) {
    this.coords[idx] = cb()
  }
  render() {
    const segments = this.coords.filter(Boolean).map((item, i) => {
      const isFirst = i === 0
      const command = isFirst ? 'M' : 'L'
      return `${command} ${item[0]} ${item[1]}`
    })
    return segments.join(' ')
  }
}
