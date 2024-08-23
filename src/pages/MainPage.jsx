import { useEffect, useState } from "react";
import Button from "../components/Button";
import { Typewriter } from "react-simple-typewriter";
import Service from "./Service";
import Projects from "./Projects";
import Questions from "./Questions";
import Blog from "./Blog";
import {
  AnimatePresence,
  delay,
  easeInOut,
  easeOut,
  motion,
} from "framer-motion";
import Footer from "./Footer";
import BackToTop from "../components/BackToTop";
import IMAGES from "../assets/Images";

function MainPage() {
  const titles = [
    "Web Development",
    "Mobile App Development",
    "General It Consulting",
    "Software as a Service SAS",
  ];
  const descriptions = [
    "Website Design and Development",
    "We design mobile apps for android and IOS device whth free deployment and unlimited technical support",
    "We provide technology consulting on software, networking, cyber, hardware development and implementation",
  ];
  const container = {
    hidden: {
      opacity: 0,
    },
    show: {
      opacity: 1,
      transition: {
        // delayChildren: 0.5,
        // repeat: Infinity,
        duration: 4,
        // delay: -4,
        ease: easeInOut,
      },
    },
    goOut: {
      opacity: 0,
      display: "hidden",
      // scale: 0,

      transition: {
        // repeat: Infinity,
        delay: 4,
        duration: 1,
        ease: easeOut,
      },
    },
  };
  const array_images = ["erp", "webb", "saas_app", "mobile_dev"];
  const len = array_images.length;
  const [imgIndx, setImgIndx] = useState(0);
  useEffect(() => {
    const intrvl = setInterval(() => {
      setImgIndx((prev) => (prev + 1) % len);
      console.log(imgIndx);
    }, 5000);
    return () => clearInterval(intrvl);
  }, [imgIndx, len]);

  return (
    <>
      <div className="w-full h-[100vh] place-content-center flex justify-center items-center pt-52 min-h-[500px] pb-11 bg-slate-40  ">
        <div className="flex sm:flex-row flex-col-reverse">
          <div className="sm:mt-0 mt-[5vw] z-10 mb-7 ">
            <motion.h1
              className="text-4xl sm:text-5xl lg:text-7xl pl-4 sm:pl-8 sm:max-w-[45vw] font-black font-mono uppercase text-amber-600 lg:mt-6 "
              initial={{ opacity: 0, scale: 0.5, y: 50 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              CRAFTING {"\n"} YOUR DIGITAL LANDSCAPE
            </motion.h1>

            <h2 className="text-lg sm:text-xl text-left text-amber-400 pl-4 sm:pl-11">
              <p>Home of Systems, Softwares and Solutions</p>
              {/* Software Solutions */}
            </h2>
            {/* <h2 className="text-xl sm:text-2xl lg:text-3xl text-right text-amber-200">Website Design and Development</h2> */}
            {/* <div className="flex justify-end sm:hidden md:[display:initial] h-8 absolute mx-11">
              <span className="text-xl sm:text-2xl lg:text-3xl text-right sm:w-fit  text-amber-200">
                <Typewriter
                  words={[
                    "Web Development",
                    "General It Consulting",
                    "Mobile App development",
                    "Software As a Service",
                  ]}
                  loop={0}
                  typeSpeed={70}
                  deleteSpeed={45}
                />
              </span>
            </div> */}
          </div>
          {/* <div className=" flex flex-col md:flex-row justify-between items-center gap-11">
            <Button name={"Read More"} />
            <Button name={"Apply Now"} />
          </div> */}
          <div className="sm:w-[50vw] w-full h-[40vh] flex justify-center items-center">
            {/* <img src={IMAGES.erp} alt="" /> */}
            {/* <img src={IMAGES.webb} alt="" /> */}
            {/* <img src={IMAGES.saas_app} alt="" /> */}
            <AnimatePresence>
              <motion.img
                key={imgIndx}
                variants={container}
                initial="hidden"
                animate="show"
                exit="goOut"
                src={IMAGES[array_images[imgIndx]]}
                alt="carrousel image"
                className={`absolute bg-blend-exclusion sm:scale-110 max-w-[90vw] sm:max-w-[40vw] p-11"}`}
              />
            </AnimatePresence>
            {/* <img src={IMAGES.mobile_dev} alt="" /> */}
          </div>
        </div>
      </div>
      <BackToTop />
      <Service />
      <Projects />
      <Blog />
      <Questions />

      <Footer />
    </>
  );
}

export default MainPage;
