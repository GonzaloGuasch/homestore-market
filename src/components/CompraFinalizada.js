import React, { useState, useEffect, Fragment }  from 'react'
import axios from 'axios'
import '../css/CompraFinalizada.css'


export default function CompraFinalizada(props){

    useEffect(() => {
        let usuario = JSON.parse(localStorage.getItem("usuario"))
      
        axios.get(`http://localhost:8080/Mail/${usuario.email}/${100}/${usuario.username}`).then(res => console.log(res))
        if(JSON.parse(localStorage.getItem("usuario")).username){
           
            axios.post('http://localhost:8080/Usuarios/GuardarFactura', 
            {
                productos: localStorage.getItem("productos"),
                nombreUsuario: JSON.parse(localStorage.getItem("usuario")).username 
            })
            .then(res => console.log(res))
            .catch(e => console.log(e))
        }else{
            axios({
                method: 'post',
                url: 'http://localhost:8080/Producto/decrementarStock',
                data: {
                    'productos': localStorage.getItem("productos"),
                }
             })
            .then(res => alert("En tu mail se encuentra la factura! Gracias por la compra"))
            .catch(e => console.log(e))
        }

        
        localStorage.removeItem("productos")
    })

    return (
        <Fragment>
            <div className="compraFinalizada-container"> 
                <div>! GRACIAS POR COMPRAR EN HOME STORE MARKET !</div>    
                <div id="little-space">SU FACTURA ESTA EN SU EMAIL</div>
                <input  type="button" 
                        value="Volver al inicio"
                        className="volver-home"
                        onClick={() => props.history.push("/")}></input>
            </div>
        </Fragment>
    );
    
}