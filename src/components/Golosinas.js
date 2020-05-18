import React, { Fragment } from 'react'
import Header from '../components/Header'
import '../css/Golosinas.css'
import axios from 'axios'
import BarraBusqueda from './BarraBusqueda'
import UnProducto from './UnProducto.js'
import Footer from './Footer'

export default class Golosinas extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            golosinas: [],
            resultado: 0
        }
        this.montarProductos = this.montarProductos.bind(this)
    }
    componentDidMount(){
        axios.get('http://localhost:8080/Producto/traerTodos').then(res => this.montarProductos(res.data))
    }

    montarProductos(elementos){
       const golosinas = elementos.map((unElemento) => <UnProducto info={unElemento}/>);
       const longitud = golosinas.length;
        this.setState({
            golosinas: golosinas,
            resultado: longitud
        })
    }
   
    render(){
    return(
       <Fragment>
        <Header></Header>
        <BarraBusqueda></BarraBusqueda>
        <div className="header-container">
        <div className="path">
            <a href={"/Inicio"}>Inicio</a> / Golosinas
        </div>
        <div className="Resultados">
            Resultados: {this.state.resultado}
        </div>
        </div>
        {this.state.golosinas}
        
       </Fragment>
    )}
}