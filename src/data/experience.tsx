import { ReactNode } from "react";

export type Experience = {
  company: string;
  role: string;
  type: string;
  start: string;
  end: string;
  location: string;
  description: ReactNode;
  relatedProjects: object[];
};

export default [
  {
    company: "McKinsey Digital",
    role: "Senior Software Engineer",
    type: "Full-Time",
    start: "Mar 2023",
    end: "Jun 2025",
    location: "Raleigh, NC",
    description: (
      <>
        <p>
          At McKinsey Digital, I worked across frontend, backend, cloud, and a
          bit of ML to build internal tools for clients in manufacturing,
          medtech, utilities, and payments. A lot of the work lived in messy
          operational spaces, which made it a good mix of product thinking,
          technical design, and hands-on implementation.
        </p>
        <p>
          The projects ranged from supply chain planning and field-service
          scheduling to document processing and distributed test orchestration.
          Depending on the project, I was usually somewhere between engineer,
          tech lead, and product partner, bouncing between architecture,
          implementation details, and client collaboration.
        </p>
      </>
    ),
    relatedProjects: [],
  },
  {
    company: "Brawlhalla Esports",
    role: "Software Developer, Part-Time",
    type: "Part-Time",
    start: "Oct 2021",
    location: "Atlanta, GA",
    end: "Feb 2023",
    description: (
      <>
        <p>
          While at Georgia Tech, I worked part-time for Brawlhalla Esports to
          build internal tools and public-facing fan experiences for online and
          in-person tournaments.
        </p>
        <p>
          Most of the work was end-to-end and solo, taking projects from
          requirements and product thinking through implementation. The output
          ranged from real-time broadcast overlays and tournament operations
          tooling to a redesign of brawlhalla.com and interactive viewer
          extensions used during live events.
        </p>
      </>
    ),
    relatedProjects: [],
  },
] satisfies Experience[];
