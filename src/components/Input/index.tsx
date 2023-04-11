import { FC } from "react"

import './styles/index.css'
interface InputProop {
  handleChange: (e: any) => void
}
export const Input: FC<InputProop> = ({ handleChange }) => {
  return (
    <div className="input-container">
      <input placeholder="Ingrese algo"  className="input-input-type-text" type='text' onChange={handleChange} />
    </div>
  )
}