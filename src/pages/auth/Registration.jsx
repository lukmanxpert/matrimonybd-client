import { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../provider/AuthProvider";
import toast, { Toaster } from "react-hot-toast";
import SocialLogin from "../../components/shared/SocialLogin";

const Registration = () => {
    const { setUser, signUpWithEmail, updateUserProfile } = useContext(AuthContext)
    const navigate = useNavigate()
    const { state } = useLocation();
    const [error, setError] = useState("")
    const passwordRegex = /^(?=.*[A-Z])(?=.*[a-z])(?=.*[!@#$%^&*(),.?":{}|<>]).+$/;
    const handleSubmit = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const photoURL = form.photoURL.value;
        const email = form.email.value;
        const password = form.password.value;
        if (password.length < 6) {
            return setError("password must have at least 6 character!!")
        }
        if (!passwordRegex.test(password)) {
            return setError("password must have 1 uppercase, 1 lowercase & 1 special character!!")
        }
        setError('')
        signUpWithEmail(email, password)
            .then((userCredential) => {
                const user = userCredential.user;
                setUser(user)
                updateUserProfile(name, photoURL)
                    .then(() => {
                        console.log("profile updated");
                    }).catch((error) =>
                        console.log(error))
                navigate(state ? state : "/")
                toast.success("Successfully Logged In")
            }).catch((error) => {
                toast.error(error.message)
            })
        console.log(name, photoURL, email, password);
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
                    Matrimony Registration Form
                </h1>
                <form onSubmit={handleSubmit} className="mt-4">
                    {/* Full Name Field */}
                    <div className="mb-4">
                        <label
                            htmlFor="fullName"
                            className="block text-gray-700 text-sm font-medium"
                        >
                            Full Name
                        </label>
                        <div className="relative mt-1">
                            <input
                                type="text"
                                name="name"
                                id="fullName"
                                required
                                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring focus:ring-blue-200 focus:outline-none"
                                placeholder="Enter your full name"
                            />
                        </div>
                    </div>

                    {/* Photo URL Field */}
                    <div className="mb-4">
                        <label
                            htmlFor="photoURL"
                            className="block text-gray-700 text-sm font-medium"
                        >
                            Photo URL
                        </label>
                        <div className="relative mt-1">
                            <input
                                type="text"
                                name="photoURL"
                                id="photoURL"
                                required
                                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring focus:ring-blue-200 focus:outline-none"
                                placeholder="Enter your photo URL"
                            />
                        </div>
                    </div>

                    {/* Email Field */}
                    <div className="mb-4">
                        <label
                            htmlFor="email"
                            className="block text-gray-700 text-sm font-medium"
                        >
                            Email
                        </label>
                        <div className="relative mt-1">
                            <input
                                type="email"
                                name="email"
                                id="email"
                                required
                                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring focus:ring-blue-200 focus:outline-none"
                                placeholder="Enter your email"
                            />
                        </div>
                    </div>

                    {/* Password Field */}
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
                                required
                                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring focus:ring-blue-200 focus:outline-none"
                                placeholder="Enter your password"
                            />
                            <p className="text-red-500 text-xs py-1">{error && error}</p>
                        </div>
                    </div>

                    <button
                        type="submit"
                        className="w-full mt-4 px-4 py-2 bg-red-500 text-white font-semibold rounded-md hover:bg-red-600"
                    >
                        Register
                    </button>
                </form>

                <div className="mt-4 text-center">
                    <p className="text-sm text-gray-700">
                        Already have an account?{' '}
                        <Link to="/login" className="text-blue-600 hover:underline">
                            Log In Here
                        </Link>
                    </p>
                </div>

                <SocialLogin></SocialLogin>
            </div>
            <Toaster></Toaster>
        </div>

    );
};

export default Registration;