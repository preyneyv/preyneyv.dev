'use client'
import { MotionConfig } from 'framer-motion'
import Certifications from './_sections/certifications'
import Education, { GTImage } from './_sections/education'
import Experience from './_sections/experience'
import FeaturedProjects from './_sections/featured-projects'
import Hero from './_sections/hero'

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
      <div className="grid grid-cols-1 gap-10 md:grid-cols-[1fr_auto] md:gap-16">
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
