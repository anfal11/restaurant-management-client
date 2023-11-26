import { createBrowserRouter } from "react-router-dom";
import Root from "./Root";
import Home from "../Pages/Home";
import Menu from "../Pages/Menu";
import ErrorPage from "../Pages/ErrorPage";
import Order from "../Pages/Order";
import Login from "../Pages/Login";
import Register from "../Pages/Register";
import DashBoard from "../Pages/DashBoard";
import Cart from "../Pages/Cart";
import PrivateRoute from "./PrivateRoute";
import AllUsers from "../Pages/AllUsers";
import AdminRoute from "./AdminRoute";
import AddItems from "../Components/AddItems";
import ManageItems from "../Components/ManageItems";
import UpdateItem from "../Components/UpdateItem";
import Payment from "../Components/Payment";
import PaymentHistory from "../Components/PaymentHistory";
import AdminHome from "../Components/AdminHome";
import UserHome from "../Components/UserHome";


export const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "menu",
        element: <Menu />,
      },
      {
        path: "order/:category",
        element: <Order />,
      },
      {
        path: 'login',
        element: <Login />,
      },
      {
        path: 'register',
        element: <Register />,
      }
    ],
  },
  {
    path: 'dashboard',
    element: <DashBoard />,
    children: [
      //normal user routes
      {
        path: 'userHome',
        element: <PrivateRoute><UserHome /></PrivateRoute>,
      },
      {
        path: 'cart',
        element: <PrivateRoute><Cart /></PrivateRoute>,
      },
      {
        path: 'payment',
        element: <Payment></Payment>
      },
      {
        path: 'paymentHistory',
        element: <PaymentHistory></PaymentHistory>
      },

      //admin routes
      {
        path: 'adminHome',
        element: <AdminRoute><AdminHome /></AdminRoute>,
      },
      {
        path: 'addItems',
        element: <AdminRoute><AddItems /></AdminRoute>,
      },
      {
        path: 'manageItems',
        element: <AdminRoute><ManageItems /></AdminRoute>,
      },
      {
        path: 'updateItem/:id',
        element: <AdminRoute><UpdateItem /></AdminRoute>,
        loader: ({params}) => fetch(`https://restaurant-management-server-xi.vercel.app/api/v1/menu/${params.id}`)
      },
      {
        path: 'users',
        element:<AdminRoute><AllUsers /></AdminRoute>,
      }
    ]
  }
]);
