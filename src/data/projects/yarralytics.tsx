import type { Project } from '../projects'
import previewImage from '../../../public/previews/yarralytics.png'

function Yarralytics() {
  return null
}

export default {
  name: 'Yarralytics',
  slug: 'yarralytics',
  tagline: `Detailed post-game performance analytics for Brawlhalla.`,
  description: (
    <>
      Website and native Rust client that automatically renders statistics as a
      post-game overlay. Games are processed by a distributed cluster of worker
      VMs coordinated through Service Bus.
    </>
  ),
  tech: ['Next.js', 'Rust', 'D3', 'Azure', 'CF Workers'],
  links: [{ type: 'external', url: 'https://yarralytics.bh' }],
  component: Yarralytics,
  previewImage: {
    type: 'image',
    src: previewImage,
  },
} satisfies Project
