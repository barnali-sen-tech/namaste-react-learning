import User from "./User";
import UserClass from "./UserClass"

import React from "react";


class About extends React.Component{

    constructor(props){
        super(props)
        console.log("parent constructor")
    }
    componentDidMount(){
        console.log("c d m of parent")
    }
    render(){
        return (
            <div>
                <h1>This is About class component</h1>
                {/* <User name={"barnali"} location={"birati"}/> */}
                <UserClass name={"barnali from class"} location={"birati from class"}/>
            </div>
        )
    }
}

// const About =()=>{
//     return (
//         <div>
//             <h1>This is About page</h1>
//             <User name={"barnali"} location={"birati"}/>
//             <UserClass name={"barnali from class"} location={"birati from class"}/>
//         </div>
//     )
// }

export default About;