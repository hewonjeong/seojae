import getSession from '@/app/getSession'
import { redirect } from 'next/navigation'

export default async function Login() {
  const session = await getSession()

  if (session) {
    redirect('/')
  }

  return <div>Welcome</div>
}
