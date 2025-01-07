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
    role: 'Senior Engineer I',
    type: 'Full-Time',
    start: 'Mar 2023',
    end: 'Now',
    location: 'Raliegh, NC',
    description: (
      <>
        <p>
          At McKinsey Digital, I work across a wide array of technologies,
          roles, and industries to deliver impactful solutions to my clients.
        </p>
        <p>
          My work spans front-end, back-end, and cloud. I have architected and
          implemented digital systems for supply chain optimization, payment
          assistance, field service scheduling, and distributed automated
          testing. A key component of my role is to coach client technologists
          on best practices in software architecture and design, requiring
          coordination across multidisciplinary teams.
        </p>
      </>
    ),
    relatedProjects: [],
  },
  {
    company: 'Brawlhalla Esports',
    role: 'Software Developer, Part-Time',
    type: 'Part-Time',
    start: 'Oct 2021',
    location: 'Atlanta, GA',
    end: 'Feb 2023',
    description: (
      <>
        <p>
          While at Georgia Tech, I worked part-time for Brawlhalla Esports to
          build internal and public-facing applications and experiences.
        </p>
        <p>
          Most of my projects here were solo, having me go from requirements, to
          design, to product independently. The majority of my work was focused
          on enhancing the esports viewership experience for online and
          in-person tournaments.
        </p>
      </>
    ),
    relatedProjects: [],
  },
] satisfies Experience[]
