import type { ReactNode } from 'react'
import './globals.css'
import Provider from '@/query/provider'

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="ko">
      <body>
        <Provider>{children}</Provider>
      </body>
    </html>
  )
}
