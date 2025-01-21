import { FaFacebook, FaGoogle, FaTwitter } from "react-icons/fa";
import { Link } from "react-router-dom";

const Registration = () => {
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
                <form className="mt-4">
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
                                id="fullName"
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
                                id="photoURL"
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
                                id="email"
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
                                id="password"
                                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring focus:ring-blue-200 focus:outline-none"
                                placeholder="Enter your password"
                            />
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

                <div className="mt-6">
                    <p className="text-center text-gray-700">Or register with</p>
                    <div className="flex justify-center gap-4 mt-4">
                        <button className="flex items-center justify-center w-10 h-10 bg-blue-600 text-white rounded-full hover:bg-blue-700">
                            <FaFacebook />
                        </button>
                        <button className="flex items-center justify-center w-10 h-10 bg-red-600 text-white rounded-full hover:bg-red-700">
                            <FaGoogle />
                        </button>
                        <button className="flex items-center justify-center w-10 h-10 bg-blue-400 text-white rounded-full hover:bg-blue-500">
                            <FaTwitter />
                        </button>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default Registration;