import React from 'react'
import App from './App'
import Golosinas from './Golosinas'
import { BrowserRouter, Route, Switch} from 'react-router-dom'
import CarroContainer from './Carritos/CarritoContainer'
import ResultadoBusqueda from '../components/ResultadoBusqueda.js'
import Factura from '../components/Factura.js'

export default function Router(){
    return(
        <BrowserRouter>
            <Switch>
                <Route exact path="/" component={App}/>
                <Route exact path="/Carrito" component={CarroContainer} />
                <Route exact path="/Golosinas" component={Golosinas}></Route>
                <Route exact path="/Factura" component={Factura}></Route>
                <Route exact path="/ResultadoBusqueda" component={ResultadoBusqueda}></Route>
            </Switch>
        </BrowserRouter>
    )
}