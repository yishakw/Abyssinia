import Button from "../components/Button"
function MainPage() {
  return (
    <div className="w-full place-content-center flex justify-center items-center h-[500px] bg-slate-400">
      <div className="">
        <div className="mb-7">

      <h1 className="text-5xl sm:text-7xl lg:text-9xl lg:my-6">Abyssiniya </h1>
      <h2 className="text-xl lg:">Software Solutions</h2>
      <h2 className="">Website Design and Development</h2>
        </div>
        <div className=" flex flex-col md:flex-row justify-between items-center gap-11">

      <Button name={"Read More"}/>
      <Button name={"Apply Now"}/>
        </div>
      </div>
     </div>
  )
}

export default MainPage
