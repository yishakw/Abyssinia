function PageContainer({children, title, subtitle}) {
  return (
    <div className="min-h-[500px] flex flex-col text-amber-400 justify-center items-center m-4 bg-green-800 bg-opacity-35">
      <h1 className="text-[40px] text-amber-600 mb-3">{title}</h1>
      <h2 className="text-xl text-center">{subtitle}</h2>
      <div className="flex flex-col items-center justify-center gap-5 m-2 sm:grid  sm:grid-cols-2 sm:justify-center md:justify-between md:gap-14 md:grid-cols-2 my-11">
      {children}
      </div>
    </div>
  )
}

export default PageContainer
                                                                        