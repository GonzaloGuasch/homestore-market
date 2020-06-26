import React, { Fragment } from 'react';
import '../css/App.css';
import Header from '../components/Header'
import Footer from '../components/Footer.js'
import Carrusel from '../components/Carrusel'
import BarraBusqueda from '../components/BarraBusqueda'
import Categoria from '../components/Categoria'
import golosina from '../images/golosina.jpg'
import golosina2 from '../images/golosina4.jpg'
import Boton from '../components/WppButton'

export default class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {}
  }
  render(){
  return (
    <Fragment>     
       <Header history ={this.props.history}></Header>
       <BarraBusqueda></BarraBusqueda>
       <Carrusel></Carrusel>
       <div className="categorias-de-app">
       <Categoria categoria={"ALIMENTOS"} imagen={golosina} history ={this.props.history}/>
       <Categoria categoria={"BEBIDAS"}  imagen={golosina2} history ={this.props.history}/>
       <Categoria categoria={"CHOCOLATES"}  history ={this.props.history}/>
       <Categoria categoria={"ESPECIAS"}  history ={this.props.history}/>
       <Categoria categoria={"GALLETAS Y CEREALES"}  history ={this.props.history}/>
       <Categoria categoria={"GOLOSINAS"}  history ={this.props.history}/>
       <Categoria categoria={"INDUSTRIALES"}  history ={this.props.history}/>
       <Categoria categoria={"REPOSTERIA"}  history ={this.props.history}/>
       
       <Boton></Boton>
       </div>
       <Footer></Footer>
      
    </Fragment>

  )};
}


