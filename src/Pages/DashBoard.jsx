import { NavLink, Outlet } from "react-router-dom";
import { BsCalendar, BsCart4, BsHouse, BsList, BsPaypal} from 'react-icons/bs'
import {MdFastfood, MdReviews} from 'react-icons/md'
import useCart from "../Hooks/useCart";


const DashBoard = () => {
    const [cart] = useCart();
    return (
        <div className="flex">
            {/* dashboard sidebar */}
            <div className="min-h-screen w-72 bg-[#D1A054]">
                <ul className="menu">
                    <li>
                        <NavLink to="/dashboard/userHome" className="menu text-base lg:text-2xl p-5 text-white text-center">
                        <BsHouse></BsHouse>
                            User Home
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/dashboard/reservation" className="menu text-base lg:text-2xl p-5 text-white text-center">
                        <BsCalendar></BsCalendar>
                            Reservation
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/dashboard/payment" className="menu text-base lg:text-2xl p-5 text-white text-center">
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