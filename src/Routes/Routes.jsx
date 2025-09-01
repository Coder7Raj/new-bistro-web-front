import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home";
import Menu from "../Pages/Menu/Menu";
import OrderFood from "../Pages/OrderFood/OrderFood";
import Register from "../Pages/Auth/Register";
import Login from "../Pages/Auth/Login";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "menu",
        element: <Menu></Menu>,
      },
      {
        path: "order/:category",
        element: <OrderFood></OrderFood>,
      },
      {
        path: "user_register",
        element: <Register></Register>,
      },
      {
        path: "user_login",
        element: <Login></Login>,
      },
    ],
  },
]);

export default router;
