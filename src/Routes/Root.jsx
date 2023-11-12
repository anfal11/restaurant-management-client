import { Outlet, useLocation } from "react-router-dom";
import Footer from "../Shared/Footer";
import Navbar from "../Shared/Navbar";

const Root = () => {
  
  const location = useLocation();
  // console.log(location);

  // const noHeaderFooter = location.pathname.includes("login");
  const noHeaderFooter = location.pathname.includes("login") || location.pathname.includes("register");

  // console.log(noHeaderFooter);

  return (
    <div>
      {noHeaderFooter || <Navbar></Navbar>}
      <Outlet></Outlet>
      {noHeaderFooter || <Footer></Footer>}
    </div>
  );
};

export default Root;
