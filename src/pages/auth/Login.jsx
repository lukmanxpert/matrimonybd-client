import { useContext } from "react";
import { FaFacebook, FaGoogle, FaLock, FaTwitter, FaUser } from "react-icons/fa";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../provider/AuthProvider";
import toast, { Toaster } from "react-hot-toast";
const Login = () => {
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
                console.log(error);
            })
    }
    return (
        <div
            className="min-h-screen bg-cover bg-center flex items-center justify-center"
            style={{
                backgroundImage:
                    "url('https://i.ibb.co.com/0ZpzgR5/pexels-i-brahim-hakki-ucman-174353-3342697.jpg')",
            }}
        >
            <div className="bg-white bg-opacity-10 backdrop-blur-none p-6 rounded-md shadow-lg w-full max-w-md">
                <h1 className="text-2xl font-semibold text-center text-gray-800">
                    Matrimony Login Form
                </h1>
                <form className="mt-4">
                    <div className="mb-4">
                        <label
                            htmlFor="username"
                            className="block text-gray-700 text-sm font-medium"
                        >
                            Email
                        </label>
                        <div className="relative mt-1">
                            <input
                                type="email"
                                name="email"
                                id="username"
                                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring focus:ring-blue-200 focus:outline-none"
                                placeholder="Enter your email"
                            />
                            <span className="absolute inset-y-0 right-0 flex items-center pr-3 text-gray-500">
                                <FaUser />
                            </span>
                        </div>
                    </div>

                    <div className="mb-4">
                        <label
                            htmlFor="password"
                            className="block text-gray-700 text-sm font-medium"
                        >
                            Password
                        </label>
                        <div className="relative mt-1">
                            <input
                                type="password"
                                name="password"
                                id="password"
                                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring focus:ring-blue-200 focus:outline-none"
                                placeholder="Enter your password"
                            />
                            <span className="absolute inset-y-0 right-0 flex items-center pr-3 text-gray-500">
                                <FaLock />
                            </span>
                        </div>
                    </div>

                    <div className="flex items-center justify-between">
                        <div className="flex items-center">
                            <input
                                type="checkbox"
                                id="remember"
                                className="h-4 w-4 text-blue-600 border-gray-300 rounded"
                            />
                            <label
                                htmlFor="remember"
                                className="ml-2 text-sm text-gray-700"
                            >
                                Remember Me
                            </label>
                        </div>
                        <button type="button"
                            className="text-sm text-blue-600 hover:underline"
                        >
                            Forgot Password?
                        </button>
                    </div>

                    <button
                        type="submit"
                        className="w-full mt-4 px-4 py-2 bg-red-500 text-white font-semibold rounded-md hover:bg-red-600"
                    >
                        Log In
                    </button>
                </form>

                <div className="mt-4 text-center">
                    <p className="text-sm text-gray-700">
                        Don&apos;t have an account?{' '}
                        <Link to="/register" className="text-blue-600 hover:underline">
                            Register Here
                        </Link>
                    </p>
                </div>

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
                </div>
            </div>
            <Toaster></Toaster>
        </div>
    );
};

export default Login;