import React from 'react'
import '../css/ProductoEnCarro.css'
import axios from 'axios'

export default class ProductoEnCarro extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            nombre: '',
            id: '',
            precio: 0,
            unidad: ''
        }
        this.sacarProductoDeCarro = this.sacarProductoDeCarro.bind(this)
    }
    componentDidMount(){
        this.setState({
            nombre: this.props.info.producto,
            cantidad: this.props.info.cantidad,
            precio: this.props.info.precio,
              unidad: this.props.info.unidad,
        })
    }
    async sacarProductoDeCarro(){     
        let productosEnCarritoSinActual = []
        let productosEnCarrito = JSON.parse(localStorage.getItem("productos"))
           
        productosEnCarrito.map((unProductoEnCarro, i) => {
            if(unProductoEnCarro.producto !== this.state.nombre){
                productosEnCarritoSinActual = productosEnCarritoSinActual.concat(unProductoEnCarro)
            }})

        localStorage.setItem("productos", JSON.stringify(productosEnCarritoSinActual))
        await axios.post('http://localhost:8080/Producto/aumentarStock',{
            productos:  [
                            {
                              'producto': this.props.info.producto, 
                              'id': this.props.info.id,
                              'precio': this.props.info.precio,
                              'cantidad': this.props.info.cantidad  
                            }
                        ]
        }).then(res => console.log(res))

        window.location.reload();
    }
    render() {
        return (
            <div className="producto-en-carro-description">
                {console.log(this.props)}
                <input type="button" value="x" className="x-button" onClick={this.sacarProductoDeCarro}></input>
                <div className="nombreDeProducto">{this.state.nombre}</div>
                <div className="produto-en-carro-precio">${this.state.precio}</div>
                <div className="cantidad-en-carro">{this.state.cantidad}</div>
                <div className="precioTotal-en-carro">${this.state.cantidad * this.state.precio}</div>
            </div>
        );
    }
}