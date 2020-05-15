import React from 'react'
import '../css/footer.css'
import email from '../images/email.svg'
import cell from '../images/phone.svg'

export default function Footer(){
    return(
        <div className="footer-container">
            <div>
            <p>CONTACTO</p>
                <div><img src={cell} className="icon-container" alt="cellphone"></img>CEL/TEL</div>
                <div><img src={email} className="icon-container" alt="email" ></img> EMAIL</div>
                
            </div>
            <div>
            <p>REDES</p>
                <div>I</div>
                <div>F</div>
            </div>
            <div>
            <p>DIRECCION</p>
                <div></div>
            </div>
        </div>
    )
}