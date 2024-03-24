import { Outlet } from "react-router";
import NavBar from "../pages/Shared/NavBar/NavBar";


const Root = () => {
  return (
    <>
     <NavBar/>
     <Outlet/>
     <h2>Footer</h2>
    </>
  );
}

export default Root