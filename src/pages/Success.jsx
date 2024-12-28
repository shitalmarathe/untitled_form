import {useNavigate} from "react-router-dom";
import { TbDoorExit } from "react-icons/tb";


function Success(){

return(
    <main className="flex min-h-screen flex-col items-center justify-center gap-2 bg-stone-100">
    <h1 className="text-2xl font-medium text-green-500 sm:text-4xl">
      Form submission Successful 😀
    </h1>
    <a
      href={import.meta.env.VITE_ENTRIES}
      className="btn flex items-center gap-1"
      target="_blank"
    >
      Check entries <TbDoorExit />
    </a>
  </main>
);
}
export default Success;