import React, { Fragment } from 'react';
import XLSX from 'xlsx';
import { make_cols } from '../Excel_reader/MakeColumn';
import axios from 'axios'
import '../../css/ActualizarProductos.css'
import modelo from '../../images/modeloExcel.png'


export default class ExcelReader extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
          file: {},
          data: [],
          cols: []
        }
        this.handleFile = this.handleFile.bind(this);
        this.handleChange = this.handleChange.bind(this);
      }
     
      handleChange(e) {
        const files = e.target.files;
        if (files && files[0]) this.setState({ file: files[0] });
      };
     
      handleFile() {
        
        const reader = new FileReader();
        const rABS = !!reader.readAsBinaryString;
     
        reader.onload = (e) => {
          const bstr = e.target.result;
          const wb = XLSX.read(bstr, { type: rABS ? 'binary' : 'array', bookVBA : true });
    
          const wsname = wb.SheetNames[0];
          const ws = wb.Sheets[wsname];
        
          const data = XLSX.utils.sheet_to_json(ws);
       
          this.setState({ data: data, cols: make_cols(ws['!ref']) }, () => {
            axios({
                method: 'post',
                url: 'http://localhost:8080/ActualizarProducto/Actualizar',
                data: {
                    productos: this.state.data
                }
            }).then(res => console.log(res))
            .catch(e => console.log(e))
           
          });
     
        };
     
        if (rABS) {
          reader.readAsBinaryString(this.state.file);
        } else {
          reader.readAsArrayBuffer(this.state.file);
        };
      }
     
      render() {
        return (
          <Fragment>
                <div className="container-actualizar">
            <div>Este es el modelo de como tiene que ser el excel,</div>
            <div>Recuerden que si no lo respetan no va a funcionar.</div>
            <div>En la columna de stock se va a sumar a la actual</div>
            <div>En la columna precio va a pisar el precio actual.</div>
            <br/>
            <img src={modelo} alt="modelo"></img>
            <br/>
            <br/>
            <input type="file"  className="form-control" id="file" onChange={this.handleChange} />
            <br/>
            <input type='submit' 
              value="Actualizar Productos"
              onClick={this.handleFile} 
              className="button-secret"/>
              <br />
              <a href="/" className="volverPage-secret">Volver a Pagina</a>
              </div>
              </Fragment>
        )
      }
}
     
