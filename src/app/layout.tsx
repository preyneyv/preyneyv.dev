import clsx from 'clsx'
import type { Metadata } from 'next'
import { Space_Grotesk, Syne } from 'next/font/google'
import './globals.css'
import { LiiinesContainer } from '@/components/liiines'

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
        <div className="overflow-x-hidden w-screen">
          <LiiinesContainer>{children}</LiiinesContainer>
        </div>
      </body>
    </html>
  )
}
