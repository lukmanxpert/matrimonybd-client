import { useContext } from "react";
import { AuthContext } from "./AuthProvider";
import { PuffLoader } from "react-spinners";
import { Navigate, useLocation } from "react-router-dom";

// eslint-disable-next-line react/prop-types
const PrivateRoute = ({ children }) => {
    const { pathname } = useLocation()
    const { user, loading } = useContext(AuthContext);
    if (loading) {
        return <div className="h-screen flex justify-center items-center">
            <PuffLoader color="#fa005d" size={80} speedMultiplier={2} />
        </div>
    }
    if (user) {
        return children
    }
    return <Navigate to="/login" state={pathname}></Navigate>
};

export default PrivateRoute;