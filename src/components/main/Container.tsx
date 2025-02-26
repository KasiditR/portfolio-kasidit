import React from "react"

type ContainerProps = {
    children?: React.ReactNode
    className?: string
}

export default function Container(props: Readonly<ContainerProps>) {
  return (
    <div className={`container p-6 mx-auto ${props.className ?? ''}`}>{props.children}</div>
  )
}
