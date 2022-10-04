import '../movies/Movie.css';
import {shallowEqual, useDispatch, useSelector} from "react-redux";
import {useParams} from "react-router-dom";
import {selectMovie, selectMovieById} from "../movies/movieSlice";
import {getAllReviewByMovie, selectReview} from "./reviewSlice";
import {useEffect} from "react";
import Review from "./Reivew";
export default function MovieDetailPage(props)
{
    const dispatch = useDispatch();
    const reviews = useSelector(selectReview);
    let params = useParams();
    const movie = useSelector(state=>selectMovieById(state,params.movieId));
    useEffect(()=>{
        dispatch(getAllReviewByMovie(movie._id));
    },[]);

    return (<div>
        Movie Details
        <div className={"movie"}>

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
            </div>
            {
                reviews.map(review=><Review key={review._id} review={review}/>)
            }
        </div>
    </div>)
}