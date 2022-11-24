import { createBrowserRouter } from "react-router-dom";
import Main from "../layouts/Main";
import BLogs from "../pages/Blogs/Blogs";
import Home from "../pages/Home/Home";


export const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/blogs',
                element:<BLogs></BLogs>
            }
        ]
    }
])