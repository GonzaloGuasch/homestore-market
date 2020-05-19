import React from 'react'
import axios from 'axios'
import CarritoVacio from './CarritoVacio'
import CarritoConProducto from './CarritoConProducto'

export default class CarritoContainer extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            tieneProducto: false
        }
        this.actualizarEstadoCarrito = this.actualizarEstadoCarrito.bind(this)
    }
    componentDidMount(){
        axios.get('http://localhost:8080/ListaProducto/EsCarritoVacio/1').then(res => this.actualizarEstadoCarrito(res.data))
    }

    actualizarEstadoCarrito(estaElCarritoVacio){
        this.setState({
            tieneProducto: estaElCarritoVacio
        })
    
    }

    render() {
        let tieneProducto = this.state.tieneProducto
        let carrito;
        if(tieneProducto){
            carrito = <CarritoVacio history={this.props.history}/>  
        }else{
            carrito = <CarritoConProducto history={this.props.history}/>
        }
        return (
            <div>
               {carrito}
            </div>
        );
    }
}