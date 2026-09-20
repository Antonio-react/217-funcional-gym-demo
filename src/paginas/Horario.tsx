import { Link } from "react-router-dom";
import { m } from "framer-motion";
import type { Variants } from "framer-motion";

import bannerDesktop from "../assets/Horario-desktop.webp";
import bannerMobile from "../assets/Horario-mobile.webp";

const tarjetaVariants: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

export default function Horario() {
  return (
    <>
      <title>Horario | 217 Funcional GYM</title>
      <meta
        name="description"
        content="Consulta el horario de 217 Funcional GYM en Ugena (Toledo) y planifica tus entrenamientos."
      />

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
            alt="Horario de apertura de 217 GYM para entrenar musculación y clases"
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
            Horario
          </p>
        </div>
      </section>

      <section className="bg-black text-white pb-20 px-4 -mt-12">
        <div className="max-w-5xl mx-auto text-center">
          {/* Version movil: animacion simple del bloque completo */}
          <m.div
            className="grid md:hidden gap-6"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            <div className="group bg-zinc-900/80 backdrop-blur-md p-6 rounded-2xl border border-zinc-800 shadow-xl transition-all duration-300 hover:scale-105 hover:-translate-y-1 hover:border-white/20">
              <p className="text-sm uppercase text-gray-400 mb-2">
                Lunes - Viernes
              </p>
              <p className="text-2xl font-bold whitespace-nowrap">
                8:00 - 23:00
              </p>
            </div>

            <div className="group bg-zinc-900/80 backdrop-blur-md p-6 rounded-2xl border border-zinc-800 shadow-xl transition-all duration-300 hover:scale-105 hover:-translate-y-1 hover:border-white/20">
              <p className="text-sm uppercase text-gray-400 mb-2">
                Sábado - Domingo
              </p>
              <p className="text-2xl font-bold whitespace-nowrap">
                9:00 - 14:00
              </p>
            </div>
            <Link
              to="/tarifas"
              className="w-full mx-auto bg-zinc-900/80 backdrop-blur-md p-6 rounded-2xl border border-zinc-800 shadow-xl transition-all duration-300 hover:scale-105 hover:-translate-y-1 hover:border-brand-gold text-center flex flex-col"
            >
              <p className="text-lg uppercase tracking-wide text-brand-gold mb-3">
                Plan de Mañana
              </p>
              <p className="text-3xl font-bold mb-2">8:00 - 15:00</p>
              <p className="text-xs uppercase text-brand-gold">
                * Tarifa Especial
              </p>
            </Link>
          </m.div>

          {/* Version escritorio: grid con staggerChildren */}
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
              className="group bg-zinc-900/80 backdrop-blur-md p-6 rounded-2xl border border-zinc-800 shadow-xl transition-all duration-300 hover:scale-105 hover:-translate-y-1 hover:border-white/20"
            >
              <p className="text-sm uppercase text-gray-400 mb-2">
                Lunes - Viernes
              </p>
              <p className="text-2xl md:text-3xl font-bold whitespace-nowrap">
                8:00 - 23:00
              </p>
            </m.div>

            <m.div
              variants={tarjetaVariants}
              className="group bg-zinc-900/80 backdrop-blur-md p-6 rounded-2xl border border-zinc-800 shadow-xl transition-all duration-300 hover:scale-105 hover:-translate-y-1 hover:border-white/20"
            >
              <p className="text-sm uppercase text-gray-400 mb-2">
                Sábado - Domingo
              </p>
              <p className="text-2xl md:text-3xl font-bold whitespace-nowrap">
                9:00 - 14:00
              </p>
            </m.div>
            <m.div variants={tarjetaVariants}>
              <Link
                to="/tarifas"
                className="w-full mx-auto md:max-w-sm bg-zinc-900/80 backdrop-blur-md p-6 rounded-2xl border border-zinc-800 shadow-xl transition-all duration-300 hover:scale-105 hover:-translate-y-1 hover:border-brand-gold text-center flex flex-col"
              >
                <p className="text-sm uppercase tracking-wide text-brand-gold mb-3">
                  Plan de Mañana
                </p>
                <p className="text-2xl md:text-3xl font-bold whitespace-nowrap mb-2">
                  8:00 - 15:00
                </p>
                <p className="text-xs uppercase text-brand-gold">
                  * Tarifa Especial
                </p>
              </Link>
            </m.div>
          </m.div>

          {/* Seccion clases */}
          <div className="mt-16">
            <m.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              viewport={{ once: true }}
              className="font-staatliches text-white text-2xl md:text-3xl uppercase tracking-wide mb-8 text-center"
            >
              Clases
            </m.h2>

            {/* Version movil: animacion simple */}
            <m.div
              className="grid md:hidden gap-6 max-w-3xl mx-auto"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              viewport={{ once: true }}
            >
              <Link
                to="/servicios"
                className="group bg-zinc-900/80 backdrop-blur-md p-6 rounded-2xl border border-zinc-800 shadow-xl transition-all duration-300 hover:scale-105 hover:-translate-y-1 hover:border-brand-gold text-center flex flex-col"
              >
                <p className="text-lg font-bold uppercase tracking-wide text-brand-gold mb-3">
                  Clases Funcionales
                </p>
                <p className="text-sm text-gray-400 mt-6">
                  Consultar horario y disponibilidad
                </p>
              </Link>
              <Link
                to="/servicios"
                className="group bg-zinc-900/80 backdrop-blur-md p-6 rounded-2xl border border-zinc-800 shadow-xl transition-all duration-300 hover:scale-105 hover:-translate-y-1 hover:border-brand-gold text-center flex flex-col"
              >
                <p className="text-lg font-bold uppercase tracking-wide text-brand-gold mb-3">
                  Personal Trainer
                </p>
                <p className="text-sm text-gray-400 mt-6">
                  Consultar horario y disponibilidad
                </p>
              </Link>
            </m.div>

            {/* Version escritorio: staggerChildren */}
            <m.div
              className="hidden md:grid grid-cols-2 gap-6 max-w-3xl mx-auto"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={{
                hidden: {},
                visible: { transition: { staggerChildren: 0.15 } },
              }}
            >
              <m.div variants={tarjetaVariants}>
                <Link
                  to="/servicios"
                  className="group bg-zinc-900/80 backdrop-blur-md p-6 rounded-2xl border border-zinc-800 shadow-xl transition-all duration-300 hover:scale-105 hover:-translate-y-1 hover:border-brand-gold text-center flex flex-col"
                >
                  <p className="text-lg font-bold uppercase tracking-wide text-brand-gold mb-3">
                    Clases Funcionales
                  </p>
                  <p className="text-sm text-gray-400 mt-3">
                    Consultar horario y disponibilidad
                  </p>
                </Link>
              </m.div>
              <m.div variants={tarjetaVariants}>
                <Link
                  to="/servicios"
                  className="group bg-zinc-900/80 backdrop-blur-md p-6 rounded-2xl border border-zinc-800 shadow-xl transition-all duration-300 hover:scale-105 hover:-translate-y-1 hover:border-brand-gold text-center flex flex-col"
                >
                  <p className="text-lg font-bold uppercase tracking-wide text-brand-gold mb-3">
                    Personal Trainer
                  </p>
                  <p className="text-sm text-gray-400 mt-3">
                    Consultar horario y disponibilidad
                  </p>
                </Link>
              </m.div>
            </m.div>

            <m.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.3, ease: "easeOut" }}
              viewport={{ once: true }}
              className="text-gray-400 text-base text-center mt-10 -mb-8"
            >
              Estas <span className="text-brand-gold">clases</span> se pagan por{" "}
              <span className="text-brand-gold">separado</span> (consultar
              tarifas y disponibilidad)
            </m.p>
          </div>
        </div>
      </section>
    </>
  );
}
