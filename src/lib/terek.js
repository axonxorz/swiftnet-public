import axios from "axios";

export const apiClient = axios.create({
    baseURL: process.env.TEREK_BASE_URL,
    timeout: 5000,
    headers: {
        'Authorization': `Bearer ${process.env.TEREK_API_KEY}`,
        'X-Api-Version': 1
    }
})
