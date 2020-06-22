import React, { useEffect, Fragment }  from 'react'
import axios from 'axios'
import '../css/CompraFinalizada.css'


export default function CompraFinalizada(props){

    useEffect(() => {
        if(localStorage.getItem("usuario") !== null){
            axios.post('http://localhost:8080/Producto/decrementarStock',
            {
                productos: JSON.parse(localStorage.getItem("productos")),
            })
            .then(res => console.log(res))
            let usuario = JSON.parse(localStorage.getItem("usuario"))
            axios.get(`http://localhost:8080/Mail/EmailUsuario/${usuario.email}/${100}/${usuario.username}`).then(res => console.log(res))
            axios.post('http://localhost:8080/Usuarios/GuardarFactura', 
            {
                productos: JSON.parse(localStorage.getItem("productos")),
                nombreUsuario: usuario.username 
            })
            .then(res => "usuario" + console.log(res))
            .catch(e => console.log(e)) 
            

        }else{
            let emailGuest = localStorage.getItem("emailGuest")
            let guestUsername = localStorage.getItem("guestName")
            
            axios.get(`http://localhost:8080/Mail/EmailGuest/${emailGuest}/${guestUsername}`)
                .then(res => console.log(res))
                .catch(e => console.log(e))    
            
            axios.post('http://localhost:8080/Producto/decrementarStock',
            {
                productos: JSON.parse(localStorage.getItem("productos")),
            })
            .then(res => "guest" + console.log(res))
            .catch(e => console.log(e))

            localStorage.removeItem("guestName")
            localStorage.removeItem("emailGuest")
        }

        
        localStorage.removeItem("productos")
    }, [])

    return (
        <Fragment>
            <div className="compraFinalizada-container"> 
                <div>!GRACIAS POR COMPRAR EN HOME STORE MARKET!</div>    
                <div id="little-space">SU FACTURA ESTA EN El EMAIL</div>
                <input  type="button" 
                        value="Volver al inicio"
                        className="volver-home"
                        onClick={() => props.history.push("/")}></input>
            </div>
        </Fragment>
    );
    
}