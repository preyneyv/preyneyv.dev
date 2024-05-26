import { ReactNode } from 'react'

export default function SectionTitle({ children }: { children?: ReactNode }) {
  return (
    <h3 className="uppercase font-bold text-sm -translate-x-4">
      <span className="text-bloo">{children}</span>
      <span className="text-grae ml-1">⁄⁄</span>
    </h3>
  )
}
