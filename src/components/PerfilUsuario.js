import React, { Fragment } from 'react'
import Header from '../components/Header'
import BarraBusqueda from '../components/BarraBusqueda'
import axios from 'axios'
import '../css/PerfilUsuario.css'
import UnPedido from '../components/UnPedido.js'

export default class PerfilUsuario extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            pedidos: []
        }
        this.setTearPedidos = this.setTearPedidos.bind(this)
    }
    componentDidMount(){
        axios.get('http://localhost:8080/Usuarios/PedidosDe/' + JSON.parse(localStorage.getItem("usuario")).email)
        .then(res => this.setTearPedidos(res.data))
    }
    setTearPedidos(pedidos){
        this.setState({
            pedidos: pedidos
        })
    }
    render() {
        let oldPedidos = this.state.pedidos.map((aPedido, i) => <UnPedido info={aPedido} historial={this.props.history}/>)
        return (
            <Fragment>
                <Header></Header>
                <BarraBusqueda></BarraBusqueda>
                <div className="perfil-usuario-container">
                    <div className="username">{JSON.parse(localStorage.getItem("usuario")).username}</div>
                    <div className="email-user-profile">MAIL: {JSON.parse(localStorage.getItem("usuario")).email}</div>
                    <div className="email-user-profile">PEDIDOS ANTIGUOS:</div>  
                    <div className="pedidos-viejos">
                        <div className="aviso">Puede repetir sus pedidos antiguos y ademas</div>
                        <div className="aviso" id="aviso">cambiar la cantidad que desea comprar</div>
                            {oldPedidos}
                    </div>
                </div>
            </Fragment>
        );
    }
    
}