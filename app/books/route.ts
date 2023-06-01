import { NextResponse } from 'next/server'

if (!process.env.NAVER_CLIENT_ID) {
  throw new Error('NAVER_CLIENT_ID is not set')
}

if (!process.env.NAVER_CLIENT_SECRET) {
  throw new Error('NAVER_CLIENT_SECRET is not set')
}

const NAVER_CLIENT_ID = process.env.NAVER_CLIENT_ID
const NAVER_CLIENT_SECRET = process.env.NAVER_CLIENT_SECRET

const API_URL = 'https://openapi.naver.com/v1/search/book.json'
const DISPLAY = 10

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
  const books = await res.json()

  return NextResponse.json({ books })
}
