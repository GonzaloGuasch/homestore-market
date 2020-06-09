import React from 'react'
import App from './App'
import Golosinas from './Golosinas'
import { BrowserRouter, Route, Switch} from 'react-router-dom'
import CarroContainer from './Carritos/CarritoContainer'
import ResultadoBusqueda from '../components/ResultadoBusqueda.js'
import Factura from '../components/Factura.js'
import LogInRegister from '../components/LogInRegister.js'
import PerfilUsuario from '../components/PerfilUsuario.js'
import ActualizarProductos from '../components/ActualizarPedidos.js'
import Actualizar from '../components/Actualizar.js'

export default function Router(){
    return(
        <BrowserRouter>
            <Switch>
                <Route exact path="/" component={App}/>
                <Route exact path="/Carrito" component={CarroContainer} />
                <Route exact path="/Categorias" component={Golosinas}></Route>
                <Route exact path="/Factura" component={Factura}></Route>
                <Route exact path="/ResultadoBusqueda" component={ResultadoBusqueda}></Route>
                <Route exact path="/LogIn-Register" component={LogInRegister}></Route>
                <Route exact path="/Pedidos" component={PerfilUsuario}></Route>
                <Route exact path="/ActualizarProductos" component={ActualizarProductos}></Route>
                <Route exact path="/Actualizar" component={Actualizar}></Route>
                
            </Switch>
        </BrowserRouter>
    )
}