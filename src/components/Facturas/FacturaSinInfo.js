import React, { Fragment } from 'react'
import Header from '../Header'
import NavBar from '../BarraBusqueda'
import '../../css/FinalizarCompra.css'
import Boton from '../WppButton'
import axios from 'axios'
import Loader from 'react-loader-spinner';

export default class FacturaSinInfo extends React.Component{
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
            valorEnvio: '',
            valorTotal: 0,
            productos: [],
            loading: false
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
        this.enviarFactura = this.enviarFactura.bind(this)
        this.hayCamposVacios = this.hayCamposVacios.bind(this)
        this.displayError = this.displayError.bind(this)
        this.esEmailValido = this.esEmailValido.bind(this)
        this.borrarErroresViejos = this.borrarErroresViejos.bind(this)
        this.esTelvalio = this.esTelvalio.bind(this)
        this.handleMercadoPago = this.handleMercadoPago.bind(this)     
        this.comprarComoUsuario = this.comprarComoUsuario.bind(this)
        this.hayUsuarioLogeado = this.hayUsuarioLogeado.bind(this)
        this.comprarComoGuest = this.comprarComoGuest.bind(this)
    }
    componentDidMount(){
        this.setState({
            valorTotal: this.props.valorTotal,
            productos: this.props.productos
        })
    }
    hayCamposVacios(){
        return  this.state.nombre === '' || this.state.apellido === ''  || 
                this.state.email === ''  || this.state.pais === ''      ||
                this.state.provincia === '' || this.state.localidad === '' ||
                this.state.telefono === '' || this.state.codigoPostal === '' ||
                this.state.direccion === ''
     }
     esEmailValido(){
         return this.state.email.includes("@") && ( this.state.email.includes("hotmail")||
                                                    this.state.email.includes("gmail")  ||
                                                    this.state.email.includes("yahoo")  ||
                                                    this.state.email.includes("outlook")||
                                                    this.state.email.includes("iCloud")) &&
                                                    this.state.email.includes(".com")
     }
     esTelvalio(){
         return this.state.telefono.length === 8 
             || this.state.telefono.length === 10
             || this.state.telefono.length === 11
     }
     borrarErroresViejos(){
        this.setState({
            showError: false,
            errorMessage: ''
        })
     }
     displayError(mensaje_error){
        this.setState({
            showError: true,
            errorMessage: mensaje_error
        })
    }
   
    enviarFactura(){
        this.borrarErroresViejos()
        if(this.hayCamposVacios()){
            this.displayError('!No dejes campos vacios¡')
            return
        }
        if(false){ //!this.esEmailValido()){
            this.displayError('Ingrese un email valido')
            return
        }
        if(false){ //!this.esTelvalio()){
            this.displayError("Numero de telefono no valido")
            return 
        }
            this.setState({loading: true}, () => {
                 if(this.hayUsuarioLogeado()){
                    this.comprarComoUsuario()
                 }else{
                    this.comprarComoGuest()
                }
            })
    
    }
    hayUsuarioLogeado(){
        return localStorage.getItem("usuario")  !== null
    }
    comprarComoUsuario(){
        axios({
            method: 'post',
            url: 'http://localhost:8080/Usuarios/GuardarInfoDeFactura',
            data: 
            {   
                usuarioFacturaInfo: {
                        nombre: this.state.nombre,
                        apellido: this.state.Apellido,
                        pais: this.state.pais,
                        provincia: this.state.provincia,
                        localidad: this.state.localidad,
                        direccion: this.state.direccion,
                        observaciones: this.state.observaciones,
                        email: this.state.email,
                        telefono: this.state.telefono,
                        comentarios: this.state.comentarios,
                        codigoPostal: this.state.codigoPostal
                    },
                    username: JSON.parse(localStorage.getItem("usuario")).username
            }
        }).then(res => localStorage.setItem("usuario", JSON.stringify(res.data)))
          .catch(e => console.log(e))

        axios({
            method: 'post',
            url: 'http://localhost:8080/MP/PagoDeProducto',
            data: 
            {
                productos: JSON.parse(localStorage.getItem("productos")),
                nombreUsuario: JSON.parse(localStorage.getItem("usuario")).username
            }
        }).then(res => this.handleMercadoPago(res.data))
          .catch(e => console.log(e))
    }
    comprarComoGuest(){
        localStorage.setItem("emailGuest", this.state.email)
        localStorage.setItem("guestName", this.state.nombre + ' ' + this.state.Apellido)

        axios({
            method: 'post',
            url: 'http://localhost:8080/MP/PagoDeProducto',
            data: 
            {
                productos: JSON.parse(localStorage.getItem("productos")),
                nombreUsuario: 'Guest'
            }
        }).then(res => this.handleMercadoPago(res.data))
          .catch(e => console.log(e))
    }

    handleMercadoPago(url){
        window.location.replace(url)
    }

    calcularValor(){
       axios.get('https://api.andreani.com/v1/tarifas?cpDestino=' + this.state.codigoPostal + '&contrato=400006710&sucursalOrigen=1878&bultos[0][valorDeclarado]=10&bultos[0][volumen]=10&bultos[0][kilos]=2.5')
       .then(res => this.setState({valorEnvio: res.data.tarifaSinIva.total}))
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
            Apellido: e.target.value
        })
    }
    updateNombre(e){
        this.setState({
            nombre: e.target.value
        })
    }

    render() {
        return (
            <Fragment>
            <Header></Header>
            <NavBar></NavBar>
            <div className="finalizar-compra">
                    FINALIZAR COMPRA
                </div>
                <div className="detalles-compra">
                    Detalles de facturación
                </div>
                <div className="aviso-usuario">Si ingreso como usuario al llenar la factura se guardaron los datos para futuras compras</div>
            <div className="flex-container-page">
                    <div className="datos-container">
                        <div className="fila-container">
                            <div className="fila-uno-container">
                                <div className="texto-factura-info">Nombre</div>
                                    <div><input type="text" className="box-shadow" 
                                        onChange={this.updateNombre} 
                                        value={this.state.nombre}>
                                        </input>
                                    </div>
                            </div>
                                <div>
                                    <div className="texto-factura-info">Apellido</div>
                                        <div><input type="text" className="box-shadow"
                                            onChange={this.updateApellido}
                                            value={this.state.apellido}>
                                            </input>
                                        </div>
                                </div>
                        </div>
                            <div className="fila-container" id="segunda-fila">
                                <div className="fila-uno-container">
                                    <div className="texto-factura-info">Pais</div>
                                        <div><input type="text" className="box-shadow" 
                                                                onChange={this.updatePais}
                                                                value={this.state.pais}>
                                            </input>
                                        </div>
                                </div>
                                     <div className="fila-uno-container">
                                         <div className="texto-factura-info">Provincia</div>
                                            <div><input type="text" className="box-shadow"
                                                                    onChange={this.updateProvincia}
                                                                    value={this.state.provincia}>
                                                  </input>
                                            </div>
                                     </div>
                                <div>
                                    <div className="texto-factura-info">Localidad</div>
                                        <div><input type="text" className="box-shadow"
                                                                onChange={this.updateLocalidad}
                                                                value={this.state.localidad}>
                                             </input>
                                        </div>
                                </div>
                        
                            </div>
                                <div className="fila-container" id="segunda-fila">
                                    <div className="fila-uno-container">
                                        <div className="texto-factura-info">Direccion</div>
                                            <div><input type="text" className="box-shadow"
                                                                    onChange={this.updateDireccion}
                                                                    value={this.state.direccion}>
                                                </input>
                                            </div>
                                        </div>

                                <div>
                                    <div className="texto-factura-info">Observaciones</div>
                                        <div><input type="text" placeholder="Piso, depto, etc" className="box-shadow"
                                                    onChange={this.updateObservaciones}
                                                    value={this.state.observaciones}>
                                            </input>
                                        </div>
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
                        
                            
                            { this.state.showError && <div className="error-factura">{this.state.errorMessage}</div>}
                            <div className="flex-buttons">
                                <input type="button" onClick={this.calcularValor} value="CALCULAR ENVIO" className="calcular-envio">
                                </input>
                
                             {this.state.loading ? <Loader type="Oval" color="white" height={25} width={100} className="spinner-finalizar-compra"/> :
                                                    <input  type="button" value="FINALIZAR COMPRA" className="finalizar-compra-button"
                                                    onClick={this.enviarFactura}/>}
                            </div>
                </div>
              
                       
                    <div className="metodo-pago-container">
                        <div className="elementos-factura">
                            <div className="tu-pedido"> TU PEDIDO </div>
                        <div className="factura-producto-precio">
                            <div className="inception">
                                <div id="producto">PRODUCTO</div>
                                <div>SUBTOTAL</div>
                            </div>
                        </div>
                        <div className="inception">
                                <div id="envio">Envio</div>
                                <div>{this.state.valorEnvio ? <div id="costo-envio">{this.state.valorEnvio}</div> : 'No calculaste el envio'}</div>
                        </div>
                        <div className="inception">
                            <div id="valor">valor total</div>
                            <div> {this.state.valorEnvio ? 
                                        <div id="costo-con-envio">{this.state.valorTotal + parseInt(this.state.valorEnvio)}</div> : 
                                        <div id="costo-sin-envio">{this.state.valorTotal}</div>}
                        </div>
                    </div>
                        
                    </div>   
                    </div>
                <Boton></Boton>
            </div>
            </Fragment>
        );
    }
    
}