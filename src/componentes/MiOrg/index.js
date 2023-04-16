import {useState} from "react"
import "./MiOrg.css"

const MiOrg = (props) => {
    //Estado - hooks funcionalidades que nos ayudan a trabajar con el comportamiento de React
    //useState (utiliza el estado)
    //useState()
    //const[nombreVariable, funcionActualiza] = useState(valorInicial)
    console.log(props)

   // const [nombre,actualizarNombre]= useState("Micaela") De esta forma hacemos que React reaccione a los cambios del estado
    
    /*const[mostrar,actualizarMostrar] = useState(true)
    const manejarClick = () => {
        console.log("Mostrar/Ocultar elemento", !mostrar)
        actualizarMostrar(!mostrar) //toma el valor que está guardado en el estado (true) y cuando da click lo invierte
    }*/

    return <section className="orgSection">
        <h3 className="title">Mi organización</h3>
        <img src="/img/add.png" alt="add" onClick={props.cambiarMostrar}/>
    </section>
}

export default MiOrg