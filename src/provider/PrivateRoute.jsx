import { useContext } from "react";
import { AuthContext } from "./AuthProvider";
import { Navigate, useLocation } from "react-router-dom";
import Loading from "../components/shared/Loading";

// eslint-disable-next-line react/prop-types
const PrivateRoute = ({ children }) => {
    const { pathname } = useLocation()
    const { user, loading } = useContext(AuthContext);
    if (loading) {
        return <div className="flex justify-center items-center h-screen">
            <Loading />
        </div>
    }
    if (user) {
        return children
    }
    return <Navigate to="/login" state={pathname}></Navigate>
};

export default PrivateRoute;