function Button({name}) {
  return (
    <button className="bg-gray-800 rounded-full px-2 py-1 sm:px-6 sm:py-3 hover:bg-slate-200 hover:text-blue-700 text-white flex items-center">
      {name}
    </button>
  )
}

export default Button
