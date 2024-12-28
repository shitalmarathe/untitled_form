import { TbDoorEnter } from "react-icons/tb";
import {Link} from "react-router-dom"

function Error(){

    return (
    <main className="flex min-h-screen flex-col items-center justify-center gap-2 bg-stone-100">
    <h1 className="text-2xl font-medium text-red-500 sm:text-4xl">
        Form submission failed 🥲!
    </h1>
    <Link to="/" className="btn flex items-center gap-1">
        <TbDoorEnter /> Submit Again
    </Link>
    </main>
    );

}

export default Error;
