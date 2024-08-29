import { BsList } from "react-icons/bs";
import NavBtn from "./NavBtn";
import Button from "./Button";
import IMAGES from "../assets/Images";
import { useSelector, useDispatch } from "react-redux";
import { increment } from "../state/slices/counterSlice";
import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { current } from "@reduxjs/toolkit";

export default function Nav() {
  // const count = useSelector((state) => state.counter.value)
  // const dispatch = useDispatch()
  const [show, setShow] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [showNav, setShowNav] = useState(true);
  const prevScrollPosition = useRef(0);
  // console.log(showNav, prevScrollPosition.current);
  const handleScr = () => {
    const currentScroll = window.scrollY;
    if (currentScroll > 300 && currentScroll > prevScrollPosition.current) {
      setShowNav(false);
      setShow(false);
    } else {
      setShowNav(true);
    }
    prevScrollPosition.current = currentScroll;
  };
  useEffect(() => {
    window.addEventListener("scroll", handleScr);
    return () => {
      window.removeEventListener("scroll", handleScr);
    };
  }, []);
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;

      if (scrollPosition > 100) {
        // Adjust the threshold as needed
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.addEventListener("scroll", handleScroll);
    };
  }, [isScrolled]);
  return (
    <nav
      className={`flex ${
        showNav ? "" : "opacity-0 z-0 invisible"
      } z-30 fixed w-full justify-between items-center transition-all duration-500 bg-slate-800 ${
        isScrolled
          ? "bg-opacity-60 backdrop-blur-md"
          : "bg-opacity-15 drop-shadow-2xl "
      } bg-opacit-10  sm:px-6 sm:bg-slate-10 p-6 text-xl`}
    >
      <div>
        <Link to="/">
          <img
            src={IMAGES.logo}
            alt="logo"
            className="relative rounded-full bg-whit bg-opacity-40 w-[100px] cursor-pointer"
          />
        </Link>
        <div className="absolute  top-11 rounded-3xl bottom-0 right-0 left-8 flex items-center justify-center w-20 -z-10 tw-11 h-11 opacity-35 -rotate-12 bg-black "></div>
      </div>
      <div className="lg:flex lg:justify-between lg:gap-11">
        <div
          className={`${
            !show && "hidden"
          }  absolute  items-center justify-cetner top-28 left-0 right-0 lg:static  lg:flex`}
        >
          <ul
            className="flex flex-col items-center w-[90vw] lg:w-fit  bg-black lg:bg-transparent bg-opacity-75 lg:flex-row mx-auto lg:mx-0 gap-3 sm:gap-0 "
            onClick={() => show && setShow(false)}
          >
            <Link to={"/"}>
              <NavBtn title="Home" delay={1} />
            </Link>
            <Link to={"/service"}>
              <NavBtn title="Service" delay={2} />
            </Link>
            <Link to={"/projects"}>
              <NavBtn title="Projects" delay={3} />
            </Link>
            <Link to={"/questions"}>
              <NavBtn title="FAQs" delay={4} />
            </Link>
            <Link to={"/blog"}>
              <NavBtn title="Blog" delay={5} />
            </Link>
            <Link to={"/contact"}>
              <NavBtn clas="sm:hidden" title="Start Contact" delay={6} />
            </Link>
          </ul>
        </div>

        <div className="hidden md:block">
          <Link to={"/contact"}>
            <NavBtn title="Start Contact" delay={6} />
          </Link>
        </div>
      </div>

      <BsList
        size={40}
        className="lg:hidden text-amber-600 cursor-pointer"
        onClick={() => setShow((prev) => !prev)}
      />
    </nav>
  );
}
