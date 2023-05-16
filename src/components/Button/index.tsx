import { FC } from "react"

import './styles/index.css'
import { ButtonContainer } from "./styled/Button.styled"

interface ButtonProop {
  handleClick: (e: any) => void
}

export const Button: FC<ButtonProop> = ({ handleClick }) => {



  const onFocus = () => {
    console.log("Focused")
  }

  return (
    <ButtonContainer active={true}>
      <button className="button-button-adds" onClick={ handleClick } onFocus = {() => onFocus()} > 
        Agregar
      </button>
    </ButtonContainer>
  )
}