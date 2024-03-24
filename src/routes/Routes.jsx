import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home/Home";
import Root from "../layouts/Root";



export const router = createBrowserRouter([
    {
        path:"/",
        element:<Root/>,
        children:[
            {
                path:"/",
                element:<Home/>
            },
            {
                path:"/donation",
                element:<h2>Donation</h2>
            },
            {
                path:"/statistics",
                element:<h2>Statistics</h2>
            }
        ]

    }
])