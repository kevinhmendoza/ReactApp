import { FC } from "react"

import { Button } from "components/Button"
import { Hello } from "components/Hello"
import { Input } from "components/Input"
import { Title } from "components/Title"

import './styles/index.css'

export const Home: FC = () => {
  return (
    <div className="home-contaiiner">
      <Title />
      <div className="home-box">
        <Hello />
        <Input />
        <Button />
      </div>
    </div>
  )
}