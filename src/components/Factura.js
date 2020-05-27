import React from 'react'
import Header from '../components/Header'
import NavBar from '../components/BarraBusqueda'
import '../css/FinalizarCompra.css'
import Boton from '../components/WppButton'
import axios from 'axios'

export default class Factura extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            nombre: '',
            Apellido: '',
            pais: '',
            provincia: '',
            localidad: '',
            direccion: '',
            observaciones: '',
            email: '',
            telefono: '',
            comentarios: '',
            codigoPostal: '',
            showError: false,
            errorMessage: 'tusa',
            valorEnvio: 'No calculaste el valor '
        }
        this.updateNombre = this.updateNombre.bind(this)
        this.updateApellido = this.updateApellido.bind(this)
        this.updatePais = this.updatePais.bind(this)
        this.updateProvincia = this.updateProvincia.bind(this)
        this.updateLocalidad = this.updateLocalidad.bind(this)
        this.updateDireccion = this.updateDireccion.bind(this)
        this.updateObservaciones = this.updateObservaciones.bind(this)
        this.updateEmail = this.updateEmail.bind(this)
        this.updateTel = this.updateTel.bind(this)
        this.updateComentario = this.updateComentario.bind(this)
        this.calcularValor = this.calcularValor.bind(this)
        this.updateCodigoPostal = this.updateCodigoPostal.bind(this)
    }
    calcularValor2(){
        axios.defaults.withCredentials = true
        axios('https://api.andreani.com/v1/tarifas?cpDestino=' + this.state.codigoPostal + '&contrato=300006611&sucursalOrigen=AR-B&bultos[0][valorDeclarado]=1200&bultos[0][volumen]=200&bultos[0][kilos]=1.3', {
            method: 'GET',
            headers: {
              'Access-Control-Allow-Origin': '*',
              'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept'
            }
          }).then(response => { console.log(response)
          })
    }
    calcularValor(){
        axios({
            method: 'post',
            url: 'https://www6.oca.com.ar/PlataformaEnvios/Home/ObtenerPrecioEnvio',
            headers: {},
            data: {
                    "peso": "1", 
                    "volumen":"0.001", 
                    "cpOrigen":"1878",
                    "cpDestino":"1878", 
                    "idOperativa":"302969"
                    }
        }).then(res => console.log(res))
    }
    updateCodigoPostal(e){
        this.setState({
            codigoPostal: e.target.value
        })
    }
    updateComentario(e){
        this.setState({
            comentarios: e.target.value
        })
    }
    updateTel(e){
        this.setState({
            telefono: e.target.value
        })
    }
    updateEmail(e) {
        this.setState({
            email: e.target.value
        })
    }
    updateObservaciones(e){
        this.setState({
            observaciones: e.target.value
        })
    }
    updateDireccion(e){
        this.setState({
            direccion: e.target.value
        })
    }
    updateLocalidad(e){
        this.setState({
            localidad: e.target.value
        })
    }
    updateProvincia(e){
        this.setState({
            provincia: e.target.value
        })
    }
    updatePais(e){
        this.setState({
            pais: e.target.value
        })
    }
    updateApellido(e){
        this.setState({
            apellido: e.target.value
        })
    }
    updateNombre(e){
        this.setState({
            nombre: e.target.value
        })
    }

    render() {
        return (
            <div>
                <Header></Header>
                <NavBar></NavBar>
                <div className="finalizar-compra">
                    FINALIZAR COMPRA
                </div>
                <div className="detalles-compra">
                    Detalles de facturación
                </div>
                    <div className="datos-container">
                        <div className="fila-container">
                            <div className="fila-uno-container">
                            <div className="texto-factura-info">Nombre</div>
                            <div><input type="text" className="box-shadow" 
                                        onChange={this.updateNombre} 
                                        value={this.state.nombre}>
                                        </input></div>
                            </div>
                            <div>
                                <div className="texto-factura-info">Apellido</div>
                                <div><input type="text" className="box-shadow"
                                            onChange={this.updateApellido}
                                            value={this.state.apellido}>
                                            </input></div>
                            </div>
                        </div>
                        <div className="fila-container" id="segunda-fila">
                            <div className="fila-uno-container">
                                <div className="texto-factura-info">Pais</div>
                                <div><input type="text" className="box-shadow" 
                                            onChange={this.updatePais}
                                            value={this.state.pais}>
                                    </input></div>
                            </div>
                            <div className="fila-uno-container">
                                <div className="texto-factura-info">Provincia</div>
                                <div><input type="text" className="box-shadow"
                                            onChange={this.updateProvincia}
                                            value={this.state.provincia}>
                                    </input></div>
                            </div>
                            <div>
                                <div className="texto-factura-info">Localidad</div>
                                <div><input type="text" className="box-shadow"
                                            onChange={this.updateLocalidad}
                                            value={this.state.localidad}>
                                                </input></div>
                            </div>
                        
                        </div>
                        <div className="fila-container" id="segunda-fila">
                            <div className="fila-uno-container">
                                <div className="texto-factura-info">Direccion</div>
                                <div><input type="text" className="box-shadow"
                                            onChange={this.updateDireccion}
                                            value={this.state.direccion}
                                            ></input></div>
                            </div>
                            <div>
                                <div className="texto-factura-info">Observaciones</div>
                                <div><input type="text" placeholder="Piso, depto, etc" className="box-shadow"
                                            onChange={this.updateObservaciones}
                                            value={this.state.observaciones}
                                            ></input></div>
                            </div>
                        </div>
                        <div className="fila-container" id="segunda-fila">
                            <div className="fila-uno-container">
                                <div className="texto-factura-info">Email</div>
                                <div><input type="text" className="box-shadow"
                                            onChange={this.updateEmail}
                                            value={this.state.email}>
                                            </input></div>
                            </div>
                            <div>
                                <div className="texto-factura-info">Telefono</div>
                                <div><input type="text" className="box-shadow"
                                            onChange={this.updateTel}
                                            value={this.state.telefono}>
                                            </input></div>
                            </div>
                        </div>
                        <div className="fila-container" id="segunda-fila">
                            <div className="fila-uno-container">
                                <div className="texto-factura-info">Comentarios</div>
                                <div><input type="text" className="box-shadow"
                                            onChange={this.updateComentario}
                                            value={this.state.comentarios}>
                                                </input></div>
                            </div>
                            <div>
                                <div className="texto-factura-info">Codigo postal</div>
                                <div><input type="text" className="box-shadow"
                                            onChange={this.updateCodigoPostal}
                                            value={this.state.codigoPostal}></input></div>
                            </div>
                        </div>
                    </div>
                <div>Valor envio: {this.state.valorEnvio}</div>
                { this.state.showError && <div>{this.state.errorMessage}</div>}
                <input type="button" value="FINALIZAR COMPRA" className="finalizar-compra-button"/>
                <input type="button" value="calcular valor envio" onClick={this.calcularValor}/>
                <Boton></Boton>
                </div>
                
        );
    }
    
}