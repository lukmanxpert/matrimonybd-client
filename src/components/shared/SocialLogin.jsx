import { useContext } from "react";
import { FaFacebook, FaGoogle, FaTwitter } from "react-icons/fa";
import { useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../provider/AuthProvider";
import toast, { Toaster } from "react-hot-toast";

const SocialLogin = () => {

    const { loginWithGoogle, setUser } = useContext(AuthContext)
    const navigate = useNavigate()
    const { state } = useLocation();


    const handleGoogleLogin = () => {
        loginWithGoogle()
            .then((result) => {
                setUser(result.user)
                navigate(state ? state : "/")
                toast.success("Successfully Logged In")
            }).catch((error) => {
                toast.error(error.message)
            })
    }
    return (
        <div className="mt-6">
            <p className="text-center text-gray-700">Or log in with</p>
            <div className="flex justify-center gap-4 mt-4">
                <button className="flex items-center justify-center w-10 h-10 bg-blue-600 text-white rounded-full hover:bg-blue-700">
                    <FaFacebook />
                </button>
                <button onClick={handleGoogleLogin} className="flex items-center justify-center w-10 h-10 bg-red-600 text-white rounded-full hover:bg-red-700">
                    <FaGoogle />
                </button>
                <button className="flex items-center justify-center w-10 h-10 bg-blue-400 text-white rounded-full hover:bg-blue-500">
                    <FaTwitter />
                </button>
            </div>
            <Toaster></Toaster>
        </div>
    );
};

export default SocialLogin;