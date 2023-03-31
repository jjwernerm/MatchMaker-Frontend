import axios from 'axios';


const BASE_URL = "https://match-maker-backend.vercel.app/canchas"

export const Canchas = async () => {
    const { data } = axios.get(`${BASE_URL}`);
    console.log(data)
    return data;
}

