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
        //TO DO sacar el endpoint de todos y poner el de la categoria que pasamos por props 
        //asi tengo todas las categorias y uso el mismo componente
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
            <a href={"/"}>Inicio</a> / Golosinas
        </div>
        <div className="Resultados">
            Resultados: {this.state.resultado}
        </div>
        </div>
        <div className="header-container">       
            <div className="categorias-de-categoria">CATEGORIAS</div>
        <div className="todos-los-productos">
        {this.state.golosinas}
        </div>
               </div>

        
       </Fragment>
    )}
}