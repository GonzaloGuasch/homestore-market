import React from 'react'
import '../css/Header.css'
import psuudoloPresentable from '../images/logo_ejemplo.png'
import email from '../images/email.svg'
import phone from '../images/phone.svg'
import carrito from '../images/carrito.svg'
import axios from 'axios'

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
            alert("No buscaste ningun producto!")
        }
        axios.get('http://localhost:8080/Producto/productosQueContengan/' + this.state.busquedaProducto)
        .then(res => this.mostarBusquedaProducto(res.data))
    }
}

mostarBusquedaProducto(productosEncontrados){
   this.props.history.push({
    pathname: "/ResultadoBusqueda", 
    state: {productos: productosEncontrados}}
       )
}


    render(){
        return(
         <div className="header-container">
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
                       <div className="contacto-container">
                           <img src={email} className="logo-email" alt="img-email"></img>
                           Contactar
                       </div>
                       <div className="telefono-container">
                       <img src={phone} className="logo-email" alt="img-phone"></img>
                          5555-5555
                       </div>
                       <div className="carrito-container">
                       <img src={carrito} className="logo-email" alt="img-carrito"></img>
                           <a href="/Carrito">Carrito</a>
                       </div>
         
          </div>
       </div>
   
    )}
}