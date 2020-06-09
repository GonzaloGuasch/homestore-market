import React, { Fragment } from 'react'
import Header from '../components/Header'
import BarraBusqueda from '../components/BarraBusqueda'
import '../css/LogInRegister.css'
import axios from 'axios'

export default class LogInRegister extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            emailVacio: false,
            password: '',
            passwordVacia: false, 
            nombreDeUsuario: '',
            nombreDeUsuarioVacio: false,
            correoElectronico: '',
            correoElectronicoVacio: false,
            contraseña: '',
            contraseñaVacia: false,
            error: '',
            showError: false
        }
     
        this.tryLogIn = this.tryLogIn.bind(this)
        this.registerUsuario = this.registerUsuario.bind(this)
        this.checkLogIn = this.checkLogIn.bind(this)
        this.updateEmailLogIn = this.updateEmailLogIn.bind(this)
        this.updatePasswordLogIn = this.updatePasswordLogIn.bind(this)
        this.esEmailValido = this.esEmailValido.bind(this)
        this.updateNombreUsuarioRegister = this.updateNombreUsuarioRegister.bind(this)
        this.updateCorreoRegister = this.updateCorreoRegister.bind(this)
        this.updateContraseñaRegister = this.updateContraseñaRegister.bind(this)
        this.iniciarSesion = this.iniciarSesion.bind(this)
    }
    updateContraseñaRegister(e){
        this.setState({
            contraseña: e.target.value
        })
    }
    updateCorreoRegister(e){
        this.setState({
            correoElectronico: e.target.value
        })
    }
    updateNombreUsuarioRegister(e){
        this.setState({
            nombreDeUsuario: e.target.value
        })
    }
    updatePasswordLogIn(e){
        this.setState({
            password: e.target.value,
            showError: false,
            error: '',
        })
        
    }
    updateEmailLogIn(e){
        this.setState({
            email: e.target.value,
            showError: false,
            error: '',
        })
    }
    registerUsuario(){
        if(!this.esEmailValido(this.state.correoElectronico)){
            this.setState({
                correoElectronicoVacio: true
            })
         
        }
        if(this.state.contraseña === ""){
            this.setState({
                contraseñaVacia: true
            }) 
             
        }  
        if(this.state.nombreDeUsuario === ""){
            this.setState({
                nombreDeUsuarioVacio: true
            }) 
            return 
        }
        axios({
            method: 'post',
            url: 'http://localhost:8080/Usuarios/crearUsuario',
            data: {
                "username": this.state.nombreDeUsuario,
                "email": this.state.correoElectronico,
                "password": this.state.contraseña
            }
        }).then(res => this.iniciarSesion(res.data))
            .catch(e => console.log(e))
    }
    esEmailValido(correo){
        return correo.includes("@") && (  this.state.email.includes("hotmail")||
                                                    this.state.email.includes("gmail")  ||
                                                    this.state.email.includes("yahoo")  ||
                                                    this.state.email.includes("outlook")||
                                                    this.state.email.includes("iCloud")) &&
                                                    this.state.email.includes(".com")
    }

    tryLogIn(){
        if(!this.esEmailValido(this.state.email)){
            this.setState({
                emailVacio: true
            })
            return
        }
        if(this.state.password === ""){
            this.setState({
                passwordVacia: true
            }) 
            return    
        }  
        axios.get('http://localhost:8080/Usuarios/logIn/' + this.state.email + '/' + this.state.password )
        .then(res => this.checkLogIn(res.data))
        .catch(e => console.log(e) )
        this.setState({
            emailVacio: false,
            passwordVacia: false
        })
        
    }
    
   iniciarSesion(data){
    localStorage.setItem("isLog", true)
    localStorage.setItem("usuario", JSON.stringify(data))
    this.props.history.push("/")
   }

    checkLogIn(data){
       if(data){ localStorage.setItem("isLog", true)
                 localStorage.setItem("usuario", JSON.stringify(data))
                 this.props.history.push("/") }
        else{
            this.setState({
                showError: true,
                error: 'Usuario o contraseña incorrecta'
            })
        }
       
    }

    render() {
        return (
            <Fragment>
               <Header></Header>
               <BarraBusqueda></BarraBusqueda>
                <div className="logIn-register-container">
                    <div className="singUp-container">  
                        <div> 
                          <div className="titulo-login">ACCEDER</div>
                            <div className="login-input-container">
                              <div className="data">Email</div>
                              <div><input   type="text" 
                                            className={this.state.emailVacio ? 'input-novalido' : "input-container"}
                                            value={this.state.email}
                                            onChange={this.updateEmailLogIn}></input></div>
                            </div>
                          <div className="data">Password</div>
                          <div><input   type="password" 
                                         className={this.state.passwordVacia ? 'input-novalido' : "input-container"}
                                        value={this.state.password}
                                        onChange={this.updatePasswordLogIn}></input></div>
                          <input    type="button" 
                                    value="INGRESAR" 
                                    className="ingresar"
                                    onClick={this.tryLogIn}></input>
                                    {this.state.showError && <p className="error-display">{this.state.error}</p>}
                        </div>
                    </div>
                    <div className="register-container">
                        <div className="titulo-login">
                          <div className="data" id="register-id">REGISTER</div>
                        </div>
                          <div>
                              <div className="data">Nombre de usuario</div>
                              <div><input   type="text" 
                                            className={this.state.nombreDeUsuarioVacio ? "input-novalido" : "input-container"}
                                            value={this.state.nombreDeUsuario}
                                            onChange={this.updateNombreUsuarioRegister}
                                            ></input></div>
                          </div>
                          <div>
                              <div className="data">Correo electronico</div>
                              <div><input   type="text" 
                                            className={this.state.correoElectronicoVacio ? "input-novalido" : "input-container"}
                                            value={this.state.correoElectronico}
                                            onChange={this.updateCorreoRegister}></input></div>
                          </div>
                          <div>
                              <div className="data">Constraseña</div>
                              <div><input   type="password" 
                                            className={this.state.contraseñaVacia ? "input-novalido" : "input-container"}
                                            value={this.state.contraseña}
                                            onChange={this.updateContraseñaRegister}></input></div>
                          </div>
                          <input    type="button" 
                                    value="REGISTRARSE" 
                                    className="ingresar"
                                    onClick={this.registerUsuario}></input>
                        </div>
                    </div>
            </Fragment>
        );
    }
    
}