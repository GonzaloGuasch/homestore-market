import React, { Fragment } from 'react'
import '../css/Header.css'
import pseudoLogo from '../images/23f.jpg'

export default function Header(){
    return(
   
       <div className="header-container">
           <div className="image-logo-container">
               <img src={pseudoLogo} className="logo-container"/></div>
           <div className="navBar-container"><input type="text" 
                       className="searchbar-container"
                       placeholder="Busca nuestros productos"/>
                       <div className="contacto-container">
                           Contactar
                       </div>
                       <div className="telefono-container">
                          5555-5555
                       </div>
                       <div className="carrito-container">
                           Carrito/0$
                       </div>
         
          </div>
       </div>
   
    )
}