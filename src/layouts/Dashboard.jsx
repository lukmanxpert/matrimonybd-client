import { useContext } from "react";
import { Link, NavLink, Outlet } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";
import { FaDatabase, FaEdit, FaHome, FaUsers } from "react-icons/fa";
import { RiAdminFill, RiContactsFill } from "react-icons/ri";
import { MdFavorite, MdGroupRemove } from "react-icons/md";
import { IoLogOut } from "react-icons/io5";
import useIsAdmin from "../hooks/useIsAdmin";
import { FaCodePullRequest } from "react-icons/fa6";

const Dashboard = () => {
    const { user } = useContext(AuthContext)
    const isAdmin = useIsAdmin()
    console.log(isAdmin);
    return (
        <div className="flex text-[#ebf5fd]">
            <div className="w-1/5 min-h-screen bg-[#232E42]">
                <div className="text-center"><h1 className="text-2xl pt-4 font-pacifico text-[#ebf5fd]">Matrimony<span className="text-red-700">BD</span></h1></div>
                <div className="flex flex-col gap-2 justify-center items-center mt-4">
                    <img className="rounded-full h-16 w-16" src={user.photoURL} alt={user.displayName} />
                    <h1 className="text-xl text-[#ebf5fd]">{user?.displayName}</h1>
                </div>
                <div className="border-2 border-red-700 px-6 my-6"></div>
                <div className="">
                    {
                        isAdmin === "admin" ?
                            <ul className="flex flex-col gap-6 ml-4">
                                <li >
                                    <NavLink to="/dashboard/admin-dashboard" className="flex items-center gap-2 justify-start text-lg"><RiAdminFill /> Admin Dashboard</NavLink>
                                </li>
                                <li>
                                    <NavLink to="/dashboard/manage-users" className="flex items-center gap-2 justify-start text-lg"><FaUsers ></FaUsers> Manage Users</NavLink>
                                </li>
                                <li>
                                    <NavLink to="/dashboard/approved-premium" className="flex items-center gap-2 justify-start text-lg"><MdGroupRemove /> Approved Premium</NavLink>
                                </li>
                                <li>
                                    <NavLink to="/dashboard/approved-contact-request" className="flex items-center gap-2 justify-start text-lg"><FaCodePullRequest /> Approved Contact Request</NavLink>
                                </li>
                            </ul>
                            : <ul className="flex flex-col gap-6 ml-4">
                                <li >
                                    <NavLink to="/dashboard/edit-biodata" className="flex items-center gap-2 justify-start text-lg"><FaEdit /> Edit Biodata</NavLink>
                                </li>
                                <li>
                                    <NavLink to="/dashboard/view-biodata" className="flex items-center gap-2 justify-start text-lg"><FaDatabase></FaDatabase> View Biodata</NavLink>
                                </li>
                                <li>
                                    <NavLink to="/dashboard/my-contact-request" className="flex items-center gap-2 justify-start text-lg"><RiContactsFill /> My Contact Request</NavLink>
                                </li>
                                <li>
                                    <NavLink to="/dashboard/favourites-biodata" className="flex items-center gap-2 justify-start text-lg"><MdFavorite /> Favourite&apos;s Biodata</NavLink>
                                </li>
                            </ul>
                    }

                </div>
                <div className="border-2 border-red-700 px-6 my-6"></div>
                <Link to="/home" className="flex mb-2 justify-start items-center gap-2 text-lg text-[#ebf5fd] ml-4">
                    <FaHome />Home
                </Link>
                <button className="flex justify-center items-center gap-2 text-lg text-[#ebf5fd] ml-4">
                    <IoLogOut />Log Out
                </button>
            </div>
            <div className="bg-[#f2f2f2] w-full p-4 text-black">
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default Dashboard;