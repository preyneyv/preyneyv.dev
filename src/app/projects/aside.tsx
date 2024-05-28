'use client'

import GlitchCanvas from '@/components/glitchy-canvas'

export default function Aside() {
  return (
    <div>
      <aside className="sticky top-32">
        <svg viewBox="2 2 138 43">
          <text
            className="font-syne font-extrabold"
            textAnchor="start"
            fill="currentColor"
            alignmentBaseline="before-edge"
            fontSize={30}
          >
            <tspan x="0" dy="0.73em">
              PROJ
            </tspan>
            <tspan x="0" dy="0.73em">
              ECTS
            </tspan>
          </text>
        </svg>
      </aside>
      <div className="w-24 opacity-20 fixed bottom-24 -z-20">
        <GlitchCanvas layer={2} />
      </div>
    </div>
  )
}
