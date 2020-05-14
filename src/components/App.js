import React, { Fragment } from 'react';
import '../css/App.css';
import Header from '../components/Header'
import Footer from '../components/Footer.js'
import Carrusel from '../components/Carrusel'


function App() {
  return (
    <Fragment>     
       <Header></Header>
       <div className="category-container">
        <ul className="list-container">
          <li><a href="">Inicio</a></li>
          <li><a href="">Alimentos</a></li>
          <li><a href="">Bebidas</a></li>
          <li><a href="">Chocolates</a></li>
          <li><a href="">Golosina</a></li>
          <li><a href="">Galletas</a></li>
          <li><a href="">Snacks</a></li>
          <li><a href="">Especias</a></li>
          <li><a href="">Novedades</a></li>
        </ul> 
       </div>
       <Carrusel></Carrusel>

       <Footer></Footer>
    </Fragment>

  );
}

export default App;
