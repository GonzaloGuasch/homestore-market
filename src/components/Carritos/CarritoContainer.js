import React from 'react'
import CarritoVacio from './CarritoVacio'
import CarritoConProducto from './CarritoConProducto'
import Boton from '../WppButton'

export default class CarritoContainer extends React.Component{
    constructor(props) {
        super(props);
        this.state = {} 
    }
    render() {
        let carrito;
        if(Boolean(Object.keys(localStorage).length)){
            carrito = <CarritoConProducto history={this.props.history}/>
        }else{
            carrito = <CarritoVacio history={this.props.history}/>  
        }
        return (
            <div>
               {carrito}
               <Boton></Boton>
            </div>
        );
    }
}