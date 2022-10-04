import {API_URL} from "../../setting/API";
/*import {Movie} from "./movieSlice";*/
import axios from "../../setting/our_axios";


const API = API_URL+"reviews/movie"

export function apiGetAllReviewByMovie(movieId){
    console.log('Called apiGetAllReviewByMovie with axios');
    return axios.get(API+'/'+movieId);
}
