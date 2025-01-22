import { Outlet, useLocation } from "react-router-dom";
import Navigation from "../components/navbar/Navigation";
import Footer from "../components/footer/Footer";

const MainLayout = () => {
    const { pathname } = useLocation()
    console.log(pathname);
    return (
        <div>
            {pathname.includes("login") || pathname.includes("register") || pathname.includes("dashboard") ||
                <div>
                    <Navigation></Navigation>
                </div>}
            <div className="min-h-screen">
                <Outlet></Outlet>
            </div>
            {pathname.includes("login") || pathname.includes("register") || pathname.includes("dashboard") ||
                <div>
                    <Footer></Footer>
                </div>}
        </div>
    );
};

export default MainLayout;