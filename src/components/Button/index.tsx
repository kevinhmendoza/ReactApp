import { FC } from "react"

import './styles/index.css'

interface ButtonProop {
  handleClick: (e: any) => void
}

export const Button: FC<ButtonProop> = ({ handleClick }) => {



  const onFocus = () => {
    console.log("Focused")
  }

  return (
    <div className="button-container">
      <button className="button-button-adds" onClick={ handleClick } onFocus = {() => onFocus()} > 
        Agregar
      </button>
    </div>
  )
}