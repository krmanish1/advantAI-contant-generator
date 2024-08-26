/* eslint-disable no-unused-vars */
import React from "react";
import { Navigate, Outlet } from "react-router-dom";



const AuthLayout = () => {


    // if (isLoggedIn) {
    //     return <Navigate to={"/app"} />;
    // }

    return (
        <>
            <div>
                <div>
                    <Outlet />
                </div>
            </div>

        </>
    );
};

export default AuthLayout;
