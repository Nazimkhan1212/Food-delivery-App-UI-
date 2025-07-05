import React from "react";

class UserClass extends React.Component{
    constructor(props){
        super(props)
        this.state={
            count:0
        }
    }
    render(){
        return(
            <>
            <h1>{this.props.name}</h1>
            <div onClick={()=>this.setState({count:this.state.count+1})} >UserClass:{this.state.count}</div>
            
            </>
        )
    }
}

export default UserClass;