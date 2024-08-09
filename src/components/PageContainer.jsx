import { motion, useAnimation, useInView } from "framer-motion";
import { useEffect, useRef } from "react";
function PageContainer({ children, title, subtitle, smFlex, numGrid = 2 }) {
  const ref = useRef(null);
  const isInview = useInView(ref, { once: true });
  const contr = useAnimation();
  useEffect(() => {
    if (isInview) {
      contr.start("vis");
    }
    // console.log("Element is in view: ", isInview);
  }, [isInview]);

  return (
    <div ref={ref}>
      <motion.div
        variants={{
          hid: { opacity: 0, y: 75 },
          vis: {
            opacity: 1,
            y: 0,
          },
        }}
        initial="hid"
        animate={contr}
        transition={{ duration: 0.5, delay: 0.25 }}
        className="min-h-[500px] flex flex-col text-amber-400  items-center mx-4  pt-32 bg-green-800 bg-opacity-35 pb-20"
      >
        <h1 className="text-[40px] text-amber-600 mb-3">{title}</h1>
        <h2 className="text-xl text-center">{subtitle}</h2>
        <div
          className={`flex flex-col items-center justify-center gap-5 ${
            smFlex ? "" : "sm:grid  sm:grid-cols-2 sm:justify-center"
          } md:grid md:justify-between md:gap-14 md:grid-cols-${numGrid} my-11`}
        >
          {children}
        </div>
      </motion.div>
    </div>
  );
}

export default PageContainer;
