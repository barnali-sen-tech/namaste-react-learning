import { useState } from "react";

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
            <li>Home</li>
            <li>About</li>
            <li>Contact</li>
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