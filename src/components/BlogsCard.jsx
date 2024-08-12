import { useState } from "react";
import IMAGES from "../assets/Images";
import Button from "./Button";
function BlogsCard({ icon, title, text, button }) {
  const [hovered, setHovered] = useState(false);
  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="flex flex-col justify-center   lg:min-w-80  items-center hover:text-amber-500 bg-slate-950 transition-all duration-500 hover:bg-black hover:bg-opacity-75 bg-opacity-70 py-4  hover:shadow-md hover:shadow-amber-700 text-amber-600  border-b border-slate-500  "
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
          <div className="flex justify-between px-3 w-full text-sm">
            <p className="">July 04, 2024</p>
            <p className="">Admin</p>
          </div>
          <h1 className="text-2xl font-bold text-center md:text-start my-2">
            Abyssinia Software Solutions Launches New Innovative Software
          </h1>
          <p className="text-start hidden lg:inline pb-6">{text}</p>
          <Button name={button} bg="" u={true} />
        </div>
      </div>
    </div>
  );
}

export default BlogsCard;
