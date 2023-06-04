import type { ReactNode } from 'react'
import './globals.css'
import Provider from '@/query/provider'

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="ko">
      <body>
        <Provider>
          <div className="mx-auto max-w-4xl pt-8 pb-16 px-5">{children}</div>
        </Provider>
      </body>
    </html>
  )
}
