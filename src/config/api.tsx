import axios from "axios";
import { apiKey, apiUrl } from "./env";


const api = axios.create({
  baseURL: apiUrl,
  headers: {
    "Content-Type": "application/json",
    "x-http-custom-key": apiKey,
    "ngrok-skip-browser-warning": "69420"
  },
  
});

export default api;