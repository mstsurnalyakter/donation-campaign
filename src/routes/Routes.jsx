import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home/Home";
import Root from "../layouts/Root";
import Error from "../pages/Error/Error";
import DonationDetails from "../pages/DonationDetails/DonationDetails";
import Donation from "../pages/Donation/Donation";
import Statistics from "../pages/Statistics/Statistics";



export const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/donation",
        element: <Donation />,
      },
      {
        path: "/statistics",
        element: <Statistics/>,
      },
      {
        path: "/donation-details/:id",
        element: <DonationDetails />,
      },
    ],
  },
]);