import { FC } from "react"

import './styles/index.css'

export const Hello: FC = () => {
  return (
    <div className="hello-container">
      <span className="hello-description-span">
        Hola: <strong> Jhon </strong>
      </span>
    </div>
  )
}