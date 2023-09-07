import React from "react";
import ReactDOM from "react-dom/client";
import { HeaderComponent } from "./components/Header";
import Body from "./components/Body";
import Footer from "./components/Footer";
import {
  Outlet,
  RouterProvider,
  createBrowserRouter,
} from "react-router-dom";
import Contact from "./components/Contact";
import About from "./components/About";
import Error from "./components/Error";
import RestrauntMenu from "./components/RestrauntMenu";

const AppLayout = () => {
  return (
    <>
      <HeaderComponent />
      {/* <Body />
      <Footer /> */}
      <Outlet/>
    </>
  );
};
const AppRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path:"/restraunts/:resId",
        element:<RestrauntMenu/>
      }
    ],
    errorElement: <Error />,
  },
]);
const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(<AppLayout />);
root.render(<RouterProvider router={AppRouter} />);
