import { MotionPageTransition } from '@/components/custom-motion'
import Header from '@/components/header'
import clsx from 'clsx'
import type { Metadata } from 'next'
import { Space_Grotesk, Syne } from 'next/font/google'
import './globals.css'

const syne = Syne({
  subsets: ['latin'],
  weight: 'variable',
  variable: '--font-syne',
})

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  weight: 'variable',
  variable: '--font-space-grotesk',
})

export const metadata: Metadata = {
  title: 'Pranav Nutalapati',
  description: 'Software Developer & Designer',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body
        className={clsx(
          syne.variable,
          spaceGrotesk.variable,
          'font-space-grotesk relative'
        )}
      >
        <div className="w-screen overflow-x-hidden">
          <main className="flex min-h-screen flex-col items-center justify-between w-screen">
            <div className="w-screen max-w-7xl">
              <Header key="header" />
              <MotionPageTransition>{children}</MotionPageTransition>
            </div>
          </main>
        </div>
      </body>
    </html>
  )
}
