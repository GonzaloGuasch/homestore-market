import React from 'react'
import CarritoVacio from './CarritoVacio'
import CarritoConProducto from './CarritoConProducto'
import Boton from '../WppButton'

export default class CarritoContainer extends React.Component{
    constructor(props) {
        super(props);
        this.state = {} 
        this.hayProductos = this.hayProductos.bind(this)
    }
    hayProductos(){
       if(localStorage.getItem("productos")){
            return JSON.parse(localStorage.getItem("productos")).length > 0
       }
       return false
    }
    render() {
        let carrito;
        if(this.hayProductos()){
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