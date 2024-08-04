import { BsList } from "react-icons/bs";
import NavBtn from "./NavBtn";
import Button from "./Button";
import IMAGES from "../assets/Images";
import { useSelector, useDispatch } from "react-redux";
import { increment } from "../state/slices/counterSlice";
import { useState } from "react";
import { Link } from "react-router-dom";

export default function Nav() {
  // const count = useSelector((state) => state.counter.value)
  // const dispatch = useDispatch()
  const [show, setShow] = useState(false);

  console.log(show);
  return (
    <nav className="flex fixed w-full justify-between items-center bg-sky-400 bg-opacity-10  sm:px-6 sm:bg-slate-10 p-6 text-xl ">
      <div>
        <img
          src={IMAGES.logo}
          alt="logo"
          className="relative rounded-full bg-whit bg-opacity-40 w-[100px]"
        />
        <div className="absolute  top-11 rounded-3xl bottom-0 right-0 left-8 flex items-center justify-center w-20 -z-10 tw-11 h-11 opacity-35 -rotate-12 bg-black "></div>
      </div>
      <div
        className={`${
          !show && "hidden"
        } etfili absolute  items-center justify-cetner top-28 lg:static  lg:flex`}
      >
        <ul className="flex flex-col w-[90vw] lg:w-fit bg-black lg:bg-transparent bg-opacity-75 lg:flex-row gap-3 sm:gap-0 ">
          <Link to={"/"}>
            <NavBtn title="Home" />
          </Link>
          <Link to={"/service"}>
            <NavBtn title="Service" />
          </Link>
          <Link to={"/projects"}>
            <NavBtn title="Projects" />
          </Link>
          <Link to={"/questions"}>
            <NavBtn title="FAQs" />
          </Link>
          <Link to={"/blog"}>
            <NavBtn title="Blog" />
          </Link>
        </ul>
      </div>

      <div className="hidden md:block">
        <NavBtn title="Start Contact" />
      </div>

      <BsList
        size={40}
        className="lg:hidden text-amber-600"
        onClick={() => setShow((prev) => !prev)}
      />
    </nav>
  );
}
