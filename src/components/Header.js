import { useState } from "react";
import { Link } from "react-router-dom";

import { useContext } from "react";
import UserContext from "../utils/UserContext";

import {useSelector} from "react-redux"

// const [btnNameReact, setBtnNameReact]= useState("Login") 

const Title = () => {
    return (
      // <h1>Food Villa</h1>
      <a href="\">
        <img
          className="w-56"
          alt="logo"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTweev2cNZCgecH7BJbsS2WxVkVCOWIDj6M3Q&usqp=CAU"
        />
      </a>
    );
  };
  export const HeaderComponent = () => {
    console.log("Header render")
    const {loggedInUser} = useContext(UserContext)

    const cartItems = useSelector((store)=>store.cart.items)

    return (
      <div className="flex justify-between bg-pink-100">
        <Title />
        <div className="flex items-center">
          <ul className="flex p-4 m-4">
            <li className="px-4"><Link to="/">Home</Link></li>
            <li className="px-4"><Link to="/about">About</Link></li>
            <li className="px-4"><Link to="/contact">Contact</Link></li>
            <li className="px-4"><Link to="/grocery">Grocery</Link></li>
            <li className="px-4 font-bold text-xl"><Link to ="/cart">Cart-({cartItems.length})</Link></li>
            <li className="px-4">{loggedInUser}</li>
            {/* <button className="login" onClick={()=>{
              btnNameReact==="Login"?setBtnNameReact("Logout"):setBtnNameReact("Login")
            }}>{btnNameReact}</button> */}
          </ul>
        </div>
      </div> 
    );
  };
export default Title;