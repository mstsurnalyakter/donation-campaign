import { Outlet } from "react-router";
import NavBar from "../pages/Shared/NavBar/NavBar";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";



const Root = () => {
  return (
    <>
      <NavBar />
      <Outlet />
      <h2>Footer</h2>
      <ToastContainer />
    </>
  );
}

export default Root