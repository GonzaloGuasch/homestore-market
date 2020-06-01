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
        let res
        Object.keys(localStorage).map(unProducto => res = res || !isNaN(unProducto))
        return res
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