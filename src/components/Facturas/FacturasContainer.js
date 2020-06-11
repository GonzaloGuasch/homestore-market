import React from 'react'
import FacturaSinInfo from './FacturaSinInfo'
import FacturaConInfo from './FacturaConInfo'
export default function FacturaContainer(props){

    let factura;
    if( localStorage.getItem("usuario") !== null && 
        JSON.parse(localStorage.getItem("usuario").tieneFactura === null)){
         
            factura = <FacturaSinInfo  productos={props.location.state.productos} 
                            valorTotal={props.location.state.valorTotal}/>
    }else{
        factura = <FacturaConInfo   productos={props.location.state.productos} 
                                    valorTotal={props.location.state.valorTotal}/>  
    }

        return (     
            <div>
                {factura}
            </div>
        );
    
}