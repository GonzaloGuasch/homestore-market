import React, { Fragment } from 'react';
import '../css/App.css';
import Header from '../components/Header'
import Footer from '../components/Footer.js'
import Carrusel from '../components/Carrusel'
import BarraBusqueda from '../components/BarraBusqueda'
import Categoria from '../components/Categoria'
import golosina from '../images/golosina.jpg'

export default class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {}
  }
  render(){
  return (
    <Fragment>     
       <Header></Header>
       <BarraBusqueda></BarraBusqueda>
       <Carrusel></Carrusel>
       <div className="categorias-de-app">
       <Categoria categoria={"Golosinas"} imagen={golosina} history ={this.props.history}/>
       <Categoria categoria={"alimentos"}/>
       <Categoria categoria={"Golosinas"}/>
       <Categoria categoria={"alimentos"}/>
       </div>
       <Footer></Footer>
      
    </Fragment>

  )};
}


