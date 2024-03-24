import { Outlet } from "react-router";
import NavBar from "../pages/Shared/NavBar/NavBar";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import Footer from "../pages/Shared/Footer/Footer";



const Root = () => {
  return (
    <>
      <NavBar />
      <Outlet />
      <Footer/>
      <ToastContainer />
    </>
  );
}

export default Root