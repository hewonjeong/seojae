'use client'

import { createClientComponentClient } from '@supabase/auth-helpers-nextjs'
import { useRouter } from 'next/navigation'
import { useEffect } from 'react'

export default function Logout() {
  const router = useRouter()
  const supabase = createClientComponentClient()

  useEffect(() => {
    async function logout() {
      await supabase.auth.signOut()
      router.push('/')
    }
    logout()
  }, [router, supabase.auth])

  return null
}
