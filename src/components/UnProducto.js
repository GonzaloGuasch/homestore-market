import React from 'react'
import '../css/UnProducto.css'

export default class UnProducto extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            info: props.info
        }
    }

    render(){
        return(
            <div>
                {this.state.info.nombre}
            </div>
        )
    }
}