import { NextResponse } from 'next/server'

export async function POST(request: Request) {
  const body = await request.json()
  const headers: any = {}
  request.headers.forEach((v, k) => {
    headers[k] = v
  })

  console.log('body', body)
  console.log('headers', headers)
  return NextResponse.json({ request: JSON.stringify(request), body, headers })
}
