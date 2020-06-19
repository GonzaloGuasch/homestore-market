import React, { Fragment, useEffect, useState } from 'react'
import Header from '../Header'
import Loader from 'react-loader-spinner';
import BarraBusqueda from '../BarraBusqueda'
import '../../css/FacturaConInfo.css'
import axios from 'axios'

export default function FacturaConInfo(props){

    const [valorTotal, setearValor] = useState(0)
    const [loading, setearLoader] = useState(false)
    const [valorEnvio, setearValorEnvio] = useState(0)
    const [direccionRegistrada, setearDireccion] = useState('')
    const [telefonoRegistrado, setearTelefono] = useState('')
    const [codigoPostalRegistrado, setearCodigoPostal] = useState('')
    const [observacionesRegistradas, setearObservaciones] = useState('')
    const [comentarios, setearComentarios] = useState('')
    const [nombreApellido, setearNombre] = useState('')

    useEffect(() => {
        let informacionFactura = JSON.parse(localStorage.getItem("usuario")).informacionEnFactura
        console.log(informacionFactura)
        setearValor(props.valorTotal)
        setearNombre(informacionFactura.nombre + ' ' + informacionFactura.apellido)
        setearDireccion(informacionFactura.direccion)
        setearTelefono(informacionFactura.telefono)
        setearCodigoPostal(informacionFactura.codigoPostal)
        setearObservaciones(informacionFactura.observaciones)
        setearComentarios(informacionFactura.comentarios)
        
    }, [])
    
    function finalizarCompra(){
        setearLoader(true)
        axios({
            method: 'post',
            url: 'http://localhost:8080/MP/PagoDeProducto',
            data: 
            {
                productos: JSON.parse(localStorage.getItem("productos")),
                nombreUsuario: JSON.parse(localStorage.getItem("usuario")).username
            }
        })  .then(res => handleMercadoPago(res.data))
            .catch(e => console.log(e))
    }

    function handleMercadoPago(urlMercadoPago){
            window.location.replace(urlMercadoPago)
    }
    
    function calcularEnvio(){
        axios.get('https://api.andreani.com/v1/tarifas?cpDestino=' + codigoPostalRegistrado + '&contrato=400006710&sucursalOrigen=1878&bultos[0][valorDeclarado]=10&bultos[0][volumen]=10&bultos[0][kilos]=2.5')
       .then(res => setearValorEnvio(res.data.tarifaSinIva.total))
    }
    return(
        <Fragment>
            <Header></Header>
            <BarraBusqueda></BarraBusqueda>
            <div className="finalizar-compra">
                    FINALIZAR COMPRA
            </div>
            <br />
            <div className="info-registrada">
                <div id="informacion-r">INFORMACION REGISTRADA, modifique los datos que hayan cambiado</div>
                <div>DIRECCION REGISTRADA: 
                    <input  type="text"
                            value={direccionRegistrada} 
                            className="input-box"
                            onChange={e => setearDireccion(e.target.value)}></input>
                </div>
                <div>TELEFONO REGISTRADO: 
                    <input  type="text"
                            value={telefonoRegistrado} 
                            className="input-box"
                            onChange={e => setearTelefono(e.target.value)}></input>
                </div>
                <div>NOMBRE Y APELLIDO: 
                    <input  type="text"
                            value={nombreApellido}
                            className="input-box"
                            onChange={e => setearNombre(e.target.value)}></input>
                </div>
                <div>CODIGO POSTAL:
                     <input type="text"
                            value={codigoPostalRegistrado}
                            className="input-box"
                            onChange={e => setearCodigoPostal(e.target.value)}></input>
                </div>
                <div>OBSERVACIONES: 
                    <input  type="text" 
                            value={observacionesRegistradas}
                            className="input-box"
                            onChange={e => setearObservaciones(e.target.value)}></input>
                </div>
                <div>COMENTARIOS:
                     <input type="text" 
                            value={comentarios} 
                            className="input-box"
                            onChange={e => setearComentarios(e.target.value)}></input>
                </div>
                
                <br />
                <div>INFORMACION DE FACTURA:</div>
                <div>Valor total: ${parseInt(valorTotal) + parseInt(valorEnvio)}</div>
    <           div>Valor envio: {valorEnvio === 0? 'No calculaste el valor': valorEnvio}</div>
                {loading ? 
                    <Loader type="Oval" color="white" height={25} width={100} className="spinner-finalizar-compra"/> :
                    <input  type="button" value="FINALIZAR COMPRA" className="finalizar-compra-button" onClick={finalizarCompra} />}
                <input  type="button" 
                        value="CALCULAR ENVIO" 
                        className="calcular-envio"
                        onClick={calcularEnvio}></input>
            </div>
           
            
        </Fragment>
    );
}