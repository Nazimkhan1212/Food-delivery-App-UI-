import { useRouteError } from "react-router"
const Error = ()=>{
    const error =  useRouteError()
    return(
        <div>
            <h1>{error.status}:{error.statusText}</h1>
            <h2>Something Went Wrong</h2>
        </div>
    )
}

export default Error;