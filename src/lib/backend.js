import axios from "axios";

export const backendClient = axios.create({
    baseURL: process.env.NEXT_PUBLIC_BACKEND_URL,
    timeout: 50000,
});
