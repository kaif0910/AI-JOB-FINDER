import axios from "axios"

const api = axios.create({                        //create a configured HTTP client
    baseURL: "http://127.0.0.1:8000",
    headers: {
        "Content-Type": "application/json",
    },
});

export default api;