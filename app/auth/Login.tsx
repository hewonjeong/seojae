'use client'
import { createClientComponentClient } from '@supabase/auth-helpers-nextjs'
import { Session } from '@supabase/supabase-js'
import { useRouter } from 'next/navigation'

export default function Login({ session }: { session: Session | null }) {
  const router = useRouter()
  const supabase = createClientComponentClient()

  async function signInWithGoogle() {
    const { data } = await supabase.auth.signInWithOAuth({
      provider: 'google',
      options: { redirectTo: `${location.origin}/auth/callback` },
    })
    router.refresh()
  }

  async function signout() {
    const { error } = await supabase.auth.signOut()
    router.refresh()
  }

  return session ? (
    <button onClick={signout}>Sign out</button>
  ) : (
    <button onClick={signInWithGoogle}>Sign in</button>
  )
}
