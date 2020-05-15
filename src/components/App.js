import React, { Fragment } from 'react';
import '../css/App.css';
import Header from '../components/Header'
import Footer from '../components/Footer.js'
import Carrusel from '../components/Carrusel'
import BarraBusqueda from '../components/BarraBusqueda'


function App() {
  return (
    <Fragment>     
       <Header></Header>
       <BarraBusqueda></BarraBusqueda>
       <Carrusel></Carrusel>
       <Footer></Footer>
    </Fragment>

  );
}

export default App;
