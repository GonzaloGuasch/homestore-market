import React from 'react'
import '../css/UnProducto.css'
import turro from '../images/4013.JPG'

export default class UnProducto extends React.Component{
    constructor(props){
        super(props)
        this.state={
            value: 0,
            info: props.info,
            botonValue: 'AGREGAR',
            tieneStock: true
        }
        this.add = this.add.bind(this)
        this.remove = this.remove.bind(this)
        this.agregarACarrito = this.agregarACarrito.bind(this)
        this.updetearCarrito = this.updetearCarrito.bind(this)
    }

    agregarACarrito(){
        if(this.state.value === 0 && this.state.tieneStock){
            alert("No selecionaste la cantidad que querias!")
        }
        if(this.state.tieneStock){
            this.updetearCarrito()
            this.setState({
                value: 0
            })
            alert("Se agrego tu producto al carrito!")
            return
        }
        alert("No queda stock para ese producto")
    }
    updetearCarrito() {
        if (localStorage.getItem(this.state.info.id)) { 
            //Agrego si ya esta
            let valoresDeProducto = localStorage.getItem(this.state.info.id)
            valoresDeProducto = parseInt(valoresDeProducto) + parseInt(this.state.value)
            localStorage.setItem(this.state.info.id, valoresDeProducto)
        }
        else {
            //Agrego si falta
            localStorage.setItem(this.state.info.id, this.state.value)
        }
    }

    add(){
      if(this.state.value < this.state.info.stock){
        this.setState({
            value: this.state.value + 1 
        })
      }else{
        this.setState({
            botonValue: "SIN STOCK",
            tieneStock: false
        })
      }
    }
    remove(){
        if(this.state.value === 0){return}
        this.setState({
            value: this.state.value - 1 
        })
    }
    render(){
        return(
            <div className="info-producto-container">
                <div className="image-button-container">
                    <img src={turro} className="image-producto" alt="producto-image"/>
                </div>
                <div className="descripcion-container">
                 Descripcion
                </div>
                <div className="nombre-container">
                {this.state.info.nombre}   
                </div>
                <div className="valor-container">
                    ${this.state.info.precio}
                </div>
                <div className="contador-container">
                <input type="button" value="+" className="adder" onClick={this.add}></input>       
                <div className="value-container">
                {this.state.value}
                </div>
                <input type="button" value="-" className="remover" onClick={this.remove}></input> 
                <div className="contador-boton-container">
                </div>
                <input  type="button" 
                        value={this.state.botonValue} 
                        className={this.state.tieneStock ? "Agregar-boton" : "No-stock"}
                        onClick={this.agregarACarrito}/>
                </div>
            </div>
        )
    }
}