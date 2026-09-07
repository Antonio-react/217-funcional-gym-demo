import { motion } from 'framer-motion'
import type { Variants } from 'framer-motion'
import { Link } from 'react-router-dom'

import bannerImg from '../assets/Mancuernero.webp'

const tarjetaVariants: Variants = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
}

export default function Tarifas() {
    return (
        <>
            <section className="relative h-[60vh] bg-cover bg-center overflow-hidden">
                <img 
                    src={bannerImg} 
                    alt="Tarifas" 
                    fetchPriority="high"
                    loading="eager"
                    className="absolute inset-0 w-full h-full object-cover object-center pointer-events-none" 
                />
                <div className="absolute inset-0 bg-linear-to-b from-black/70 via-black/40 to-black" />
                <div className="absolute inset-0 flex items-center justify-center -translate-y-6">
                    <p className="text-white font-marker text-6xl sm:text-7xl md:text-8xl lg:text-9xl tracking-wider uppercase text-center">
                        Tarifas
                    </p>
                </div>
            </section>

            <section className="relative bg-black text-white pb-20 px-4 -mt-12 py-4">
                <div className="max-w-5xl mx-auto text-center">

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, ease: "easeOut" }}
                        viewport={{ once: true }}
                        className="text-gray-400 text-lg uppercase tracking-widest mb-7"
                    >
                        Sin matrícula · Sin permanencia
                    </motion.p>

                    <motion.div
                        className="grid min-[550px]:grid-cols-2 gap-6"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={{
                            hidden: {},
                            visible: { transition: { staggerChildren: 0.12 } }
                        }}
                    >
                        <motion.div variants={tarjetaVariants}>
                            <Link to="/horarios" className="group bg-zinc-900/80 backdrop-blur-md p-8 rounded-2xl border border-zinc-800 shadow-xl transition-all duration-300 hover:scale-105 hover:-translate-y-1 hover:border-white/20 block">
                                <p className="text-base text-brand-gold-dark uppercase tracking-wide mb-3">Plan de Mañana</p>
                                <p className="text-4xl font-bold">27,99 €</p>
                                <p className="text-sm text-gray-400 mt-2 mb-3">al mes</p>
                                <p className="text-xs uppercase text-brand-gold-dark">* Horario Especial</p>
                            </Link>
                        </motion.div>

                        <motion.div
                            variants={tarjetaVariants}
                            className="group bg-zinc-900/80 backdrop-blur-md p-8 rounded-2xl border border-zinc-800 shadow-xl transition-all duration-300 hover:scale-105 hover:-translate-y-1 hover:border-white/20"
                        >
                            <p className="text-base text-gray-400 font-sans uppercase tracking-wide mb-3">Plan mensual</p>
                            <p className="text-4xl font-bold py-2">35 €</p>
                            <p className="text-sm text-gray-400 mt-1">al mes</p>
                        </motion.div>

                        <motion.div
                            variants={tarjetaVariants}
                            className="relative group bg-zinc-900/80 backdrop-blur-md p-8 rounded-2xl border border-zinc-800 shadow-xl transition-all duration-300 hover:scale-105 hover:-translate-y-1 hover:border-white/20"
                        >
                            <span className="absolute -top-2 -right-2 bg-black text-brand-gold-dark text-sm font-bold uppercase px-3 py-1 rounded-full shadow-lg border border-brand-gold-dark">
                                Ahorra 9 €
                            </span>
                            <p className="text-base text-gray-400 uppercase tracking-wide mb-3">Plan 3 meses</p>
                            <p className="text-4xl font-bold text-brand-gold-dark">32 €</p>
                            <p className="text-sm text-gray-400 mt-1">al mes</p>
                            <p className="text-sm text-gray-500 mt-2">96 € pago único</p>
                        </motion.div>

                        <motion.div
                            variants={tarjetaVariants}
                            className="relative group bg-zinc-900/80 backdrop-blur-md p-8 rounded-2xl border border-brand-gold shadow-xl transition-all duration-300 hover:scale-105 hover:-translate-y-1 hover:border-brand-gold"
                        >
                            <span className="absolute -top-2 -right-2 bg-brand-gold text-black text-sm font-bold uppercase px-3.5 py-1.5 rounded-full shadow-lg">
                                Ahorra 30 €
                            </span>
                            <p className="text-base text-gray-400 uppercase tracking-wide mb-3">Plan 6 meses</p>
                            <p className="text-4xl font-bold text-brand-gold">30 €</p>
                            <p className="text-sm text-gray-400 mt-1">al mes</p>
                            <p className="text-sm text-gray-500 mt-2">180 € pago único</p>
                        </motion.div>

                        <motion.div
                            variants={tarjetaVariants}
                            className="min-[550px]:col-span-2 w-full mx-auto min-[550px]:max-w-md bg-zinc-900/80 backdrop-blur-md p-8 rounded-2xl border border-zinc-800 shadow-xl transition-all duration-300 hover:scale-105 hover:-translate-y-1 hover:border-white/20"
                        >
                            <p className="text-base text-gray-400 uppercase tracking-wide mb-3">Pase diario</p>
                            <p className="text-4xl font-bold">5 €</p>
                        </motion.div>
                    </motion.div>

                    <motion.p
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ duration: 0.6, ease: "easeOut" }}
                        viewport={{ once: true }}
                        className="text-gray-400 text-sm md:text-base mt-10 -mb-7"
                    >
                        Las clases <span className="text-brand-gold font-semibold">Functional Training</span> y <span className="text-brand-gold font-semibold">Personal Trainer</span> se pagan por <span className="text-brand-gold">separado</span> (consultar tarifas y disponibilidad)
                    </motion.p>

                </div>
            </section>
        </>
    )
}