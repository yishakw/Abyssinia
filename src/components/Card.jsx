import Button from "./Button";
import IMAGES from "../assets/Images";
import { useState, useRef, useEffect } from "react";
import { motion, useAnimation, useInView } from "framer-motion";
function Card({ icon, title, text, button, indix, link_to, img_style }) {
  const [hovered, setHovered] = useState(false);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const control = useAnimation();
  useEffect(() => {
    if (isInView) {
      control.start("visible");
    }
  }, [isInView]);
  const indixSign = indix % 2 === 0 ? -200 : 200;
  const delay = (0 + indix) / 10;
  // console.log(delay);
  return (
    <div
      ref={ref}
      onMouseLeave={() => setHovered(false)}
      onMouseEnter={() => setHovered(true)}
    >
      <motion.div
        variants={{
          hidden: {
            opacity: 0,
            // y: 60,
            x: indixSign,
            scale: 0,
          },
          visible: {
            opacity: 1,
            // y: 0,
            x: 0,
            scale: 1,
          },
        }}
        initial="hidden"
        animate={control}
        transition={{ ease: "easeInOut", duration: 0.1, delay: delay }}
        className="flex flex-col justify-center max-w-96 min-w-56 lg:min-w-80  items-center text-blue-950 bg-slate-100 transition-all duration-500 hover:bg-white hover:bg-opacity-85 bg-opacity-70 p-5 m-2 rounded-xl hover:-rotate-1 hover:scale-[105%] hover:shadow-md hover:shadow-amber-700"
      >
        <>
          <div className="my-11 h-40 ">
            <img
              src={IMAGES[icon]}
              alt="icon"
              className={`${
                hovered ? " s:max-w-[250px]  rotate-6" : ""
              } max-w-48 s:max-w-60 ${img_style} transition-all duration-300 hover:saturate-0`}
            />
          </div>
          <h1 className="font-semibold scale-110  lg:text-[120%]  s:mt-8 s:mb-4">
            {title}
          </h1>
        </>
        <p className="mt-3 s:mt-0">{text}</p>
        <Button name={button} bg="bg-amber-200" link_to={link_to} />
      </motion.div>
    </div>
  );
}

export default Card;
