import {
    createBrowserRouter,
  } from "react-router-dom";
import Root from "./Root";
import Home from "../Pages/Home";
import Menu from "../Pages/Menu";

export const router = createBrowserRouter([
    {
      path: "/",
      element: <Root />,
      children: [
        {
            path: "/",
            element: <Home />,
            },
            {
            path: "menu",
            element: <Menu />,
        }
      ]
    },
  ]);