import { m } from "framer-motion";
import type { Variants } from "framer-motion";
import { Link } from "react-router-dom";

import bannerDesktop from "../assets/Servicios-desktop.webp";
import bannerMobile from "../assets/Servicios-mobile.webp";

import fitnessImg from "../assets/Sala-musculacion-mobile.webp";
import functionalImg from "../assets/Clases-Funcionales-mobile.webp";
import personalImg from "../assets/Personal-trainner.webp";

const tarjetaVariants: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

export default function Servicios() {
  return (
    <>
      <section className="relative h-[60svh] bg-cover bg-center overflow-hidden">
        <picture className="absolute inset-0 w-full h-full pointer-events-none">
          <source
            media="(min-width: 768px)"
            srcSet={bannerDesktop}
            width="1920"
            height="1080"
          />
          <img
            src={bannerMobile}
            alt="Zonas de entrenamiento y máquinas de fuerza en 217 GYM"
            fetchPriority="high"
            loading="eager"
            width="800"
            height="1200"
            className="w-full h-full object-cover object-center pointer-events-none"
          />
        </picture>
        <div className="absolute inset-0 bg-linear-to-b from-black/70 via-black/40 to-black" />
        <div className="absolute inset-0 flex items-center justify-center -translate-y-6">
          <p className="text-white font-marker text-6xl sm:text-7xl md:text-8xl lg:text-9xl tracking-wider uppercase text-center">
            Servicios
          </p>
        </div>
      </section>

      <section className="relative bg-black text-white pb-20 px-4 -mt-12">
        <div className="max-w-5xl mx-auto">
          {/* Version escritorio: grid de 3 columnas */}
          <m.div
            className="hidden md:grid grid-cols-3 gap-6"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={{
              hidden: {},
              visible: { transition: { staggerChildren: 0.15 } },
            }}
          >
            <m.div
              variants={tarjetaVariants}
              className="group bg-zinc-900/80 backdrop-blur-md rounded-2xl border border-zinc-800 shadow-xl overflow-hidden transition-all duration-300 hover:scale-105 hover:-translate-y-1 hover:border-white/20"
            >
              <Link to="/sobre-nosotros" className="overflow-hidden">
                <img
                  src={fitnessImg}
                  alt=""
                  loading="lazy"
                  className="w-full h-48 object-cover object-top transition-transform duration-300 group-hover:scale-110"
                />
              </Link>
              <div className="p-6 text-center">
                <p className="text-lg font-bold uppercase tracking-wide mb-2">
                  Sala de musculación
                </p>
                <p className="text-sm text-gray-400 text-justify">
                  Zona de peso libre y maquinaria de alta gama diseñada para
                  entrenar de verdad. Espacio amplio y equipamiento profesional.
                </p>
              </div>
            </m.div>

            <m.div
              variants={tarjetaVariants}
              className="group bg-zinc-900/80 backdrop-blur-md rounded-2xl border border-zinc-800 shadow-xl overflow-hidden transition-all duration-300 hover:scale-105 hover:-translate-y-1 hover:border-white/20"
            >
              <div className="overflow-hidden">
                <img
                  src={functionalImg}
                  alt="Functional Training"
                  loading="lazy"
                  className="w-full h-48 object-cover object-center transition-transform duration-300 group-hover:scale-110"
                />
              </div>
              <div className="p-6 text-center">
                <p className="text-lg font-bold uppercase tracking-wide mb-2">
                  Clases Funcionales
                </p>
                <p className="text-sm text-gray-400 text-justify">
                  Entrenamientos funcionales en grupo para mejorar tu
                  rendimiento y movilidad. Adaptado a tu nivel actual.
                </p>
              </div>
            </m.div>

            <m.div
              variants={tarjetaVariants}
              className="group bg-zinc-900/80 backdrop-blur-md rounded-2xl border border-zinc-800 shadow-xl overflow-hidden transition-all duration-300 hover:scale-105 hover:-translate-y-1 hover:border-white/20"
            >
              <div className="overflow-hidden">
                <img
                  src={personalImg}
                  alt=""
                  loading="lazy"
                  className="w-full h-48 object-cover object-top transition-transform duration-300 group-hover:scale-110"
                />
              </div>
              <div className="p-6 text-center">
                <p className="text-lg font-bold uppercase tracking-wide mb-2">
                  Personal Trainer
                </p>
                <p className="text-sm text-gray-400 text-justify">
                  Entrenamientos personalizados a cada cliente, totalmente
                  adaptados a sus objetivos.
                </p>
              </div>
            </m.div>
          </m.div>

          {/* Version movil: carrusel con peek */}
          <m.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            viewport={{ once: true }}
            className="flex md:hidden overflow-x-auto snap-x snap-mandatory gap-6 px-4 pb-2 no-scrollbar"
          >
            <Link
              to="/sobre-nosotros"
              className="snap-center shrink-0 w-[85%] bg-zinc-900/80 backdrop-blur-md rounded-2xl border border-zinc-800 shadow-xl overflow-hidden"
            >
              <img
                src={fitnessImg}
                alt=""
                loading="lazy"
                className="w-full h-48 object-cover object-top"
              />
              <div className="p-6 text-center">
                <p className="text-lg font-bold uppercase tracking-wide mb-2">
                  Sala de musculación
                </p>
                <p className="text-sm text-gray-400 text-justify">
                  Zona de peso libre y maquinaria de alta gama diseñada para
                  entrenar de verdad. Espacio amplio y equipamiento profesional.
                </p>
              </div>
            </Link>

            <div className="snap-center shrink-0 w-[85%] bg-zinc-900/80 backdrop-blur-md rounded-2xl border border-zinc-800 shadow-xl overflow-hidden">
              <img
                src={functionalImg}
                alt="Functional Training"
                loading="lazy"
                className="w-full h-48 object-cover object-center"
              />
              <div className="p-6 text-center">
                <p className="text-lg font-bold uppercase tracking-wide mb-2">
                  Clases Funcionales
                </p>
                <p className="text-sm text-gray-400 text-justify">
                  Entrenamientos funcionales en grupo para mejorar tu
                  rendimiento y movilidad. Adaptado a tu nivel actual.
                </p>
              </div>
            </div>

            <div className="snap-center shrink-0 w-[85%] bg-zinc-900/80 backdrop-blur-md rounded-2xl border border-zinc-800 shadow-xl overflow-hidden">
              <img
                src={personalImg}
                alt=""
                loading="lazy"
                className="w-full h-48 object-cover object-top"
              />
              <div className="p-6 text-center">
                <p className="text-lg font-bold uppercase tracking-wide mb-2">
                  Personal Trainer
                </p>
                <p className="text-sm text-gray-400 text-justify">
                  Entrenamientos personalizados a cada cliente, totalmente
                  adaptados a sus objetivos.
                </p>
              </div>
            </div>
          </m.div>

          <m.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            viewport={{ once: true }}
            className="text-gray-400 text-sm text-center md:text-base mt-10 -mb-7"
          >
            Las{" "}
            <span className="text-brand-gold font-semibold">
              Clases Funcionales
            </span>{" "}
            y{" "}
            <span className="text-brand-gold font-semibold">
              Personal Trainer
            </span>{" "}
            se pagan por <span className="text-brand-gold">separado</span>{" "}
            (consultar tarifas y disponibilidad)
          </m.p>
        </div>
      </section>
    </>
  );
}
