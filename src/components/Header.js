import React, { Fragment } from 'react'
import '../css/Header.css'
import pseudoLogo from '../images/23f.jpg'
import email from '../images/email.svg'
import phone from '../images/phone.svg'
import carrito from '../images/carrito.svg'

export default function Header(){
    return(
   
       <div className="header-container">
           <div className="image-logo-container">
               <img src={pseudoLogo} className="logo-container"/></div>
           <div className="navBar-container"><input type="text" 
                       className="searchbar-container"
                       placeholder="Busca nuestros productos"/>

                       
                       <div className="contacto-container">
                           <img src={email} className="logo-email"></img>
                           Contactar
                       </div>
                       <div className="telefono-container">
                       <img src={phone} className="logo-email"></img>
                          5555-5555
                       </div>
                       <div className="carrito-container">
                       <img src={carrito} className="logo-email"></img>
                           Carrito/0$
                       </div>
         
          </div>
       </div>
   
    )
}