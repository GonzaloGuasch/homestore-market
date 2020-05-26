import React from 'react'

export default class ResultadoBusqueda extends React.Component{
    constructor(props, context) {
        super(props, context);
    }

    render() {
        return (
            <div>
               AAA
               {console.log(this.props.state)}
            </div>
        );
    }
    
}