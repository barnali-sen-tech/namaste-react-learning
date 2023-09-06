import React from "react";
import ReactDOM from "react-dom/client";
import {HeaderComponent} from "./components/Header";
import Body from "./components/Body";
import Footer from "./components/Footer";
import {CreateBrowserRouter, RouterProvider, createBrowserRouter} from "react-router-dom";
import Contact from "./components/Contact";
import About from "./components/About";
import Error from "./components/Error";

const AppLayout = () => {
  return (
    <>


    
      <HeaderComponent />
      <Body />
      <Footer />
    </>
  );
};
const AppRouter=createBrowserRouter([{
  path:"/",
  element:<AppLayout/>,
  errorElement:<Error/>
},{
  path:"/about",
  element:<About/>
},{
  path:"/contact",
  element:<Contact/>
}])
const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(<AppLayout />);
root.render(<RouterProvider router={AppRouter}/>)
