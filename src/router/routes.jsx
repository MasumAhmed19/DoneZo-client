import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Dashboard from "../page/dashboard/Dashboard";
import ErrorPage from "../page/ErrorPage/ErrorPage";
import Home from "../page/Home/Home";
import Login from "../page/Login/Login";
import PrivateRoute from "./PrivateRoute";

export const router = createBrowserRouter([
    {
      path: "/",
      element: <App />,
      errorElement: <ErrorPage />,
      children: [
        {
          path: "/",
          element: <Home />,
        }
      ],
    },{
        path: "/login",
        element: <Login />
    },{
        path: "/dashboard",
        element: <PrivateRoute><Dashboard /></PrivateRoute>
    }
    
  ]);
  