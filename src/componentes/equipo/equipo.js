import "./equipo.css"
import Colaborador from "../Colaborador/colaborador"
import hexToRgba from 'hex-to-rgba';

const Equipo = (props) => { //con style{{}} podemos utilizar propiedades css en forma de objeto
    //Destructuración
    const {colorPrimario, colorSecundario, titulo, id} = props.datos
    const {colaboradores, eliminarColaborador, actualizarColor, like} = props

    const colorFondo = {
        backgroundColor: hexToRgba(colorPrimario, 0.2)
    }

    const estiloTitulo = {borderColor: colorPrimario}

    return <> 
        {
            colaboradores.length > 0  && 
            <section className="equipo" style={colorFondo}>
                <input
                    type="color"
                    className="input-color"
                    value={colorPrimario}
                    onChange={(event) =>{
                        actualizarColor(event.target.value, id)
                    }} //se ejecuta la función cada vez que hay un cambio 
                />
                <h3 style={estiloTitulo}>{titulo}</h3>
                <div className="colaboradores">
                    {
                        colaboradores.map((colaborador, index) => <Colaborador 
                            datos={colaborador} 
                            key={colaborador.index}
                            colorPrimario={colorPrimario}
                            eliminarColaborador={eliminarColaborador}
                            like={like}
                        />)
                    }
                </div>
            </section>
        }
    </>
}

export default Equipo