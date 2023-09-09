import { useState } from "react";

const User =({name,location})=>{
const [count]=useState(0);
const[count1]=useState(1);

    return(<div className="user-card">
        <h2>Name: {name}</h2>
        <h3>Location: {location}</h3>
        <h4>Contact:xyz</h4>
        <h3>{count} & {count1}</h3>
    </div>)
}

export default User;

