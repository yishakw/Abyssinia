function NavBtn({ title }) {
  return (
    <li className="list-none mx-3 flex justify-center w-[95%] lg:w-fit lg:my-0 cursor-pointer border-b border-transparent hover:border-b hover:border-slate-500 hover:border-opacity-70 md:hover:border-transparent ">
      <a
        href="#"
        className="rounded-md bg-opacity-45 border border-transparent lg:border lg:hover:scale-110 lg:hover:border-orange-200 hover:border-solid lg:hover:border-opacity-15 hover:border hover:bg-opacity-50 lg:active:scale-95 text-amber-300 hover:text-amber-800 px-5 mx-3 py-3 text-sm font-medium"
        aria-current="page"
      >
        {title}
      </a>
    </li>
  );
}

export default NavBtn;
