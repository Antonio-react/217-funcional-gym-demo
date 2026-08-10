import { motion } from 'framer-motion'
import heroImg from '../assets/chatgpt4.jpg'
import { Link } from 'react-router-dom'

export default function Hero() {
    return (
        <section className="relative h-[85dvh] overflow-hidden">

            {/* Imagen */}
            <motion.img
                src={heroImg}
                alt="217 GYM"
                className="absolute inset-0 w-full h-full object-cover brightness-[0.75]"
                initial={{ scale: 1.1 }}
                animate={{ scale: 1.15 }}
                transition={{
                    duration: 25,
                    ease: "easeInOut",
                    repeat: Infinity,
                    repeatType: "reverse"
                }}
            />

            {/* Gradient PRO */}
            <div className="absolute inset-0 bg-linear-to-r from-black/85 via-black/50 to-transparent" />

            {/* Grain */}
            <div className="absolute inset-0 opacity-15 md:opacity-20 mix-blend-overlay pointer-events-none grain" />

            {/* Contenido */}
            <div className="relative z-10 h-full flex items-end translate-y-5 md:translate-y-0 pb-16 md:pb-16">
                <div className="max-w-7xl mx-auto px-6 md:px-10 w-full">

                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        className="max-w-xl space-y-4 backdrop-blur-[1px]"
                    >

                        <h1 className="
                            text-white text-[28px] sm:text-[34px] md:text-[48px] lg:text-[56px] font-extrabold leading-[1.1] sm:leading-[1.1] md:leading-[1.05] tracking-[-0.5px] md:tracking-[-1px] max-w-70 sm:max-w-85 md:max-w-125"
                        >
                            217 FUNCIONAL GYM
                        </h1>

                        <p className="mt-4 text-gray-300 text-base sm:text-lg md:text-xl max-w-[90%] sm:max-w-[80%] drop-shadow-[0_2px_10px_rgba(0,0,0,0.5)]">
                            Empieza desde cero. Resultados reales en semanas.
                        </p>

                        <div className="flex gap-4">
                            <Link to="/contacto" className="bg-yellow-500 hover:bg-yellow-400 active:scale-95 text-black font-semibold px-6 sm:px-8 py-3 rounded-lg text-base sm:text-lg transition shadow-lg shadow-yellow-500/20"
                            >
                                Empieza hoy
                            </Link>

                            <Link to="/horarios" className="border border-white/30 text-white px-6 sm:px-8 py-3 rounded-lg text-base sm:text-lg hover:bg-white/10 active:scale-95 transition"
                            >
                                Ver horarios
                            </Link>
                        </div>

                    </motion.div>

                </div>
            </div>

        </section>
    )
}