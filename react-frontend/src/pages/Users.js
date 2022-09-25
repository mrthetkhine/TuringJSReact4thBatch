import {useSearchParams} from "react-router-dom";

export default function Users(props)
{
    let [searchParams, setSearchParams] = useSearchParams();
    return (<div>
        Users {searchParams.get('name')}
    </div>)
}