import App from "./App.jsx";
import { createBrowserRouter } from "react-router-dom";
import ForgotPassword from "./components/ForgotPassword.jsx";
import About from "./components/About.jsx";
import Home from "./components/Home.jsx";
import Login from "./components/Login.jsx";
import Hero from "./components/Hero.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    children: [
      {
        path: "/forgot-pass",
        element: <ForgotPassword />,
      },
      {
        path: "/dashboard",
        element: <About />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/home",
        element: <Hero />,
      },
    ],
  },
]);

export default router;
