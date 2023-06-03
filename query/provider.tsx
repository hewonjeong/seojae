'use client'

import React, { ReactNode, useState } from 'react'
import { QueryClientProvider, QueryClient } from '@tanstack/react-query'
import { Hydrate as RQHydrate, HydrateProps } from '@tanstack/react-query'

function Provider({ children }: { children: ReactNode }) {
  const [client] = useState(() => new QueryClient())

  return <QueryClientProvider client={client}>{children}</QueryClientProvider>
}

export default Provider

export function Hydrate(props: HydrateProps) {
  return <RQHydrate {...props} />
}
