import { ChangeEvent, FC, useState, MouseEvent } from "react"

import { Button } from "components/Button"
import { Hello } from "components/Hello"
import { Input } from "components/Input"
import { Title } from "components/Title"

import './styles/index.css'
import { HomeContainer } from "./styled/Home.styled"





export const Home: FC = () => {
  const [value, setValue] = useState('')

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const target = event.target
    setValue(target.value)
  }
  
  const handleClick = (event: MouseEvent<HTMLInputElement>) => {
    console.log(value)
  }


 
  return (
    <HomeContainer>
      <Title title="Bienvenido a la capacitación de react" />
      <div className="home-box">
        <Hello message={value}/>
        <Input handleChange={handleChange} />
        <Button handleClick={handleClick} />
      </div>
    </HomeContainer>
  )
}