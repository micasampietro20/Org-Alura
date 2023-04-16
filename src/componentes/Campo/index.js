import { useState } from "react";
import "./Campo.css"

const Campo = (props) => {
    const [valor,actualizarValor] = useState("")
    //console.log("Datos: ", props) //propiedades de los componentes
    const placeholderModificado = `${props.placeholder}...`

    //Destructuracion
    const {type="text"} = props

    const manejarCambio = (event) => {
        props.actualizarValor(event.target.value)
    } //Esta función hace que se actualice el cambio en los inputs en la consola

    return <div className={`campo campo-${type}`}>
        <label>{props.titulo}</label>
        <input 
            placeholder= {placeholderModificado} 
            required={props.required} 
            value={props.valor}
            onChange={manejarCambio} //cada vez que haya un cambio, manda a llamar a esta funcion
            type={type}
        />
    </div> // value ={valor} le quitamos la responsabilidad al navegador para controlarlo nosotros
};

export default Campo