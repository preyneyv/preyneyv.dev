import { Project } from '../../projects'

export default {
  name: 'Reactive Stage Lighting',
  slug: 'brawlhalla-esports/reactive-stage-lighting',
  for: 'Brawlhalla Esports',
  tech: ['Node.js', 'UDP', 'DMX'],
  links: [
    { type: 'video', url: 'https://x.com/AJAX_HQ/status/1588708039699599360' },
  ],
  description: (
    <>
      Synchronized stage lighting and animations with in-game events like KOs
      and player damage.
    </>
  ),
  previewImage: {
    type: 'video',
    src: '/previews/brawlhalla-esports/reactive-stage-lighting.mp4',
  },
} satisfies Project
