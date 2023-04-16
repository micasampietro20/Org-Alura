import "./ListaOpciones.css"

const ListaOpciones = (props) => {

    /*Método map, recorrer un arreglo -> arreglo.map( (equipo, index) =>  {
        return <option></option>
    }) 
    MAP va a tomar un arreglo de informacion y a partir de eso lo va a transformar
    y nos va a regresar un nuevo arreglo con esos datos transformados*/

    const manejarCambio = (event) => {
        console.log("cambio", event.target.value)
        props.actualizarEquipo(event.target.value)
    }

    return <div className="lista-opciones">
        <label>Equipos</label>
        <select value={props.value} onChange={manejarCambio}>
            <option value="" disabled defaultValue="" hidden>Seleccionar equipo</option>
            {props.equipos.map( (equipo, index) => <option key={index} value={equipo}>{equipo}</option> // index es la posición del elemento en el arreglo
             ) } 
        </select>
    </div> // value="" disabled defaultValue="" hidden oculta una option para que no aparezca como tal.
} 

export default ListaOpciones