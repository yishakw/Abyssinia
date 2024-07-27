import Button from "./Button"
import IMAGES from "../assets/Images"
function Card({icon, title, text, button}) {
  return (
    <div className="flex flex-col justify-center max-w-64 items-center text-blue-950 bg-slate-100 hover:bg-white hover:bg-opacity-85 bg-opacity-70 p-5 m-5 rounded">
      <>
      <img src={IMAGES[icon]} alt="icon"/>  
      <h1 className="font-semibold">{title}</h1>
      </>
      <p>{text}</p>
<Button name={button} bg="none"/>
    </div>
  )
}

export default Card
