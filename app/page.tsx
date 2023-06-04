import { Montserrat } from 'next/font/google'
import { StaticImageData } from 'next/image'
import Link from 'next/link'
import Avatar from './Avatar'
import Book from './Book'
import books from './books'
import getSession from './getSession'

const montserrat = Montserrat({
  subsets: ['latin'],
  variable: '--font-montserrat',
})

export const metadata = {
  title: 'Seójae | Hewon Jeong’s Reading List',
  description: 'Hewon Jeong’s Reading List',
}

export default async function Home() {
  const session = await getSession()

  return (
    <>
      <header className="flex justify-between">
        <Link
          href="/"
          className={`${montserrat.variable} font-montserrat text-2xl font-black`}
        >
          Seójae
        </Link>
        {session ? (
          <Link href="/logout">
            <Avatar src={session.user.user_metadata?.avatar_url} />
          </Link>
        ) : (
          <Link href="/login" aria-label="Go to login">
            <Avatar />
          </Link>
        )}
      </header>
      <main className="mt-12">
        <article>
          <header>
            <h1
              className={`${montserrat.variable} font-montserrat text-[2.5rem] font-black leading-tight`}
            >
              My Reading List
            </h1>
            <small className="text-gray-400 font-mono">
              <a
                className="hover:text-gray-600"
                href="https://twitter.com/hewonjeong"
                target="_blank"
              >
                @hewonjeong
              </a>
              <span className="mx-2">|</span>
              <time dateTime="2023-05-30">May 30, 2023</time>
            </small>
          </header>

          <div className="mt-24">
            <ul className="grid gap-x-5 gap-y-12 grid-cols-2 md:grid-cols-3">
              {books.map((book, i) => (
                <Card key={book.url} {...book} priority={i < 6} />
              ))}
            </ul>
          </div>
        </article>
      </main>
    </>
  )
}

function Card({
  title,
  authors,
  url,
  image,
  priority,
}: {
  title: string
  authors: string[]
  url: string
  image: StaticImageData | string
  priority: boolean
}) {
  return (
    <li className="flex flex-col justify-end">
      <a href={url} target="_blank" rel="noreferrer" className="block group">
        <Book src={image} priority={priority} alt="" />
        <h3 className="mt-4 group-hover:underline truncate leading-tight">
          {title}
        </h3>
        <small className="text-gray-400 truncate">{authors.join(', ')}</small>
      </a>
    </li>
  )
}
