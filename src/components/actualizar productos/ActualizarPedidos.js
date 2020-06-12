import React, { Fragment } from 'react'
import Reader from '../Excel_reader/Reader'

export default class ActualizarProductos extends React.Component{
    constructor(props) {
        super(props);
       
    }

    render() {
        return (
            <Fragment>
             {this.props.location.state.isLog !== undefined ? <Reader/> : 'No tenes permisos de edicion'}
            </Fragment>
        );
    }
    
}