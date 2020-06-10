import React from 'react'
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
        this.sacarProductoDeCarro = this.sacarProductoDeCarro.bind(this)
    }
    componentDidMount(){
        this.setState({
            nombre: this.props.info.producto,
            id: this.props.info.cantidad,
            precio: this.props.info.precio,
              unidad: this.props.info.unidad,
        })
    }
    sacarProductoDeCarro(){     
       localStorage.removeItem(this.props.info.id)
       window.location.reload();
    }
    render() {
        return (
            <div className="producto-en-carro-description">
                <input type="button" value="x" className="x-button" onClick={this.sacarProductoDeCarro}></input>
                <div className="nombreDeProducto">{this.state.nombre}</div>
                <div className="produto-en-carro-precio">${this.state.precio}</div>
                <div className="cantidad-en-carro">{this.state.id}</div>
                <div className="precioTotal-en-carro">${this.state.id * this.state.precio}</div>
            </div>
        );
    }
}