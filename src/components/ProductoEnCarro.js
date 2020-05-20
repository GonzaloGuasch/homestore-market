import React from 'react'

export default class ProductoEnCarro extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            info: this.props.info
        }
    }

    render() {
        return (
            <div>
                {console.log(this.props.id)}
            </div>
        );
    }
}