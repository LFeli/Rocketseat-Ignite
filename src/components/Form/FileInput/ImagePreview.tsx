'use client'

import { User } from 'lucide-react'
import { UseFileInput } from './Root'
import { useMemo } from 'react'

export function ImagePreview() {
  const { files } = UseFileInput()

  const PreviewURL = useMemo(() => {
    if (files.length === 0) {
      return null
    }

    return URL.createObjectURL(files[0])
  }, [files])

  if (PreviewURL === null) {
    return (
      <div className="flex h-16 w-16 items-center justify-center rounded-full bg-violet-50 dark:bg-violet-500/10">
        <User className="h-8 w-8 text-violet-500 dark:text-violet-300" />
      </div>
    )
  } else {
    return (
      // eslint-disable-next-line @next/next/no-img-element
      <img
        src={PreviewURL}
        alt=""
        className="h-16 w-16 rounded-full object-cover"
      />
    )
  }
}