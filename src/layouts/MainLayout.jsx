import { Outlet } from "react-router-dom";
import Navigation from "../components/navbar/Navigation";
import Footer from "../components/footer/Footer";

const MainLayout = () => {
    return (
        <div>
            <div>
                <Navigation></Navigation>
            </div>
            <div className="min-h-screen px-2 md:px-4">
                <Outlet></Outlet>
            </div>
            <div>
                <Footer></Footer>
            </div>
        </div>
    );
};

export default MainLayout;