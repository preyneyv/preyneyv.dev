import type { Project } from '../projects'

function Yarralytics() {
  return null
}

export default {
  name: 'Yarralytics',
  slug: 'yarralytics',
  description: (
    <>
      In-depth post-game performance analytics for Brawlhalla. Website and
      native Rust client that automatically renders statistics as a post-game
      overlay. Games are processed by a distributed cluster of worker VMs
      coordinated through Service Bus.
    </>
  ),
  tech: ['Next.js', 'Rust', 'Tailwind', 'Azure', 'CF Workers'],
  links: [{ type: 'external', url: 'https://yarralytics.bh' }],
  component: Yarralytics,
} satisfies Project
