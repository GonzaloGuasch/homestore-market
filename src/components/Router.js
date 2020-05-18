import React from 'react'
import App from './App'
import Golosinas from './Golosinas'
import { BrowserRouter, Route, Switch} from 'react-router-dom'
import Carrito from './Carritos/CarritoVacio'

export default function Router(){
    return(
        <BrowserRouter>
            <Switch>
                <Route exact path="/" component={App}/>
                <Route exact path="/Carrito" component={Carrito} />
                <Route exact path="/Golosinas" component={Golosinas}></Route>
            </Switch>
        </BrowserRouter>
    )
}