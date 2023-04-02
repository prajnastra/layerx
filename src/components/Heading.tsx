import React, { ReactNode } from "react"

interface PageProps {
    children: ReactNode
    classes?: string
}

const Heading: React.FC<PageProps> = ({ children, classes }) => {
  return (
    <p className={`${classes} font-bold text-xl border-b-2 border-green-500 p-1`}>{children}</p>
  )
}

export default Heading
