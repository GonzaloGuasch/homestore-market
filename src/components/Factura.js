import React from 'react'
import Header from '../components/Header'
import NavBar from '../components/BarraBusqueda'
import '../css/FinalizarCompra.css'
import Boton from '../components/WppButton'

export default class Factura extends React.Component{
    constructor(props) {
        super(props);
        
    }

    render() {
        return (
            <div>
                <Header></Header>
                <NavBar></NavBar>
                <div className="finalizar-compra">
                    FINALIZAR COMPRA
                </div>
                <div className="detalles-compra">
                    Detalles de facturación
                </div>
                 <div className="nombre-apellido-container">
                    <div className="box-title">
                        <div className="nombre-apellido">Nombre </div> 
                        <div><input type="text" className="input"/></div>
                    </div>
                    <div>
                        <div className="nombre-apellido">Apellidos </div> 
                        <div><input type="text" className="input"/></div>
                    </div>   
                </div>
                <div className="nombre-apellido-container">
                    <div className="box-tittle"></div>

                </div>
                    <div className="box-email">
                        <div>
                            <div className="email">Email </div> 
                            <div><input type="text" className="input"/></div>
                        </div>
                        <div className="inputs">
                            <div className="email">Codigo Postal</div>
                            <div><input type="text" className="input"/></div>
                        </div>
                    </div>
                    <div className="box-email">
                            <div className="direccion">
                                <div className="email">Direccion </div> 
                                <div><input type="text" className="input"/></div>
                            </div>
                            <div className="aclaracion">
                            <div className="email">Aclaracion</div>
                            <div><input type="text" className="input" placeholder="Piso, Dpto"/></div>
                        </div>
                    </div>
                   
                    <input type="button" value="FINALIZAR COMPRA" className="finalizar-compra-button"/>
                <Boton></Boton>
                </div>
                
        );
    }
    
}