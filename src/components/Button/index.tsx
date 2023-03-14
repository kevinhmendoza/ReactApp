import { FC } from "react"

import './styles/index.css'

export const Button: FC = () => {
  return (
    <div className="button-container">
      <button className="button-button-adds">
        Agregar
      </button>
    </div>
  )
}