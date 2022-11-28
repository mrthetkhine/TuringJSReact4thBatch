import {Movie} from "./movieSlice";
import './Movie.css';
export default function MovieListUI(props:{
    movies : Array<Movie>
})
{
    return (<div>
        {
            props.movies.map((movie:Movie)=>{
                return (<div key={movie._id} className={"movie"}>
                    <div>{movie.title}</div>
                    <div>{movie.year}</div>
                </div>);
            })
        }
    </div>);
}