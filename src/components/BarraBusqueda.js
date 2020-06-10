import React from 'react'
import {Link} from 'react-router-dom'
import '../css/BarraBusqueda.css'

export default function BarraBusqueda(){

    const alimentos = `Alimentos`;
    return(
        <div className="category-container">
        <ul className="list-container">
          <li><Link to="/">Inicio</Link></li>
          <li><Link to={"/Categorias"} >Alimentos</Link></li>
          <li><a href="/Categoria">Bebidas</a></li>
          <li><a href="/Categoria">Chocolates</a></li>
          <li><a href="/Categoria">Golosinas</a></li>
          <li><a href="/Categoria">Galletas</a></li>
          <li><a href="/Categoria">Snacks</a></li>
          <li><a href="/Categoria">Especias</a></li>
        </ul> 
       </div>
    )
}