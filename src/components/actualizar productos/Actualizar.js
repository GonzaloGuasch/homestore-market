import React from 'react'
import axios from 'axios'
import '../../css/Actualizar.css'

export default class Actualizar extends React.Component{
    constructor(props) {
        super(props);
        this.state ={
            nombre: '',
            pass: '',
            error: ''
        }
        this.updateNombre = this.updateNombre.bind(this)
        this.upadtePass = this.upadtePass.bind(this)
        this.handleSuperUser = this.handleSuperUser.bind(this)
        this.catchRes = this.catchRes.bind(this)
    }
    updateNombre(e){
        this.setState({
            nombre: e.target.value
        })
    }
    upadtePass(e){
        this.setState({
            pass: e.target.value
        })
    }
    handleSuperUser(){
        axios.get('http://localhost:8080/ActualizarProducto/handleUse/'+ this.state.nombre + '/' + this.state.pass)
        .then(res => this.catchRes(res.data))
    }
    catchRes(res){
        if(res !== 200){
            this.setState({
                error: 'No tenes permisos para entrar'
            })
            return
        }

       this.props.history.push({
            pathname: "/ActualizarProductos",
            state: {isLog: true}
        })
    }
    render() {
        return (
            <div className="logActualizar">
                <div><input type="text" placeholder="nombre" onChange={this.updateNombre}></input></div>
                <div><input type="password" placeholder="contraseña" onChange={this.upadtePass}></input></div>
                <input  type="button"
                        value="Send" 
                        className="button-loging-secret"
                        onClick={this.handleSuperUser}></input>
                        <div>{this.state.error}</div>
            </div>
        );
    }
}