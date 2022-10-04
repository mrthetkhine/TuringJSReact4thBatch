import {useNavigate} from "react-router-dom";
import  "./Movie.css";

export default function Movie({movie,deleteBtnHandler,editHandler})
{
    const navigate = useNavigate();
    const reviewHandler = (movie)=>{
        console.log('Load Movie Review ',movie);
        navigate(movie._id);
    }
    return (<div className={"movie"}>

        <div className={"movie-title"}>
            {movie.title}
        </div>
        <div className={"movie-body"}>
            <div>
                Year {movie.year}
            </div>
            <div>
                Director {movie.director.name}
            </div>
            <button type={"button"}
                    className={"btn btn-primary"}
                    onClick={()=>editHandler(movie)}>
                Edit
            </button> &nbsp;
            <button type={"button"}
                    className={"btn btn-primary"}
                    onClick={()=>deleteBtnHandler(movie)}>
                Delete
            </button>
            <button type={"button"}
                    className={"btn btn-primary"}
                    onClick={()=>reviewHandler(movie)}>
                Review
            </button>
        </div>
    </div>);
}