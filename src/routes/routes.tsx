import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "../App";
import ErrorPage from "../pages/ErrorPage";
import AuthPage from "../pages/AuthPage";
import Dashboard from "../pages/Dashboard";
import MainView from "../components/dashboard/MainView";

const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        errorElement: <ErrorPage />,
    },
    {
        path: "/dashboard/:email",
        element: <Dashboard />,
        errorElement: <ErrorPage />,
        children: [
            {
                path: "/dashboard/:email",
                element: <MainView />,
                errorElement: <ErrorPage />,
            },
        ],
    },
    {
        path: "/auth",
        element: <AuthPage />,
        errorElement: <ErrorPage />,
    },
]);

const MyRoutes = () => {
    return <RouterProvider router={router} />;
};

export default MyRoutes;
