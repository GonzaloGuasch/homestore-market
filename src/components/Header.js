import React, { useEffect, useState, Fragment }  from 'react'
import '../css/Header.css'
import psuudoloPresentable from '../images/logo_ejemplo.png'
import email from '../images/email.svg'
import phone from '../images/greenPhone.svg'
import carrito from '../images/carrito.svg'
import menu from '../images/menu.svg'

export default function Header(){
    
    const [isLog, setIsLog] = useState(false)
    const [cantidadEnCarrito, setCantidadEnCarro] = useState(0)

    useEffect(() => {
        setIsLog(localStorage.getItem("isLog"))
            let productos = JSON.parse(localStorage.getItem("productos"))
            let cantidadTotal = 0
                if(productos) {
                    productos.map((unProducto, i) => cantidadTotal = cantidadTotal + unProducto.cantidad)
                        setCantidadEnCarro(cantidadTotal)
                } else {
                    setCantidadEnCarro(0)
                }
    })

        return (
            <Fragment>
                <div className="header-container">
                    <div className="img-logo-responsive">
                        <img    src={psuudoloPresentable} 
                                alt="logo-img"
                                className="logo-img-container">
                        </img>
                        <input  type="text" 
                                className="searchbar"
                                placeholder="Busqueda de productos">
                                </input>
                    </div>
                        <div className="iconos-container">
                            <div className="unIcono-container">
                                {isLog ?    <a href="/Pedidos">Pedidos</a> : 
                                            <a href="/LogIn-Register">Unirse/Ingresar</a>}
                            </div>
                            <div className="unIcono-container" id="carrito-cantidad-wrapper">
                                <a href="/Carrito"> <img src={carrito} className="img-container" alt="img-carrito"></img></a>
                                <div id="carrito-cantidad-element">
                                    {cantidadEnCarrito}
                                </div>
                            </div>
                            <div className="unIcono-container">
                                <a href="mailto:soytumarket@gmail.com"><img src={email} className="img-container"  alt="img-email"></img></a>
                            </div>
                            <div className="unIcono-container" id="phone-number-container">
                                <img src={phone} className="img-container" alt="img-phone"></img>
                                5555-5555
                            </div>
                        </div>
                </div>
            </Fragment>
        );

}