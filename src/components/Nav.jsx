import { BsList } from "react-icons/bs";
import NavBtn from "./NavBtn";
import Button from "./Button";
import IMAGES from "../assets/Images";

export default function Nav() {
  return (
    <nav className="flex sticky justify-between items-center w-screen bg-slate-400 px-5 sm:px-6 sm:bg-slate-100 p-6 text-xl ">
    {/* <h2 className="text-xl ">Abyssinia Software solution</h2> */}
    <img src={IMAGES.logo} alt="logo" className=" rounded-full w-[100px]" />
      {/* <button>Start Contact</button> */}
    <div className="hidden lg:flex">
    <NavBtn />
    <NavBtn />
    <NavBtn />
    <NavBtn />
    <NavBtn />
    </div>
    <button>
      </button>
      <div className="hidden md:block">

      <Button name="Start Contact"/>
      </div>
    <BsList size={40} className="lg:hidden"/>
      {/* <ul>
        <li>
      <a href="#">Home</a>
        </li>
        <li>
     <a href="#">Building System</a>
        </li>
        <li>
     <a href="#">Erp System</a>
        </li>
        <li>
     <a href="#">School System</a>
        </li>
        <li>
     <a href="#">projects</a>
        </li>
        <li>
        </li>
    <a href="#">Blogs</a>
    <a href="#">FAQa</a>
      </ul> */}
  </nav>
  )
}
