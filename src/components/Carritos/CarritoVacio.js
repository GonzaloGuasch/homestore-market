import React from 'react'
import Header from '../Header'
import BarraBusqueda from '../BarraBusqueda'
import '../../css/Carrito.css'

export default class Carrito extends React.Component{
    constructor(props) {
        super(props);
        this.state={
            valor: 0,
        }
        this.volverAInicio = this.volverAInicio.bind(this)
    }
    volverAInicio(){
      this.props.history.push("/")
    }

    render() {
        return (
            <div>
               <Header></Header>
               <BarraBusqueda></BarraBusqueda>
               <div className="tittle-carrito">
                   CARRITO
               </div>
               <div className="display-mensaje-carrito-vacio">
                   Tu carrito esta vacio 
                   
               </div>
               <div className="seguir-comprando-button-div">
               <input type="button" 
               value="Volver a tienda" 
               className="seguir-comprando-button-input"
               onClick={this.volverAInicio}/>
               </div>
            </div>
        );
    }
    
}