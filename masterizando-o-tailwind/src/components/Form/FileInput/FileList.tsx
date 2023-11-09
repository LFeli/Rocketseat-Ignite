'use client'

import { FileItem } from './FileItem'
import { UseFileInput } from './Root'
import { useAutoAnimate } from '@formkit/auto-animate/react'

export function FileList() {
  const { files } = UseFileInput()
  const [parent] = useAutoAnimate()

  return (
    <div ref={parent} className="mt-4 space-y-3">
      {files.map((file) => {
        return (
          <FileItem
            key={file.name}
            name={file.name}
            size={file.size}
            state="complete"
          />
        )
      })}
    </div>
  )
}
