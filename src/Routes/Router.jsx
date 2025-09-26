import { createBrowserRouter } from "react-router-dom";
// import Home from './pages/Home';
// import About from './pages/About';
// import NotFound from './pages/NotFound';
import App from "../App";
import RootLayout from "../Pages/RootPage/RootLayout";
import HomePage from "../Pages/HomePage/HomePage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        path: "/home",
        element: <HomePage/>,
      },
      {
        path: "/testimonials",
        element: <></>,
      },
      {
        path: "/solution",
        element: <></>,
      },
      {
        path: "/contact",
        element: <></>,
      },
      {
        path: "*",
        element: <></>,
      },
    ],
  },
]);
