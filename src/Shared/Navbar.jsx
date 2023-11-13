import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../Context/AuthProvider";
import {BsCartCheckFill} from 'react-icons/bs'

const Navbar = () => {
  const {user, logOut} = useContext(AuthContext);

  const handleLogOut = () => {
    logOut(()=>{
      console.log("Logged Out");
    })
  }
  const nav = (
    <>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="">Dashboard</Link>
      </li>
      <li>
        <Link to="/menu">Our Menu</Link>
      </li>
      <li>
        <Link to="/order/salad">Order</Link>
      </li>
      {
        user ? <> <button onClick={handleLogOut} className="btn text-xs btn-ghost pb-3">Logout</button> </> : <><li>
        <Link to="/login">Log In</Link>
      </li> </>
      }
      <li>
        <Link to='/'>
        <p className="flex">
        <BsCartCheckFill className="text-xl"></BsCartCheckFill>
  <div className="badge badge-secondary">+0</div>
</p>
        </Link>
      </li>
    </>
  );

  return (
    <div>
      <div className="navbar fixed z-40 bg-opacity-30 max-w-screen-2xl mx-auto text-white bg-black">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-opacity-90 bg-gray-100 text-black rounded-box w-52"
            >
              {nav}
            </ul>
          </div>
          <Link
            to="/"
            className="btn btn-ghost normal-case text-xl hidden lg:block"
          >
            TasteTrove Tavern
            <br />
            Restaurant
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{nav}</ul>
        </div>
        <div className="navbar-end">
          {
            user ? 
            <>
            <p>{user?.displayName}</p> 
            <img className="rounded-full w-1/4 md:w-[10%] mx-4" src={user?.photoURL} alt="" />
            </>
            :
            <>
            <p>Guest</p> 
            <img className="rounded-full w-1/4 md:w-[10%] mx-4" src='https://i.ibb.co/QrdfRKF/85434-guest-512x512.png' alt="" />
            </>
          }
        </div>
      </div>
    </div>
  );
};

export default Navbar;
