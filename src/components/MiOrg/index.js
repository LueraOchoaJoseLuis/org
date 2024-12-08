import "./MiOrg.css"
// eslint-disable-next-line no-unused-vars
import {useState} from "react"
const MiOrg = (props) => {
    
    // const [nombre,actualizarNombre] = useState("harland")
    // const [mostrar,actualizarMostrar] = useState(true)

    console.log("Prop cambiarMostrar:", props.cambiarMostrar)

    // const manejarClick = () => {
    //     console.log("Mostrar/Ocultar elemento", !mostrar)
    //     actualizarMostrar(!mostrar)
    // }

    return <section className="orgSection">
        <h3 className="title">Mi Organización</h3>
        <img src="/img/add.png" alt="add" onClick={props.cambiarMostrar}/>
    </section>
}

export default MiOrg