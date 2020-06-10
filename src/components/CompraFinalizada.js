import React, { useState, useEffect, Fragment }  from 'react'
import axios from 'axios'
import '../css/CompraFinalizada.css'


export default function CompraFinalizada(props){

    useEffect(() => {
        let usuario = JSON.parse(localStorage.getItem("usuario"))
        Object.keys(localStorage).map((unaKey, i) => { if(!isNaN(unaKey)){localStorage.removeItem(unaKey)}})
        axios.get(`http://localhost:8080/Mail/${usuario.email}/${100}/${usuario.username}`).then(res => console.log(res))
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