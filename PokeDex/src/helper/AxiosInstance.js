import axios from "axios";
import { POKEDEX_API_URL } from "./Constants";

const axiosInstance = axios.create({
	baseURL: POKEDEX_API_URL,
	timeout: 10 * 1000,
});

export default axiosInstance;