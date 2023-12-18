import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter } from "react-router-dom";
// import App from './App.jsx'
import "./index.css";
import { RouterProvider } from "react-router-dom";
import Login from "./components/Login";
import Register from "./components/Register";
import ForgotPassword from "./components/ForgotPassword";
import Hero from "./components/Hero";
import About from "./components/About";

// import router from './routing'

const router = createBrowserRouter([
  {
    path: "/",
    element: <Login />,
  },
  {
    path: "/register",
    element: <Register />,
  },
  {
    path: "/forgot-pass",
    element: <ForgotPassword />,
  },
  {
    path: "/hero",
    element: <Hero />,
  },
  {
    path: "/dashboard",
    element: <About />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
