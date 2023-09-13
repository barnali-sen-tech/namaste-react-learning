import { useState } from "react";
import { Link } from "react-router-dom";

// const [btnNameReact, setBtnNameReact]= useState("Login") 

const Title = () => {
    return (
      // <h1>Food Villa</h1>
      <a href="\">
        <img
          className="logo"
          alt="logo"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTweev2cNZCgecH7BJbsS2WxVkVCOWIDj6M3Q&usqp=CAU"
        />
      </a>
    );
  };
  export const HeaderComponent = () => {
    console.log("Header render")
    return (
      <div className="header">
        <Title />
        <div className="nav-items">
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/contact">Contact</Link></li>
            <li><Link to="/grocery">Grocery</Link></li>
            <li>Cart</li>
            {/* <button className="login" onClick={()=>{
              btnNameReact==="Login"?setBtnNameReact("Logout"):setBtnNameReact("Login")
            }}>{btnNameReact}</button> */}
          </ul>
        </div>
      </div> 
    );
  };
export default Title;