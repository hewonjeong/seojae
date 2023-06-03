import { QueryClient } from '@tanstack/query-core'
import { cache } from 'react'

const client = cache(() => new QueryClient())

export default client
