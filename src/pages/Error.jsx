import {Link} from "react-router-dom"

function Error(){
    return <div>
            <h1>Form submission failed! 🥲</h1>

            <Link to="/Success" className="btn">
                Go to Success page
            </Link>
            </div>

}

export default Error;
