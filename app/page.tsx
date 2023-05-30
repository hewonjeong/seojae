import Image from 'next/image'
import books from './books'
import { Montserrat } from 'next/font/google'
import Link from 'next/link'

const montserrat = Montserrat({
  subsets: ['latin'],
  variable: '--font-montserrat',
})

export default function Home() {
  return (
    <div className="mx-auto max-w-4xl pt-8 pb-16 px-12">
      <header>
        <Link
          href="/"
          className={`${montserrat.variable} font-montserrat text-[2rem] font-black`}
        >
          Seójae
        </Link>
      </header>
      <main className="mt-12">
        <article>
          <header>
            <h1
              className={`${montserrat.variable} font-montserrat text-[2rem] font-bold`}
            >
              My Reading List
            </h1>
            <small className="text-gray-400 font-mono">
              <a
                className="hover:text-gray-600"
                href="https://twitter.com/hewonjeong"
              >
                @hewonjeong
              </a>
              <span className="mx-2">|</span>
              <time dateTime="2023-05-30">May 30, 2023</time>
            </small>
          </header>

          <div className="mt-24">
            <ul className="grid gap-2 grid-cols-3">
              {books.map((book) => (
                <Card key={book.url} {...book} />
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
}: {
  title: string
  authors: string[]
  url: string
  image: string
}) {
  return (
    <li>
      <a href={url} target="_blank" rel="noreferrer" className="block">
        <Image src={image} alt="" width={180} height={180} />
        <h3>{title}</h3>
        <small>{authors.join(', ')}</small>
      </a>
    </li>
  )
}
