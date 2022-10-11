import {API_URL} from "./API";
const axios = require('axios');

axios.defaults.headers.post['Content-Type'] = 'application/json';
let store;

export const injectStore = (_store) => {
    store = _store;
}

axios.interceptors.request.use(async function (config) {
    console.log('API request ',store.getState());
    const authUser = store.getState().auth;
    console.log('API request auth user ',authUser);
    if( authUser.token)
    {
        config.headers.Authorization = 'Bearer '+ authUser.token;
    }

    return config;
},function(error){
    console.log("Axios interceptor error ",error);
    return error;
});

export default axios;
