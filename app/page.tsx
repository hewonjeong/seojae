import Image, { StaticImageData } from 'next/image'
import books from './books'
import { Montserrat } from 'next/font/google'
import Link from 'next/link'

const montserrat = Montserrat({
  subsets: ['latin'],
  variable: '--font-montserrat',
})

export const metadata = {
  title: 'Seójae | Hewon Jeong’s Reading List',
  description: 'Hewon Jeong’s Reading List',
}

export default function Home() {
  return (
    <div className="mx-auto max-w-4xl pt-8 pb-16 px-5">
      <header>
        <Link
          href="/"
          className={`${montserrat.variable} font-montserrat text-2xl font-black`}
        >
          Seójae
        </Link>
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
    </div>
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
        <Image
          src={image}
          alt=""
          priority={priority}
          className="w-full max-w-[11.25rem] h-auto rounded shadow-[0px_13px_17px_-6px_rgba(0,0,0,0.5)]"
        />
        <h3 className="mt-4 group-hover:underline truncate">{title}</h3>
        <small className="text-gray-400 truncate">{authors.join(', ')}</small>
      </a>
    </li>
  )
}
