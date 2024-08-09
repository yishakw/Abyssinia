import Button from "./Button";
import IMAGES from "../assets/Images";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { projectH } from "../state/slices/hoverSlice";

function ProjectCard({ icon, title, text, button, width, height, k }) {
  const dispatch = useDispatch();
  const hovered = useSelector((state) => state.hovered.ProjectCardState[k]);
  // console.log(hovered);
  // const [hovered, setHovered] = useState(false);
  return (
    <div
      className={`relative flex flex-col justify-center max-w-96  w-full items-center text-center text-blue-950 bg-slate-100 hover:bg-white hover:bg-opacity-85 bg-opacity-70 p-1 m-5 transition-all duration-500 rounded `}
      onMouseEnter={() => dispatch(projectH(k))}
      onMouseLeave={() => dispatch(projectH(k))}
    >
      <div className=" flex items-center justify-center w-52 lg:w-[450px] lg:h-[400px] h-60">
        <img
          src={IMAGES[icon]}
          alt="icon"
          className={`${hovered ? "w-52" : ""}`}
        />
      </div>
      <div className="top-0 left-0 right-0 bottom-0 absolute flex flex-col items-center justify-center bg-emerald-800 opacity-0 transition-opacity duration-500 hover:opacity-90 ">
        <a href="#">
          <h1 className="font-semibold mb-6  text-amber-100 opacity-100 hover:text-amber-600 hover: text-5xl ">
            {title}
          </h1>
        </a>

        <p className="p-2 text-amber-200 text-lg ">{text}</p>
        <Button name="View More" bg="amber-600 " />
      </div>
    </div>
  );
}

export default ProjectCard;
