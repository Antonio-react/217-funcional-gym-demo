import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { datos } from '../config/datos'

export default function Hero() {
    return (
        <section className="relative h-[85dvh] overflow-hidden">

            {/* Imagen Responsiva Animada */}
            <motion.picture 
                className="absolute inset-0 w-full h-full"
                initial={{ scale: 1.1 }}
                animate={{ scale: 1.15 }}
                transition={{
                    duration: 25,
                    ease: "easeInOut",
                    repeat: Infinity,
                    repeatType: "reverse"
                }}
            >
                {/* Opción Desktop (≥ 768px) */}
                <source media="(min-width: 768px)" srcSet="/Gym Interior-desktop.webp" />

                {/* Opción Mobile (por defecto) */}
                <img
                    src="/Gym Interior-mobile.webp"
                    alt="217 GYM"
                    fetchPriority="high"
                    loading="eager"
                    width="800"
                    height="1200"
                    className="w-full h-full object-cover object-center sm:object-top brightness-[0.75]"
                />
            </motion.picture>

            {/* Gradient PRO */}
            <div className="absolute inset-0 bg-linear-to-r from-black/85 via-black/50 to-transparent" />

            {/* Grain */}
            <div className="absolute inset-0 opacity-15 md:opacity-20 mix-blend-overlay pointer-events-none grain" />

            {/* Contenido */}
            <div className="relative z-10 h-full flex items-end translate-y-5 md:translate-y-0 pb-16">
                <div className="max-w-7xl mx-auto px-6 md:px-10 w-full">

                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        className="max-w-xl space-y-4 backdrop-blur-[1px]"
                    >

                        <h1 className="font-bebas text-5xl sm:text-6xl md:text-7xl lg:text-8xl tracking-tight text-white whitespace-nowrap">
                            217 FUNCIONAL GYM
                        </h1>

                        <p className="mt-3 font-sans text-gray-300 text-base sm:text-lg md:text-xl max-w-lg font-medium tracking-wide">
                            {datos.frase}
                        </p>

                        <div className="flex gap-4">
                            <Link to="/contacto" className="bg-yellow-500 hover:bg-yellow-400 active:scale-95 text-black font-semibold px-6 sm:px-8 py-3 rounded-lg text-base sm:text-lg transition shadow-lg shadow-yellow-500/20">
                                Empieza hoy
                            </Link>

                            <Link to="/horarios" className="border border-white/30 text-white bg-black/40 backdrop-blur-sm px-6 sm:px-8 py-3 rounded-lg text-base sm:text-lg hover:bg-white/10 active:scale-95 transition">
                                Ver horarios
                            </Link>
                        </div>

                    </motion.div>

                </div>
            </div>

        </section>
    )
}