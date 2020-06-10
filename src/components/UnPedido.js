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
     this.repetirSiEsPosiblePedido = this.repetirSiEsPosiblePedido.bind(this)
     this.endRequestAndSendEmail  =this.endRequestAndSendEmail.bind(this)
    }
    repetirSiEsPosiblePedido(){
        let nombre_usuario = JSON.parse(localStorage.getItem("usuario"))
        this.setState({loading: true}, () => {
            axios.post('http://localhost:8080/Usuarios/GuardarFactura', 
            {
                productos: [  {'nombre': this.props.info.nombreProducto,
                         'cantidad': this.props.info.cantidad
                        }],
                nombreUsuario: nombre_usuario.username
            }).then(res => console.log(res))
            axios.get(`http://localhost:8080/Mail/${nombre_usuario.email}/${100}/${nombre_usuario.username}`)
            .then(res => this.endRequestAndSendEmail(res))
            
        })
    }
    endRequestAndSendEmail(res){
        this.setState({
            loading: false
        })
        alert("Gracias por tu compra, en tu email se encuentra la factura!")
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
                                               onClick={this.repetirSiEsPosiblePedido}></input>} 
                    </div>
                </div>
            </div>
        );
    }
    
}