import { FC } from "react"

import { TitleProps } from "types/components/Title"


import './styles/index.css'

export interface Frutas {

  name: string
}

type Name = string | number | boolean 

export const Title: FC<TitleProps> = ({title}) => {
const frutas : Frutas[] = [{
  name: '',
}]

const pruebas = (name: Name) => {
  return name
}

  return (
    <div className="title-container">
      <h1 className="title-title-h1">
        {title ? title : 'Kevin Mendoza'}
        { frutas.map((fruta) => {
          return(
            <span> { fruta.name } </span>
          )
        })} 
        <p>
          { pruebas('App React') }
        </p>
             

      </h1>
    </div>
  )
}