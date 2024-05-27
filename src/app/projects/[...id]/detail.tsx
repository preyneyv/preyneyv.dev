'use client'

import { Project } from '@/data/projects'

export default function ProjectDetail({ project }: { project: Project }) {
  return <div>hello, {project.name}</div>
}
