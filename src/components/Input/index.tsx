import { FC } from "react"

import './styles/index.css'

export const Input: FC = () => {
  return (
    <div className="input-container">
      <input placeholder="Ingrese algo" className="input-input-type-text" type='text' />
    </div>
  )
}