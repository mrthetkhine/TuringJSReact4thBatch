import {useDispatch} from "react-redux";
import {logout} from "../features/auth/authSlice";
import {useNavigate} from "react-router-dom";

export default function LogoutPage(props)
{
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const logoutHandler = ()=>{
        console.log('Logout handler');
        dispatch(logout());
        navigate("/");
    }
    return (<div>
        <button type={"button"}
                className={"btn btn-primary"}
                onClick={logoutHandler}>
            Logout
        </button>
    </div>)
}