import {Movie} from "./movieSlice";

export default function MovieListUI(props:{
    movies : Array<Movie>
})
{
    return (<div>
        {
            props.movies.map((movie:Movie)=>{
                return (<div key={movie._id}>
                    <div>{movie.title}</div>
                    <div>{movie.year}</div>
                </div>);
            })
        }
    </div>);
}