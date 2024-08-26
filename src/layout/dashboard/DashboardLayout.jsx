import Sidebar from "@/dashboard/Sidebar";
import TopNavbar from "@/dashboard/TopNavbar";
import { Outlet } from "react-router-dom";

const DashboardLayout = () => {
    // if (!isLoggedIn) {
    //     return <Navigate to={"/auth/login"} />;
    // }

    return (
        <>
            <div className="w-full flex justify-center h-screen bg-gray-100">
                <div className=" ">
                    <Sidebar />
                </div>
                <div className="md:w-[calc(100%-160px)] w-full">
                    <TopNavbar />
                    <Outlet />
                </div>
            </div>
        </>
    );
};

export default DashboardLayout;