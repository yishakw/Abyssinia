import { useState } from "react";
import PageContainer from "../components/PageContainer";
import { IoIosArrowUp } from "react-icons/io";
import { IoIosArrowDown } from "react-icons/io";
import IMAGES from "../assets/Images";
function Questions() {
  function Question() {
    const [arr, setArr] = useState(false);
    return (
      <div className="border-b  w-ful sm:ml-20 hover:border-slate-800">
        <div
          className="flex items-center justify-between gap-10 cursor-pointer  pl-14 py-8 w-[80vw] lg:w-[60vw]  "
          onClick={() => setArr((prev) => !prev)}
        >
          <h2 className="border-b-transparent lg:text-[120%] hover:border-b-white cursor-pointer">
            How is your pricing?
          </h2>
          <span>{arr ? <IoIosArrowUp /> : <IoIosArrowDown />}</span>
        </div>
        <div className="flex items-center  justify-center">
          {arr && (
            <p className="text-center text-wrap  w-70vw h-28 lg:w-full lg:text-[110%] ">
              we develop Web apps, and websites for companies and for
              individuals with SEO optimization, with Attractive UI/UX design,
              Responsive design
            </p>
          )}
        </div>
      </div>
    );
  }

  return (
    <>
      <PageContainer
        title="FAQs"
        subtitle="Get the Answers to Common Questions"
      >
        {/* className=
      {`flex flex-col items-center justify-center gap-5 ${
        smFlex ? "" : "sm:grid  sm:grid-cols-2 sm:justify-center"
        } md:grid md:justify-between md:gap-14 md:grid-cols-${numGrid} my-11`} */}

        <div className="flex flex-col items-center z-10 lg:relative lg:left-36 justify-center my-24 w-[310px] ">
          <Question />
          <Question />
          <Question />
          <Question />
        </div>
      </PageContainer>
      <div className="w-full opacity-40 p-7 hidden lg:[display:initial] lg:relative lg:top-[4700px bottom-[800px] right-[150px] z- sm:full md:w-[300px] lg:w-full md:ml-8 lg:ml-24 bg-slate-5">
        <img
          src={IMAGES.questionMark}
          alt="img"
          className="w-[60vw] -rotate-12"
        />
      </div>
    </>
  );
}

export default Questions;
