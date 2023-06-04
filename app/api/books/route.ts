import { NAVER_CLIENT_ID, NAVER_CLIENT_SECRET } from '@/constants'
import supabase from '@/supabase/service'
import { NextResponse } from 'next/server'

const API_URL = 'https://openapi.naver.com/v1/search/book.json'
const DISPLAY = 10

type Response = {
  lastBuildDate: string
  total: number
  start: number
  display: number
  items: Book[]
}

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

  return NextResponse.json(response)
}
