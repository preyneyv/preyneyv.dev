import { ReactNode } from 'react'

export type Experience = {
  company: string
  role: string
  type: string
  start: string
  end: string
  location: string
  description: ReactNode
  relatedProjects: {}[]
}

export default [
  {
    company: 'McKinsey Digital',
    role: 'Engineer II',
    type: 'Full-Time',
    start: 'Mar 2023',
    end: 'Now',
    location: 'Raliegh, NC',
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    relatedProjects: [],
  },
  {
    company: 'Brawlhalla Esports',
    role: 'Software Developer',
    type: 'Part-Time',
    start: 'Oct 2021',
    location: 'Atlanta, GA',
    end: 'Feb 2023',
    description:
      "Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    relatedProjects: [],
  },
] satisfies Experience[]
