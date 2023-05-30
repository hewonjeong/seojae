import type { ReactNode } from 'react'
import './globals.css'
import { Montserrat } from 'next/font/google'

export const metadata = {
  title: 'Seojae',
  description: 'Hewon Jeong’s Reading List',
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="ko">
      <body>{children}</body>
    </html>
  )
}
