import { FC } from "react"

import './styles/index.css'

interface helloProps{
message:string

}

export const Hello: FC<helloProps> = ({message}) => {
  return (
    <div className="hello-container">
      <span className="hello-description-span">
        Hola: <strong> {message} </strong>
      </span>
    </div>
  )
}