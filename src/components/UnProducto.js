import React from 'react'
import '../css/UnProducto.css'
import turro from '../images/4013.JPG'

export default class UnProducto extends React.Component{
    constructor(props){
        super(props)
        this.state={
            value: 0,
            info: props.info,
        }
        this.add = this.add.bind(this)
        this.remove = this.remove.bind(this)
        this.agregarACarrito = this.agregarACarrito.bind(this)
        this.updetearCarrito = this.updetearCarrito.bind(this)

    }
  
    agregarACarrito(){
        if(this.state.value === 0){
            alert("No selecionaste la cantidad que querias!")
        }else{ 
            this.updetearCarrito()
            this.setState({
                value: 0
            })
            alert("Se agrego tu producto al carrito!")
        }
    }
    updetearCarrito() {
        if (localStorage.getItem(this.state.info.id)) {
            let valoresDeProducto = localStorage.getItem(this.state.info.id)
            valoresDeProducto = parseInt(valoresDeProducto) + parseInt(this.state.value)
            localStorage.setItem(this.state.info.id, valoresDeProducto)
            console.log(localStorage.getItem(this.state.info.id))
        }
        else {
            localStorage.setItem(this.state.info.id, this.state.value)
        }
    }

    add(){
        this.setState({
            value: this.state.value + 1 
        })
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
                    <img src={turro} className="image-producto"/>
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
                <input type="button" value="-" className="remover" onClick={this.remove} value="-"></input> 
                <div className="contador-boton-container">
                </div>
                <input  type="button" 
                        value="AGREGAR" 
                        className="Agregar-boton" 
                        onClick={this.agregarACarrito}/>
                </div>
            </div>
        )
    }
}