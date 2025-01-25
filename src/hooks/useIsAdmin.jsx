import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";
import useAxiosPrivate from "./useAxiosPrivate";

const useIsAdmin = () => {
    const user = useAuth();
    const axiosPrivate = useAxiosPrivate()
    const { data } = useQuery({
        queryKey: ["isAdmin", user.email],
        queryFn: async () => {
            const { data } = await axiosPrivate.get(`/isAdmin/${user.email}`);
            return data;
        },
    })
    return data;
};

export default useIsAdmin;