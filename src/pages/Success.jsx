import {useNavigate} from "react-router-dom";

function Success(){
    const navigate = useNavigate();

    const handleClick =() =>{
        navigate("/error");

    }

    

    return <div>
        <h1>Successfully submitted the form 😀!</h1>

        <button onClick={ handleClick } className="btn">
            Go to Error page.
        </button>
    </div>
}
export default Success;