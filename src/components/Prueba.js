import React from 'react'

export default class Prueba extends React.Component{
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this)
    }
    handleChange(file){
        console.log(file)
    }
    render() {
        return (
            <div>
               
                <input type="file" accept="application/vnd.ms-excel" onChange={(e) => this.handleChange(e.target.files)}/>
            </div>
        );
    }
    
}