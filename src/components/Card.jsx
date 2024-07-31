import Button from "./Button"
import IMAGES from "../assets/Images"
import { useState } from "react"
function Card({icon, title, text, button}) {
  const [hovered, setHovered] = useState(false)
  return (
    <div onMouseEnter={() => setHovered(true)} onMouseLeave={() => setHovered(false)} className="flex flex-col justify-center max-w-64 min-w-56 lg:min-w-80  items-center text-blue-950 bg-slate-100 transition-all duration-500 hover:bg-white hover:bg-opacity-85 bg-opacity-70 p-5 m-5 rounded">
      <>
      <div className="my-7 h-40 ">

    <img src={IMAGES[icon]} alt="icon" className={`${hovered ? "max-w-40":""} max-w-36 transition-all duration-500 `}/>  
      </div>
      <h1 className="font-semibold">{title}</h1>
      </>
      <p>{text}</p>
<Button name={button} bg="none"/>
    </div>
  )
}

export default Card
