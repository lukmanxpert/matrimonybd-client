import { useState } from "react";
import { Link, NavLink } from "react-router-dom";

const Navigation = () => {
    const [isOpen, setIsOpen] = useState(false);
    const user = false
    // Navigation links fragment
    const LinksFragment = (
        <>
            <NavLink
                to="/home"
                className={({ isActive }) =>
                    `px-3 py-2 mx-3 mt-2 rounded-md lg:mt-0 transition-colors duration-300 transform ${isActive
                        ? "text-white bg-blue-600"
                        : "text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700"
                    }`
                }
            >
                Home
            </NavLink>
            <NavLink
                to="/biodatas"
                className={({ isActive }) =>
                    `px-3 py-2 mx-3 mt-2 rounded-md lg:mt-0 transition-colors duration-300 transform ${isActive
                        ? "text-white bg-blue-600"
                        : "text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700"
                    }`
                }
            >
                Biodatas
            </NavLink>
            <NavLink
                to="/about-us"
                className={({ isActive }) =>
                    `px-3 py-2 mx-3 mt-2 rounded-md lg:mt-0 transition-colors duration-300 transform ${isActive
                        ? "text-white bg-blue-600"
                        : "text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700"
                    }`
                }
            >
                About US
            </NavLink>
            <NavLink
                to="/contact-us"
                className={({ isActive }) =>
                    `px-3 py-2 mx-3 mt-2 rounded-md lg:mt-0 transition-colors duration-300 transform ${isActive
                        ? "text-white bg-blue-600"
                        : "text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700"
                    }`
                }
            >
                Contact US
            </NavLink>
        </>
    );

    return (
        <nav className="relative bg-white shadow dark:bg-gray-800">
            <div className="container px-6 py-4 mx-auto">
                <div className="lg:flex lg:items-center lg:justify-between">
                    <div className="flex items-center justify-between">
                        <NavLink to="/">
                            <h1 className="text-2xl font-bold">MatrimonyBD</h1>
                        </NavLink>

                        {/* Mobile menu button */}
                        <div className="flex lg:hidden">
                            <button
                                onClick={() => setIsOpen(!isOpen)}
                                type="button"
                                className="text-gray-500 dark:text-gray-200 hover:text-gray-600 dark:hover:text-gray-400 focus:outline-none focus:text-gray-600 dark:focus:text-gray-400"
                                aria-label="toggle menu"
                            >
                                {!isOpen ? (
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="w-6 h-6"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                        strokeWidth={2}
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            d="M4 8h16M4 16h16"
                                        />
                                    </svg>
                                ) : (
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="w-6 h-6"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                        strokeWidth={2}
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            d="M6 18L18 6M6 6l12 12"
                                        />
                                    </svg>
                                )}
                            </button>
                        </div>
                    </div>

                    {/* Navigation Menu */}
                    <div
                        className={`absolute inset-x-0 z-20 w-full px-6 py-4 transition-all duration-300 ease-in-out bg-white dark:bg-gray-800 lg:mt-0 lg:p-0 lg:top-0 lg:relative lg:bg-transparent lg:w-auto lg:opacity-100 lg:translate-x-0 lg:flex lg:items-center ${isOpen
                            ? "translate-x-0 opacity-100"
                            : "opacity-0 -translate-x-full"
                            }`}
                    >
                        {/* Render Links */}
                        <div className="flex flex-col -mx-6 lg:flex-row lg:items-center lg:mx-8">
                            {LinksFragment}
                        </div>

                        {/* Profile & Notification */}
                        {
                            user ? <div className="flex items-center mt-4 lg:mt-0">
                                <button
                                    type="button"
                                    className="flex items-center focus:outline-none"
                                    aria-label="toggle profile dropdown"
                                >
                                    <div className="w-8 h-8 overflow-hidden border-2 border-gray-400 rounded-full">
                                        <img
                                            src="https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80"
                                            className="object-cover w-full h-full"
                                            alt="avatar"
                                        />
                                    </div>

                                    <h3 className="mx-2 text-gray-700 dark:text-gray-200 lg:hidden">
                                        Khatab wedaa
                                    </h3>
                                </button>
                            </div> : <div className="flex justify-center items-center"><Link to="/login"><button className="px-6 py-2 font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-blue-600 rounded-lg hover:bg-blue-500 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-80">
                                Login
                            </button></Link></div>
                        }

                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navigation;
