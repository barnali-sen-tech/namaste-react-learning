import React, { lazy, Suspense, useEffect, useState } from "react";
import ReactDOM from "react-dom/client";
import { HeaderComponent } from "./components/Header";
import Body from "./components/Body";
import Footer from "./components/Footer";
import { Outlet, RouterProvider, createBrowserRouter } from "react-router-dom";
import Contact from "./components/Contact";
import About from "./components/About";
import Error from "./components/Error";
import RestrauntMenu from "./components/RestrauntMenu";
// import Grocery from "./components/Grocery";
import UserContext from "./utils/UserContext";
import appStore from "./utils/appStore";
import { Provider } from "react-redux";
import Cart from "./components/Cart";

const AppLayout = () => {
  const [userName, setUserName] = useState();
  useEffect(() => {
    const data = {
      name: "Barnali",
    };
    setUserName(data.name);
  }, []);
  return (
    <>
    <Provider store ={appStore}>
      <UserContext.Provider value={{ loggedInUser: userName , setUserName}}>
        <HeaderComponent />
        {/* <Body />
      <Footer /> */}
        <Outlet />
      </UserContext.Provider>
      </Provider>
    </>
  );
};
const Grocery = lazy(() => import("./components/Grocery"));
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
        path: "/grocery",
        element: (
          <Suspense
            fallback={
              <>
                Grocery component is loading...will only visible in slow network
              </>
            }
          >
            <Grocery />
          </Suspense>
        ),
      },
      {
        path: "/restraunts/:restaurantId",
        element: <RestrauntMenu />,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
    ],
    errorElement: <Error />,
  },
]);
const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(<AppLayout />);
root.render(<RouterProvider router={AppRouter} />);
