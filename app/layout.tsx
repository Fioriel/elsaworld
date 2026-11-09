import { Analytics } from '@vercel/analytics/next'
import type { Metadata } from 'next'
import type { CSSProperties } from 'react'
import { Caveat, Fredoka } from 'next/font/google'
import './globals.css'

const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? ''

const fredoka = Fredoka({
  subsets: ['latin'],
  display: 'swap',
})

const caveat = Caveat({
  subsets: ['latin'],
  weight: ['500', '600', '700'],
  variable: '--font-hand',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Until We Meet Again',
  description: 'A little something I made just for you... because I miss you.',
  icons: { icon: `${basePath}/favicon.ico` },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="en"
      className={`${fredoka.className} ${caveat.variable} h-full antialiased`}
      style={
        {
          '--noise': `url('${basePath}/noise.png')`,
          '--map-noise': `url('${basePath}/map-noise.jpg')`,
          '--cream-noise': `url('${basePath}/cream-noise.jpg')`,
          '--paper-bg': `url('${basePath}/paper-bg.jpeg')`,
        } as CSSProperties
      }
    >
      <body className="min-h-full flex flex-col select-none">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
