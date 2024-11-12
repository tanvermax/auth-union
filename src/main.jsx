import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import Root from "./Cmponent/Root/Root.jsx";
import Home from "./Cmponent/Home/Home.jsx";
import Login from "./Layout/Login.jsx";
import Signin from "./Layout/Signin.jsx";
import AuthProvider from "./Provider/AuthProvider.jsx";
import Product from "./Cmponent/Product/Product.jsx";
import Privetorter from "./Provider/Privetorter.jsx";
import Profile from "./Cmponent/Profile/Profile.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "login",
        element: <Login></Login>,
      },
      {
        path: "signin",
        element: <Signin></Signin>,
      },
      {
        path:"product",
        element: <Privetorter><Product></Product></Privetorter>
      },
      {
        path:"profile",
        element: <Privetorter><Profile></Profile></Privetorter>
      }
    ],
  },
]);
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </StrictMode>
);
