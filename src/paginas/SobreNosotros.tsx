import { Link } from 'react-router-dom'
import { useState } from 'react'
import { motion } from 'framer-motion'
import type { Variants } from 'framer-motion'

import bannerDesktop from '../assets/Barra-desktop.webp'
import bannerMobile from '../assets/Barra-mobile.webp'
import logoMarca from '../assets/Titanium-strength.webp'
import galeria1 from '../assets/Barra-mobile.webp'
import galeria2 from '../assets/Clases-Funcionales-mobile.webp'
import galeria3 from '../assets/Personal-trainner.webp'
import galeria4 from '../assets/rueda-mobile.webp'
import galeria5 from '../assets/Servicios-mobile.webp'
import galeria6 from '../assets/Horario-mobile.webp'


const itemVariants: Variants = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
}

export default function SobreNosotros() {

    const [indiceAmpliado, setIndiceAmpliado] = useState<number | null>(null)
    const fotosGaleria = [galeria1, galeria2, galeria3, galeria4, galeria5, galeria6]

    function fotoAnterior() {
        if (indiceAmpliado === null) return
        setIndiceAmpliado((indiceAmpliado - 1 + fotosGaleria.length) % fotosGaleria.length)
    }

    function fotoSiguiente() {
        if (indiceAmpliado === null) return
        setIndiceAmpliado((indiceAmpliado + 1) % fotosGaleria.length)
    }

    return (
        <>
            <section className="relative h-[60svh] bg-cover bg-center overflow-hidden">
                <picture className="absolute inset-0 w-full h-full pointer-events-none">
                    <source media="(min-width: 768px)" srcSet={bannerDesktop} width="1920" height="1080" />
                    <img
                        src={bannerMobile}
                        alt="Servicios y instalaciones de 217 GYM"
                        fetchPriority="high"
                        loading="eager"
                        width="800"
                        height="1200"
                        className="w-full h-full object-cover object-center pointer-events-none"
                    />
                </picture>
                <div className="absolute inset-0 bg-linear-to-b from-black/70 via-black/40 to-black" />
                <div className="absolute inset-0 flex items-center justify-center -translate-y-6">
                    <p className="text-white font-marker text-6xl sm:text-6xl md:text-7xl lg:text-8xl tracking-wider uppercase text-center">
                        Sobre nosotros
                    </p>
                </div>
            </section>

            <section className="relative bg-black text-white pb-20 px-4 -mt-12">
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                    viewport={{ once: true }}
                    className="max-w-3xl mx-auto text-center bg-zinc-900/80 backdrop-blur-md p-10 md:p-14 rounded-2xl border border-zinc-800 shadow-xl"
                >
                    <h2 className="font-staatliches text-white text-3xl md:text-4xl uppercase tracking-wide mb-6">
                        Sin postureo. Sin excusas. Solo entrenamiento de verdad.
                    </h2>
                    <p className="text-gray-300 text-base md:text-lg leading-relaxed text-justify">
                        No somos otro gimnasio más donde pagas una cuota y se olvidan de tu nombre al cruzar el torno.
                        Diseñamos este espacio para gente que quiere progresar, superarse a su ritmo y entrenar con libertad.
                        Tengas el nivel que tengas, aquí vas a encontrar el equipamiento y la comunidad necesarios para cumplir tus metas.
                    </p>
                </motion.div>
            </section>

            <section className="bg-almostblack border-y border-gray-700 py-8 px-4">

                {/* Version movil: grid 2x2 */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                    viewport={{ once: true }}
                    className="grid grid-cols-2 min-[600px]:hidden max-w-md mx-auto overflow-hidden mt-2 mb-2"
                >
                    <div className="flex flex-col items-center justify-center">
                        <p className="text-2xl font-bold text-white py-2 -mt-3">400 m²</p>
                        <p className="text-xs text-gray-400 text-center uppercase tracking-wide mt-1 mb-4">Zona de Entrenamiento</p>
                    </div>
                    <div className="flex flex-col items-center justify-center">
                        <p className="text-2xl font-bold text-white py-2 -mt-3">0</p>
                        <p className="text-xs text-gray-400 text-center uppercase tracking-wide mt-1 mb-4">Permanencia</p>
                    </div>
                    <div className="flex flex-col items-center justify-center">
                        <p className="text-2xl font-bold text-white mt-5 py-6">100 %</p>
                        <p className="text-xs text-gray-400 text-center uppercase tracking-wide mt-1">Equipamiento Profesional</p>
                    </div>
                    <div className="flex flex-col items-center justify-center gap-1">
                        <img src={logoMarca}
                            alt="Titanium Strength" width="250"
                            height="250"
                            loading="lazy"
                            className="h-28 w-auto" />
                        <p className="text-xs text-gray-400 text-center uppercase tracking-wide -mt-3 -py-2">Equipamiento</p>
                    </div>
                </motion.div>

                {/* Version escritorio */}
                <motion.div
                    className="hidden min-[600px]:flex items-stretch w-full max-w-4xl mx-auto text-center divide-x divide-gray-700"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={{
                        hidden: {},
                        visible: { transition: { staggerChildren: 0.15 } }
                    }}
                >
                    <motion.div variants={itemVariants} className="flex-1 flex flex-col items-center justify-center min-[600px]:px-2 md:px-6 lg:px-12">
                        <div className="h-14 flex items-center">
                            <p className="text-3xl font-bold text-white">400 m²</p>
                        </div>
                        <p className="text-sm text-gray-400 uppercase tracking-wide mt-2">Zona de Entrenamiento</p>
                    </motion.div>
                    <motion.div variants={itemVariants} className="flex-1 flex flex-col items-center justify-center min-[600px]:px-2 md:px-6 lg:px-12">
                        <div className="h-14 flex items-center">
                            <p className="text-3xl font-bold text-white">0</p>
                        </div>
                        <p className="text-sm text-gray-400 uppercase tracking-wide mt-2">Permanencia</p>
                    </motion.div>
                    <motion.div variants={itemVariants} className="flex-1 flex flex-col items-center justify-center min-[600px]:px-2 md:px-6 lg:px-12">
                        <div className="h-14 flex items-center">
                            <p className="text-3xl font-bold text-white">100%</p>
                        </div>
                        <p className="text-sm text-gray-400 uppercase tracking-wide mt-2">Equipamiento profesional</p>
                    </motion.div>
                    <motion.div variants={itemVariants} className="flex-1 flex flex-col items-center justify-center min-[600px]:px-2 md:px-6 lg:px-12">
                        <div className="h-16 flex items-center">
                            <img src={logoMarca}
                                alt="Titanium Strength"
                                width="250"
                                height="250"
                                loading="lazy"
                                className="h-28 w-auto" />
                        </div>
                        <p className="text-sm text-gray-400 uppercase tracking-wide mt-2">Equipamiento</p>
                    </motion.div>
                </motion.div>

            </section>

            <section className="bg-black py-12 px-4">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, ease: "easeOut" }}
                    viewport={{ once: true }}
                    className="text-center text-white text-3xl font-staatliches mb-12"
                >
                    Nuestro espacio
                </motion.h2>

                {/* Version escritorio: grid + clic para ampliar */}
                <div className="hidden md:grid grid-cols-3 gap-4 max-w-5xl mx-auto object-cover object-center">
                    {[galeria1, galeria2, galeria3, galeria4, galeria5, galeria6].map((foto, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: i * 0.1, ease: "easeOut" }}
                            viewport={{ once: true }}
                            className="overflow-hidden rounded-xl group"
                        >
                            <img
                                src={foto}
                                alt="Instalaciones 217 GYM"
                                loading="lazy"
                                onClick={() => setIndiceAmpliado(i)}
                                className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110 cursor-pointer"
                            />
                        </motion.div>
                    ))}
                </div>

                {/* Version movil: carrusel con peek */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                    viewport={{ once: true }}
                    className="flex md:hidden overflow-x-auto snap-x snap-mandatory gap-6 px-4 no-scrollbar"
                >
                    {[galeria1, galeria2, galeria3, galeria4, galeria5, galeria6].map((foto, i) => (
                        <div key={i} className="snap-center shrink-0 w-[85%] overflow-hidden rounded-xl ">
                            <img
                                src={foto}
                                alt="Instalaciones 217 GYM"
                                loading="lazy"
                                onClick={() => setIndiceAmpliado(i)}
                                className="w-full h-64 object-cover object-center cursor-pointer"
                            />
                        </div>
                    ))}
                </motion.div>

            </section>

            <section className="bg-black pb-16 px-4 py-4 text-center">
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                    viewport={{ once: true }}
                >
                    <Link
                        to="/ubicacion"
                        className="inline-block border-2 border-brand-gold text-brand-gold bg-brand-gold/10 px-10 py-4 no-underline font-semibold uppercase tracking-widest hover:bg-brand-gold hover:text-black hover:scale-105 active:scale-95 active:bg-brand-gold active:text-black transition-all duration-200"
                    >
                        Ven a conocer el club
                    </Link>
                </motion.div>
            </section>

            {indiceAmpliado !== null && (
                <div
                    onClick={() => setIndiceAmpliado(null)}
                    className="fixed inset-0 bg-black/90 z-100 flex items-center justify-center p-4 cursor-pointer"
                >
                    <button
                        onClick={(e) => { e.stopPropagation(); fotoAnterior() }}
                        className="absolute left-2 md:left-6 top-1/2 -translate-y-1/2 text-brand-gold hover:scale-110 text-9xl border-none cursor-pointer z-10"
                    >
                        ‹
                    </button>
                    <button
                        onClick={(e) => { e.stopPropagation(); fotoSiguiente() }}
                        className="absolute right-2 md:right-6 top-1/2 -translate-y-1/2 text-brand-gold hover:scale-110 text-9xl border-none cursor-pointer z-10"
                    >
                        ›
                    </button>
                    <div className="relative" onClick={(e) => e.stopPropagation()}>
                        <button
                            onClick={() => setIndiceAmpliado(null)}
                            className="fixed top-4 right-4 text-brand-gold text-4xl border-none bg-transparent cursor-pointer hover:scale-125 transition-all z-10"
                        >
                            x
                        </button>
                        <img
                            src={fotosGaleria[indiceAmpliado]}
                            alt="Foto ampliada"
                            className="max-w-full max-h-[90vh] object-contain rounded-lg"
                        />
                    </div>
                </div>
            )}
        </>
    )
}