import { useEffect, useState } from "react";
import { FaArrowAltCircleUp } from "react-icons/fa";

function BackToTop() {
  const [scr, setScr] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      if (scrollPosition > 300) {
        // Adjust the threshold as needed
        setScr(true);
      } else {
        setScr(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    // return window.removeEventListener("scroll", handleScroll);
  }, [scr]);
  const handleClick = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <button className=" hover:bg-slate-50" onClick={() => handleClick()}>
      <span
        className={`${
          scr ? "fixed" : "hidden"
        } top-[85vh] left-[75vw] sm:left-[80vw] lg:left-[90vw] opacity-70`}
      >
        <FaArrowAltCircleUp size={50} color="#af7F0" fill="#fF7500" />
      </span>
    </button>
  );
}

export default BackToTop;
