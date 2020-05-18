import React from 'react'
import '../css/UnProducto.css'
import turro from '../images/4013.JPG'
import Contador from '../components/Contador'

export default class UnProducto extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            info: props.info
        }
    }

    render(){
        return(
            <div className="info-producto-container">
                <img src={turro} height="150" width="150" />
                <div className="descripcion-container">
                 Descripcion
                </div>
                <div className="nombre-container">
                {this.state.info.nombre}   
                </div>
                <div className="valor-container">
                    $55
                </div>
                <div className="contador-boton-container">
                <Contador></Contador>
                <input type="button" value="AGREGAR" className="Agregar-boton"/>
                </div>
                 
            </div>
        )
    }
}