import React from 'react'
import '../css/UnProducto.css'
import turro from '../images/4013.JPG'
import axios from 'axios'

export default class UnProducto extends React.Component{
    constructor(props){
        super(props)
        this.state={
            value: 0,
            info: props.info
        }
        this.add = this.add.bind(this)
        this.remove = this.remove.bind(this)
        this.agregarACarrito = this.agregarACarrito.bind(this)
        this.mostrarResultado = this.mostrarResultado.bind(this)
        this.mostrarError = this.mostrarError.bind(this)
    }
    mostrarResultado(res){
        alert("Producto agregado al carrito!")
        this.setState({
            value: 0
        })

        console.log(this.state.info)
    }
    mostrarError(res){
        alert("No se pudo agregar, intente nuevamente")
    }
    agregarACarrito(){
        if(this.state.value === 0){
            alert("No elegiste la cantidad que queres :)")
        }else{
            axios.post('http://localhost:8080/ListaProducto/AgregarALista', {
                'idProducto': this.state.info.id,
                'cantidad': this.state.value
            }).then(res => this.mostrarResultado(res))
              .catch(res => this.mostrarError(res))
        }

        localStorage.setItem('valor', this.state.value);
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
                <img src={turro} height="50"/>
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