import { useState } from "react";
import Button from "../components/Button";
import { Typewriter } from "react-simple-typewriter";
import Service from "./Service";
import Projects from "./Projects";
import Questions from "./Questions";
import Blog from "./Blog";
import { motion } from "framer-motion";
import Footer from "./Footer";
import BackToTop from "../components/BackToTop";
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
  const [title, setTitle] = useState([]);
  return (
    <>
      <div className="w-full h-[100vh] place-content-center flex justify-center items-center pt-52 min-h-[500px] pb-11 bg-slate-40  ">
        <div className="">
          <div className="mb-7 ">
            <motion.h1
              className="text-5xl sm:text-7xl lg:text-9xl px-3 font-yatara uppercase text-amber-600 lg:mt-6 "
              initial={{ opacity: 0, scale: 0.5, y: 50 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              Abyssiniya
            </motion.h1>

            <h2 className="text-xl sm:text-2xl text-right text-amber-400 pr-4">
              Software Solutions
            </h2>
            {/* <h2 className="text-xl sm:text-2xl lg:text-3xl text-right text-amber-200">Website Design and Development</h2> */}
            <div className="flex justify-end h-8 mx-4">
              <span className="text-xl sm:text-2xl lg:text-3xl text-right text-amber-200">
                <Typewriter
                  words={[
                    "Web Design and Development",
                    "General It Consulting",
                    "Mobile App development",
                    "Software As a Service",
                  ]}
                  loop={0}
                  typeSpeed={70}
                  deleteSpeed={45}
                />
              </span>
            </div>
          </div>
          <div className=" flex flex-col md:flex-row justify-between items-center gap-11">
            <Button name={"Read More"} />
            <Button name={"Apply Now"} />
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
