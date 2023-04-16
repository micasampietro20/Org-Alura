import { useState } from "react"
import "./formulario.css"
import Campo from "../Campo/index.js"
import ListaOpciones from "../ListaOpciones/index.js"
import Boton from "../boton/Boton"

const Formulario = (props) => {

    const[nombre,actualizarNombre] = useState("")
    const[puesto,actualizarPuesto] = useState("")
    const[foto,actualizarFoto] = useState("")
    const[equipo,actualizarEquipo] = useState("")

    const[titulo, actualizarTitulo] = useState("")
    const [color, actualizarColor] = useState("")
    
    const {registrarColaborador, crearEquipo} = props

    const manejarEnvio = (event) => {
        event.preventDefault() //no recarga la página y las informaciones del evento
        let datosAEnviar = {
            nombre,
            puesto,
            foto,
            equipo
        } //de esta manera puedo ver en la consola los datos que pone el usuario en los respectivos campos.]
        registrarColaborador(datosAEnviar)
    }

    const manejarNuevoEquipo = (event) => {
        event.preventDefault()
        crearEquipo({titulo, colorPrimario: color})
    }

   return <section className = "formulario">
        <form onSubmit={manejarEnvio}>
            <h2>Rellena el formulario para crea el colaborador</h2>
            <Campo titulo="Nombre"
                placeholder="Ingresar nombre" 
                required={true}
                valor={nombre}
                actualizarValor={actualizarNombre}
            />
            <Campo 
                titulo="Puesto" 
                placeholder="Ingresar puesto" 
                required
                value={puesto}
                actualizarValor={actualizarPuesto}
            />
            <Campo 
                titulo="Foto" 
                placeholder="Ingresar enlace de foto" 
                required
                value={foto}
                actualizarValor={actualizarFoto}
            />
            <ListaOpciones 
                value={equipo}
                actualizarEquipo={actualizarEquipo}
                equipos={props.equipos}
            />
            <Boton>
                Crear 
            </Boton> 
        </form>
        <form onSubmit={manejarNuevoEquipo}>
            <h2>Rellena el formulario para crea el equipo</h2>
            <Campo titulo="Titulo"
                placeholder="Ingresar titulo " 
                required={true}
                valor={titulo}
                actualizarValor={actualizarTitulo}
            />
            <Campo 
                titulo="Color" 
                placeholder="Ingresar el color en Hex" 
                required
                value={color}
                actualizarValor={actualizarColor}
                type="color"
            />
            <Boton>
                Registrar equipo
            </Boton>
        </form>
    </section>
};

export default Formulario

//Eventos disponibles en HTML: developer.mozilla.org/es/docs/Web/Events 
/*Cuando trabajamos con eventos en React los eventos siguen la estructura de camelCase, es decir, si el evento 
en HTML se llama onclick en React será onClick */