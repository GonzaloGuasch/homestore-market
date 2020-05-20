import React from 'react'
import axios from 'axios'
import '../css/ProductoEnCarro.css'

export default class ProductoEnCarro extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            nombre: '',
            id: '',
            precio: 0,
            unidad: ''
        }
        this.updetearDatos = this.updetearDatos.bind(this)
    }
    componentDidMount(){
        axios.get('http://localhost:8080/Producto/getProducto/' + this.props.id[0]).then(res => this.updetearDatos(res.data))
    }
    updetearDatos(datos){
        this.setState({
            nombre: datos.nombre,
            id: datos.id,
            precio: datos.precio,
            unidad: datos.unidad,
        })
        console.log(datos)
    }
    render() {
        return (
            <div className="producto-en-carro-description">
                <div className="nombreDeProducto">{this.state.nombre}</div>
                <div className="produto-en-carro-precio">${this.state.precio}</div>
                <div className="cantidad-en-carro">{this.props.id[1]}</div>
                <div className="precioTotal-en-carro">${this.props.id[1] * this.state.precio}</div>
            </div>
        );
    }
}