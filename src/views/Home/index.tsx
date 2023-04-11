import { ChangeEvent, FC, useState } from "react"

import { Button } from "components/Button"
import { Hello } from "components/Hello"
import { Input } from "components/Input"
import { Title } from "components/Title"

import './styles/index.css'

export const Home: FC = () => {
  const [value, setValue] = useState('')

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const target = event.target
    setValue(target.value)
  }

  console.log(value)
  return (
    <div className="home-contaiiner">
      <Title title="Bienvenido a la capacitación de react" />
      <div className="home-box">
        <Hello message={value}/>
        <Input handleChange={handleChange} />
        <Button />
      </div>
    </div>
  )
}