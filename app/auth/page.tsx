'use client'

import { supabase } from '@/supabase'
import { Session } from '@supabase/supabase-js'
import { useEffect, useState } from 'react'

async function signInWithGoogle() {
  const { data, error } = await supabase.auth.signInWithOAuth({
    provider: 'google',
  })
}

async function signout() {
  const { error } = await supabase.auth.signOut()
}

export default function Auth() {
  const [session, setSession] = useState<Session | null>(null)

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session)
    })

    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session)
    })

    return () => subscription.unsubscribe()
  }, [])

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      {session ? (
        <button onClick={signout}>Logout</button>
      ) : (
        <button onClick={signInWithGoogle}>Login</button>
      )}
    </main>
  )
}
