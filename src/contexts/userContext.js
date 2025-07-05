import { createContext } from "react";

const userContext = createContext({
    loggedInUser:"default user"
})

export default userContext;