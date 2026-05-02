"use client";

import { colors } from "@/constants";
import {
  ReactNode,
  createContext,
  useContext,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";

type CtxValue = {
  addLine: (key: string) => Liiine;
  removeLine: (key: string) => void;
} | null;

const LiiinesContext = createContext<CtxValue>(null);

export function LiiinesContainer({ children }: { children?: ReactNode }) {
  const [lines, setLines] = useState<{ [key: string]: [number, Liiine] }>({});
  const linesRef = useRef(lines);

  const fns = useMemo(
    () => ({
      // Mini reference-counter to clean up lines when they're no longer needed.
      addLine: (key: string) => {
        const existing = linesRef.current[key];
        if (existing) {
          const next = {
            ...linesRef.current,
            [key]: [existing[0] + 1, existing[1]] as [number, Liiine],
          };
          linesRef.current = next;
          setLines(next);
          return existing[1];
        }

        const line = new Liiine();
        const next = {
          ...linesRef.current,
          [key]: [1, line] as [number, Liiine],
        };
        linesRef.current = next;
        setLines(next);
        return line;
      },
      removeLine: (key: string) => {
        const existing = linesRef.current[key];
        if (!existing) return;

        const [count, line] = existing;
        if (count === 1) {
          const next = { ...linesRef.current };
          delete next[key];
          linesRef.current = next;
          setLines(next);
          return;
        }

        const next = {
          ...linesRef.current,
          [key]: [count - 1, line] as [number, Liiine],
        };
        linesRef.current = next;
        setLines(next);
      },
    }),
    [],
  );
  return (
    <LiiinesContext.Provider value={fns}>
      {children}
      <svg className="absolute left-0 top-0 w-full h-full -z-10">
        {Object.entries(lines).map(([key, [, line]]) => (
          <path
            key={key}
            d={line.render()}
            stroke={colors.dark}
            strokeWidth={2}
            fill="transparent"
          />
        ))}
      </svg>
    </LiiinesContext.Provider>
  );
}

export function useLiiine(key: string) {
  const ctx = useContext(LiiinesContext);
  if (!ctx) throw new Error("useLiiine must be used within LiiinesContainer.");
  const { addLine, removeLine } = ctx;
  const lineRef = useRef<Liiine>();

  useEffect(() => {
    lineRef.current = addLine(key);
    return () => removeLine(key);
  }, [addLine, key, removeLine]);

  return lineRef.current;
}

export class Liiine {
  private coords: [number, number][] = [];

  p(idx: number, cb: () => [number, number]) {
    this.coords[idx] = cb();
  }
  render() {
    const segments = this.coords.filter(Boolean).map((item, i) => {
      const isFirst = i === 0;
      const command = isFirst ? "M" : "L";
      return `${command} ${item[0]} ${item[1]}`;
    });
    return segments.join(" ");
  }
}
