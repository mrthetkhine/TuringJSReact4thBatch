import {useNavigate, Outlet, Link} from "react-router-dom";
export default function Movie(props)
{
    let navigate = useNavigate();
    const goToDetailsHandler = ()=>{
        navigate('/movies/100');
    };
    return (<div>
        Movie
        <button type={"button"}
                className={"btn btn-primary"}
                onClick={goToDetailsHandler}>
            Go to Details
        </button>

        &nbsp;
        <Link to={"1"}>To Details</Link>

        <Outlet/>
    </div>)
}