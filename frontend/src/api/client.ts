import axios from "axios"

const api = axios.create({                        //create a configured HTTP client
    baseURL: import.meta.env.VITE_API_URL,
    // headers: {
    //     "Content-Type": "application/json",   # multipart request fails because content-type was hardcoded because of this file uploads fails 
    // },
});

export default api;