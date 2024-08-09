import { useState } from "react";
import IMAGES from "../assets/Images";
import Button from "./Button";
function BlogsCard({ icon, title, text, button }) {
  const [hovered, setHovered] = useState(false);
  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="flex flex-col justify-center max-w-96 min-w-56 lg:min-w-80  items-center text-blue-950 bg-slate-100 transition-all duration-500 hover:bg-white hover:bg-opacity-85 bg-opacity-70 p-5 m-5 rounded-xl hover:scale-[105%] hover:shadow-md hover:shadow-amber-700"
    >
      <>
        <div className="my-7 h-40 flex flex-col justify-center items-center gap-4">
          <div>
            <h1>
              Abyssinia Software Solutions Launches New Innovative Software
            </h1>
            <div className="flex justify-between">
              <p>
                <strong>on</strong>
                July 04, 2024
              </p>
              <p>
                <strong>By</strong>
                Admin
              </p>
            </div>
          </div>
          <img
            src={IMAGES[icon]}
            alt="icon"
            className={`${
              hovered ? "max-w-40 scale-120" : ""
            } max-w-36 transition-all duration-300 `}
          />
        </div>
        <h1 className="font-semibold lg:text-[120%]">{title}</h1>
      </>
      <p>{text}</p>
      <Button name={button} bg="" u={true} />
    </div>
  );
}

export default BlogsCard;
