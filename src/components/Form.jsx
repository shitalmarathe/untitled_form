import {TbNorthStar ,TbFlareFilled} from "react-icons/tb";

function Form() {
const services = [
    "Website Design",
    "Content",
    "UX Design",
    "Strategy",
    "User Research",
    "Other",
  ];

  return (
    <>
      <h1 className="max-w-96 text-3xl font-semibold">
        Got Ideas?{" "}
        <TbNorthStar className="inline-block text-lime-500 md:text-black" />
        We've got the skills. Let's team up.
      </h1>
      <p className="my-6 text-xl">
        Tell us more about yourself and what's on your mind.
      </p>

      <form className="flex flex-col gap-2">
        {/* Inputs */}
        <input
          type="text"
          name="fullname"
          id="fullname"
          className="border-b border-stone-700 p-2 placeholder-gray-700 md:bg-lime-400"
          placeholder="Your name"
          autoComplete="off"

        />
        <input
          type="email"
          name="email"
          id="email"
          className="border-b border-stone-700 p-2 placeholder-gray-700 md:bg-lime-400"
          placeholder="your@company.com"
        />
        <input
          type="text"
          name="message"
          id="message"
          className="h-24 border-b border-stone-700 p-2 placeholder-gray-700 md:bg-lime-400"
          placeholder="Tell us a little about your project..."
        />

        <p className="my-6 text-gray-700">How can we help?</p>

        {/* Checbox */}
        <div className="mb-8 grid grid-cols-2 md:max-w-96">
          {services.map((service, index) => {
            return (
              <label
                key={service + index}
                className="flex cursor-pointer items-center gap-2"
              >
                <input type="checkbox" name="services" className="size-5" />{" "}
                {service}
              </label>
            );
          })}
        </div>

        <button
          type="submit"
          className="flex items-center justify-center gap-2 rounded-lg bg-zinc-950 p-1 text-white md:p-2"
        >
          Let's get started <TbFlareFilled className="text-lime-400" />
        </button>
      </form>
    </>
  );
}
   
 
export default Form ;