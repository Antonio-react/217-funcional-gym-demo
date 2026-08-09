import Hero from '../components/Hero'
import Datos from '../secciones/Datos'
import Separador from '../secciones/Separador'
import ResumenHorario from '../secciones/ResumenHorario'
import ServiciosResumen from '../secciones/ServiciosResumen'

export default function Inicio() {
    return (
        <>
            <Hero />
            <Datos />
            <Separador />
            <ResumenHorario />
            <ServiciosResumen />
        </>
    )
}