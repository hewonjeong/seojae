if (!process.env.NEXT_PUBLIC_SUPABASE_URL) {
  throw new Error('Missing env.NEXT_PUBLIC_SUPABASE_URL')
}

if (!process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY) {
  throw new Error('Missing env.NEXT_PUBLIC_SUPABASE_ANON_KEY')
}

if (!process.env.NAVER_CLIENT_ID) {
  throw new Error('Missing env.NAVER_CLIENT_ID')
}
if (!process.env.NAVER_CLIENT_SECRET) {
  throw new Error('Missing env.NAVER_CLIENT_SECRET')
}
if (!process.env.SUPABASE_SERVICE_ROLE_KEY) {
  throw new Error('Missing env.SUPABASE_SERVICE_ROLE_KEY')
}

export const NAVER_CLIENT_ID = process.env.NAVER_CLIENT_ID
export const NAVER_CLIENT_SECRET = process.env.NAVER_CLIENT_SECRET
export const SUPABASE_SERVICE_ROLE_KEY = process.env.SUPABASE_SERVICE_ROLE_KEY
export const NEXT_PUBLIC_SUPABASE_URL = process.env.NEXT_PUBLIC_SUPABASE_URL
export const NEXT_PUBLIC_SUPABASE_ANON_KEY =
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
