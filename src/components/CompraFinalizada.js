import React, { useEffect, useState, Fragment }  from 'react'
import axios from 'axios'
import '../css/CompraFinalizada.css'


export default function CompraFinalizada(props){

    const [puedeVolver, setVolver] = useState(false)
    useEffect(() => {
        if(localStorage.getItem("usuario") !== null){
            let usuario = JSON.parse(localStorage.getItem("usuario"))
            axios.post(`http://localhost:8080/Mail/EmailUsuario/${usuario.email}/${100}/${usuario.username}`,
            {
                productos: JSON.parse(localStorage.getItem("productos"))

            }).then(res => console.log(res))
            axios.post('http://localhost:8080/Usuarios/GuardarFactura', 
            {
                productos: JSON.parse(localStorage.getItem("productos")),
                nombreUsuario: usuario.username 
            })
            .then(setVolver(true))
            .catch(e => console.log(e)) 
            setVolver(true)

        }else{
            let emailGuest = localStorage.getItem("emailGuest")
            let guestUsername = localStorage.getItem("guestName")
            
            axios.post(`http://localhost:8080/Mail/EmailGuest/${emailGuest}/${guestUsername}`,
            {
                productos: JSON.parse(localStorage.getItem("productos"))
                
            }).then(setVolver(true))
              .catch(e => console.log(e))    
            
            localStorage.removeItem("guestName")
            localStorage.removeItem("emailGuest")
           
        }

        
        localStorage.removeItem("productos")
    }, [])

    return (
        <Fragment>
            <div className="compraFinalizada-container"> 
                <div>!GRACIAS POR COMPRAR EN HOME STORE MARKET¡</div>    
                <div id="little-space">SU FACTURA ESTA EN El EMAIL</div>
                <div id="espacio-mobile"> Cualquier consulta comuniquese con nosotros </div> 
                {puedeVolver && <input  type="button" 
                                        value="Volver al inicio"
                                        className="volver-home"
                                        onClick={() => props.history.push("/")}></input>}
            </div>
        </Fragment>
    );
    
}