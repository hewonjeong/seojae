'use client'

import Image from 'next/image'
import { ComponentProps } from 'react'

export default function Book({
  alt = '',
  ...props
}: ComponentProps<typeof Image>) {
  return (
    <div
      className={[
        'relative',
        'rounded',
        'w-fit',
        'overflow-hidden',
        'max-w-[11.25rem]',
        'shadow-[0px_13px_17px_-6px_rgba(0,0,0,0.5)]',
      ]
        .filter(Boolean)
        .join(' ')}
    >
      <div className="absolute inset-y-0 left-0 w-[2px] bg-black/20" />
      <Image className="h-auto" placeholder="blur" alt={alt} {...props} />
      <div className="absolute inset-y-0 left-[2px] w-[6px] bg-[linear-gradient(90deg,transparent_18%,rgba(0,0,0,.2)_58%,transparent_96%)]" />
    </div>
  )
}
