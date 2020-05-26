import React, { Fragment } from 'react'
import Header from '../components/Header'
import '../css/Golosinas.css'
import axios from 'axios'
import BarraBusqueda from './BarraBusqueda'
import UnProducto from './UnProducto.js'


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
       const golosinas = elementos.map((unElemento, i) => <UnProducto info={unElemento}/>);
       const longitud = golosinas.length;
        this.setState({
            golosinas: golosinas,
            resultado: longitud
        })
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
                [1][2][3][4][5]
            </div>
              

        
       </Fragment>
    )}
}