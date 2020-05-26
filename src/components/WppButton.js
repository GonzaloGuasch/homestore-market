import React from 'react'
import '../css/BotonWpp.css'
import wpp from '../images/whatsapp.svg'
export default function BotonWpp(){

    return (
        <div>   
            <a href="https://api.whatsapp.com/send?phone=5491139327763&text=Hola!%20Vengo%20de%20la%20Web%20de%20Home%20Store%20Market" 
            target="_blank"
            className="wpp-boton"><img src={wpp} className="wpp-pop-up"/>¿Cómo podemos ayudarte?</a>       
        </div>
    );
}