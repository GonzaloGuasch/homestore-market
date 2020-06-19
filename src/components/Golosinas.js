import React, { Fragment } from 'react'
import Header from '../components/Header'
import '../css/Golosinas.css'
import axios from 'axios'
import BarraBusqueda from './BarraBusqueda'
import UnProducto from './UnProducto.js'
import Boton from '../components/WppButton'
import ErrorWindow from '../components/Error/ErrorWindow.js'

export default class Golosinas extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            golosinas: [],
            ultimaPaginaVistida: 0,
            errorOcurrr: false
        }
        this.montarProductos = this.montarProductos.bind(this)
        this.cargarProductos = this.cargarProductos.bind(this)
        this.cargarProductoDePaginaAnterior = this.cargarProductoDePaginaAnterior.bind(this)
        this.cargarProductoDePaginaSiguiente = this.cargarProductoDePaginaSiguiente.bind(this)
        this.handleError = this.handleError.bind(this)
    }
    componentDidMount(){
        //el cero es el numero de página
        axios.get('http://localhost:8080/Producto/TraerDeRubro/'+ this.props.location.state.nombreCategoria + '/' + 0)
                                                        .then(res => this.montarProductos(res.data))
                                                        .catch(e => this.handleError())

        //Una funcion que vea el la longitud de los productos de esta categoria,
        //asi se cuantos botones de paginas agregao abajo
    }
    handleError(){
        this.setState({
            errorOcurrr: true
        })
    }
    montarProductos(elementos){
        this.setState({
            golosinas: []
        })
       const golosinas = elementos.map((unElemento, i) => <UnProducto info={unElemento}/>);
       this.setState({
        golosinas: golosinas
    })
    }
   cargarProductos(numeroDePagina){
    axios.get('http://localhost:8080/Producto/TraerDeRubro/'+ this.props.location.state.nombreCategoria + '/' + numeroDePagina * 8).then(res => this.montarProductos(res.data))
    this.setState({
        ultimaPaginaVistida: numeroDePagina
    })
   }

   cargarProductoDePaginaAnterior(){
        if(this.state.ultimaPaginaVistida > 0){
            axios.get('http://localhost:8080/Producto/TraerDeRubro/'+ this.props.location.state.nombreCategoria + '/' + (this.state.ultimaPaginaVistida - 1) * 8).then(res => this.montarProductos(res.data))
            this.setState({
                ultimaPaginaVistida: this.state.ultimaPaginaVistida - 1
            })
        }   
    }
   cargarProductoDePaginaSiguiente(){
        if(this.state.ultimaPaginaVistida < 3){
            axios.get('http://localhost:8080/Producto/TraerDeRubro/'+ this.props.location.state.nombreCategoria + '/' + (this.state.ultimaPaginaVistida + 1) * 8).then(res => this.montarProductos(res.data))
            this.setState({
                ultimaPaginaVistida: this.state.ultimaPaginaVistida + 1
            })
        }
    }

   render(){
        const productos = []
        this.state.golosinas.forEach((unGolosina, index) => {
            productos.push(<div className="producto">{unGolosina}</div>)
        })
        
    return(
       <Fragment>
        <Header></Header>
        <BarraBusqueda></BarraBusqueda>
        <div className="header-container">
        <div className="path">
            <a href={"/"}>Inicio</a> / {this.props.location.state.nombreCategoria}
        
        </div>
        <div className="Resultados">
            Resultados: {productos.length}
        </div>
        </div>
         <div className="galles">
         {this.state.errorOcurrr && <div className="error-no-productos">Hubo un problema, vuelva a intentarlo mas tarde</div>}
            {productos}
         </div>
            <div className="paginador">
                <input type="button" value="<" className="button-paginado" onClick={this.cargarProductoDePaginaAnterior}/> 
                <input type="button" value="1" className="button-paginado" onClick={e => this.cargarProductos(1)}/>
                <input type="button" value="2" className="button-paginado" onClick={e => this.cargarProductos(2)}/>
                <input type="button" value="3" className="button-paginado" onClick={e => this.cargarProductos(3)}/>
                <input type="button" value=">" className="button-paginado" onClick={this.cargarProductoDePaginaSiguiente}/>
         </div>

            <Boton></Boton>
       </Fragment>
    )}
}