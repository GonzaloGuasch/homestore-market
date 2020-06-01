import React, { Fragment } from 'react'
import Header from '../components/Header'
import BarraBusqueda from '../components/BarraBusqueda'
import '../css/LogInRegister.css'
import axios from 'axios'

export default class LogInRegister extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            email: 'prueba@prueba.com',
            password: '1'
        }
     
        this.tryLogIn = this.tryLogIn.bind(this)
        this.registerUsuario = this.registerUsuario.bind(this)
        this.checkLogIn = this.checkLogIn.bind(this)
    }
    registerUsuario(){
        axios({
            method: 'post',
            url: 'http://localhost:8080/Usuarios/crearUsuario',
            data: {
                "username": this.state.username,
                "email": this.state.email,
                "password": this.state.password
            }
        })  .then(res => res)
            .catch(e => e )
    }
    tryLogIn(){
        axios.get('http://localhost:8080/Usuarios/logIn/' + this.state.email + '/' + this.state.password )
        .then(res => this.checkLogIn(res.data))
        .catch(e => console.log(e) )
    }
    checkLogIn(data){
       localStorage.setItem("isLog", data)
       this.props.history.push("/")
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
                              <div><input type="text" className="input-container"></input></div>
                            </div>
                          <div className="data">Password</div>
                          <div><input type="text" className="input-container"></input></div>
                          <input    type="button" 
                                    value="INGRESAR" 
                                    className="ingresar"
                                    onClick={this.tryLogIn}></input>
                        </div>
                    </div>
                    <div className="register-container">
                        <div className="titulo-login">
                          <div className="data" id="register-id">REGISTER</div>
                        </div>
                          <div>
                              <div className="data">Nombre de usuario</div>
                              <div><input type="text" className="input-container"></input></div>
                          </div>
                          <div>
                              <div className="data">Correo electronico</div>
                              <div><input type="text" className="input-container"></input></div>
                          </div>
                          <div>
                              <div className="data">Constraseña</div>
                              <div><input type="text" className="input-container"></input></div>
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