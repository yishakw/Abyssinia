import { Link } from "react-router-dom";

function Button({ name, bg, u, link_to }) {
  return (
    <Link to={link_to}>
      <button
        className={`${
          bg === "none" ? "bg-none" : "bg-amber-600"
        } drop-shadow-lg backdrop-blur-md bg-opacity-${
          u ? 100 : 50
        } rounded-full px-4 py-2 my-4 sm:px-6 sm:py-3 lg:my-6 hover:scale-105  active:scale-95 hover:bg-slate-500 hover:bg-opacity-95 hover:text-blue-200 text-white flex items-center`}
      >
        {name}
      </button>
    </Link>
  );
}

export default Button;
