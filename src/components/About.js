import { createContext, useContext } from "react";
import UserClass from "./UserClass";
import userContext from "../contexts/userContext";

const About = ()=>{
    const {loggedInUser} = useContext(userContext);
    return(
        <div>
            <h2>About</h2>
            <h2>{loggedInUser}</h2>
        </div>
    )
}
export default About;