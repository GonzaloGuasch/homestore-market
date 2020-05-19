import React from 'react'
import App from './App'
import Golosinas from './Golosinas'
import { BrowserRouter, Route, Switch} from 'react-router-dom'
import Carrito from './Carritos/CarritoVacio'
import CarroContainer from './Carritos/CarritoContainer'

export default function Router(){
    return(
        <BrowserRouter>
            <Switch>
                <Route exact path="/" component={App}/>
                <Route exact path="/Carrito" component={CarroContainer} />
                <Route exact path="/Golosinas" component={Golosinas}></Route>
            </Switch>
        </BrowserRouter>
    )
}