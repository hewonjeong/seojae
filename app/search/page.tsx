import { Database } from '@/lib/database.types'
import { createServerComponentClient } from '@supabase/auth-helpers-nextjs'
import { cookies } from 'next/headers'
import { redirect } from 'next/navigation'
import Form from './Form'

export const dynamic = 'force-dynamic'

async function validateSession() {
  const supabase = createServerComponentClient<Database>({ cookies })

  const {
    data: { session },
  } = await supabase.auth.getSession()

  if (!session) redirect('/auth')
}

export default async function Search() {
  validateSession()

  return (
    <main>
      <Form />
    </main>
  )
}
