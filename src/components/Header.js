import React from 'react'
import '../css/Header.css'
import psuudoloPresentable from '../images/logo_ejemplo.png'
import email from '../images/email.svg'
import phone from '../images/greenPhone.svg'
import carrito from '../images/carrito.svg'
import axios from 'axios'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default class Header extends React.Component{
    constructor(props){
    super(props);
    this.state = {
        busquedaProducto: '',
        isLog: false
    };
    this.actualizarBusqueda = this.actualizarBusqueda.bind(this)
    this.buscar = this.buscar.bind(this)
    this.mostarBusquedaProducto = this.mostarBusquedaProducto.bind(this)
    this.noProductoFound = this.noProductoFound.bind(this)
    this.cantidadDeProductosEnCarrito = this.cantidadDeProductosEnCarrito.bind(this)
}
componentDidMount(){
    this.setState({
        isLog: localStorage.getItem("isLog")
    })
}
actualizarBusqueda(event){
    this.setState({ 
        busquedaProducto: event.target.value 
    })
}
buscar(event){
    if(event.key === 'Enter'){
        if(this.state.busquedaProducto === ''){
            toast.error('No buscaste ningun producto', {
                position: "top-center",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                })
                return toast
        }
        axios.get('http://localhost:8080/Producto/productosQueContengan/' + this.state.busquedaProducto)
        .then(res => this.mostarBusquedaProducto(res.data))
        .catch(this.noProductoFound())
    }
}
noProductoFound(){
    toast.error('No hay productos con ese nombre', {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        })
        return toast
}
mostarBusquedaProducto(productosEncontrados){
   this.props.history.push({
    pathname: "/ResultadoBusqueda", 
    state: {productos: productosEncontrados}}
       )
}
cantidadDeProductosEnCarrito(){
    let productos = JSON.parse(localStorage.getItem("productos"))
    let cantidadTotal = 0
    if(productos) {
        productos.map((unProducto, i) => cantidadTotal = cantidadTotal + unProducto.cantidad)
        return cantidadTotal
    }else {
        return 0
    }
}


    render(){
        return(
         <div className="header-container">
          <ToastContainer/>
           <div className="image-logo-container">
               <img src={psuudoloPresentable} className="logo-container" alt="logo"/></div>
           <div className="navBar-container">
               <input type="text" 
                       className="searchbar-container"
                       placeholder="Busca otros productos"
                       value={this.state.busquedaProducto}
                       onChange={this.actualizarBusqueda}
                       onKeyDown={this.buscar}/>
                       <div className="logIn-register-container">
                           {this.state.isLog ? <a href="/Pedidos">Pedidos</a> : <a href="/LogIn-Register">Unirse/Ingresar</a>}
                       </div>
                       <div className="carrito-container">
                            <div className="carrito-cantidad-wrapper">
                                <div className="carrito-wrapper">
                                    <a href="/Carrito"> <img src={carrito} className="logo-email" alt="img-carrito"></img></a>
                                </div>
                                <div className="cantidad-wrapper">{this.cantidadDeProductosEnCarrito()}</div>
                            </div>
                       </div>

                       <div className="contacto-container">
                           <a href="mailto:soytumarket@gmail.com"><img src={email} className="logo-email" alt="img-email"></img></a>
                       </div>

                       <div className="telefono-container">
                       <img src={phone} className="logo-email" alt="img-phone"></img>
                          5555-5555
                       </div>
                      
         
          </div>
       </div>
   
    )}
}