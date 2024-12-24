import { useForm } from "react-hook-form";
import Intro from "@/components/Intro";
import { TbFlareFilled } from "react-icons/tb";

console.log(import.meta.env.VITE_SUBMIT_URL);

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

  const handleFormSubmit = (data) => {
    console.log(data);
    console.log(import.meta.env.VITE_SUBMIT_URL);

    const formData = new FormData();
    formData.append(import.meta.env.VITE_FULLNAME, data.fullname);
    formData.append(import.meta.env.VITE_EMAIL, data.email);
    formData.append(import.meta.env.VITE_MESSAGE, data.message);
    formData.append(import.meta.env.VITE_SERVICES, data.services);

    fetch(import.meta.env.VITE_SUBMIT_URL, {
      method: "POST",
      mode: "no-cors",
      body: formData,
    }).then(() => console.log("Form is submitted!"));
  };

  return (
    <>
      <Intro />
      <form
        className="flex flex-col gap-2"
        onSubmit={handleSubmit(handleFormSubmit)}
      >
        {/* Inputs */}
        <input
          type="text"
          id="fullname"
          {...register("fullname", {
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
          {...register("email", {
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
          {...register("message", {
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
                  {...register("services", {
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