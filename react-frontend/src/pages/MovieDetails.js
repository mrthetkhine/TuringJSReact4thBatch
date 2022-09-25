import {useParams} from "react-router-dom";
export default function MovieDetails(props)
{
    let params = useParams();

    return (<div>
        Movie Details {params.movieId}
    </div>)
}