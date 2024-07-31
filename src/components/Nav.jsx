import { BsList } from "react-icons/bs";
import NavBtn from "./NavBtn";
import Button from "./Button";
import IMAGES from "../assets/Images";
import { useSelector, useDispatch } from "react-redux";
import { increment } from "../state/slices/counterSlice";

export default function Nav() {
  // const count = useSelector((state) => state.counter.value)
  // const dispatch = useDispatch()
  
  return (
    <nav className="flex sticky justify-between items-center bg-sky-400 bg-opacity-10  sm:px-6 sm:bg-slate-10 p-6 text-xl ">
      <div>
    <img src={IMAGES.logo} alt="logo" className="relative rounded-full bg-whit bg-opacity-40 w-[100px]" />
    <div className="absolute top-11 rounded-3xl bottom-0 right-0 left-8 flex items-center justify-center w-20 -z-10 tw-11 h-11 opacity-35 -rotate-12 bg-black "></div>
      </div>
      {/* <button>Start Contact</button> */}
    <div className="hidden lg:flex">
    <NavBtn title="Home"/>
    <NavBtn title="Service"/>
    <NavBtn title="Projects"/>
    <NavBtn title="FAQs"/>
    <NavBtn title="Blog"/>
    </div>
    <button>
      </button>
      <div className="hidden md:block">

      {/* <Button name="Start Contact"/> */}
      <NavBtn title="Start Contact"/>
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
