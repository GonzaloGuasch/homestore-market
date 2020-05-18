import React, { Component, Fragment } from 'react'
import '../css/Contador.css'

export default class Contador extends Component{
    constructor(props){
        super(props)
        this.state={
            value: 0
        }
        this.add = this.add.bind(this)
        this.remove = this.remove.bind(this)
    }

    add(){
        this.setState({
            value: this.state.value + 1 
        })
    }
    remove(){
        if(this.state.value === 0){return}
        this.setState({
            value: this.state.value - 1 
        })
    }

    render() {
        return (
            <div className="contador-container">
             <input type="button" value="+" className="adder" onClick={this.add}></input>       
            <div className="value-container">
               {this.state.value}
            </div>
            <input type="button" value="-" className="remover" onClick={this.remove} value="-"></input> 
            </div>
        );
    }
}