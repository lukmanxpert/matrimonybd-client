import { Outlet } from "react-router-dom";
import Navigation from "../components/navbar/Navigation";
import Footer from "../components/footer/Footer";

const MainLayout = () => {
    return (
        <div>
            <div>
                <Navigation></Navigation>
            </div>
            <div className="min-h-screen">
                <Outlet></Outlet>
            </div>
            <div>
                <Footer></Footer>
            </div>
        </div>
    );
};

export default MainLayout;