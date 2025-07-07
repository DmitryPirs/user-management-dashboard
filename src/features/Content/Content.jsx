import { useState } from 'react'
export default function Content({ children }) {
  return (
    <div className="bg-main-background box-border h-full min-h-[calc(100vh-5.5rem)] flex-grow pt-[1.2rem] pr-8 pb-8 pl-[17rem] text-left text-black">
      {children}
    </div>
  )
}
