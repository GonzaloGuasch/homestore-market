import React, { Fragment } from 'react'
import Reader from '../components/Excel_reader/Reader'

export default class ActualizarProductos extends React.Component{
    constructor(props) {
        super(props);
        
    }

    render() {
        return (
            <Fragment>
              <Reader></Reader>
            </Fragment>
        );
    }
    
}