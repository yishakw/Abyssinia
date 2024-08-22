import { motion, warning } from "framer-motion";

function NavBtn({ title, delay, clas }) {
  const waitFor = `1.${delay + 1}`;
  return (
    <motion.li
      className={`${clas} list-none mx-3 flex justify-center w-[95%] lg:w-fit lg:my-0 cursor-pointer border-b border-transparent hover:border-b hover:border-slate-500 hover:border-opacity-70 md:hover:border-transparent `}
      initial={{ opacity: 0, y: -50, scale: 0.8 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ delay: waitFor }}
    >
      <div
        className="rounded-md bg-opacity-45 border border-transparent lg:border lg:hover:scale-110 lg:hover:border-orange-200 hover:border-solid lg:hover:border-opacity-15 hover:border hover:bg-opacity-50 lg:active:scale-95 text-amber-300 hover:text-amber-800 px-5 mx-3 py-3 text-sm font-medium"
        aria-current="page"
      >
        {title}
      </div>
    </motion.li>
  );
}

export default NavBtn;
