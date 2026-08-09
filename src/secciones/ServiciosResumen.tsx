import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import type { Variants } from 'framer-motion'
import fitnessImg from '../assets/Fitness.WEBP'
import functionalImg from '../assets/Funtional Training Group.JPG'
import personalImg from '../assets/Personal Trainer.JPG'

const itemVariants: Variants = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
}

export default function ServiciosResumen() {
    return (
        <section id="servicios" className="bg-black py-5 px-4">
            <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
                viewport={{ once: true }}
                className="text-center text-white uppercase text-2xl font-bold mb-7"
            >
                Servicios
            </motion.h2>

            {/* Version escritorio: fila fija */}
            <motion.div
                className="hidden md:flex items-center justify-center gap-10 max-w-5xl mx-auto"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={{
                    hidden: {},
                    visible: { transition: { staggerChildren: 0.15 } }
                }}
            >
                <motion.div variants={itemVariants} className="w-1/3">
                    <Link to="/servicios" className="no-underline">
                        <div className="overflow-hidden">
                            <img src={fitnessImg} alt="Sala de musculacion" className="w-full h-64 object-cover transition-transform duration-300 hover:scale-110" />
                        </div>
                        <p className="text-center text-white text-lg font-semibold uppercase tracking-wide py-4">
                            Sala de musculación
                        </p>
                    </Link>
                </motion.div>

                <motion.div variants={itemVariants} className="w-1/3">
                    <Link to="/servicios" className="no-underline">
                        <div className="overflow-hidden">
                            <img src={functionalImg} alt="Functional Training" className="w-full h-64 object-cover transition-transform duration-300 hover:scale-110" />
                        </div>
                        <p className="text-center text-white text-lg font-semibold uppercase tracking-wide py-4">
                            Functional Training
                        </p>
                    </Link>
                </motion.div>

                <motion.div variants={itemVariants} className="w-1/3">
                    <Link to="/servicios" className="no-underline">
                        <div className="overflow-hidden">
                            <img src={personalImg} alt="Personal Trainer" className="w-full h-64 object-cover transition-transform duration-300 hover:scale-110" />
                        </div>
                        <p className="text-center text-white text-lg font-semibold uppercase tracking-wide py-4">
                            Personal Trainer
                        </p>
                    </Link>
                </motion.div>
            </motion.div>

            {/* Version movil: carrusel con peek */}
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                viewport={{ once: true }}
                className="flex md:hidden overflow-x-auto snap-x snap-mandatory gap-4 px-4 pb-2"
            >
                <Link to="/servicios" className="snap-center shrink-0 w-[85%] no-underline">
                    <div className="overflow-hidden">
                        <img src={fitnessImg} alt="Sala de musculacion" className="w-full h-64 object-cover rounded-xl" />
                    </div>
                    <p className="text-center text-white text-lg font-semibold uppercase tracking-wide py-4">
                        Sala de musculación
                    </p>
                </Link>

                <Link to="/servicios" className="snap-center shrink-0 w-[85%] no-underline">
                    <div className="overflow-hidden">
                        <img src={functionalImg} alt="Functional Training" className="w-full h-64 object-cover rounded-xl" />
                    </div>
                    <p className="text-center text-white text-lg font-semibold uppercase tracking-wide py-4">
                        Functional Training
                    </p>
                </Link>

                <Link to="/servicios" className="snap-center shrink-0 w-[85%] no-underline">
                    <div className="overflow-hidden">
                        <img src={personalImg} alt="Personal Trainer" className="w-full h-64 object-cover rounded-xl" />
                    </div>
                    <p className="text-center text-white text-lg font-semibold uppercase tracking-wide py-4">
                        Personal Trainer
                    </p>
                </Link>
            </motion.div>
        </section>
    )
}