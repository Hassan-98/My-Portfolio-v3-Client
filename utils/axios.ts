import axios from "axios";

axios.defaults.baseURL = process.env.BASE_URL || process.env.NEXT_PUBLIC_BASE_URL;

axios.defaults.withCredentials = true;

export default axios;