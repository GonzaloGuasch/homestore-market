import React from 'react'
import '../css/Categoria.css'
import golosina from '../images/golosina.jpg'


export default class Categoria extends React.Component{
    constructor(props){
        super(props)
        this.state = {};
        this.sentTo = this.sentTo.bind(this);
    }
    sentTo(){
        const path = '/' + this.props.categoria
        this.props.history.push(path)
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