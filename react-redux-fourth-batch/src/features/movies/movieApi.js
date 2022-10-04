import {API_URL} from "../../setting/API";
/*import {Movie} from "./movieSlice";*/
import axios from "../../setting/our_axios";


const API = API_URL+"movies"

export function apiGetAllMovie(){
    console.log('Called getAllMovie with axios');
    return axios.get(API);
}
export function apiSaveMovie(movie)
{
    return axios.post(API,movie);
}
export function apiUpdateMovie(movie)
{
    return axios.put(API+'/'+movie._id,movie);
}
export function apiDeleteMovie(movie)
{
    return axios.delete(API+'/'+movie._id);
}