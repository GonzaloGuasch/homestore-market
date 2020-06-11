import React, { Fragment, useEffect, useState } from 'react'
import Header from '../Header'
import BarraBusqueda from '../BarraBusqueda'
import '../../css/FacturaConInfo.css'

export default function FacturaConInfo(props){

    const [valorTotal, setearValor] = useState(0)
    const [usuarioFacturaInfo, setearInfoFactura] = useState({
                                                            direccion: '',
                                                            telefono: '',
                                                            codigoPostal: '',
                                                            observaciones: '',
                                                            comentarios: ''
                                                            })

    useEffect(() => {
        let informacionFactura = JSON.parse(localStorage.getItem("usuario")).informacionEnFactura
        setearValor(props.valorTotal)
        setearInfoFactura({
            direccion: informacionFactura.direccion,
            telefono: informacionFactura.telefono,
            codigoPostal: informacionFactura.codigoPostal,
            observaciones: informacionFactura.observaciones,
            comentarios: informacionFactura.comentarios
        })
    }, [])
    let productos
    
    return(
        <Fragment>
            <Header></Header>
            <BarraBusqueda></BarraBusqueda>
            <div className="finalizar-compra">
                    FINALIZAR COMPRA
            </div>
            <div className="info-registrada">
                <div>DIRECCION REGISTRADA: {usuarioFacturaInfo.direccion}</div>
                <div>TELEFONO REGISTRADO: {usuarioFacturaInfo.telefono}</div>
                <div>INFORMACION DE FACTURA</div>
                <div>valor total: ${valorTotal}</div>
                <input  type="button" value="FINALIZAR COMPRA" className="finalizar-compra-button" />
                <input type="button" value="CALCULAR ENVIO" className="calcular-envio"></input>
            </div>
           
            
        </Fragment>
    );
}