import React from "react";

class StateWithClassCompo extends React.Component{
    constructor(props){
        super(props)
        this.state ={
            name:"Sheetal"
        }
    }
render(){
    return(
        <div>
            <h2>StateFunctionality with Class Component</h2>
            <p>Hello, <b>{this.state.name}</b></p>
            <button onClick ={()=>this.setState({name:'Sagar'})}>UpdateName</button>
        </div>
    )
}



}

export default StateWithClassCompo;