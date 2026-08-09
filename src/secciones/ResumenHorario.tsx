import { motion } from 'framer-motion'
import type { Variants } from 'framer-motion'

const itemVariants: Variants = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
}

export default function ResumenHorario() {
    return (
        <section className="bg-almostblack border-y border-gray-700 py-8 px-4">
            <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
                viewport={{ once: true }}
                className="text-center text-white text-3xl font-staatliches uppercase tracking-widest mb-8"
            >
                Horarios de apertura
            </motion.h2>

            <motion.div
                className="flex flex-col md:flex-row items-stretch justify-center md:w-full max-w-4xl mx-auto gap-8 md:gap-0 text-center md:divide-x divide-gray-700 -mb-3"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={{
                    hidden: {},
                    visible: { transition: { staggerChildren: 0.15 } }
                }}
            >
                <motion.div variants={itemVariants} className="flex flex-col items-center justify-center md:flex-1 md:px-4 lg:px-10 xl:px-16">
                    <p className="text-sm text-gray-400 uppercase tracking-wide">Lunes a Viernes</p>
                    <div className="h-14 flex items-center">
                        <p className="text-2xl font-bold text-white whitespace-nowrap">8:00 - 23:00</p>
                    </div>
                </motion.div>

                <motion.div variants={itemVariants} className="flex flex-col items-center justify-center md:flex-1 md:px-4 lg:px-10 xl:px-16">
                    <p className="text-sm text-gray-400 uppercase tracking-wide">Sábado</p>
                    <div className="h-14 flex items-center">
                        <p className="text-2xl font-bold text-white whitespace-nowrap">9:00 - 19:00</p>
                    </div>
                </motion.div>

                <motion.div variants={itemVariants} className="flex flex-col items-center justify-center md:flex-1 md:px-4 lg:px-10 xl:px-16">
                    <p className="text-sm text-gray-400 uppercase tracking-wide">Domingo</p>
                    <div className="h-14 flex items-center">
                        <p className="text-2xl font-bold text-white whitespace-nowrap">9:00 - 14:00</p>
                    </div>
                </motion.div>
            </motion.div>
        </section>
    )
}