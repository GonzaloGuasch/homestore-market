import React from 'react'
import axios from 'axios'
import Header from '../Header'
import BarraBusqueda from '../BarraBusqueda'
import '../../css/CarritoConProducto.css'
import ProductoEnCarro from '../ProductoEnCarro'
import UnProducto from '../UnProducto'


export default class CarritoConProducto extends React.Component{
    constructor(props) {
        super(props);
        this.state={
            productos: [],
            amount: 0
        }
        this.actualizarCarrito = this.actualizarCarrito.bind(this)
        this.borrarTodo = this.borrarTodo.bind(this)
        this.updetearValor = this.updetearValor.bind(this)
        this.joinList = this.joinList.bind(this)
    }
    componentDidMount(){
        axios.get('http://localhost:8080/ListaProducto/TodosLosProductosDeCarrito/0').then(res => this.actualizarCarrito(res.data))
    }
    actualizarCarrito(valorProducto){
       const productos = Object.keys(valorProducto);
       const amount = Object.values(valorProducto);
      
        this.setState({  
            productos:  this.joinList(productos, amount),
        })
    }
    joinList(productos, valor){
        const res = []
        for(let i = 0; i < productos.length; i++){
            res[i] = [productos[i], valor[i]]
        }
        return res
    }
    borrarTodo(){
       axios.post('http://localhost:8080/ListaProducto//BorrarTodosLosProductos/0').then(res => this.updetearValor(res))
    }
    updetearValor(res){
        window.location.reload();
    }
    render() {
      const producotsEnCarro = this.state.productos.map((UnProducto, i) => 
            <ProductoEnCarro id={UnProducto}/>)
     
        return (
            <div>
                 <Header></Header>
                <BarraBusqueda></BarraBusqueda>
                <div className="carrito-cuadro-container">
                    <div className="columna-producto">PRODUCTO</div>
                    <div className="columna">PRECIO</div>
                    <div className="columna">CANTIDAD</div>
                    <div className="columna">TOTAL</div>
                    {producotsEnCarro}
                </div>
                carrito: {this.state.productos.length}
                <input type="button" value="borrar todo" onClick={this.borrarTodo} className="borrar-boton-carrito"/>
            </div>
        );
    }
}