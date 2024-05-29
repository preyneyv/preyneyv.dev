'use client'
import { LogoGithub, LogoLinkedin } from '@carbon/icons-react'
import { useMotionValue, useSpring } from 'framer-motion'
import Link from 'next/link'
import { ReactNode, useEffect } from 'react'
import { MotionImage } from '../custom-motion'

function FooterLink({
  href,
  external,
  children,
}: {
  href: string
  external?: boolean
  children?: ReactNode
}) {
  return (
    <Link
      target={external ? '_blank' : undefined}
      href={href}
      className="text-neutral-400 hover:text-white transition-colors"
    >
      {children}
    </Link>
  )
}

export default function Footer() {
  return (
    <footer className="h-64 border-t-[1px] border-dark w-full flex justify-center items-end relative overflow-clip">
      <div className="max-w-7xl px-9 w-screen">
        <div className="w-full flex items-end justify-between">
          <h1 className="font-syne font-extrabold uppercase text-xl">
            <Link href="/">Pranav Nutalapati</Link>
          </h1>
          <nav className="flex gap-6 uppercase font-bold text-sm">
            <FooterLink href="/">Home</FooterLink>
            <FooterLink href="/projects">Projects</FooterLink>
            <FooterLink external href="/resume">
              Resume
            </FooterLink>
            <FooterLink external href="/github">
              GitHub
            </FooterLink>
          </nav>
        </div>
        <div className="w-full flex text-xs justify-between text-neutral-400 pb-9 items-end">
          <div>
            Designed and developed in 2024.{' '}
            <Link
              href="https://github.com/preyneyv/preyneyv.dev"
              className="border-b-grae border-b-[1px]"
            >
              View source on GitHub
            </Link>
          </div>
          <div>
            <nav className="flex gap-2 text-neutral-600">
              <Link
                href="https://github.com/preyneyv"
                className="hover:text-white transition-colors duration-300"
              >
                <LogoGithub size={20} />
              </Link>
              <Link
                href="https://linkedin.com/in/preyneyv"
                className="hover:text-white transition-colors duration-300"
              >
                <LogoLinkedin size={20} />
              </Link>
            </nav>
          </div>
        </div>
      </div>
      <div className="absolute left-0 bottom-9 w-screen border-t-[1px] border-dark" />
    </footer>
  )
}
