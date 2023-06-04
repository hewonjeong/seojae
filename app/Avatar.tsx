import Image from 'next/image'
import { ComponentProps } from 'react'
import { Person } from './Icons'

type Props = {
  src?: string
  size?: number
}

export default function Avatar({ src, size = 32 }: Props) {
  if (!src) return <Person size={size} className="text-gray-400" />
  return (
    <Image
      className="rounded-full"
      width={size}
      height={size}
      alt=""
      src={src}
    />
  )
}
