import React, { Fragment } from 'react'
import Header from '../components/Header'
import BarraBusqueda from '../components/BarraBusqueda'

export default class PerfilUsuario extends React.Component{
    constructor(props) {
        super(props);
        
    }

    render() {
        return (
            <Fragment>
                <Header></Header>
                <BarraBusqueda></BarraBusqueda>

                pedidos viejos
            </Fragment>
        );
    }
    
}