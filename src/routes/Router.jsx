import { createBrowserRouter } from "react-router-dom";
import AppLayout from "../components/layout/AppLayout";
import Homepage from "../pages/Homepage";
import CheckOut from "../pages/CheckOut";

export const Router = createBrowserRouter([
   {
      path: "/",
      element: <AppLayout />,
      children: [
         {
            index: true,
            element: <Homepage />
         },
         {
            path: "checkout",
            element: <CheckOut />
         }
      ]
   }
])