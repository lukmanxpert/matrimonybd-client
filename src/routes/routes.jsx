import MainLayout from "../layouts/MainLayout";

import { createBrowserRouter, Navigate } from "react-router-dom";
import Home from "../pages/home/Home";
import Biodatas from "../pages/biodatas/Biodatas";
import AboutUs from "../pages/about-us/AboutUs";
import ContactUs from "../pages/contact-us/ContactUs";
import ErrorPages from "../pages/error/ErrorPages";
import Dashboard from "../layouts/Dashboard";
import Login from "../pages/auth/login";
import Registration from "../pages/auth/Registration";
import PrivateRoute from "../provider/PrivateRoute";

export const routes = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout></MainLayout>,
        errorElement: <ErrorPages></ErrorPages>,
        children: [
            {
                path: "/",
                element: <Navigate to="/home"></Navigate>
            },
            {
                path: "/home",
                element: <Home></Home>
            },
            {
                path: "/biodatas",
                element: <Biodatas></Biodatas>
            },
            {
                path: "/about-us",
                element: <AboutUs></AboutUs>
            },
            {
                path: "/contact-us",
                element: <ContactUs></ContactUs>
            },
            {
                path: "/dashboard",
                element: <Dashboard></Dashboard>
            },
            {
                path: "/login",
                element: <Login></Login>
            },
            {
                path: "/register",
                element: <Registration></Registration>
            }
        ]
    },
    {
        path: "/dashboard",
        element: <PrivateRoute><Dashboard></Dashboard></PrivateRoute>,
        children: [
            {
                path: "/dashboard",
                element: <Navigate to="/dashboard/home"></Navigate>
            },
            {
                path: "/dashboard/home",
                element: <AboutUs></AboutUs>
            }
        ]
    }
])