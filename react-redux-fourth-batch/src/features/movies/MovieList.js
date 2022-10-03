import Movie from "./Movie";
import React from "react";

export default function MovieList({movieList,deleteBtnHandler,editHandler})
{
    return (<div>
        {
            movieList.map(movie=><Movie key={movie._id}
                                        movie={movie}
                                        deleteBtnHandler={deleteBtnHandler}
                                        editHandler = {editHandler}
            />)
        }
    </div>);
}