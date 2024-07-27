function Button({name, bg, u}) {
  return (
    <button className={`bg-${bg === 'none'? 'none': 'amber-800'} bg-opacity-50 rounded-full px-2 py-1 sm:px-6 sm:py-3 hover:bg-slate-100 hover:bg-opacity-35 hover:text-blue-900 text-white flex items-center`}>
      {name}
    </button>
  )
}

export default Button
