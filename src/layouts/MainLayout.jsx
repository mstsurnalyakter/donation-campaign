import { Outlet } from "react-router"
import NavBar from "../components/NavBar"
import Footer from "../components/Footer"


const MainLayout = () => {
  return (
    <>
        <div>
            <NavBar/>
        </div>
        <div>
            <Outlet/>
        </div>
        <Footer/>
    </>
  )
}

export default MainLayout