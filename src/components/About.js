import User from "./User";
import UserClass from "./UserClass"

const About =()=>{
    return (
        <div>
            <h1>This is About page</h1>
            <User name={"barnali"} location={"birati"}/>
            <UserClass name={"barnali from class"} location={"birati from class"}/>
        </div>
    )
}

export default About;