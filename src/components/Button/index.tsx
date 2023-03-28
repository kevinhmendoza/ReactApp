import { FC } from "react"

import './styles/index.css'

export const Button: FC = () => {


  const hanldeClick = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) =>{ 
    console.log(event) 
  }

  const onFocus = () => {
    console.log("Focused")
  }

  return (
    <div className="button-container">
      <button className="button-button-adds" onClick={ hanldeClick } onFocus = {() => onFocus()} > 
        Agregar
      </button>
    </div>
  )
}