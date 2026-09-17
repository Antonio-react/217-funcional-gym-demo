import { LazyMotion, domAnimation } from "framer-motion";
import { Suspense, lazy, useEffect } from "react";
import { Routes, Route } from "react-router-dom";

import "./App.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";
import { Canonical } from "./components/Canonical";
import { SeoLocalBusiness } from "./components/SeoLocalBusiness";

const Inicio = lazy(() => import("./paginas/Inicio"));
const Horario = lazy(() => import("./paginas/Horario"));
const Servicios = lazy(() => import("./paginas/Servicios"));
const Tarifas = lazy(() => import("./paginas/Tarifas"));
const SobreNosotros = lazy(() => import("./paginas/SobreNosotros"));
const Ubicacion = lazy(() => import("./paginas/Ubicacion"));
const Contacto = lazy(() => import("./paginas/Contacto"));

export default function App() {
  useEffect(() => {
    const precargarPaginas = () => {
      import("./paginas/Horario");
      import("./paginas/Servicios");
      import("./paginas/Tarifas");
      import("./paginas/SobreNosotros");
      import("./paginas/Ubicacion");
      import("./paginas/Contacto");
    };

    if ("requestIdleCallback" in window) {
      requestIdleCallback(precargarPaginas);
    } else {
      setTimeout(precargarPaginas, 1000);
    }
  }, []);

  return (
    <LazyMotion features={domAnimation}>
      <SeoLocalBusiness />
      <Canonical />
      <ScrollToTop />
      <Navbar />

      <main>
        <Suspense
          fallback={<div className="min-h-screen bg-black/50 animate-pulse" />}
        >
          <Routes>
            <Route path="/" element={<Inicio />} />
            <Route path="/horarios" element={<Horario />} />
            <Route path="/servicios" element={<Servicios />} />
            <Route path="/tarifas" element={<Tarifas />} />
            <Route path="/sobre-nosotros" element={<SobreNosotros />} />
            <Route path="/ubicacion" element={<Ubicacion />} />
            <Route path="/contacto" element={<Contacto />} />
          </Routes>
        </Suspense>
      </main>

      <Footer />
    </LazyMotion>
  );
}
