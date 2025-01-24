import axios from "axios";

const axiosPrivate = axios.create({
    baseURL: import.meta.env.VITE_api_url
})
const useAxiosPrivate = () => {
    return axiosPrivate;
}
export default useAxiosPrivate;