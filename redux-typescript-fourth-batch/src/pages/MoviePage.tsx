import {useAppDispatch, useAppSelector} from "../app/hooks";
import {selectToDo} from "../features/todo/todoSlice";
import {getAllMovie, selectMovie} from "../features/movies/movieSlice";
import MovieListUI from "../features/movies/MovieListUI";
import {useEffect} from "react";

export default function MoviePage()
{
    const movies = useAppSelector(selectMovie);
    const dispatch = useAppDispatch();

    useEffect(()=>{
        dispatch(getAllMovie());
    },[]);
    return (<div>
        Movie Page
        <MovieListUI movies={movies}/>
    </div>)
}