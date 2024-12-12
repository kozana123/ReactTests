import { Component } from "react";

export default class CCAddUp extends Component{

    constructor(props){
        super(props)

        this.state = {
            
        }
    }

    chgNum1 = (e) =>{
        this.setState({num1: Number(e.target.value)})
    }

    chgNum2 = (e) =>{
        this.setState({num2: Number(e.target.value)})
    }

    btnEqual = () =>{
        this.setState({equal: this.state.num1 + this.state.num2})
    }
    render(){

        let printEqual = <span>= {this.state.equal}</span>



        return(
            <div>
                Num1: <input type="text" onChange={this.chgNum1} /> 
                Num2: <input type="text" onChange={this.chgNum2}/> 
                 <button onClick={this.btnEqual} style={{background: "blue", color:"white", border: "1px solid black"}}>+</button>
                {printEqual}
            </div>
        )
    }
}
