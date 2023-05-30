import type { ReactNode } from 'react'
import './globals.css'
import { Montserrat } from 'next/font/google'

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="ko">
      <body>{children}</body>
    </html>
  )
}
