'use client'

import { key } from '@/query/key'
import { useQuery } from '@tanstack/react-query'
import Image from 'next/image'
import { useEffect, useState } from 'react'

export default function Form() {
  const [query, setQuery] = useState('')
  const debouncedQuery = useDebounced(query)

  const {
    data: books,
    isLoading,
    isFetching,
  } = useQuery({
    queryKey: [key.books, debouncedQuery],
    queryFn: () => fetchBooks(debouncedQuery),
    enabled: !!debouncedQuery,
    keepPreviousData: true,
  })

  return (
    <form onSubmit={(e) => e.preventDefault()}>
      <input
        autoFocus
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      {!books && isFetching && <div>loading...</div>}
      {query && (
        <ul>
          {books?.map((item) => {
            return (
              <li
                key={item.isbn}
                className="grid grid-cols-[auto_1fr] h-48 relative max-w-full"
              >
                <div className="relative w-36">
                  <Image
                    fill
                    sizes="10vw"
                    className="object-contain"
                    src={item.image}
                    alt=""
                  />
                </div>
                <div className="overflow-auto">
                  <div className="font-semibold truncate">{item.title}</div>
                  <div className="text-sm text-gray-400 truncate">
                    {item.author}
                  </div>
                </div>
                <div className="absolute h-full flex items-center right-0">
                  <button className="p-2 border-gray-950 rounded border hover:bg-gray-200">
                    ➕ 읽은 책에 추가
                  </button>
                </div>
              </li>
            )
          })}
        </ul>
      )}
    </form>
  )
}

async function fetchBooks(query: string) {
  const response = await fetch(`/api/books?query=${query}`)
  const { items } = (await response.json()) as { items: Book[] }

  return items
}

function useDebounced<T>(value: T, delay: number = 300): T {
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
