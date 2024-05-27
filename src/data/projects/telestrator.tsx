import type { Project } from '../projects'

function Telestrator() {
  return null
}

export default {
  name: 'Telestrator',
  slug: 'telestrator',
  description: (
    <>
      Freehand illustration tool for sports/esports analysts. A video feed is
      ingested through NDI, then compressed with NVENC and streamed over WebRTC
      to an iPad for low-latency telestration.
    </>
  ),
  tech: ['Rust', 'WebRTC', 'NVENC', 'NDI', 'H.264'],
  links: [{ type: 'github', url: 'https://github.com/preyneyv/telestrator' }],
  component: Telestrator,
} satisfies Project
