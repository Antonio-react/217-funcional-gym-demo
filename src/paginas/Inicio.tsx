import Hero from "../components/Hero";
import Datos from "../secciones/Datos";
import Separador from "../secciones/Separador";
import ResumenHorario from "../secciones/ResumenHorario";
import ServiciosResumen from "../secciones/ServiciosResumen";

export default function Inicio() {
  return (
    <>
      <title>217 Funcional GYM</title>
      <meta
        name="description"
        content="217 Funcional GYM: gimnasio de entrenamiento funcional en Ugena (Toledo). Conoce nuestros servicios, tarifas y horarios."
      />

      <Hero />
      <Datos />
      <Separador />
      <ResumenHorario />
      <ServiciosResumen />
    </>
  );
}
