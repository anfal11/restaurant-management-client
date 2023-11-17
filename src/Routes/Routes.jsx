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
      {
        path: 'cart',
        element: <PrivateRoute><Cart /></PrivateRoute>,
      },

      //admin routes
      {
        path: 'users',
        element:<AllUsers />,
      }
    ]
  }
]);
