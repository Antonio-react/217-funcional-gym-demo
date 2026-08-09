import { Routes, Route } from 'react-router-dom'
import './App.css'
import Navbar from './components/Navbar'
import Inicio from './paginas/Inicio'
import Horario from './paginas/Horario'
import Servicios from './paginas/Servicios'
import Tarifas from './paginas/Tarifas'
import SobreNosotros from './paginas/SobreNosotros'
import Ubicacion from './paginas/Ubicacion'
import Contacto from './paginas/Contacto'
import Footer from './components/Footer'
import ScrollToTop from './components/ScrollToTop'

export default function App() {
  return (
    <>
      <ScrollToTop />
      <Navbar />

      <Routes>
        <Route path="/" element={<Inicio />} />
        <Route path="/horarios" element={<Horario />} />
        <Route path="/servicios" element={<Servicios />} />
        <Route path="/tarifas" element={<Tarifas />} />
        <Route path="/sobre-nosotros" element={<SobreNosotros />} />
        <Route path="/ubicacion" element={<Ubicacion />} />
        <Route path="/contacto" element={<Contacto />} />
      </Routes>

      <Footer />
    </>
  )
}