/* eslint-disable react/display-name */
import LoadingScreen from "@/components/LoadingScreen";
// import Landingpage from "@/landingpage/Landingpage";
// import AuthLayout from "@/layout/auth/AuthLayout";
import DashboardLayout from "@/layout/dashboard/DashboardLayout";
import { Suspense, lazy } from "react";
import { useRoutes, Navigate } from "react-router-dom";


const Loadable = (Component) => (props) => {
    return (
        <Suspense fallback={<LoadingScreen />}>
            <Component {...props} />
        </Suspense>
    );
};

export default function Router() {
    return useRoutes([
        {
            path: "/",
            element: <Navigate to="/dashboard/home" replace />,
        },
        // {
        //     path: "/",
        //     element: <Landingpage />,

        // },
        // {
        //     path: "/auth",
        //     element: <AuthLayout />,
        //     children: [
        //         { path: "login", element: <LoginPage /> },
        //         { path: "register", element: <RegisterPage /> },
        //         // { path: "reset-password", element: <ResetPasswordPage /> },
        //         // { path: "new-password", element: <NewPasswordPage /> },
        //         // { path: "verify", element: <VerifyPage /> },
        //     ],
        // },
        {
            path: "/dashboard",
            element: <DashboardLayout />,
            children: [
                { element: <Navigate to="/dashboard/home" replace /> },
                { path: "home", element: <HomePage /> },
                {
                    path: "content/:slug",
                    element: <CardPage />,
                },


                // { path: "404", element: <Page404 /> },
                // { path: "*", element: <Navigate to="/404" replace /> },
            ],
        },

        // { path: "*", element: <Navigate to="/404" replace /> },
    ]);
}


// const LoginPage = Loadable(lazy(() => import("../Auth/Login")));
// const RegisterPage = Loadable(lazy(() => import("../Auth/Register")));
// const VerifyPage = Loadable(lazy(() => import("../pages/auth/Verify")));
// const ResetPasswordPage = Loadable(
//     lazy(() => import("../pages/auth/ResetPassword"))
// );
// const NewPasswordPage = Loadable(
//     lazy(() => import("../pages/auth/NewPassword"))
// );

const HomePage = Loadable(lazy(() => import("../dashboard/Home")))
const CardPage = Loadable(lazy(() => import("../components/CardPage")))

