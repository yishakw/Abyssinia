import Button from "./Button";
import IMAGES from "../assets/Images";
import { useState, useRef, useEffect } from "react";
import { motion, useAnimation, useInView } from "framer-motion";
function Card({ icon, title, text, button, indix }) {
  const [hovered, setHovered] = useState(false);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const control = useAnimation();
  useEffect(() => {
    if (isInView) {
      control.start("visible");
    }
  }, [isInView]);
  const indixSign = indix % 2 === 0 ? -20 : 20;
  const delay = (0 + indix) / 10;
  console.log(delay);
  return (
    <div
      ref={ref}
      onMouseLeave={() => setHovered(false)}
      onMouseEnter={() => setHovered(true)}
    >
      <motion.div
        variants={{
          hidden: {
            y: 600,
            x: indixSign,
            opacity: 0,
          },
          visible: {
            y: 0,
            x: 0,
            opacity: 1,
          },
        }}
        initial="hidden"
        animate={control}
        transition={{ duration: 0.3, delay: delay }}
        className="flex flex-col justify-center max-w-96 min-w-56 lg:min-w-80  items-center text-blue-950 bg-slate-100 transition-all duration-500 hover:bg-white hover:bg-opacity-85 bg-opacity-70 p-5 m-2 rounded-xl hover:-rotate-1 hover:scale-[105%] hover:shadow-md hover:shadow-amber-700"
      >
        <>
          <div className="my-7 h-40 ">
            <img
              src={IMAGES[icon]}
              alt="icon"
              className={`${
                hovered ? "max-w-40 rotate-6" : ""
              } max-w-36 transition-all duration-300 `}
            />
          </div>
          <h1 className="font-semibold lg:text-[120%]">{title}</h1>
        </>
        <p>{text}</p>
        <Button name={button} bg="none" />
      </motion.div>
    </div>
  );
}

export default Card;
