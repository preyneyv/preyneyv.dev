import { MotionImage } from "@/components/custom-motion";
import SectionTitle from "@/components/section-title";
import { motion, useScroll, useTransform } from "framer-motion";
import { useEffect, useMemo, useRef, useState } from "react";
import image from "./assets/georgia-tech.jpeg";

type Course = {
  code: string;
  course: string;
  shortCourse: string;
};

const berkeleyCourses: Course[] = [
  {
    code: "CSC280",
    course: "Computer Vision",
    shortCourse: "Comp. Vision",
  },
  {
    code: "CS285",
    course: "Deep Reinforcement Learning",
    shortCourse: "Deep RL",
  },
  {
    code: "CS294137",
    course: "VR & Immersive Computing",
    shortCourse: "VR",
  },
  {
    code: "CS294196",
    course: "Agentic AI",
    shortCourse: "Agentic AI",
  },
];

const courses: Course[] = [
  {
    code: "CS3451",
    course: "Computer Graphics",
    shortCourse: "Comp. Graphics",
  },
  {
    code: "CS3510",
    course: "Design and Analysis of Algorithms",
    shortCourse: "Algorithm Design",
  },
  {
    code: "CS3600",
    course: "Introduction to Artificial Intelligence",
    shortCourse: "Intro. AI",
  },
  {
    code: "CS3630",
    course: "Introduction to Robotics and Perception",
    shortCourse: "Intro. Robotics",
  },
  {
    code: "CS4510",
    course: "Automata and Complexity",
    shortCourse: "Automata & Complexity",
  },
  {
    code: "CS4590",
    course: "Computer Audio",
    shortCourse: "Computer Audio",
  },
  {
    code: "CS4641",
    course: "Machine Learning",
    shortCourse: "Machine Learning",
  },
  {
    code: "CS4731",
    course: "Game AI",
    shortCourse: "Game AI",
  },
];

function useElementSize() {
  const ref = useRef<HTMLDivElement>(null);
  const [size, setSize] = useState<
    { width: number; height: number } | undefined
  >(undefined);
  useEffect(() => {
    if (!ref.current) return;
    const obs = new ResizeObserver(([entry]) => {
      setSize({
        width: entry.contentRect.width,
        height: entry.contentRect.height,
      });
    });
    obs.observe(ref.current);
    return () => obs.disconnect();
  }, [ref]);

  return { ref, size };
}

function TextMarquee({ text }: { text: string }) {
  const container = useElementSize();
  const textSize = useElementSize();
  const repeatCount = useMemo(
    () =>
      container.size && textSize.size
        ? Math.ceil(container.size.width / textSize.size.width) + 1
        : 0,
    [container.size, textSize.size],
  );
  const duration = useMemo(
    () => (textSize.size ? textSize.size.width / 60 : 1),
    [textSize.size],
  );

  const repeatedText = useMemo(
    () => text.repeat(repeatCount),
    [repeatCount, text],
  );
  return (
    <div
      ref={container.ref}
      className="w-full h-full relative overflow-clip pointer-events-none select-none"
    >
      <motion.div
        className="absolute left-0 pointer-events-none"
        initial={{
          translateX: 0,
        }}
        animate={{ translateX: -(textSize.size?.width ?? 0) }}
        transition={{
          ease: "linear",
          repeat: Infinity,
          duration,
        }}
      >
        <div className="opacity-0" ref={textSize.ref}>
          {text}
        </div>
        <div className="absolute left-0 top-0">{repeatedText}</div>
      </motion.div>
    </div>
  );
}

function CourseList({ courses }: { courses: Course[] }) {
  return (
    <ul className="text-xl leading-none">
      {courses.map((course) => (
        <li key={course.code} className="relative pt-2">
          <div className="relative flex overflow-x-clip">
            <div className="bg-black hidden sm:block">{course.course}</div>
            <div className="bg-black block sm:hidden">{course.shortCourse}</div>
            <div className="font-bold text-dark text-center absolute left-0 -z-10 w-full h-full ">
              <TextMarquee text={course.code} />
            </div>
          </div>
        </li>
      ))}
    </ul>
  );
}

export default function Education() {
  return (
    <section>
      <SectionTitle>Education</SectionTitle>
      <div className="relative flex flex-col gap-16">
        <div className="relative">
          <div className="relative">
            <h2 className="text-3xl font-bold leading-[1]">
              University of California, Berkeley
            </h2>
            <div className="absolute border-b-[1px] border-dark w-screen sm:-left-16 bottom-[0.3em] -z-10" />
          </div>
          <div className="flex justify-between items-end gap-4 flex-wrap mt-1">
            <h3 className="text-md leading-[1]">
              Master of Engineering in Computer Science
            </h3>
          </div>
          <div className="flex text-xs uppercase font-bold leading-none items-center gap-2 mt-1.5 flex-wrap">
            <h3 className="text-bloo">Aug 2025 &mdash; May 2026</h3>
            <span className="text-grae">⁄</span>
            <span className="text-bloo">Fung Excellence Scholar</span>
          </div>
          <h4 className="uppercase font-semibold text-xs flex gap-2 mt-4 flex-wrap">
            Visual Computing
            <span className="text-grae">⁄</span>
            Computer Graphics
          </h4>
          <CourseList courses={berkeleyCourses} />
        </div>
        <div className="relative">
          <div className="relative">
            <h2 className="text-3xl font-bold leading-[1]">
              Georgia Institute of Technology
            </h2>
            <div className="absolute border-b-[1px] border-dark w-screen sm:-left-16 bottom-[0.3em] -z-10" />
          </div>
          <div className="flex justify-between items-end gap-4 flex-wrap mt-1">
            <h3 className="text-md leading-[1]">
              Bachelor of Science in Computer Science
            </h3>
          </div>
          <div className="flex text-xs uppercase font-bold leading-none items-center gap-2 mt-1.5 flex-wrap">
            <h3 className="text-bloo">Aug 2020 &mdash; Dec 2022</h3>
            <span className="text-grae">⁄</span>
            <span className="text-bloo">Highest Honors</span>
          </div>
          <h4 className="uppercase font-semibold text-xs flex gap-2 mt-4">
            Intelligence
            <span className="text-grae">⁄</span>
            Media
          </h4>
          <CourseList courses={courses} />
        </div>
      </div>
    </section>
  );
}

export function GTImage() {
  const target = useRef(null);
  const scroll = useScroll({
    target,
    offset: ["-20% end", "120% start"],
  });

  return (
    <div
      className="relative -z-20 overflow-clip min-h-[50vw] md:min-h-0 min-w-9 md:min-w-60"
      ref={target}
    >
      <motion.div className="absolute top-1/2 -z-60 h-full">
        <MotionImage
          src={image}
          alt="Me after graduation"
          className="block min-h-[140%] object-cover object-[18%_50%]"
          style={{
            translateY: useTransform(
              scroll.scrollYProgress,
              [-0.4, 1],
              ["-80%", "-40%"],
            ),
          }}
        />
      </motion.div>
    </div>
  );
}
