import { Database } from '@/lib/database.types'
import { createClient } from '@supabase/supabase-js'
import { NextResponse } from 'next/server'

if (!process.env.NAVER_CLIENT_ID) {
  throw new Error('NAVER_CLIENT_ID is not set')
}

if (!process.env.NAVER_CLIENT_SECRET) {
  throw new Error('NAVER_CLIENT_SECRET is not set')
}

if (!process.env.NEXT_PUBLIC_SUPABASE_URL) {
  throw new Error('NEXT_PUBLIC_SUPABASE_URL is not set')
}

if (!process.env.SUPABASE_SERVICE_ROLE_KEY) {
  throw new Error('SUPABASE_SERVICE_ROLE_KEY is not set')
}

const NAVER_CLIENT_ID = process.env.NAVER_CLIENT_ID
const NAVER_CLIENT_SECRET = process.env.NAVER_CLIENT_SECRET

const API_URL = 'https://openapi.naver.com/v1/search/book.json'
const DISPLAY = 10

type Item = {
  title: string
  link: string
  image: string
  author: string
  discount: string
  publisher: string
  pubdate: string
  isbn: string
  description: string
}

type Response = {
  lastBuildDate: string
  total: number
  start: number
  display: number
  items: Item[]
}

const supabase = createClient<Database>(
  process.env.NEXT_PUBLIC_SUPABASE_URL,
  process.env.SUPABASE_SERVICE_ROLE_KEY
)

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url)
  const query = searchParams.get('query')
  const start = searchParams.get('start') ?? 1
  const res = await fetch(
    `${API_URL}?query=${query}&start=${start}display=${DISPLAY}`,
    {
      headers: {
        'X-Naver-Client-Id': NAVER_CLIENT_ID,
        'X-Naver-Client-Secret': NAVER_CLIENT_SECRET,
      },
    }
  )
  const response = (await res.json()) as Response

  supabase
    .from('naver_books')
    .insert(response.items)
    .then(() => {}) // Without this block, insert will not work

  return NextResponse.json({ books: response })
}
