import React from 'react'
import '../css/footer.css'
import email from '../images/email.svg'
import cell from '../images/phone.svg'
import facebook from '../images/faibu.png'
import instagram from '../images/ig.png'

export default function Footer(){
    return(
        <div className="footer-container">
            <div>
            <p className="titulos">CONTACTO</p>
                <div><img src={cell} className="icon-container" alt="cellphone"></img>CEL/TEL</div>
                <div><img src={email} className="icon-container" alt="email" ></img> EMAIL</div>
                
            </div>
            <div>
            <p className="titulos">REDES</p>
                <div><a href="https://www.instagram.com/" target="_blank">
                    <img src={instagram} height="20px"/></a> Seguinos en instagram!</div>
                <div><a href="https://www.facebook.com/" target="_blank">
                    <img src={facebook} height="20px"/></a> Seguinos en facebook!</div>
            </div>
            <div>
            <p>DIRECCION</p>
                <div></div>
            </div>
        </div>
    )
}