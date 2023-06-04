'use client'

import { useEffect, useState } from 'react'

export default function Form() {
  const [query, setQuery] = useState('')
  const debouncedQuery = useDebounced(query)

  console.log(debouncedQuery)
  return (
    <form>
      <input
        autoFocus
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
    </form>
  )
}

function useDebounced<T>(value: T, delay: number = 1000): T {
  const [debouncedValue, setDebouncedValue] = useState<T>(value)

  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedValue(value)
    }, delay)

    return () => {
      clearTimeout(timer)
    }
  }, [value, delay])

  return debouncedValue
}
