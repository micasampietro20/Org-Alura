import { useState } from 'react';
import { v4 as uuid } from "uuid"
import './App.css';
import Header from './componentes/Header/Header.js';
import Formulario from './componentes/formulario/formulario';
import MiOrg from './componentes/MiOrg';
import Equipo from './componentes/equipo/equipo';
import Footer from './componentes/footer';

function App() {
  const [mostrarFormulario,actualizarMostrar] = useState(false)
  const[colaboradores, actualizarColaboradores] = useState([
    {
      id: uuid(),
      equipo: "Front-End",
      foto: "https://github.com/harlandlohora.png",
      nombre: "Harlan Lohora",
      puesto: "Instructor",
      fav: false
  },
  {  
    id: uuid(),
    equipo: "Front-End",
    foto: "https://github.com/micasampietro20.png",
    nombre: "Micaela Sampietro",
    puesto: "Desarrolladora Front-End",
    fav: false
  },
  {  
    id: uuid(),
    equipo: "Programación",
    foto: "https://github.com/genesysaluralatam.png",
    nombre: "Genesys Rondón",
    puesto: "Desarrolladora de software e instructora",
    fav: false
  },
  {  
    id: uuid(),
    equipo: "Data Science",
    foto: "https://github.com/JeanmarieAluraLatam.png",
    nombre: "JeanMarie",
    puesto: "Instructora",
    fav: false
  },
  {  
    id: uuid(),
    equipo: "Innovación y Gestión",
    foto: "https://github.com/JoseDarioGonzalezCha.png",
    nombre: "Jose Gonzalez",
    puesto: "Dev FullStack",
    fav: false
  }
])

const [equipos, actualizarEquipos] = useState([
  {
    id: uuid(),
    titulo: "Programación",
    colorPrimario: "#57C278", 
    colorSecundario: "#D9F7E9"
  },
  {
    id: uuid(),
    titulo: "Front-End",
    colorPrimario: "#82CFFA", 
    colorSecundario: "#E8F8FF"
  },
  {
    id: uuid(),
    titulo: "Data Science",
    colorPrimario: "#A6D157", 
    colorSecundario: "#EFF5E2"
  },
  {
    id: uuid(),
    titulo: "Devops",
    colorPrimario: "#E06B69", 
    colorSecundario: "#FDE7E8"
  },
  {
    id: uuid(),
    titulo: "UX y Diseño",
    colorPrimario: "#DB6EBF", 
    colorSecundario: "#FAE9F5"
  },
  {
    id: uuid(),
    titulo: "Móvil",
    colorPrimario: "#FFBA05", 
    colorSecundario: "#FFF5D9"
  },
  {
    id: uuid(),
    titulo: "Innovación y Gestión",
    colorPrimario: "#FF8A29", 
    colorSecundario: "#FFEEDF"
  },
])

  //Ternario --> condicion ? si es verdadera seMuestra : noSeMuestra
  // condicion && seMuestra

  const cambiarMostrar = () => {
    actualizarMostrar(!mostrarFormulario)
  }

  //Registrar colaborador

  const registrarColaborador = (colaborador) => {
    console.log("Nuevo colaborador", colaborador)
    //Spread operator - crear una copia de los valores actuales de colaboradores y luego agregar el nuevo colaborador
    actualizarColaboradores([...colaboradores, colaborador])
  }

  //Eliminar colaborador
  const eliminarColaborador = (id) => {
    console.log("Eliminar colaborador", id)
    const nuevosColaboradores = colaboradores.filter((colaborador) => colaborador.id !== id)
    actualizarColaboradores(nuevosColaboradores)
  }

  //Actualizar color de equipo
  const actualizarColor = (color, id) => {
    console.log("Actualizar: ", color, id)
    const equiposActualizados = equipos.map((equipo) => {
      if (equipo.id === id) {
        equipo.colorPrimario = color
      }
      return equipo
    })
    actualizarEquipos(equiposActualizados)
  }

  //Crear equipo
  const crearEquipo = (nuevoEquipo) => {
    console.log(nuevoEquipo)
    actualizarEquipos([...equipos, { ...nuevoEquipo, id: uuid() }])
  }

  const like = (id) => {
    const colaboradoresActualizados = colaboradores.map((colaborador) => {
      if(colaborador.id === id){
        colaborador.fav = !colaborador.fav
      }
      return colaborador
    })
    actualizarColaboradores(colaboradoresActualizados)
  }

  return (
    <div>
      <Header />
      {/* mostrarFormulario ? <Formulario /> : <></>*/}  
      { mostrarFormulario && <Formulario 
          equipos={equipos.map((equipo) => equipo.titulo)}
          registrarColaborador = {registrarColaborador}
          crearEquipo = {crearEquipo}
        />
      }
      <MiOrg cambiarMostrar={cambiarMostrar} />

      {
        equipos.map((equipo) => <Equipo 
          datos={equipo} 
          key={equipo.titulo}
          colaboradores={colaboradores.filter(colaborador => colaborador.equipo === equipo.titulo)} //Filtrar los elementos
          eliminarColaborador={eliminarColaborador}
          actualizarColor= {actualizarColor}
          like={like}
          /> 
        ) //cada vez que trabajemos con map debemos poner una key]
          
      }

      <Footer />

    </div>
  );
}

export default App;
