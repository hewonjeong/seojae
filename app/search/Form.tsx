'use client'

import { key } from '@/query/key'
import { useQuery } from '@tanstack/react-query'
import Image from 'next/image'
import { useEffect, useState } from 'react'
import { Close, Search } from '../Icons'

export default function Form() {
  const [query, setQuery] = useState('')
  const debouncedQuery = useDebounced(query)

  const { data: books, isFetching } = useQuery({
    queryKey: [key.books, debouncedQuery],
    queryFn: () => fetchBooks(debouncedQuery),
    enabled: !!debouncedQuery,
    keepPreviousData: true,
  })

  return (
    <form
      className="max-h-[100vh] grid grid-rows-[auto_1fr]"
      onSubmit={(e) => e.preventDefault()}
    >
      <div className="grid grid-cols-[auto_1fr_auto] bg-gray-200 h-12">
        <div className="flex items-center p-2">
          <Search className="w-5 h-5 text-gray-600" />
        </div>
        <div>
          <input
            autoFocus
            autoComplete="off"
            autoCapitalize="off"
            enterKeyHint="search"
            className="w-full h-full bg-transparent border-none focus:ring-0 focus:outline-none"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
        </div>
        {query && (
          <button className="p-2" onClick={() => setQuery('')}>
            <Close className="w-5 h-5 text-gray-600" />
          </button>
        )}
      </div>
      <section className="overflow-auto">
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
                    <button className="px-2 py-1 border-gray-950 rounded border hover:bg-gray-200">
                      ➕ 읽은 책에 추가
                    </button>
                  </div>
                </li>
              )
            })}
          </ul>
        )}
      </section>
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
