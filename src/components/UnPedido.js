import React from 'react'
import '../css/UnPedido.css'
import axios from 'axios'
import Loader from 'react-loader-spinner';

export default class UnPedido extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            loading: false
        }
     this.repetirPedido = this.repetirPedido.bind(this)

    }
    repetirPedido(){
        this.setState(({loading: true}, () => {
            this.props.historial.push({
                pathname: '/FacturaContainer',
                state: {    
                    productos: [this.props.info],
                    valorTotal: this.props.info.cantidad * this.props.info.precio
                }
            })
        }))
    }
    
    render() {
        return (
            <div className="Pedido-container">
                <div className="pedido-button">
                    <div className="nombre-cantidad">
                        <div>Nombre De Producto: {this.props.info.nombreProducto}</div>
                        <div >Cantidad: <input  type="number" 
                                                value={this.props.info.cantidad}
                                                className="cantidad-input"></input> </div>
                        <div>Precio: {this.props.info.cantidad * this.props.info.precio} </div>
                    </div>
                    <div className="button-repetir-pedido-container">
                       {this.state.loading ?  <Loader type="Oval" color="white" height={25} width={120} className="spinner-button"/> :
                                              <input  type="button" value="REPETIR PEDIDO" 
                                               className="Agregar-boton"
                                               onClick={this.repetirPedido}></input>} 
                    </div>
                </div>
            </div>
        );
    }
    
}