import React, { Fragment } from 'react'
import { toast } from 'react-toastify'
import Loader from 'react-loader-spinner'
import '../css/UnPedido.css'
import 'react-toastify/dist/ReactToastify.css'
import axios from 'axios'

export default class UnPedido extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            loading: false,
            cantidad: 0
        }
     this.repetirPedido = this.repetirPedido.bind(this)
     this.cambiarCantidadDePedido = this.cambiarCantidadDePedido.bind(this)
     this.pedidoImposibleDeRealizar = this.pedidoImposibleDeRealizar.bind(this)

    }
    componentDidMount(){
        this.setState({
            cantidad: this.props.info.cantidad
        })
    }
    cambiarCantidadDePedido(event){
       this.setState({
        cantidad: event.target.value
       })

    }
     repetirPedido(){
         this.setState(({loading: true}, () => {
             axios.get('http://localhost:8080/Producto/hayStockPara/' + this.props.info.id_producto + '/' + this.state.cantidad)
                .then(res => {this.repetirPedidoExitoso(res.response)
                }).catch(e => {this.pedidoImposibleDeRealizar(e.response.data.details)
                    })
        }))
    }
     repetirPedidoExitoso(){
         axios.post('http://localhost:8080/Producto/decrementarStock',{
            productos: [
                {
                    'producto': this.props.info.nombreProducto, 
                    'id': this.props.info.id_producto,
                    'precio': this.props.info.precio,
                    'cantidad': this.props.info.cantidad  
                }
            ]
        }).then(this.props.historial.push({
            pathname: '/FacturaContainer',
            state: {    
                productos: [this.props.info],
                valorTotal: this.state.cantidad * this.props.info.precio
            }
        }))
    }
    pedidoImposibleDeRealizar(mensajeDeFaltaDeStock){
        toast.configure();
        toast.info(mensajeDeFaltaDeStock, {
            position: toast.POSITION.BOTTOM_CENTER
          });
    }

    
    render() {
        return (
            <Fragment>
            <div className="Pedido-container">
                <div className="pedido-button">
                    <div className="nombre-cantidad">
                        <div>Nombre De Producto: {this.props.info.nombreProducto}</div>
                        <div >Cantidad: <input  type="number" 
                                                value={this.state.cantidad}
                                                className="cantidad-input"
                                                onChange={this.cambiarCantidadDePedido}></input> </div>
                        <div>Precio: {this.state.cantidad * this.props.info.precio} </div>
                    </div>
                    <div className="button-repetir-pedido-container">
                       {this.state.loading ?  <Loader type="Oval" color="white" height={25} width={120} className="spinner-button"/> :
                                              <input  type="button" value="REPETIR PEDIDO" 
                                               className="Agregar-boton"
                                               onClick={this.repetirPedido}></input>} 
                    </div>
                </div>
            </div>
            </Fragment>
        );
    }
    
}