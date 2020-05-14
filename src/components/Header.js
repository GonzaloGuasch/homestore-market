import React, { Fragment } from 'react'
import '../css/Header.css'
import pseudoLogo from '../images/23f.jpg'

export default function Header(){
    return(
   
       <div className="header-container">
           <div className="image-logo-container">
               <img src={pseudoLogo} className="logo-container"/></div>
           <div>NavBar</div>
       </div>
   
    )
}