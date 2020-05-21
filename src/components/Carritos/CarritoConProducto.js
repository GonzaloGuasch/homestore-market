import React from 'react'
import Header from '../Header'
import BarraBusqueda from '../BarraBusqueda'
import '../../css/CarritoConProducto.css'
import ProductoEnCarro from '../ProductoEnCarro'
import axios from 'axios'


export default class CarritoConProducto extends React.Component{
    constructor(props) {
        super(props);
        this.state={
            productos: [],
            amount: 0,
            keys: []
        }
        this.actualizarCarrito = this.actualizarCarrito.bind(this)
        this.borrarTodo = this.borrarTodo.bind(this)
        this.updetearValor = this.updetearValor.bind(this)
        this.joinList = this.joinList.bind(this)
        this.volverAComprar = this.volverAComprar.bind(this)
        this.buscarProductoPorID = this.buscarProductoPorID.bind(this)
        this.agregarProducto = this.agregarProducto.bind(this)
    }
    componentDidMount(){
        Object.keys(localStorage).map(unIdDeProducto => this.buscarProductoPorID(unIdDeProducto))
    }
    buscarProductoPorID(idDeProducto){
        axios.get('http://localhost:8080/Producto/getProducto/' + idDeProducto).then(res => this.agregarProducto(res.data, localStorage.getItem(idDeProducto)))
    }

    agregarProducto(unProducto, cantidadEnCarro){
        const unProductoConCantidadEnCarro = Object.assign(unProducto, {'cantidad': cantidadEnCarro})
        this.setState({ 
            productos: this.state.productos.concat([unProductoConCantidadEnCarro])
          })
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
       console.log(this.state.productos)
    }
    volverAComprar(){
        this.props.history.push('/')
    }
    updetearValor(res){
        window.location.reload();
    }
    render() {
      const producotsEnCarro = this.state.productos.map((UnProducto, i) => 
            <ProductoEnCarro info={UnProducto}/>)
     
        return (
            <div>
                 <Header></Header>
                <BarraBusqueda></BarraBusqueda>
                carrito: {this.state.productos.length}
                <div className="carrito-cuadro-container">
                    <div className="columna-producto">PRODUCTO</div>
                    <div className="columna">PRECIO</div>
                    <div className="columna">CANTIDAD</div>
                    <div className="columna">TOTAL</div>
                </div>
                {producotsEnCarro}
                <div>
                <input type="button" value="borrar todo" onClick={this.borrarTodo} className="borrar-boton-carrito"/>
                <input type="button" value="Volver a comprar" onClick={this.volverAComprar} className="volver-boton-carrito"/>
                </div>
            </div>
        );
    }
}