import axios from "axios"

const api = axios.create({                        //create a configured HTTP client
    baseURL: import.meta.env.VITE_API_URL,
    headers: {
        "Content-Type": "application/json",
    },
});

export default api;