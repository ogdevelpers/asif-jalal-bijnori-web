import type { Metadata } from 'next'
import { Noto_Serif, Tangerine } from 'next/font/google'
import './globals.css'

const notoSerif = Noto_Serif({
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--font-noto-serif',
})

const tangerine = Tangerine({
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--font-tangerine',
})

export const metadata: Metadata = {
  title: 'Asif Jalal Bijnori - Poet',
  description: 'Asif Jalal Bijnori, a celebrated poet, weaves tales of love, loss, and longing through his verses.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${notoSerif.variable} ${tangerine.variable} antialiased`}>
        {children}
      </body>
    </html>
  )
}
