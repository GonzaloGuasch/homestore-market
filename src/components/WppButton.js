import React from 'react'
import '../css/BotonWpp.css'
export default function BotonWpp(){

    return (
        <div>   
            <a href="https://api.whatsapp.com/send?phone=5491139327763&text=Hola!%20Vengo%20de%20la%20Web%20de%20Home%20Store%20Market" 
            target="_blank"
            className="wpp-boton">¿Cómo podemos ayudarte?</a>       
        </div>
    );
}