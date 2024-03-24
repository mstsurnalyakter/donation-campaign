import { Outlet } from "react-router";


const Root = () => {
  return (
    <>
     <h1>NavBar....</h1>
     <Outlet/>
     <h2>Footer</h2>
    </>
  );
}

export default Root