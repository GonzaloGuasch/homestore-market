import React, { Fragment } from 'react'
import Header from '../Header'
import BarraBusqueda from '../BarraBusqueda'
import '../../css/CarritoConProducto.css'
import ProductoEnCarro from '../ProductoEnCarro'

export default class CarritoConProducto extends React.Component{
    constructor(props) {
        super(props);
        this.state={
            productos: [],
            
        }
        this.borrarTodo = this.borrarTodo.bind(this)
        this.updetearValor = this.updetearValor.bind(this)
        this.volverAComprar = this.volverAComprar.bind(this)
        this.completarFactura = this.completarFactura.bind(this)
    }
    componentDidMount(){
       this.setState({
           productos: JSON.parse(localStorage.getItem("productos"))
       })
    }
    
    borrarTodo(){
       this.setState({
           productos: []
       })
       localStorage.removeItem("productos")
       this.updetearValor()
    }
    volverAComprar(){
        this.props.history.push('/')
    }
    updetearValor(){
        window.location.reload();
    }

    completarFactura(valorTotal){
        this.props.history.push({
            pathname: '/FacturaContainer',
            state: {productos: this.state.productos,
                    valorTotal: valorTotal}
        })
    }
    render() {
      const producotsEnCarro = this.state.productos.map((UnProducto, i) => 
            <ProductoEnCarro info={UnProducto}/>)
      let valorTotal = 0
      this.state.productos.map((unProducto, i) => valorTotal = valorTotal + unProducto.precio * unProducto.cantidad)
        return (
            <Fragment>
            <Header></Header>
                <BarraBusqueda></BarraBusqueda>
                <div className="factura-carrito-container">
                    <div>
                        <div className="header-carrito">
                        <div>Nombre Producto</div>
                        <div className="precio-carrito">Precio</div>
                        <div className="cantidad-producto-carrito">Cantidad</div>
                        <div className="precio-total">Total</div>
                        </div>
                        {producotsEnCarro}
                        <div className="botones-container">
                        <input type="button" value="borrar todo" onClick={this.borrarTodo} className="borrar-boton-carrito"/>
                        <input type="button" value="Volver a comprar" onClick={this.volverAComprar} className="volver-boton-carrito"/>
                        </div>
                    </div>
                    <div className="factura-container">
                        <div className="total">Total de carrito</div>
                            <div className="valor-total">
                                <div className="total-total">
                                    Total        
                                </div>
                                <div className="valor-de-carrito">
                                    ${valorTotal}
                                </div>
                                
                            </div> 
                            <input type="button" 
                            value="FINALIZAR COMPRA" 
                            className="boton-finalizar-compra"
                            onClick={() => this.completarFactura(valorTotal)}/>
                    </div>
                </div>
            </Fragment>
        );
    }
}