import { NavLink, Outlet } from "react-router-dom";
import {  BsCalendar, BsCart4, BsHouse, BsList, BsPaypal} from 'react-icons/bs'
import {MdContactMail, MdFastfood, MdReviews} from 'react-icons/md'
import useCart from "../Hooks/useCart";
import { FaBook, FaList, FaUtensils } from "react-icons/fa";
import useAdmin from "../Hooks/useAdmin";


const DashBoard = () => {
    const [cart] = useCart();

    const [isAdmin] = useAdmin();
    console.log(isAdmin);
    return (
        <div className="flex">
            {/* dashboard sidebar */}
            <div className="min-h-screen w-72 bg-[#D1A054]">
                <ul className="menu">
                    {/* Admin Nav Links  */}

                    {
                       isAdmin ? 
                       <>
                        <li>
                        <NavLink to="/dashboard/adminHome" className="menu text-base lg:text-2xl p-5 text-white text-center">
                        <BsHouse></BsHouse>
                            Admin Home
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/dashboard/addItems" className="menu text-base lg:text-2xl p-5 text-white text-center">
                        <FaUtensils></FaUtensils>
                            Add Items
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/dashboard/manageItems" className="menu text-base lg:text-2xl p-5 text-white text-center">
                        <FaList></FaList>
                            Manage Items
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/dashboard/bookings" className="menu text-base lg:text-2xl p-5 text-white text-center">
                        <FaBook></FaBook>
                            Manage Bookings
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/dashboard/users" className="menu text-base lg:text-2xl p-5 text-white text-center">
                        <MdReviews></MdReviews>
                            All Users
                        </NavLink>
                    </li>
                        </>
                        : 
                        <>
                        <li>
                        <NavLink to="/dashboard/userHome" className="menu text-base lg:text-2xl p-5 text-white text-center">
                        <BsHouse></BsHouse>
                            User Home
                        </NavLink>
                    </li>
                    {/* <li>
                        <NavLink to="/dashboard/reservation" className="menu text-base lg:text-2xl p-5 text-white text-center">
                        <BsCalendar></BsCalendar>
                            Reservation
                        </NavLink>
                    </li> */}
                    <li>
                        <NavLink to="/dashboard/paymentHistory" className="menu text-base lg:text-2xl p-5 text-white text-center">
                        <BsPaypal></BsPaypal>
                            Payment History
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/dashboard/cart" className="menu text-base lg:text-2xl p-5 text-white text-center">
                        <BsCart4></BsCart4>
                            My Cart ({cart.length})
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/dashboard/review" className="menu text-base lg:text-2xl p-5 text-white text-center">
                        <MdReviews></MdReviews>
                            Add Review
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/dashboard/myBookings" className="menu text-base lg:text-2xl p-5 text-white text-center">
                        <BsList></BsList>
                            My Booking
                        </NavLink>
                    </li>
                        </>
                    }

                    {/* Shared Nav Links  */}
                    <div className="divider"></div>
                    <li>
                        <NavLink to="/" className="menu text-base lg:text-2xl p-5 text-white text-center">
                        <BsHouse></BsHouse>
                            Home
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/order/salad" className="menu text-base lg:text-2xl p-5 text-white text-center">
                        <MdFastfood></MdFastfood>
                            Menu
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/order/contact" className="menu text-base lg:text-2xl p-5 text-white text-center">
                        <MdContactMail></MdContactMail>
                            Contact
                        </NavLink>
                    </li>
                </ul>
            </div>
            {/* dashboard content  */}
            <div className="flex-1">
                <Outlet />
            </div>

        </div>
    );
};

export default DashBoard;