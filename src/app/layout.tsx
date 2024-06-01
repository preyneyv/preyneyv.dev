import { MotionPageTransition } from '@/components/custom-motion'
import Footer from '@/components/footer/footer'
import Header from '@/components/header'
import { Analytics } from '@vercel/analytics/react'
import clsx from 'clsx'
import type { Metadata } from 'next'
import { Space_Grotesk, Syne } from 'next/font/google'
import Script from 'next/script'
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
  title: {
    default: 'Pranav Nutalapati',
    template: '%s ⁄⁄ Pranav Nutalapati',
  },
  description: 'Software Developer & Designer',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="!overflow-visible">
      {process.env.UMAMI_TRACKING_ID && (
        <Script
          defer
          src="https://cloud.umami.is/script.js"
          data-website-id={process.env.UMAMI_TRACKING_ID}
        />
      )}
      <body
        className={clsx(
          syne.variable,
          spaceGrotesk.variable,
          'font-space-grotesk relative'
        )}
      >
        <div className="w-screen overflow-x-clip">
          <main className="flex min-h-screen flex-col items-center justify-between w-screen">
            <div className="w-screen max-w-7xl px-9">
              <Header key="header" />
              <MotionPageTransition>{children}</MotionPageTransition>
            </div>
            <Footer />
          </main>
        </div>
        <Analytics />
      </body>
    </html>
  )
}
