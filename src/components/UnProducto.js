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
        this.estaProductoEnCarro = this.estaProductoEnCarro.bind(this)
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
    estaProductoEnCarro(productosEnCarro){
        let estaEnCarro = false
        productosEnCarro.map((unProductoEnCarro, i) => {estaEnCarro = estaEnCarro || unProductoEnCarro.producto === this.state.info.nombre })
           return estaEnCarro
    }
    updetearCarrito() {
        if (localStorage.getItem("productos")) { 
            let productosEnCarro = JSON.parse(localStorage.getItem("productos"))
            //Agrego si ya esta
            if(this.estaProductoEnCarro(productosEnCarro)){
                productosEnCarro.map((unProductoEnCarro, i) => {
                    if(unProductoEnCarro.producto === this.state.info.nombre){
                        unProductoEnCarro.cantidad = unProductoEnCarro.cantidad + this.state.value
                    }
                })
            }else{
                //Agrego si falta
                let producto = [{   'producto': this.state.info.nombre,
                                    'id': this.state.info.id,
                                    'precio': this.state.info.precio,
                                    'cantidad': this.state.value}]
                    productosEnCarro = productosEnCarro.concat(producto)      
            }
          
            localStorage.setItem("productos", JSON.stringify(productosEnCarro))
            
        }
        else {
            //Agrego el primer producto
            let producto = [{'producto': this.state.info.nombre,
                            'id': this.state.info.id,
                            'precio': this.state.info.precio,
                            'cantidad': this.state.value}]
            localStorage.setItem("productos", JSON.stringify(producto)  )
        }
    }

    add(){
      if(this.state.value < this.state.info.stock){
        this.setState({
            value: this.state.value + 1,
            botonValue: "AGREGAR",
            tieneStock: true
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
        if(!this.state.tieneStock){
            this.setState({
                botonValue: "AGREGAR",
                tieneStock: true 
            })
            return 
        }
        if(this.state.value < this.state.info.stock){
            this.setState({
                botonValue: "AGREGAR",
                tieneStock: true
            })
        }
        this.setState({
            value: this.state.value - 1,
            botonValue: "AGREGAR",
            tieneStock: true
        })
    }
    render(){
        return(
            <div className="info-producto-container">
                <div className="image-button-container">
                    <img src={`data:image/jpeg;base64,${this.state.info.imagenProducto}`}
                         className="image-producto"
                         alt="producto-image" />
                </div>
                <div className="descripcion-container">
                 Descripcion
                </div>
                <div className="nombre-container">
                {this.state.info.nombre}   
                </div>
                <div>
                    {this.state.info.stock > 0? 'Hay stock' : 'Sin stock'}
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