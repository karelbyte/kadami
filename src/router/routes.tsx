import {  createBrowserRouter } from "react-router-dom";
import App from "../App";
import ErrorPage from "../pages/error.page";
import Users from "../pages/users";


const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        children: [
            {
                path: "contacts",
                element: <Users />,
            },
        ],
        errorElement: <ErrorPage />
    },
]);

export default router