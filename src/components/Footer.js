import React, { Fragment } from 'react'
import email from '../images/email.svg'
import cell from '../images/phone.svg'
import facebook from '../images/faibu.png'
import instagram from '../images/ig.png'
import '../css/footer.css'


export default function Footer(){

    return(
        <Fragment>
            <div className="footer-container">
                <div className="contacto-footer-container">
                    <p className="contacto-tittle">Contacto</p>
                        <div className="instagram-contacto">
                            <img src={cell} className="icono-container" alt="cellphone"></img>5555-5555
                        </div>
                        <div className="facebook-contacto">
                            <img src={email} className="icono-container" alt="email" ></img> soytumarket@gmail.com
                        </div>
                </div>
                <div className="redes-footer-container">
                    <p className="redes-title">Redes</p>
                        <div className="i-logo">
                            <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer">
                                <img src={instagram} height="20px" alt="instagram logo" /></a>Seguinos en instagram!</div>
                        <div>
                            <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer">
                                <img src={facebook} height="20px" alt="facebook logo"/></a> Seguinos en facebook!</div>
                        </div>
                <div className="direccion-footer-container">
                    <p className="redes-title">Direccion</p>
                </div>
            </div>
        </Fragment>
    )
}