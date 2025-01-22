import { Outlet, useLocation } from "react-router-dom";

const Dashboard = () => {
    const {pathname} = useLocation()
    console.log(pathname);
    return (
        <div className="flex">
            <div className="w-1/5 bg-red-200"></div>
            <div>
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default Dashboard;