import React, { Fragment } from 'react'
import Header from '../components/Header'
import '../css/Golosinas.css'
import axios from 'axios'
import BarraBusqueda from './BarraBusqueda'
import UnProducto from './UnProducto.js'
import Boton from '../components/WppButton'

export default class Golosinas extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            golosinas: [],
            resultado: 0,
            ultimaPaginaVistida: 0
        }
        this.montarProductos = this.montarProductos.bind(this)
        this.cargarProductos = this.cargarProductos.bind(this)
        this.cargarProductoDePaginaAnterior = this.cargarProductoDePaginaAnterior.bind(this)
        this.cargarProductoDePaginaSiguiente = this.cargarProductoDePaginaSiguiente.bind(this)
    }
    componentDidMount(){
        axios.get('http://localhost:8080/Producto/traerTodos/0').then(res => this.montarProductos(res.data))
        //TO DO sacar el endpoint de todos y poner el de la categoria que pasamos por props 
        //asi tengo todas las categorias y uso el mismo component
        //axios.get('http://localhost:8080/Producto/TraerDeRubro/{RUBRO}') => anda ya voh
    }

    montarProductos(elementos){
       const golosinas = elementos.map((unElemento, i) => <UnProducto info={unElemento}/>);
       const longitud = golosinas.length;
        this.setState({
            golosinas: golosinas,
            resultado: longitud
        })
    }
   cargarProductos(numeroDePagina){
    axios.get('http://localhost:8080/Producto/traerTodos/' + numeroDePagina * 9).then(res => this.montarProductos(res.data))
    this.setState({
        ultimaPaginaVistida: numeroDePagina
    })
   }

   cargarProductoDePaginaAnterior(){
    axios.get('http://localhost:8080/Producto/traerTodos/' + (this.state.ultimaPaginaVistida - 1) * 9).then(res => this.montarProductos(res.data))
        if(this.state.ultimaPaginaVistida > 0){
            this.setState({
                ultimaPaginaVistida: this.state.ultimaPaginaVistida - 1
            })
        }   
    }
   cargarProductoDePaginaSiguiente(){
    axios.get('http://localhost:8080/Producto/traerTodos/' + (this.state.ultimaPaginaVistida + 1) * 9).then(res => this.montarProductos(res.data))
        if(this.state.ultimaPaginaVistida < 3){
            this.setState({
                ultimaPaginaVistida: this.state.ultimaPaginaVistida + 1
            })
        }
    }

   render(){
        const golosinasTuplas = []
        this.state.golosinas.forEach((unGolosina, index) => {
            if((index % 3 || index === 0) && index !== 8){
                golosinasTuplas.push(<div className="column">{unGolosina}</div>)
                console.log("columna " + index)
                console.log("columna " + unGolosina)
            }else{
                golosinasTuplas.push(<div className="row">{unGolosina}</div>)
                console.log("fila " + index)
                console.log("fila " + unGolosina)
            }
        });
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
            <div>
            {golosinasTuplas}
            </div>
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