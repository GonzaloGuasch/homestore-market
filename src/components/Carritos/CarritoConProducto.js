import React from 'react'
import axios from 'axios'
import Header from '../Header'
import BarraBusqueda from '../BarraBusqueda'
import '../../css/CarritoConProducto.css'


export default class CarritoConProducto extends React.Component{
    constructor(props) {
        super(props);
        this.state={
            productos: [],
            valor: 0
        }
        this.actualizarCarrito = this.actualizarCarrito.bind(this)
        this.borrarTodo = this.borrarTodo.bind(this)
        this.updetearValor = this.updetearValor.bind(this)
    }
    componentDidMount(){
        axios.get('http://localhost:8080/ListaProducto/TodosLosProductosDeCarrito/0').then(res => this.actualizarCarrito(res.data))
    }
    actualizarCarrito(valorProducto){
        this.setState({
            valor: this.state.productos.push(valorProducto)
        })
    }
    borrarTodo(){
       axios.post('http://localhost:8080/ListaProducto//BorrarTodosLosProductos/0').then(res => this.updetearValor(res))
    }
    updetearValor(res){
        window.location.reload();
    }
    render() {
        return (
            <div>
                 <Header></Header>
                <BarraBusqueda></BarraBusqueda>
                carrito: {this.state.productos.length}
                {console.log}
                <input type="button" value="borrar todo" onClick={this.borrarTodo} className="borrar-boton-carrito"/>
            </div>
        );
    }
}