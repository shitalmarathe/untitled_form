import { useForm } from "react-hook-form";
import Intro from "@/components/Intro";
import { TbFlareFilled } from "react-icons/tb";

const services = [
  "Website Design",
  "Content",
  "UX Design",
  "Strategy",
  "User Research",
  "Other",
];

function Form() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const handleFormSubmit = (value) => {
    console.log(value);
  };

  return (
    <>
      <Intro />
      <form
        className="flex flex-col gap-2"
        // onSubmit={handleSubmit(handleFormSubmit)}
        action="https://docs.google.com/forms/d/e/1FAIpQLSdbQ7D3_gQ4VqLQcwQv9wzzLgCu-_YC9Xu9vXtkqMbehb9NoQ/formResponse"
      >
        {/* Inputs */}
        <input
          type="text"
          id="fullname"
          
          {...register(" entry.1776159433", {
            required: "Please provide your full name",
          })}
          className="border-b border-stone-700 p-2 placeholder-gray-700 md:bg-lime-400"
          placeholder="Your name"
        />
        {errors.fullname && (
          <p className="text-red-500">{errors.fullname.message}</p>
        )}

        <input
          type="email"
          id="email"
         
          {...register("entry.40600087", {
            required: "Email is required",
            pattern: {
              value: /^[^@]+@[^@]+\.[^@]+$/,
              message: "Invalid email address",
            },
          })}
          className="border-b border-stone-700 p-2 placeholder-gray-700 md:bg-lime-400"
          placeholder="your@company.com"
        />


        {errors.email && <p className="text-red-500">{errors.email.message}</p>}
        <input
          type="text"
          id="message"
          {...register("entry.1834869221", {
            required: "Please provide details about your project",
            minLength: {
              value: 5,
              message: "Message should be at least 5 characters long",
            },
          })}
          className="h-24 border-b border-stone-700 p-2 placeholder-gray-700 md:bg-lime-400"
          placeholder="Tell us a little about your project..."
        />
        {errors.message && (
          <p className="text-red-500">{errors.message.message}</p>
        )}

        <p className="my-6 text-gray-700">How can we help?</p>

           {/* Checkbox */}


        <div className="mb-8 grid grid-cols-2 md:max-w-96">
          {services.map((service, index) => {
            return (
              <label
                key={service + index}
                className="flex cursor-pointer items-center gap-2"
              >
                <input
                  type="checkbox"
                  value={service}
                  {...register("entry.1326072485", {
                    required: "Select at-least one!",
                  })}
                  className="size-5"
                />
                {service}
              </label>
            );
          })}
          {errors.services && (
            <p className="text-red-500">{errors.services.message}</p>
          )}
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

export default Form;
