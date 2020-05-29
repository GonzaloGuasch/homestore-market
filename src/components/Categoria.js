import React from 'react'
import '../css/Categoria.css'

export default class Categoria extends React.Component{
    constructor(props){
        super(props)
        this.state = {};
        this.sentTo = this.sentTo.bind(this);
    }
    sentTo(){
        this.props.history.push({
            pathname: '/Categorias',
            state: {nombreCategoria: this.props.categoria}
        })
    }
    render(){
        return(
            <div className="categoria-container">
               {this.props.categoria}
            <div>
                <input type="button" value="VER MÁS"  className="ver-mas-button" onClick={this.sentTo}/>
                </div>
            </div>
        )
    }
}