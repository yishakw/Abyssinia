import { useState } from "react";
import IMAGES from "../assets/Images";
import Button from "./Button";
function BlogsCard({ icon, title, text, button }) {
  const [hovered, setHovered] = useState(false);
  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="flex flex-col justify-center lg:w-[95vw]  lg:min-w-80  items-center hover:text-amber-500 bg-zinc-950 transition-all duration-500 hover:bg-slate-950 hover:bg-opacity-75 bg-opacity-70 py-6  hover:shadow-md  text-amber-600 lg:h-[70vh] border-b border-slate-500  "
    >
      <div className=" h-full  my-2 sm:h-full sm:p-4 flex flex-col md:flex-row lg:mx-11 justify-center items-center gap-11">
        <div className="w-fit scale-90 flex flex-col items-center mt-2 justify-center overflow-hidden">
          <img
            src={IMAGES[icon]}
            alt="icon"
            className={`${
              hovered ? "scale-105 sm:scale-y-110 " : ""
            }   transition-all w-[95%] lg:min-w-60 sm:w-full h-full`}
          />
        </div>
        <div className=" flex flex-col px- items-center md:items-start justify-center">
          <div className="flex justify-between px-3 w-full text-sm"></div>
          <h1 className="text-2xl font-bold text-center md:text-start mt-2">
            Abyssinia Software Solutions Launches New Innovative Software
          </h1>
          <p className=" mb-2">July 04, 2024</p>
          {/* <p className="text-start hidden lg:inline pb-6">{text}</p> */}
          <div className=" relative top-2 sm:top-11 md:top-4 lg:top-14">
            <Button name={button} bg="" u={true} link_to={"/blog"} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default BlogsCard;
