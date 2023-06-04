import getSession from '@/app/getSession'
import { redirect } from 'next/navigation'
import Form from './Form'

export const dynamic = 'force-dynamic'
export default async function Login() {
  const session = await getSession()

  if (session) {
    redirect('/')
  }

  return <Form />
}
