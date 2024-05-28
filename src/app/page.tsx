'use client'
import { MotionConfig } from 'framer-motion'
import Hero from './_components/hero'
import Education, { GTImage } from './_sections/education'
import Experience from './_sections/experience'
import FeaturedProjects from './_sections/featured-projects'
import Certifications from './_sections/certifications'

export default function Home() {
  return (
    <MotionConfig
      transition={{
        type: 'tween',
      }}
    >
      <Hero />

      <FeaturedProjects />
      <div className="mb-24" />
      <Experience />
      <div className="mb-24" />
      <div className="grid grid-cols-[1fr_auto] gap-16">
        <GTImage />
        <div>
          <Education />
          <div className="mb-12" />
          <Certifications />
        </div>
      </div>
    </MotionConfig>
  )
}
