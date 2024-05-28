import SectionTitle from '@/components/section-title'

const courses = [
  { number: 3451, course: 'Computer Graphics' },
  { number: 3510, course: 'Design and Analysis of Algorithms' },
  { number: 3600, course: 'Introduction to Artificial Intelligence' },
  { number: 3630, course: 'Introduction to Robotics and Perception' },
  { number: 4510, course: 'Automata and Complexity' },
  { number: 4590, course: 'Computer Audio' },
  { number: 4641, course: 'Machine Learning' },
  { number: 4731, course: 'Game AI' },
]

export default function Education() {
  return (
    <section>
      <SectionTitle>Education</SectionTitle>
      <h2 className="text-3xl font-bold ">Georgia Institute of Technology</h2>
      <h3 className="text-lg -mt-2">Bachelor of Science in Computer Science</h3>
      <div className="flex gap-8">
        <h3 className="uppercase text-bloo text-xs font-bold">
          Aug 2020 &mdash; Dec 2022
        </h3>

        <h4 className="uppercase font-semibold text-xs flex gap-2">
          Intelligence
          <span className="text-grae">⁄</span>
          Media
          {/* <span className="text-grae">⁄⁄⁄⁄</span> */}
        </h4>
      </div>
    </section>
  )
}
