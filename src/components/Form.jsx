import { useState } from "react";
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
  const [formData, setFormData] = useState({
    fullname: "",
    email: "",
    message: "",
  });

  const [activeServices, setActiveServices] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(formData);
    console.log(activeServices);
  };
  const handleChange = (value, field) => {
    setFormData({ ...formData, [field]: value });
  };
  const handleCheckbox = (status, service) => {
    setActiveServices((prevState) =>
      status ? [...prevState, service] : prevState.filter((v) => v !== service),
    );
  };

  return (
    <>
      <Intro />
      <form className="flex flex-col gap-2" onSubmit={handleSubmit}>
        {/* Inputs */}
        <input
          type="text"
          name="fullname"
          id="fullname"
          className="border-b border-stone-700 p-2 placeholder-gray-700 md:bg-lime-400"
          placeholder="Your name"
          value={formData.fullname}
          onChange={(e) => handleChange(e.target.value, "fullname")}
        />

        <input
          type="email"
          name="email"
          id="email"
          className="border-b border-stone-700 p-2 placeholder-gray-700 md:bg-lime-400"
          placeholder="your@company.com"
          value={formData.email}
          onChange={(e) => handleChange(e.target.value, "email")}
        />
        <input
          type="text"
          name="message"
          id="message"
          className="h-24 border-b border-stone-700 p-2 placeholder-gray-700 md:bg-lime-400"
          placeholder="Tell us a little about your project..."
          value={formData.message}
          onChange={(e) => handleChange(e.target.value, "message")}
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
                <input
                  type="checkbox"
                  name="services"
                  className="size-5"
                  onChange={(e) => handleCheckbox(e.target.checked, service)}
                />{" "}
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

export default Form;