import React from 'react'
import '../css/BarraBusqueda.css'

export default function BarraBusqueda(){

    return(
        <div className="category-container">
        <ul className="list-container">
          <li><a href="/">Inicio</a></li>
          <li><a href="">Alimentos</a></li>
          <li><a href="">Bebidas</a></li>
          <li><a href="">Chocolates</a></li>
          <li><a href="/Golosinas">Golosinas</a></li>
          <li><a href="">Galletas</a></li>
          <li><a href="">Snacks</a></li>
          <li><a href="">Especias</a></li>
        </ul> 
       </div>
    )
}