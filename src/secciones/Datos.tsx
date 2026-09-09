import { MapPin } from 'lucide-react'
import { motion } from 'framer-motion'
import type { Variants } from 'framer-motion'

import logoMarca from '../assets/Titanium Strength.webp'

const itemVariants: Variants = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
}

export default function Datos() {
    return (
        <section className="bg-almostblack border-y border-gray-700 py-8 px-4">

            {/* Version escritorio: fila con divide-x */}
            <motion.div
                className="hidden min-[600px]:flex items-stretch w-full max-w-4xl mx-auto text-center divide-x divide-gray-700 mb-2"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={{
                    hidden: {},
                    visible: { transition: { staggerChildren: 0.15 } }
                }}
            >
                <motion.div variants={itemVariants} className="flex flex-col flex-1 items-center justify-start min-[600px]:px-1 md:px-4 lg:px-8 xl:px-14">
                    <div className="h-16 flex items-center justify-center">
                        <p className="text-3xl font-bold text-white">300 m²</p>
                    </div>
                    <div className="h-8 flex items-center justify-center">
                        <p className="text-sm text-gray-400 uppercase tracking-wide">Interior</p>
                    </div>
                </motion.div>

                <motion.div variants={itemVariants} className="flex flex-col flex-1 items-center justify-start min-[600px]:px-1 md:px-4 lg:px-8 xl:px-14">
                    <div className="h-16 flex items-center justify-center">
                        <p className="text-3xl font-bold text-white">100 m²</p>
                    </div>
                    <div className="h-8 flex items-center justify-center">
                        <p className="text-sm text-gray-400 uppercase tracking-wide">Exterior</p>
                    </div>
                </motion.div>

                <motion.div variants={itemVariants} className="flex flex-col items-center flex-1 justify-start min-[600px]:px-1 md:px-4 lg:px-8 xl:px-14">
                    <div className="h-16 flex items-center justify-center">
                        <img src={logoMarca} alt="Titanium Strength" loading="lazy" className="h-32 w-auto" />
                    </div>
                    <div className="h-8 flex items-center justify-center">
                        <p className="text-sm text-gray-400 uppercase tracking-wide">Equipamiento</p>
                    </div>
                </motion.div>

                <motion.div variants={itemVariants} className="flex flex-col items-center flex-1 justify-start min-[600px]:px-1 md:px-4 lg:px-8 xl:px-14">
                    <div className="h-16 flex items-center justify-center">
                        <MapPin size={36} className="text-gray-400" />
                    </div>
                    <div className="h-8 flex items-center justify-center">
                        <p className="text-2xl font-bold text-white">Ugena</p>
                    </div>
                </motion.div>
            </motion.div>

            {/* Version movil: grid 2x2 */}
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                viewport={{ once: true }}
                className="grid grid-cols-2 min-[600px]:hidden max-w-md sm:max-w-lg mx-auto overflow-hidden mt-2 mb-2"
            >
                <div className="flex flex-col items-center justify-between h-full gap-1">
                    <p className="text-2xl font-bold text-white leading-none py-2">300 m²</p>
                    <p className="text-xs text-gray-400 uppercase tracking-wide -mb-2">Interior</p>
                </div>

                <div className="flex flex-col items-center justify-between h-full gap-1">
                    <p className="text-2xl font-bold text-white leading-none py-2">100 m²</p>
                    <p className="text-xs text-gray-400 uppercase tracking-wide -mb-2">Exterior</p>
                </div>

                <div className="flex flex-col items-center justify-center gap-1">
                    <img src={logoMarca} alt="Titanium Strength" loading="lazy" className="h-28 w-auto" />
                    <p className="text-xs text-gray-400 uppercase tracking-wide -mt-4 -mb-6">Equipamiento</p>
                </div>

                <div className="flex flex-col items-center justify-between py-5 h-36 mt-3">
                    <div className="h-16 flex items-end justify-between">
                        <MapPin size={28} className="text-gray-400" />
                    </div>
                    <p className="text-2xl font-bold text-white">Ugena</p>
                </div>
            </motion.div>

        </section>
    )
}