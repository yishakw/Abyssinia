import PageContainer from "../components/PageContainer";
import { useForm } from "react-hook-form";

function Contact() {
  const { register, handleSubmit } = useForm();

  return (
    <PageContainer>
      <div className="bg-neutral-300 md:p-4 mx-2 lg:mx-0 lg:p-2  mt-11 rounded-xl">
        <h1 className="text-center text-3xl text-amber-950 pt-11 px-2">
          Let&apos;s Discuss About Your Ideas
        </h1>
        <form
          className="flex flex-col justify-center pb-11 gap-11 text-stone-950 items-center"
          onSubmit={handleSubmit((data) => console.log(data))}
        >
          <div className="flex flex-col lg:flex-row px-2 gap-11 mx-2 pt-11">
            <input
              type="text"
              placeholder="Name"
              className="w-[85vw] sm:w-96 h-16 rounded-lg px-3 sm:px-4 lg:ml-11 focus:outline-none focus:border focus:border-stone-400"
              {...register("name", { required: true })}
            />
            <input
              type="emai"
              placeholder="E-mail address"
              className=" sm:w-96 h-16 rounded-lg sm:px-4 px-3 lg:mr-11 focus:outline-none focus:border focus:border-stone-400"
              {...register("E-mail", { required: "This is required" })}
            />
          </div>
          <input
            {...register("subject")}
            type="text"
            placeholder="Subject"
            className="w-[85%] sm:w-96 lg:w-[90%] h-16 rounded-lg px-4 mx-11 focus:outline-none focus:border focus:border-stone-400"
          />
          <textarea
            name="name"
            id="name"
            rows={4}
            cols={50}
            className="mt-6 w-[90%] pl-5 pt-2  border focus:border-emerald-400 outline-none"
            {...register("message", { required: "This is required" })}
          />
          <button className="bg-teal-950 bg-opacity-65 px-10 py-6 rounded-3xl lg:mt-6 mr-11 lg:mr-20 text-lg text-slate-100 shadow-xl self-end">
            Send Message
          </button>
        </form>
      </div>
    </PageContainer>
  );
}

export default Contact;
