import { NextResponse } from 'next/server'

export const config = {
  api: {
    bodyParser: {
      sizeLimit: '1mb',
    },
  },
}

export async function POST(request: Request) {
  const body = await request.json()
  console.log(body)
  const keys = request.headers.keys()
  const headers: any = {}
  request.headers.forEach((v, k) => {
    headers[k] = v
  })

  return NextResponse.json({ request: JSON.stringify(request), body, headers })
}
